import { Link } from "react-router-dom";
import { modelData } from "../data/model";
import { useLanguage } from "../context/LanguageContext";
import { InteractiveText } from "../components/InteractiveText";
import stage1 from "../assets/1.png";
import stage2 from "../assets/2.png";
import stage3 from "../assets/3.png";
import stage4 from "../assets/4.png";
import stage5 from "../assets/5.png";
import stage6 from "../assets/6.png";
import stage7 from "../assets/7.png";
import stage8 from "../assets/8.png";
import { ArrowRight } from "lucide-react";

const stageImages = [stage1, stage2, stage3, stage4, stage5, stage6, stage7, stage8];

export function ModelPage() {
  const { language, t } = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className="fade-in">
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "MLOps Operasyonel Model Aşamaları", en: "MLOps Operational Model Stages" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "700px", margin: "0 auto" }}>
          {{
            tr: "PUKO döngüsünü MLOps yaşam döngüsüyle bütünleştiren ve standardın gerekliliklerini 8 aşamada teknik çıktılara dönüştüren operasyonel model şeması.",
            en: "An operational model pipeline that integrates the PDCA loop with MLOps and maps standard controls to 8 engineering deliverables."
          }[language]}
        </p>
      </div>

      {/* Flowchart Layout */}
      <div className="glass-card" style={{ padding: "40px" }}>
        <div className="flowchart">
          {modelData.map((stage) => {
            const isHorizontalDoc = stage.slug === "documentation";
            return (
              <div
                key={stage.id}
                className="flowchart-step fade-in"
                style={{
                  gridTemplateColumns: "60px 1fr auto",
                  background: isHorizontalDoc ? "rgba(37, 99, 235, 0.03)" : "transparent",
                  border: isHorizontalDoc ? "1px dashed rgba(37, 99, 235, 0.2)" : "none",
                  padding: isHorizontalDoc ? "20px" : "10px 0",
                  borderRadius: isHorizontalDoc ? "12px" : "0",
                  marginTop: isHorizontalDoc ? "20px" : "0"
                }}
              >
                {/* Step Circle */}
                <div className="flowchart-icon-box" style={{
                  borderColor: isHorizontalDoc ? "#ffff00ff" : "#ffffffff",
                  boxShadow: isHorizontalDoc ? "0 0 15px #ffff00ff" : "0 0 15px rgba(2, 2, 2, 0.2)",
                  overflow: "hidden",
                  padding: 0
                }}>
                  <img
                    src={stageImages[stage.order - 1]}
                    alt={`${t(stage.title)} illustration`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block"
                    }}
                  />
                </div>

                {/* Step Details */}
                <div style={{ paddingLeft: "10px" }}>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>
                    {{ tr: `Aşama ${stage.order}`, en: `Stage ${stage.order}` }[language]} {isHorizontalDoc && { tr: "(Destek/Yatay)", en: "(Support/Horizontal)" }[language]}
                  </span>
                  <h3 style={{ fontSize: "1.2rem", margin: "3px 0 6px 0", color: "var(--text-primary)" }}>{t(stage.title)}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.4 }}><InteractiveText text={t(stage.summary)} /></p>

                  {/* Embedded quick metadata info */}
                  <div style={{ display: "flex", gap: "10px", marginTop: "10px", flexWrap: "wrap" }}>
                    {stage.activities.map((act) => (
                      <span key={act.id} style={{ fontSize: "0.75rem", background: "hsl(var(--bg-tertiary))", padding: "3px 8px", borderRadius: "4px", color: "hsl(var(--text-primary))", border: "1px solid rgba(0,0,0,0.04)" }}>
                        {t(act.title)}
                      </span>
                    ))}
                    {stage.activities.map((act) => act.isoReferences.map((ref, idx) => (
                      <span key={idx} style={{ fontSize: "0.75rem", background: "rgba(37, 99, 235, 0.08)", color: "#2563EB", padding: "3px 8px", borderRadius: "4px", fontWeight: 600 }}>
                        {ref.clause}
                      </span>
                    )))}
                  </div>
                </div>

                {/* Navigation Button */}
                <div>
                  <Link to={`/stages/${stage.slug}`} className="btn btn-secondary" style={{ padding: "8px 16px", fontSize: "0.8rem" }}>
                    {{ tr: "Detaylar", en: "Details" }[language]} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
