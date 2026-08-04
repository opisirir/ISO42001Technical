import { Link } from "react-router-dom";
import { useChecklist } from "../hooks/useChecklist";
import { useLanguage } from "../context/LanguageContext";
import {
  ShieldCheck,
  Settings,
  Activity,
  Layers,
  GitFork,
  CheckSquare,
  ArrowRight,
  BookOpen,
  Award
} from "lucide-react";

export function HomePage() {
  const { getProgress } = useChecklist();
  const { language } = useLanguage();
  const progress = getProgress();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }} className="fade-in">
      {/* Hero Section */}
      <section style={{
        textAlign: "center",
        padding: "60px 20px",
        background: "rgba(37, 99, 235, 0.04)",
        borderRadius: "24px",
        border: "1px solid rgba(37, 99, 235, 0.12)"
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(37, 99, 235, 0.06)",
          border: "1px solid rgba(37, 99, 235, 0.15)",
          padding: "6px 16px",
          borderRadius: "9999px",
          marginBottom: "20px",
          fontSize: "0.85rem",
          fontWeight: 600,
          color: "#2563EB"
        }}>
          <Award size={16} />
          {{ tr: "ISO/IEC 42001 ve MLOps Teknik Kılavuz", en: "ISO/IEC 42001 & MLOps Technical Guide" }[language]}
        </div>
        <h1 style={{ fontSize: "3.2rem", lineHeight: "1.15", marginBottom: "20px", fontFamily: "var(--font-title)", fontWeight: 800 }}>
          {{
            tr: <>Yapay Zekâ Yönetim Sisteminin Mühendislik Süreçlerine <br />Entegregrasyonu</>,
            en: <>Integrate Artificial Intelligence Management System into MLOps</>
          }[language]}
        </h1>
        <p style={{ fontSize: "1.15rem", color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>
          {{
            tr: "Teknik personel için hazırlanmış, MLOps yaşam döngüsünü ISO/IEC 42001 standardı kontrol hedefleriyle eşleştiren, izlenebilir ve doğrulanabilir interaktif rehber portalı.",
            en: "An interactive guidelines portal for engineering staff mapping the MLOps lifecycle to ISO/IEC 42001 control objectives, ensuring auditable traceability."
          }[language]}
        </p>

        <div style={{ display: "flex", gap: "15px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/model" className="btn btn-primary" style={{ padding: "12px 28px" }}>
            {{ tr: "Modeli Keşfet", en: "Explore Model" }[language]} <ArrowRight size={18} />
          </Link>
          <Link to="/checklist" className="btn btn-secondary" style={{ padding: "12px 28px" }}>
            {{ tr: "Teknik Checklist'i Aç", en: "Open Technical Checklist" }[language]}
          </Link>
        </div>
      </section>

      {/* Progress Cards */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "80px", height: "80px", gridColumn: "1", gridRow: "1", borderRadius: "50%", background: "rgba(22, 163, 74, 0.08)", border: "2px solid #16A34A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 800, color: "#16A34A" }}>
            %{progress.progressPercent}
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "5px" }}>
              {{ tr: "Kontrol Listesi İlerlemesi", en: "Overall Checklist Progress" }[language]}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              {{
                tr: `${progress.completed} / ${progress.total} kontrol maddesi tamamlandı.`,
                en: `${progress.completed} of ${progress.total} checklist controls completed.`
              }[language]}
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "rgba(37, 99, 235, 0.08)", border: "2px solid #2563EB", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem", fontWeight: 800, color: "#2563EB" }}>
            %{progress.standardProgressPercent}
          </div>
          <div>
            <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "5px" }}>
              {{ tr: "Standart Uyumluluk İlerlemesi", en: "Standard Compliance Progress" }[language]}
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              {{
                tr: `${progress.standardRelatedCompleted} / ${progress.standardRelatedCount} zorunlu kontrol tamamlandı.`,
                en: `${progress.standardRelatedCompleted} of ${progress.standardRelatedCount} standard controls completed.`
              }[language]}
            </p>
          </div>
        </div>
      </section>

      <section className="glass-card" style={{ padding: "40px", background: "var(--glass-bg)" }}>
        <h2 style={{ fontSize: "1.8rem", color: "var(--text-primary)", marginBottom: "20px" }}>
          {{ tr: "Modelin Temeli ve Akademik Metodoloji", en: "Model Base and Academic Methodology" }[language]}
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", alignItems: "center", flexWrap: "wrap" }}>
          <div>
            <p style={{ marginBottom: "15px", color: "var(--text-secondary)" }}>
              {{
                tr: "Bu rehber portalı, ISO/IEC 42001 Yapay Zekâ Yönetim Sistemi (AIMS) standardının gereksinimlerini doğrudan makine öğrenimi mühendislik pratiklerine indirgemektedir.",
                en: "This guidelines portal translates the requirements of ISO/IEC 42001 Artificial Intelligence Management System (AIMS) into MLOps engineering pratikleri."
              }[language]}
            </p>
            <p style={{ marginBottom: "25px", color: "var(--text-secondary)" }}>
              {{
                tr: "Yönetsel politikaların teknik MLOps boru hatlarında somut birer kanıta (veri profilleme logları, sürüm etiketleri, test raporları vb.) nasıl dönüştürüleceğini, PUKÖ (Planla-Uygula-Kontrol Et-Önlem Al) döngüsünün teknik izdüşümünü sunarak açıklar.",
                en: "Explains how managerial policies transform into concrete technical evidence (data profile logs, registry tags, validation reports) throughout the MLOps pipeline using PDCA integration maps."
              }[language]}
            </p>
            <Link to="/methodology" className="btn btn-secondary" style={{ display: "inline-flex" }}>
              <BookOpen size={16} /> {{ tr: "Metodolojiyi İncele", en: "Inspect Methodology" }[language]}
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <div style={{ background: "rgba(37, 99, 235, 0.1)", padding: "10px", borderRadius: "10px", color: "#2563EB" }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "5px" }}>
                  {{ tr: "Tam İzlenebilirlik", en: "Full Traceability" }[language]}
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  {{
                    tr: "Her teknik faaliyeti standardın ilgili eklerine ve sayfa numaralarına eşleyen yapı.",
                    en: "Mapping every engineering task directly to standard clauses and page references."
                  }[language]}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <div style={{ background: "rgba(22, 163, 74, 0.1)", padding: "10px", borderRadius: "10px", color: "#16A34A" }}>
                <Settings size={24} />
              </div>
              <div>
                <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "5px" }}>
                  {{ tr: "Kanıta Dayalı Doğrulama", en: "Evidence-Based Auditing" }[language]}
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  {{
                    tr: "Sertifikasyon denetimlerinde sunulabilecek somut teknik çıktılar kataloğu.",
                    en: "Deliverables database to submit to auditors for compliance certification validation."
                  }[language]}
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
              <div style={{ background: "rgba(234, 88, 12, 0.1)", padding: "10px", borderRadius: "10px", color: "#EA580C" }}>
                <Activity size={24} />
              </div>
              <div>
                <h4 style={{ color: "var(--text-primary)", fontSize: "1.1rem", marginBottom: "5px" }}>
                  {{ tr: "Etkin Durum Yönetimi", en: "Active State Management" }[language]}
                </h4>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                  {{
                    tr: "Durumu local storage alanında saklanan, Markdown veya JSON olarak aktarılabilen checklist paneli.",
                    en: "Checklist manager that stores progress in local storage and exports as Markdown/JSON."
                  }[language]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Main Features */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
        <div className="glass-card interactive" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Layers size={36} style={{ color: "#2563EB" }} />
          <h3 style={{ color: "var(--text-primary)", margin: 0 }}>{{ tr: "8 Aşamalı Model", en: "8-Stage Model" }[language]}</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", flex: 1 }}>
            {{
              tr: "Veri toplama, model geliştirme, doğrulama, dağıtım, izleme, geri bildirim, risk yönetimi ve dokümantasyon aşamalarının teknik detayları.",
              en: "Technical descriptions of collection, development, verification, deployment, monitoring, retraining, and risk management."
            }[language]}
          </p>
          <Link to="/model" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", marginTop: "10px" }}>
            {{ tr: "Modeli İncele", en: "Open Model" }[language]} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="glass-card interactive" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <GitFork size={36} style={{ color: "#EA580C" }} />
          <h3 style={{ color: "var(--text-primary)", margin: 0 }}>{{ tr: "Eşleştirme Matrisi", en: "Mapping Matrix" }[language]}</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", flex: 1 }}>
            {{
              tr: "Model aşamaları ile ISO/IEC 42001 maddeleri arasındaki doğrudan ve destekleyici ilişkilerin gerekçelendirilmiş matrisi.",
              en: "Full mapping matrix showing direct and supporting rationales between MLOps tasks and AIMS clauses."
            }[language]}
          </p>
          <Link to="/mapping" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", marginTop: "10px" }}>
            {{ tr: "Matrisi Görüntüle", en: "Open Matrix" }[language]} <ArrowRight size={14} />
          </Link>
        </div>

        <div className="glass-card interactive" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <CheckSquare size={36} style={{ color: "#16A34A" }} />
          <h3 style={{ color: "var(--text-primary)", margin: 0 }}>{{ tr: "Teknik Kontrol Listesi", en: "Technical Checklist" }[language]}</h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", flex: 1 }}>
            {{
              tr: "Teknik personelin yapması gereken faaliyetler, rol sorumlulukları, kanıtlar ve doğrulama metotlarını barındıran checklist paneli.",
              en: "Checklist panel with clear actions list, roles, expected evidence, and validation metrics."
            }[language]}
          </p>
          <Link to="/checklist" style={{ fontWeight: 600, display: "flex", alignItems: "center", gap: "4px", marginTop: "10px" }}>
            {{ tr: "Checklist'e Git", en: "Open Checklist" }[language]} <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
