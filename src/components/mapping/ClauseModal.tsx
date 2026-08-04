import { isoClausesData } from "../../data/mappings";
import { modelData } from "../../data/model";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { X, Book, Link2 } from "lucide-react";

interface ClauseModalProps {
  clauseId: string;
  onClose: () => void;
}

export function ClauseModal({ clauseId, onClose }: ClauseModalProps) {
  const clauseDetail = isoClausesData[clauseId];
  const { language, t } = useLanguage();

  if (!clauseDetail) {
    return (
      <div style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(15, 23, 42, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        zIndex: 1000,
        padding: "50px 20px",
        overflowY: "auto"
      }} onClick={onClose}>
        <div style={{ 
          maxWidth: "500px", 
          width: "90%", 
          background: "#ffffff",
          borderRadius: "16px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "30px", 
          textAlign: "center",
          position: "relative",
          cursor: "default"
        }} onClick={(e) => e.stopPropagation()}>
          <h3 style={{ color: "hsl(var(--text-primary))" }}>{{ tr: "Madde Bulunamadı", en: "Clause Not Found" }[language]}</h3>
          <p style={{ margin: "15px 0", color: "hsl(var(--text-secondary))" }}>
            {{
              tr: `"${clauseId}" koduyla eşleşen bir ISO/IEC 42001 maddesi veritabanında bulunamadı.`,
              en: `No ISO/IEC 42001 clause matching "${clauseId}" was found in the database.`
            }[language]}
          </p>
          <button className="btn btn-secondary" onClick={onClose}>{{ tr: "Kapat", en: "Close" }[language]}</button>
        </div>
      </div>
    );
  }

  // Find all model stages and activities referencing this clause
  const references: { stageSlug: string; activityTitle: any; activitySlug: string; relationType: string }[] = [];
  modelData.forEach((stage) => {
    stage.activities.forEach((act) => {
      const match = act.isoReferences.find(ref => ref.clause === clauseId);
      if (match) {
        references.push({
          stageSlug: stage.slug,
          activityTitle: act.title,
          activitySlug: act.slug,
          relationType: match.relationship
        });
      }
    });
  });

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(15, 23, 42, 0.4)", // Softer dark backdrop
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start", // Top aligned directly in front of user
      zIndex: 1000,
      padding: "50px 20px",
      overflowY: "auto"
    }} onClick={onClose}>
      <div 
        className="fade-in" 
        style={{ 
          maxWidth: "680px", 
          width: "100%", 
          background: "#ffffff", // Solid white background
          borderRadius: "16px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          border: "1px solid rgba(0, 0, 0, 0.08)",
          padding: "30px",
          position: "relative",
          cursor: "default"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "transparent",
            border: "none",
            color: "hsl(var(--text-secondary))",
            cursor: "pointer",
            padding: "5px"
          }}
          onClick={onClose}
          aria-label={{ tr: "Kapat", en: "Close" }[language]}
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
          <Book size={24} style={{ color: "#2563EB", flexShrink: 0 }} />
          <div>
            <span className="badge badge-standard" style={{ marginBottom: "5px" }}>
              {clauseDetail.type === "control" 
                ? { tr: "Annex A Kontrolü", en: "Annex A Control" }[language]
                : { tr: "Standart Hükmü", en: "Standard Clause" }[language]
              }
            </span>
            <h2 style={{ fontSize: "1.4rem", margin: 0, color: "hsl(var(--text-primary))" }}>{clauseDetail.clause}: {t(clauseDetail.title)}</h2>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <h4 style={{ fontSize: "0.95rem", color: "hsl(var(--text-secondary))", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "5px" }}>
              {{ tr: "Madde Açıklaması", en: "Clause Description" }[language]}
            </h4>
            <p style={{ color: "hsl(var(--text-primary))", fontSize: "1rem", lineHeight: 1.6, background: "hsl(var(--bg-primary))", padding: "15px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)" }}>
              {t(clauseDetail.description)}
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <div>
              <h4 style={{ fontSize: "0.95rem", color: "hsl(var(--text-secondary))", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {{ tr: "Kaynak Standart", en: "Source Standard" }[language]}
              </h4>
              <p style={{ color: "hsl(var(--text-primary))", fontWeight: 600 }}>ISO/IEC 42001:2023</p>
            </div>
            <div>
              <h4 style={{ fontSize: "0.95rem", color: "hsl(var(--text-secondary))", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {{ tr: "Sayfa Bilgisi", en: "Page Reference" }[language]}
              </h4>
              <p style={{ color: "hsl(var(--text-primary))", fontWeight: 600 }}>{{ tr: `Sayfa ${clauseDetail.page}`, en: `Page ${clauseDetail.page}` }[language]}</p>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.95rem", color: "hsl(var(--text-secondary))", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px" }}>
              {{ tr: "Modeldeki İlişkili Faaliyetler", en: "Corresponding Activities in Model" }[language]}
            </h4>
            {references.length > 0 ? (
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {references.map((ref, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: "flex", 
                      justifyContent: "space-between", 
                      alignItems: "center", 
                      padding: "12px 16px", 
                      background: "hsl(var(--bg-tertiary))", 
                      borderRadius: "8px",
                      borderLeft: "4px solid #2563EB"
                    }}
                  >
                    <div>
                      <span style={{ fontSize: "0.75rem", color: "hsl(var(--text-secondary))", display: "block" }}>
                        {{ tr: "MLOps Faaliyeti", en: "MLOps Activity" }[language]}
                      </span>
                      <Link 
                        to={`/stages/${ref.stageSlug}/${ref.activitySlug}`} 
                        onClick={onClose}
                        style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "4px" }}
                      >
                        <Link2 size={14} />
                        {t(ref.activityTitle)}
                      </Link>
                    </div>
                    <span 
                      className="badge" 
                      style={{ 
                        background: ref.relationType === "direct" ? "rgba(22, 163, 74, 0.1)" : "rgba(234, 88, 12, 0.1)",
                        color: ref.relationType === "direct" ? "#16A34A" : "#EA580C"
                      }}
                    >
                      {ref.relationType === "direct" 
                        ? { tr: "Doğrudan", en: "Direct" }[language]
                        : { tr: "Destekleyici", en: "Supporting" }[language]
                      }
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: "hsl(var(--text-muted))", fontStyle: "italic" }}>
                {{ tr: "Bu maddeye henüz doğrudan eşleşen bir teknik faaliyet atanmamıştır.", en: "No direct MLOps activity has been linked to this clause yet." }[language]}
              </p>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "flex-end", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "20px" }}>
          <button className="btn btn-secondary" onClick={onClose}>{{ tr: "Kapat", en: "Close" }[language]}</button>
        </div>
      </div>
    </div>
  );
}
