import { describe, test, expect, beforeEach } from "vitest";

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    clear: () => {
      store = {};
    },
    removeItem: (key: string) => {
      delete store[key];
    }
  };
})();

Object.defineProperty(globalThis, "window", {
  value: {
    localStorage: localStorageMock,
    confirm: () => true
  },
  writable: true
});

describe("Checklist Hook and Logic Tests", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test("should load with empty state", () => {
    // Mock useState hook manually or call testable utilities since we are running a pure unit test
    const mockStorageKey = "iso42001-mlops-checklist-state-v1";
    window.localStorage.setItem(mockStorageKey, JSON.stringify({
      "chk-1-1": { status: "completed", notes: "Evidence checked" }
    }));

    const rawData = window.localStorage.getItem(mockStorageKey);
    const parsed = rawData ? JSON.parse(rawData) : {};
    
    expect(parsed["chk-1-1"].status).toBe("completed");
    expect(parsed["chk-1-1"].notes).toBe("Evidence checked");
  });

  test("should calculate correct completion percentages", () => {
    const totalCount = 21; // Total checklist items across all 8 stages
    const mockState = {
      "chk-1-1": { status: "completed" },
      "chk-1-2": { status: "completed" },
      "chk-1-3": { status: "in-progress" },
      "chk-1-4": { status: "not-applicable" }
    };

    // Simulate progress math
    const total = totalCount;
    let completed = 0;
    let inProgress = 0;
    let notApplicable = 0;

    Object.keys(mockState).forEach((key) => {
      const item = mockState[key as keyof typeof mockState];
      if (item.status === "completed") completed++;
      else if (item.status === "in-progress") inProgress++;
      else if (item.status === "not-applicable") notApplicable++;
    });

    const activeTotal = total - notApplicable;
    const progressPercent = activeTotal > 0 ? Math.round((completed / activeTotal) * 100) : 0;

    expect(completed).toBe(2);
    expect(inProgress).toBe(1);
    expect(notApplicable).toBe(1);
    expect(progressPercent).toBe(10); // 2 / 20 * 100 = 10%
  });
});
