import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { modelData } from "../data/model";
import { useChecklist } from "../hooks/useChecklist";
import { useLanguage } from "../context/LanguageContext";
import { ClauseModal } from "../components/mapping/ClauseModal";
import { InteractiveText } from "../components/InteractiveText";
import {
  ArrowLeft,
  Book,
  AlertOctagon,
  Terminal,
  CheckCircle,
  Clock,
  MinusCircle,
  Edit2
} from "lucide-react";

export function ActivityPage() {
  const { stageSlug, activitySlug } = useParams<{ stageSlug: string; activitySlug: string }>();
  const [selectedClauseId, setSelectedClauseId] = useState<string | null>(null);
  const [editingNotesId, setEditingNotesId] = useState<string | null>(null);

  const stage = modelData.find((s) => s.slug === stageSlug);
  const activity = stage?.activities.find((a) => a.slug === activitySlug);

  const { getItemState, updateItemStatus, updateItemNotes } = useChecklist();
  const { language, t } = useLanguage();

  if (!stage || !activity) {
    return (
      <div className="glass-card" style={{ textAlign: "center", padding: "40px" }}>
        <h2>{{ tr: "Faaliyet Bulunamadı", en: "Activity Not Found" }[language]}</h2>
        <p style={{ margin: "20px 0", color: "var(--text-secondary)" }}>
          {{
            tr: "Ulaşmaya çalıştığınız teknik faaliyet rehberi sistemde bulunamadı.",
            en: "The technical activity guideline you requested was not found."
          }[language]}
        </p>
        <Link to="/model" className="btn btn-primary">{{ tr: "Modellere Dön", en: "Back to Stages" }[language]}</Link>
      </div>
    );
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle size={18} style={{ color: "#16A34A" }} />;
      case "in-progress":
        return <Clock size={18} style={{ color: "#EA580C" }} />;
      case "not-applicable":
        return <MinusCircle size={18} style={{ color: "hsl(var(--text-muted))" }} />;
      default:
        return <Clock size={18} style={{ color: "hsl(var(--text-muted))", opacity: 0.5 }} />;
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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }} className="fade-in">
      {/* Back and Breadcrumbs */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to={`/stages/${stage.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
          <ArrowLeft size={16} /> {{ tr: `${t(stage.title)} Aşamasına Dön`, en: `Back to ${t(stage.title)}` }[language]}
        </Link>
      </div>

      {/* Hero Header */}
      <div className="glass-card" style={{ background: "rgba(37, 99, 235, 0.04)" }}>
        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--text-secondary)", textTransform: "uppercase" }}>{t(stage.title)}</span>
        <h1 style={{ fontSize: "2.2rem", margin: "5px 0 15px 0", color: "var(--text-primary)" }}>{t(activity.title)}</h1>
        <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem" }}><InteractiveText text={t(activity.objective)} /></p>
      </div>

      {/* Main Grid: Left content, Right Quick Info */}
      <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "30px", alignItems: "flex-start" }}>
        {/* Left Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>

          {/* Section 1: Tanım / Açıklama */}
          <section>
            <h2 style={{ fontSize: "1.4rem", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "10px", marginBottom: "15px", color: "var(--text-primary)" }}>
              {{ tr: "1. Faaliyet Açıklaması", en: "1. Activity Description" }[language]}
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
              <InteractiveText text={t(activity.description)} />
            </p>
          </section>

          {/* Section 2: ISO/IEC 42001 Eşleştirmesi */}
          <section>
            <h2 style={{ fontSize: "1.4rem", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "10px", marginBottom: "15px", color: "var(--text-primary)" }}>
              {{ tr: "2. ISO/IEC 42001 Standart Hükümleri ile İlişkisi", en: "2. Relation with ISO/IEC 42001 Clauses" }[language]}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
              {activity.isoReferences.map((ref, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "20px", borderLeft: "4px solid #2563EB" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                    <button
                      onClick={() => setSelectedClauseId(ref.clause)}
                      style={{
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        color: "var(--accent-blue)",
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px"
                      }}
                    >
                      <Book size={18} />
                      {ref.clause} {ref.annex ? `(${ref.annex})` : ""}
                    </button>
                    <span className={`badge ${ref.relationship === "direct" ? "badge-standard" : "badge-recommendation"}`}>
                      {ref.relationship === "direct"
                        ? { tr: "Doğrudan İlişki", en: "Direct Relation" }[language]
                        : { tr: "Destekleyici İlişki", en: "Supporting Relation" }[language]
                      }
                    </span>
                  </div>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "12px" }}>
                    <strong>{{ tr: "Gerekçe:", en: "Rationale:" }[language]}</strong> <InteractiveText text={t(ref.rationale)} />
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    <strong>{{ tr: "Kaynak:", en: "Source:" }[language]}</strong> {ref.sources.map(s => `${s.fileName} ${s.clause ? `Clause ${s.clause}` : `Annex ${s.annex}`}, p. ${s.page}`).join(", ")}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3: Technical Activities */}
          <section>
            <h2 style={{ fontSize: "1.4rem", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "10px", marginBottom: "15px", color: "var(--text-primary)" }}>
              {{ tr: "3. Teknik Uygulama Faaliyetleri", en: "3. Technical Activity Steps" }[language]}
            </h2>
            <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-secondary)", fontSize: "1rem" }}>
              {t(activity.actions).map((action, idx) => (
                <li key={idx} style={{ lineHeight: 1.5 }}><InteractiveText text={action} /></li>
              ))}
            </ul>
          </section>

          {/* Section 4: Checklist */}
          <section>
            <h2 style={{ fontSize: "1.4rem", borderBottom: "1px solid rgba(0,0,0,0.06)", paddingBottom: "10px", marginBottom: "20px", color: "var(--text-primary)" }}>
              {{ tr: "4. Teknik Kontrol Listesi ve Uygulama İzlenebilirliği", en: "4. Technical Checklist and Traceability" }[language]}
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {activity.checklist.map((item) => {
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
                    {/* Header line */}
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "15px", flexWrap: "wrap", marginBottom: "12px" }}>
                      <h4 style={{ fontSize: "1.1rem", color: "var(--text-primary)", margin: 0 }}><InteractiveText text={t(item.title)} /></h4>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <span className={`badge ${item.requirementType === "standard-related" ? "badge-standard" : "badge-recommendation"}`}>
                          {item.requirementType === "standard-related"
                            ? { tr: "Zorunlu Kontrol", en: "Mandatory Control" }[language]
                            : { tr: "İyi Uygulama Önerisi", en: "Best Practice Recommendation" }[language]
                          }
                        </span>
                      </div>
                    </div>

                    <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginBottom: "15px" }}>
                      <InteractiveText text={t(item.description)} />
                    </p>

                    {/* Meta details grid */}
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "15px",
                      background: "hsl(var(--bg-tertiary))",
                      padding: "15px",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      marginBottom: "15px"
                    }}>
                      <div>
                        <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "2px" }}>{{ tr: "Sorumlu Rol:", en: "Responsible Role:" }[language]}</strong>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {t(item.responsibleRoles).map((role, rIdx) => (
                            <span key={rIdx}>
                              {rIdx > 0 && ", "}
                              <InteractiveText text={role} />
                            </span>
                          ))}
                        </span>
                      </div>
                      <div>
                        <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "2px" }}>{{ tr: "Beklenen Kanıt:", en: "Expected Evidence:" }[language]}</strong>
                        <span style={{ color: "var(--text-secondary)" }}>
                          {t(item.evidence).map((evItem, eIdx) => (
                            <span key={eIdx}>
                              {eIdx > 0 && ", "}
                              <InteractiveText text={evItem} />
                            </span>
                          ))}
                        </span>
                      </div>
                      <div>
                        <strong style={{ color: "var(--text-primary)", display: "block", marginBottom: "2px" }}>{{ tr: "Doğrulama Metodu:", en: "Verification Method:" }[language]}</strong>
                        <span style={{ color: "var(--text-secondary)" }}><InteractiveText text={t(item.verificationMethod)} /></span>
                      </div>
                    </div>

                    {/* Status Action Buttons */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
                      {/* Dropdown status selector */}
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{{ tr: "Durum:", en: "Status:" }[language]}</span>
                        <div style={{ display: "flex", gap: "5px" }}>
                          {(["not-started", "in-progress", "completed", "not-applicable"] as const).map((status) => (
                            <button
                              key={status}
                              onClick={() => updateItemStatus(item.id, status)}
                              style={{
                                fontSize: "0.75rem",
                                padding: "6px 12px",
                                borderRadius: "6px",
                                border: "1px solid rgba(0,0,0,0.08)",
                                cursor: "pointer",
                                transition: "var(--transition-fast)",
                                display: "inline-flex",
                                alignItems: "center",
                                gap: "4px",
                                background: itemState.status === status
                                  ? (status === "completed" ? "#16A34A" : status === "in-progress" ? "#EA580C" : "rgba(0,0,0,0.15)")
                                  : "rgba(0,0,0,0.02)",
                                color: itemState.status === status ? "white" : "var(--text-secondary)",
                                fontWeight: itemState.status === status ? 700 : 500
                              }}
                            >
                              {getStatusIcon(status)}
                              {getStatusLabel(status)}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Notes toggle button */}
                      <button
                        className="btn btn-secondary"
                        onClick={() => setEditingNotesId(editingNotesId === item.id ? null : item.id)}
                        style={{ padding: "6px 12px", fontSize: "0.8rem", gap: "4px" }}
                      >
                        <Edit2 size={12} /> {{ tr: "Notlar/Açıklama Ekle", en: "Add Notes" }[language]}
                      </button>
                    </div>

                    {/* Notes text area */}
                    {editingNotesId === item.id && (
                      <div style={{ marginTop: "15px" }} className="fade-in">
                        <textarea
                          placeholder={{ tr: "Kanıt bağlantısı, Git commit ID veya doğrulama notlarını buraya ekleyin...", en: "Add evidence links, Git commit hashes, or verification notes..." }[language]}
                          value={itemState.notes || ""}
                          onChange={(e) => updateItemNotes(item.id, e.target.value)}
                          style={{
                            width: "100%",
                            height: "80px",
                            background: "hsl(var(--bg-primary))",
                            border: "1px solid rgba(0,0,0,0.1)",
                            borderRadius: "8px",
                            padding: "10px",
                            color: "var(--text-primary)",
                            fontFamily: "inherit",
                            fontSize: "0.85rem",
                            outline: "none",
                            resize: "vertical"
                          }}
                        />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section 8: Araçtan Bağımsız Örnek Süreç */}
          <section className="glass-card" style={{ borderLeft: "4px solid #EA580C", background: "rgba(234, 88, 12, 0.01)" }}>
            <h2 style={{ fontSize: "1.4rem", display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", marginBottom: "15px" }}>
              <Terminal size={22} style={{ color: "#EA580C" }} /> {{ tr: "Araçtan Bağımsız Pratik Uygulama Örneği", en: "Tool-Agnostic Implementation Example" }[language]}
            </h2>
            <div style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              {activity.slug === "data-collection-cleaning-labeling" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. Veri mühendisi ham veri kaynağını (ör. PostgreSQL veya S3) Git repository'sindeki veri şeması dosyasıyla tanımlar.",
                      en: "1. Data engineer specifies the raw data source (e.g. PostgreSQL or S3) with schema files locked in Git."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. Python dilinde yazılmış otomatik bir veri profilleme betiği (ör. ydata-profiling veya Great Expectations kütüphanesi) çalıştırılır.",
                      en: "2. Automated profile tests run on dataset inputs (e.g. Great Expectations or ydata-profiling library in Python)."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Kalite baraj testi (ör. missing null values < %1, target label balance > %40) çalıştırılarak sonuç bir HTML raporu olarak CI/CD ortamında saklanır.",
                      en: "3. Baseline metrics check passes (e.g. null ratios < 1%, class balance > 40%), saving HTML outputs to CI/CD storage."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Veri seti versiyonlanarak DVC (Data Version Control) aracılığıyla S3 storage hash kodu Git commit kaydıyla eşleştirilir.",
                      en: "4. Dataset version is tagged on DVC, matching the S3 storage hash to the Git release commit."
                    }[language]}
                  </p>
                </div>
              )}
              {activity.slug === "model-training-hyperparameter-tuning" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. ML Mühendisi, model parametrelerini ve kullanılacak algoritmayı config.yaml dosyasında tanımlar.",
                      en: "1. ML engineer defines algorithms and parameters configs in a versioned config.yaml file."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. Model eğitimi sırasında MLflow veya Weights & Biases platformları üzerinde otomatik loglama başlatılır.",
                      en: "2. Execute model training logs tracking runs via telemetry APIs like MLflow or Weights & Biases."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Eğitimde kullanılan veri seti hash kodu ve eğitim esnasındaki hiperparametre kombinasyonları log tablolarına yazılır.",
                      en: "3. Log dataset commit hash, hyperparameter configs, and train loss output metrics."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Eğitilen model dosyası (.onnx veya .bin) sürüm etiketleri eklenerek model kayıt merkezine (Model Registry) kaydedilir.",
                      en: "4. Register weights artifacts (.onnx or .bin) with release tags in the Model Registry."
                    }[language]}
                  </p>
                </div>
              )}
              {activity.slug === "performance-measurement-validation" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. Test uzmanı, bağımsız test veri setini kullanarak modeli çalıştırır ve adillik/başarım metriklerini ölçer.",
                      en: "1. Test specialist evaluates candidate models on independent test sets, recording metrics."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. Belirli hassas demografik gruplara göre (ör. yaş kırılımı) başarım farkları Fairlearn gibi araçlarla test edilerek loglanır.",
                      en: "2. Disparities across subgroups (e.g. demographic parity) are tested using Fairlearn tools."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Test sonuçları ve sürüm onay kriterleri (ör. F1 score > 0.85, test seti sapma payı < %2) kontrol edilir.",
                      en: "3. Verify release gate boundaries (e.g. F1 > 0.85, accuracy error margin < 2%)."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Hazırlanan başarım ve test raporu sürüm kartıyla birlikte arşivlenir ve canlıya sürüm onayı için sunulur.",
                      en: "4. Archive test and evaluation reports, attaching the sign-off record before deploy."
                    }[language]}
                  </p>
                </div>
              )}
              {activity.slug === "model-deployment-production" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. MLOps mühendisi, CI/CD aracı üzerinde deployment pipeline'larını tetikler.",
                      en: "1. MLOps engineer triggers deployment pipelines in Gitlab CI/CD or GitHub Actions."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. Docker imajı ve model sürümü Kubernetes veya benzeri bir container orchestration platformuna Shadow/Canary olarak dağıtılır.",
                      en: "2. Containers and model weights deploy to Kubernetes staging clusters as shadow or canary targets."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Sistemde test istekleri gönderilerek geri alma (rollback) adımlarının stabil çalışıp çalışmadığı otomatik test senaryolarıyla denetlenir.",
                      en: "3. Run automated traffic tests to verify rollback tasks reset correctly under simulated errors."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Dağıtım sonrasında oluşan loglar ve sürüm konfigürasyon kayıtları Git etiketleriyle saklanır.",
                      en: "4. Tag deployment configurations and container states in version control files."
                    }[language]}
                  </p>
                </div>
              )}
              {activity.slug === "drift-detection-performance-monitoring" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. Canlı sistemden akan tahmin istekleri ve model çıktıları asenkron olarak izleme kuyruğuna (ör. Kafka veya RabbitMQ) yönlendirilir.",
                      en: "1. Pipe incoming prediction requests and responses asynchronously to a messaging queue (e.g., Kafka or RabbitMQ)."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. Evidently, Prometheus veya Whylogs kütüphaneleri kullanılarak canlı verilerin eğitim verilerinden sapması (PSI testi) günlük olarak hesaplanır.",
                      en: "2. Calculate population stability index (PSI) daily comparing training sets to production flows via Evidently or Whylogs."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Doğruluk oranı eşiklerin altına indiğinde teknik ekibin haberleşme kanallarına (ör. Slack veya PagerDuty) uyarı bildirimi gider.",
                      en: "3. Alert engineering teams via PagerDuty or Slack if performance indexes drop below limits."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Yapay zekâ modeline yönelik olası veri zehirlenmesi (poisoning) saldırı girişimleri loglama kuyruğu üzerinden anormallik analiziyle taranır.",
                      en: "4. Monitor telemetry records for data poisoning or inversion attack footprints."
                    }[language]}
                  </p>
                </div>
              )}
              {activity.slug === "model-update-retraining" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. İzleme panellerinde veri sapması (data drift) eşik değerinin aşıldığı raporlandığında, yeniden eğitim tetikleyicisi aktif olur.",
                      en: "1. Drift alarms execute retraining pipeline scripts automatically."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. En son güncel ve doğrulanmış veri setleri veri deposundan çekilerek model yeni verilerle eğitilir.",
                      en: "2. Pull verified datasets to train model weight updates on retrain clusters."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Yeni eğitilen model sürümü ile mevcut canlı sürüm yan yana test edilerek regresyon (gerileme) testi çalıştırılır.",
                      en: "3. Run regression checks side-by-side between the new model and active production weights."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Testlerden başarıyla geçen yeni sürüm model kayıt merkezinde (Model Registry) 'Candidate' olarak güncellenir.",
                      en: "4. Push approved candidates to Model Registry for deployment promotion."
                    }[language]}
                  </p>
                </div>
              )}
              {activity.slug === "risk-analysis-impact-assessment" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. Uyum ve risk uzmanları, yapay zekâ modelinin kullanım amacına göre risk kategorisini (ör. AB YZ Yasası'na göre Yüksek Riskli) belirler.",
                      en: "1. Grade the AI model category based on context (e.g. High Risk under the EU AI Act)."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. Bireylerin gizlilik ve karar haklarına etkiyi analiz etmek için AI System Impact Assessment (EIA) şablonu doldurulur.",
                      en: "2. Draft the AI System Impact Assessment (EIA) detailing consequences to end-user rights."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Riskleri azaltmak üzere teknik başarım limitleri, insan gözetimi (human-in-the-loop) arayüzleri ve ek denetim logları risk planına eklenir.",
                      en: "3. Incorporate human oversight interfaces and baseline parameters to mitigate risk."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Hazırlanan risk matrisi ve hafifletme önlemleri üst yönetimin incelemesine sunularak yazılı onay kaydı arşivlenir.",
                      en: "4. Present treatment plans and matrices to stakeholders for executive sign-off."
                    }[language]}
                  </p>
                </div>
              )}
              {activity.slug === "technical-records-transparency" && (
                <div>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "1. Modelin başarım metrikleri, veri yapısı ve tasarım varsayımlarını içeren Model Kartı teknik ekipçe Markdown formatında oluşturulur.",
                      en: "1. Developer teams document Model Cards outlining specs and baseline performance metrics."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "2. YZ sisteminin genel yapısını ve güvenlik sınırlarını açıklayan Sistem Kartı kurumsal portalda yayımlanır.",
                      en: "2. Publish System Cards detailing architecture constraints and security bounds."
                    }[language]}
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    {{
                      tr: "3. Üretim ortamındaki tahmin logları zaman damgaları, kullanılan model sürümü ve tahmin girdileriyle birlikte ElasticSearch veya S3 üzerinde şifreli saklanır.",
                      en: "3. Save timestamped logs (predictions, input features, container tags) securely in encrypted S3 or ElasticSearch stores."
                    }[language]}
                  </p>
                  <p>
                    {{
                      tr: "4. Log saklama politikasında belirtilen süre boyunca logların dışarıdan değiştirilemezliği güvence altına alınır.",
                      en: "4. Lock logs using write-once-read-many (WORM) storage over defined retention periods."
                    }[language]}
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* Right Column: Quick Metadata Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }} className="no-print">

          {/* Completion status summary */}
          <div className="glass-card">
            <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "15px" }}>
              {{ tr: "Faaliyet İlerlemesi", en: "Activity Progress" }[language]}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {activity.checklist.map((item) => {
                const itemState = getItemState(item.id);
                return (
                  <div key={item.id} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.85rem" }}>
                    {getStatusIcon(itemState.status)}
                    <span style={{
                      textDecoration: itemState.status === "completed" ? "line-through" : "none",
                      color: itemState.status === "completed" ? "var(--text-muted)" : "var(--text-secondary)"
                    }} className="line-clamp-1">
                      <InteractiveText text={t(item.title)} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gerekli Kanıtlar */}
          <div className="glass-card">
            <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "15px" }}>
              {{ tr: "Gerekli Kanıtlar", en: "Expected Evidence" }[language]}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {activity.evidence.map((ev) => (
                <div key={ev.id} style={{ fontSize: "0.85rem" }}>
                  <span style={{ fontWeight: 600, color: "var(--text-primary)", display: "block" }}><InteractiveText text={t(ev.title)} /></span>
                  <span style={{ color: "var(--text-secondary)", fontSize: "0.8rem" }}><InteractiveText text={t(ev.description)} /></span>
                  <div style={{ marginTop: "5px" }}>
                    {ev.formatExamples.map((fmt, idx) => (
                      <code key={idx} style={{ background: "hsl(var(--bg-tertiary))", padding: "2px 6px", borderRadius: "4px", fontSize: "0.75rem", marginRight: "5px", color: "#2563EB" }}>
                        {fmt}
                      </code>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tamamlanma Kriterleri */}
          <div className="glass-card">
            <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "15px" }}>
              {{ tr: "Kritik Kriterler", en: "Completion Criteria" }[language]}
            </h3>
            <ul style={{ paddingLeft: "15px", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
              {t(activity.completionCriteria).map((crit, idx) => (
                <li key={idx}><InteractiveText text={crit} /></li>
              ))}
            </ul>
          </div>

          {/* Sık Yapılan Hatalar */}
          <div className="glass-card" style={{ borderLeft: "4px solid hsl(var(--danger))" }}>
            <h3 style={{ fontSize: "1.1rem", color: "var(--text-primary)", marginBottom: "15px", display: "flex", alignItems: "center", gap: "6px" }}>
              <AlertOctagon size={18} style={{ color: "hsl(var(--danger))" }} /> {{ tr: "Sık Yapılan Hatalar", en: "Common Mistakes" }[language]}
            </h3>
            <ul style={{ paddingLeft: "15px", fontSize: "0.85rem", color: "var(--text-secondary)", display: "flex", flexDirection: "column", gap: "8px" }}>
              {t(activity.commonMistakes).map((mistake, idx) => (
                <li key={idx}><InteractiveText text={mistake} /></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal for ISO clause information details */}
      {selectedClauseId && (
        <ClauseModal
          clauseId={selectedClauseId}
          onClose={() => setSelectedClauseId(null)}
        />
      )}
    </div>
  );
}
