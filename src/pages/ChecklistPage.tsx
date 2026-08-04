import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import type { ChecklistItem } from "../types/domain";
import { modelData } from "../data/model";
import { useChecklist } from "../hooks/useChecklist";
import { useLanguage } from "../context/LanguageContext";
import { exportService } from "../services/exportService";
import { ClauseModal } from "../components/mapping/ClauseModal";
import { InteractiveText } from "../components/InteractiveText";
import {
  Download,
  Upload,
  Printer,
  RotateCcw,
  Search,
  Edit2,
  Clock,
  CheckCircle,
  MinusCircle
} from "lucide-react";

export function ChecklistPage() {
  const {
    state,
    getItemState,
    updateItemStatus,
    updateItemNotes,
    resetChecklist,
    importChecklistState,
    getProgress
  } = useChecklist();

  const { language, t } = useLanguage();

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={14} style={{ color: "#16A34A" }} />;
      case "in-progress":
        return <Clock size={14} style={{ color: "#EA580C" }} />;
      case "not-applicable":
        return <MinusCircle size={14} style={{ color: "hsl(var(--text-muted))" }} />;
      default:
        return <Clock size={14} style={{ color: "hsl(var(--text-muted))", opacity: 0.5 }} />;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "completed": return { tr: "Tamamlandı", en: "Completed" }[language];
      case "in-progress": return { tr: "Devam Ediyor", en: "In Progress" }[language];
      case "not-applicable": return { tr: "Uygulanamaz", en: "N/A" }[language];
      default: return { tr: "Başlanmadı", en: "Not Started" }[language];
    }
  };

  const [roleFilter, setRoleFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedClauseId, setSelectedClauseId] = useState<string | null>(null);
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const progress = getProgress();

  // Extract all unique roles in their current language form or english equivalents
  const allRoles = new Set<string>();
  modelData.forEach(stage => {
    stage.activities.forEach(act => {
      act.checklist.forEach(item => {
        t(item.responsibleRoles).forEach(role => allRoles.add(role));
      });
    });
  });

  // Extract all checklist items in flat list
  const flatItems: {
    item: ChecklistItem;
    activityTitle: any;
    activitySlug: string;
    stageTitle: any;
    stageSlug: string;
  }[] = [];

  modelData.forEach(stage => {
    stage.activities.forEach(act => {
      act.checklist.forEach(item => {
        flatItems.push({
          item,
          activityTitle: act.title,
          activitySlug: act.slug,
          stageTitle: stage.title,
          stageSlug: stage.slug
        });
      });
    });
  });

  // Apply filters
  const filteredItems = flatItems.filter((f) => {
    const itemState = getItemState(f.item.id);

    const matchesSearch = t(f.item.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(f.item.description).toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRole = roleFilter === "all" || t(f.item.responsibleRoles).includes(roleFilter);
    const matchesType = typeFilter === "all" || f.item.requirementType === typeFilter;
    const matchesStatus = statusFilter === "all" || itemState.status === statusFilter;
    const matchesStage = stageFilter === "all" || f.stageSlug === stageFilter;

    return matchesSearch && matchesRole && matchesType && matchesStatus && matchesStage;
  });

  // Handle file import
  const handleImportFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const importedState = await exportService.importFromJson(file);
      const success = importChecklistState(importedState);
      if (success) {
        alert({ tr: "Checklist ilerleme kaydı başarıyla yüklendi.", en: "Checklist progress successfully imported." }[language]);
      } else {
        alert({ tr: "Dosya yapısı geçerli değil.", en: "Invalid file schema structure." }[language]);
      }
    } catch (err: any) {
      alert("Error: " + err.message);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className="fade-in">

      {/* Title Header */}
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "Teknik Kontrol Listesi Paneli", en: "Technical Checklist Dashboard" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
          {{
            tr: "ISO/IEC 42001 mühendislik gereksinimlerini tek bir panelden takip edin. İlerlemenizi tarayıcıda saklayın, dışa aktarın veya yazdırın.",
            en: "Track all ISO/IEC 42001 engineering tasks in one dashboard. Progress is stored in local storage, ready for export or printing."
          }[language]}
        </p>
      </div>

      {/* Progress & Quick Actions Bar */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
        {/* Progress summary bar */}
        <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "20px", padding: "15px 25px" }}>
          <div style={{ textAlign: "center" }}>
            <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block" }}>
              {{ tr: "İlerleme Oranı", en: "Progress Rate" }[language]}
            </span>
            <span style={{ fontSize: "1.5rem", fontWeight: 800, color: "#16A34A" }}>%{progress.progressPercent}</span>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)", marginBottom: "4px" }}>
              <span>
                {{
                  tr: `Tamamlanan: ${progress.completed} / ${progress.total - progress.notApplicable} (Aktif Kontroller)`,
                  en: `Completed: ${progress.completed} / ${progress.total - progress.notApplicable} (Active Controls)`
                }[language]}
              </span>
              <span>{{ tr: `Uygulanamaz: ${progress.notApplicable}`, en: `N/A: ${progress.notApplicable}` }[language]}</span>
            </div>
            <div style={{ width: "100%", height: "8px", background: "hsl(var(--bg-tertiary))", borderRadius: "4px", overflow: "hidden" }}>
              <div style={{ width: `${progress.progressPercent}%`, height: "100%", background: "#16A34A", transition: "width 0.4s ease" }} />
            </div>
          </div>
        </div>

        {/* Toolbar buttons */}
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }} className="no-print">
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept=".json"
            onChange={handleImportFile}
          />
          <button className="btn btn-secondary" onClick={triggerFileInput} style={{ gap: "4px" }}>
            <Upload size={16} /> {{ tr: "İçe Aktar (.json)", en: "Import (.json)" }[language]}
          </button>
          <button className="btn btn-secondary" onClick={() => exportService.exportToJson(state)} style={{ gap: "4px" }}>
            <Download size={16} /> {{ tr: "Dışa Aktar (.json)", en: "Export (.json)" }[language]}
          </button>
          <button className="btn btn-secondary" onClick={() => exportService.exportToMarkdown(state)} style={{ gap: "4px" }}>
            <Download size={16} /> {{ tr: "Rapor İndir (.md)", en: "Download Report (.md)" }[language]}
          </button>
          <button className="btn btn-secondary" onClick={() => window.print()} style={{ gap: "4px" }}>
            <Printer size={16} /> {{ tr: "Yazdır", en: "Print" }[language]}
          </button>
          <button className="btn btn-danger" onClick={resetChecklist} style={{ gap: "4px" }}>
            <RotateCcw size={16} /> {{ tr: "Sıfırla", en: "Reset" }[language]}
          </button>
        </div>
      </div>

      {/* Advanced Filter section */}
      <div className="glass-card no-print" style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
        {/* Search */}
        <div style={{ flex: "2 1 250px", position: "relative" }}>
          <Search size={16} style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }} />
          <input
            type="text"
            placeholder={{ tr: "Kontrol maddesi ara...", en: "Search checklist controls..." }[language]}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 10px 10px 38px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.85rem",
              outline: "none"
            }}
          />
        </div>

        {/* Filter Stage */}
        <div style={{ flex: "1 1 150px" }}>
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.85rem",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="all">{{ tr: "Tüm Aşamalar", en: "All Stages" }[language]}</option>
            {modelData.map(s => (
              <option key={s.id} value={s.slug}>
                {{ tr: `Aşama ${s.order}: ${t(s.title)}`, en: `Stage ${s.order}: ${t(s.title)}` }[language]}
              </option>
            ))}
          </select>
        </div>

        {/* Filter Role */}
        <div style={{ flex: "1 1 150px" }}>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.85rem",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="all">{{ tr: "Tüm Roller", en: "All Roles" }[language]}</option>
            {Array.from(allRoles).map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>

        {/* Filter Type */}
        <div style={{ flex: "1 1 150px" }}>
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.85rem",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="all">{{ tr: "Tüm Yükümlülükler", en: "All Requirements" }[language]}</option>
            <option value="standard-related">{{ tr: "Zorunlu Kontrol", en: "Mandatory Control" }[language]}</option>
            <option value="recommended-practice">{{ tr: "Öneri Uygulama", en: "Best Practice Recommendation" }[language]}</option>
          </select>
        </div>

        {/* Filter Status */}
        <div style={{ flex: "1 1 150px" }}>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.85rem",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="all">{{ tr: "Tüm Durumlar", en: "All Statuses" }[language]}</option>
            <option value="not-started">{{ tr: "Başlanmadı", en: "Not Started" }[language]}</option>
            <option value="in-progress">{{ tr: "Devam Ediyor", en: "In Progress" }[language]}</option>
            <option value="completed">{{ tr: "Tamamlandı", en: "Completed" }[language]}</option>
            <option value="not-applicable">{{ tr: "Uygulanamaz", en: "N/A" }[language]}</option>
          </select>
        </div>
      </div>

      {/* Checklist items list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map(({ item, activityTitle, activitySlug, stageTitle, stageSlug }) => {
            const itemState = getItemState(item.id);
            return (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  padding: "24px",
                  borderLeft: `4px solid ${itemState.status === "completed"
                      ? "#16A34A"
                      : itemState.status === "in-progress"
                        ? "#EA580C"
                        : "rgba(0,0,0,0.08)"
                    }`
                }}
              >
                {/* Context Breadcrumbs */}
                <div style={{ display: "flex", gap: "5px", fontSize: "0.75rem", color: "var(--text-secondary)", marginBottom: "8px", flexWrap: "wrap" }}>
                  <span>{t(stageTitle)}</span>
                  <span>/</span>
                  <Link to={`/stages/${stageSlug}/${activitySlug}`} style={{ color: "var(--accent-blue)" }}>
                    {t(activityTitle)}
                  </Link>
                </div>

                {/* Title and Badges */}
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "10px", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}><InteractiveText text={t(item.title)} /></h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {item.isoReferences.map((ref: any, idx: number) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedClauseId(ref.clause)}
                        style={{
                          background: "rgba(37, 99, 235, 0.08)",
                          color: "#2563EB",
                          border: "1px solid rgba(37, 99, 235, 0.2)",
                          borderRadius: "4px",
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          padding: "2px 6px",
                          cursor: "pointer"
                        }}
                      >
                        {ref.clause}
                      </button>
                    ))}
                    <span className={`badge ${item.requirementType === "standard-related" ? "badge-standard" : "badge-recommendation"}`}>
                      {item.requirementType === "standard-related"
                        ? { tr: "Standart", en: "Standard" }[language]
                        : { tr: "Öneri", en: "Best Practice" }[language]
                      }
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                  <InteractiveText text={t(item.description)} />
                </p>

                {/* Meta list */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "10px",
                  background: "hsl(var(--bg-tertiary))",
                  padding: "12px 15px",
                  borderRadius: "8px",
                  fontSize: "0.82rem",
                  marginBottom: "15px"
                }}>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block" }}>{{ tr: "Sorumlu Roller", en: "Responsible Roles" }[language]}</span>
                    <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>
                      {t(item.responsibleRoles).map((role, rIdx) => (
                        <span key={rIdx}>
                          {rIdx > 0 && ", "}
                          <InteractiveText text={role} />
                        </span>
                      ))}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block" }}>{{ tr: "Beklenen Kanıt", en: "Expected Evidence" }[language]}</span>
                    <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>
                      {t(item.evidence).map((evItem, eIdx) => (
                        <span key={eIdx}>
                          {eIdx > 0 && ", "}
                          <InteractiveText text={evItem} />
                        </span>
                      ))}
                    </span>
                  </div>
                  <div>
                    <span style={{ color: "var(--text-muted)", display: "block" }}>{{ tr: "Doğrulama Yöntemi", en: "Verification Method" }[language]}</span>
                    <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}><InteractiveText text={t(item.verificationMethod)} /></span>
                  </div>
                </div>

                {/* Status and Notes action row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }} className="no-print">
                  <div style={{ display: "flex", gap: "5px" }}>
                    {(["not-started", "in-progress", "completed", "not-applicable"] as const).map((status) => (
                      <button
                        key={status}
                        onClick={() => updateItemStatus(item.id, status)}
                        style={{
                          fontSize: "0.75rem",
                          padding: "6px 10px",
                          borderRadius: "6px",
                          border: "1px solid rgba(0, 0, 0, 0.06)",
                          cursor: "pointer",
                          transition: "var(--transition-fast)",
                          background: itemState.status === status
                            ? (status === "completed" ? "#16A34A" : status === "in-progress" ? "#EA580C" : "rgba(0,0,0,0.15)")
                            : "rgba(0,0,0,0.02)",
                          color: itemState.status === status ? "white" : "var(--text-secondary)",
                          fontWeight: itemState.status === status ? 700 : 500,
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px"
                        }}
                      >
                        {getStatusIcon(status)}
                        {getStatusLabel(status)}
                      </button>
                    ))}
                  </div>

                  <button
                    className="btn btn-secondary"
                    onClick={() => setEditingNotesId(editingNotesId === item.id ? null : item.id)}
                    style={{ padding: "6px 12px", fontSize: "0.8rem", gap: "4px" }}
                  >
                    <Edit2 size={12} /> {{ tr: "Not Ekle", en: "Add Note" }[language]}
                  </button>
                </div>

                {/* Persistent user note entry */}
                {(editingNotesId === item.id || itemState.notes) && (
                  <div style={{ marginTop: "15px" }} className="fade-in">
                    <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>
                      {{
                        tr: "Teknik Kanıt Notları (Commit ID, Rapor Bağlantısı, vb.):",
                        en: "Technical Evidence Notes (Commit ID, Report Link, etc.):"
                      }[language]}
                    </span>
                    <textarea
                      placeholder={{ tr: "Kanıt notlarını buraya ekleyin...", en: "Add evidence notes..." }[language]}
                      value={itemState.notes || ""}
                      onChange={(e) => updateItemNotes(item.id, e.target.value)}
                      style={{
                        width: "100%",
                        height: "70px",
                        background: "hsl(var(--bg-primary))",
                        border: "1px solid rgba(0,0,0,0.08)",
                        borderRadius: "6px",
                        padding: "8px 10px",
                        color: "hsl(var(--text-primary))",
                        fontFamily: "inherit",
                        fontSize: "0.82rem",
                        outline: "none",
                        resize: "vertical"
                      }}
                    />
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="glass-card no-print" style={{ textAlign: "center", padding: "40px" }}>
            <p style={{ color: "var(--text-secondary)" }}>
              {{ tr: "Arama ve filtreleme kriterlerine uygun kontrol maddesi bulunamadı.", en: "No matching checklist items found." }[language]}
            </p>
          </div>
        )}
      </div>

      {/* Clause Modal Popup */}
      {selectedClauseId && (
        <ClauseModal
          clauseId={selectedClauseId}
          onClose={() => setSelectedClauseId(null)}
        />
      )}
    </div>
  );
}
