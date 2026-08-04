import { useLocalStorage } from "./useLocalStorage";
import type { ChecklistItem } from "../types/domain";
import { modelData } from "../data/model";

export type ChecklistStore = Record<string, { status: ChecklistItem["status"]; notes?: string }>;

const STORAGE_KEY = "iso42001-mlops-checklist-state-v1";

export function useChecklist() {
  const [state, setState] = useLocalStorage<ChecklistStore>(STORAGE_KEY, {});

  // Get status of a specific item with fallback
  const getItemState = (id: string) => {
    return state[id] || { status: "not-started", notes: "" };
  };

  const updateItemStatus = (id: string, status: ChecklistItem["status"]) => {
    setState((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        status
      }
    }));
  };

  const updateItemNotes = (id: string, notes: string) => {
    setState((prev) => ({
      ...prev,
      [id]: {
        ...(prev[id] || { status: "not-started" }),
        notes
      }
    }));
  };

  const resetChecklist = () => {
    let lang = "tr";
    try {
      const saved = window.localStorage.getItem("iso42001-mlops-lang");
      if (saved === "en" || saved === "tr") lang = saved;
    } catch {}
    
    const confirmMsg = lang === "tr"
      ? "Tüm ilerlemenizi sıfırlamak istediğinizden emin misiniz?"
      : "Are you sure you want to reset all progress?";
      
    if (window.confirm(confirmMsg)) {
      setState({});
    }
  };

  const importChecklistState = (newState: ChecklistStore) => {
    try {
      // Validate schema minimally
      const validated: ChecklistStore = {};
      Object.keys(newState).forEach((key) => {
        const item = newState[key];
        if (item && typeof item === "object" && "status" in item) {
          const status = item.status;
          if (["not-started", "in-progress", "completed", "not-applicable"].includes(status)) {
            validated[key] = {
              status,
              notes: typeof item.notes === "string" ? item.notes : ""
            };
          }
        }
      });
      setState(validated);
      return true;
    } catch (e) {
      console.error("Checklist import error:", e);
      return false;
    }
  };

  // Pre-calculate progress
  const getProgress = () => {
    const allItems: ChecklistItem[] = [];
    modelData.forEach((stage) => {
      stage.activities.forEach((act) => {
        allItems.push(...act.checklist);
      });
    });

    const total = allItems.length;
    let completed = 0;
    let inProgress = 0;
    let notApplicable = 0;
    let standardRelatedCount = 0;
    let standardRelatedCompleted = 0;

    allItems.forEach((item) => {
      const itemState = getItemState(item.id);
      const isStandard = item.requirementType === "standard-related";
      
      if (isStandard) {
        standardRelatedCount++;
      }

      if (itemState.status === "completed") {
        completed++;
        if (isStandard) {
          standardRelatedCompleted++;
        }
      } else if (itemState.status === "in-progress") {
        inProgress++;
      } else if (itemState.status === "not-applicable") {
        notApplicable++;
      }
    });

    const activeTotal = total - notApplicable;
    const progressPercent = activeTotal > 0 ? Math.round((completed / activeTotal) * 100) : 0;

    const standardActiveTotal = standardRelatedCount;
    const standardProgressPercent = standardActiveTotal > 0 ? Math.round((standardRelatedCompleted / standardActiveTotal) * 100) : 0;

    return {
      total,
      completed,
      inProgress,
      notApplicable,
      progressPercent,
      standardRelatedCount,
      standardRelatedCompleted,
      standardProgressPercent
    };
  };

  return {
    state,
    getItemState,
    updateItemStatus,
    updateItemNotes,
    resetChecklist,
    importChecklistState,
    getProgress
  };
}
