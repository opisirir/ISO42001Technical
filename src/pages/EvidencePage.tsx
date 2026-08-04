import { modelData } from "../data/model";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { FileText, ArrowRight } from "lucide-react";
import { InteractiveText } from "../components/InteractiveText";

export function EvidencePage() {
  const { language, t } = useLanguage();

  // Extract all evidence items with stage and activity references
  const evidenceCatalog: {
    evidence: any;
    activityTitle: any;
    activitySlug: string;
    stageTitle: any;
    stageSlug: string;
  }[] = [];

  modelData.forEach(stage => {
    stage.activities.forEach(act => {
      act.evidence.forEach(ev => {
        evidenceCatalog.push({
          evidence: ev,
          activityTitle: act.title,
          activitySlug: act.slug,
          stageTitle: stage.title,
          stageSlug: stage.slug
        });
      });
    });
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className="fade-in">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "Teknik Kanıtlar Kataloğu", en: "Technical Evidence Catalog" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
          {{
            tr: "ISO/IEC 42001 sertifikasyon sürecinde denetçilere sunulabilecek, MLOps boru hatlarında otomatik veya manuel üretilen tüm kanıtların dökümü.",
            en: "A comprehensive breakdown of all evidence produced in MLOps pipelines (automated or manual) to present to auditors for compliance audits."
          }[language]}
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {evidenceCatalog.map(({ evidence, activityTitle, activitySlug, stageTitle, stageSlug }, idx) => (
          <div key={idx} className="glass-card" style={{ padding: "24px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap", marginBottom: "15px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FileText size={22} style={{ color: "#2563EB" }} />
                <div>
                  <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", margin: 0 }}>
                    <InteractiveText text={t(evidence.title)} />
                  </h3>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)" }}>
                    {{ tr: "Üretildiği Aşama:", en: "Created in Stage:" }[language]} <strong>{t(stageTitle)}</strong>
                  </span>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <span className={`badge ${evidence.required ? "badge-standard" : "badge-recommendation"}`}>
                  {evidence.required 
                    ? { tr: "Zorunlu Çıktı", en: "Mandatory Deliverable" }[language]
                    : { tr: "Öneri Artefakt", en: "Recommended Artifact" }[language]
                  }
                </span>
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "15px", lineHeight: 1.5 }}>
              <InteractiveText text={t(evidence.description)} />
            </p>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
              gap: "15px", 
              background: "hsl(var(--bg-tertiary))", 
              padding: "15px", 
              borderRadius: "8px",
              fontSize: "0.85rem",
              marginBottom: "15px"
            }}>
              <div>
                <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "3px" }}>
                  {{ tr: "Örnek Formatlar:", en: "Format Examples:" }[language]}
                </strong>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  {evidence.formatExamples.map((fmt: string, idx: number) => (
                    <code key={idx} style={{ background: "hsl(var(--bg-primary))", padding: "2px 6px", borderRadius: "4px", color: "#2563EB", fontSize: "0.75rem" }}>
                      {fmt}
                    </code>
                  ))}
                </div>
              </div>
              <div>
                <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "3px" }}>
                  {{ tr: "Doğrulama Yöntemi:", en: "Verification Method:" }[language]}
                </strong>
                <span style={{ color: "var(--text-secondary)" }}>
                  <InteractiveText text={t(evidence.verificationMethod)} />
                </span>
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "10px" }}>
              <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
                {{ tr: "İlişkili Faaliyet:", en: "Related Activity:" }[language]} <strong>{t(activityTitle)}</strong>
              </span>
              <Link to={`/stages/${stageSlug}/${activitySlug}`} className="btn btn-secondary" style={{ padding: "6px 12px", fontSize: "0.8rem", gap: "4px" }}>
                {{ tr: "Kılavuza Git", en: "Go to Activity" }[language]} <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
