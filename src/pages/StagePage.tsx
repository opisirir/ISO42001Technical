import { useParams, Link } from "react-router-dom";
import { modelData } from "../data/model";
import { useLanguage } from "../context/LanguageContext";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { InteractiveText } from "../components/InteractiveText";

export function StagePage() {
  const { stageSlug } = useParams<{ stageSlug: string }>();
  const { language, t } = useLanguage();
  const stage = modelData.find((s) => s.slug === stageSlug);

  if (!stage) {
    return (
      <div className="glass-card" style={{ textAlign: "center", padding: "40px" }}>
        <h2>{{ tr: "Aşama Bulunamadı", en: "Stage Not Found" }[language]}</h2>
        <p style={{ margin: "20px 0", color: "var(--text-secondary)" }}>
          {{
            tr: "Ulaşmaya çalıştığınız MLOps aşaması sistemde tanımlı değil.",
            en: "The MLOps stage you are looking for is not defined in the system."
          }[language]}
        </p>
        <Link to="/model" className="btn btn-primary">
          {{ tr: "Modellere Dön", en: "Back to Stages" }[language]}
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className="fade-in">
      {/* Back navigation */}
      <div>
        <Link to="/model" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          <ArrowLeft size={16} /> {{ tr: "Modellere Dön", en: "Back to Stages" }[language]}
        </Link>
      </div>

      {/* Header Info */}
      <div className="glass-card" style={{ background: "rgba(37, 99, 235, 0.04)" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#2563EB", textTransform: "uppercase" }}>
          {{ tr: `Aşama ${stage.order}`, en: `Stage ${stage.order}` }[language]}
        </span>
        <h1 style={{ fontSize: "2rem", margin: "5px 0 10px 0", color: "var(--text-primary)" }}>{t(stage.title)}</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.05rem" }}><InteractiveText text={t(stage.summary)} /></p>
      </div>

      {/* Activities List */}
      <div>
        <h2 style={{ fontSize: "1.4rem", marginBottom: "20px", color: "var(--text-primary)" }}>
          {{ tr: "Bu Aşamada Yürütülen Teknik Faaliyetler", en: "Technical Activities in This Stage" }[language]}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {stage.activities.map((act) => (
            <div key={act.id} className="glass-card interactive" style={{ padding: "30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "20px", flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "10px" }}>{t(act.title)}</h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", marginBottom: "20px", lineHeight: 1.5 }}>
                    <InteractiveText text={t(act.objective)} />
                  </p>

                  {/* ISO Mapping Badges */}
                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 600 }}>
                      {{ tr: "Eşleşen ISO Kontrolleri:", en: "Corresponding ISO Controls:" }[language]}
                    </span>
                    {act.isoReferences.map((ref, idx) => (
                      <span key={idx} className="badge badge-standard" style={{ fontSize: "0.75rem" }}>
                        {ref.clause}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ alignSelf: "center" }}>
                  <Link to={`/stages/${stage.slug}/${act.slug}`} className="btn btn-primary" style={{ gap: "4px" }}>
                    {{ tr: "Faaliyet Kılavuzunu Aç", en: "Open Activity Guide" }[language]} <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
