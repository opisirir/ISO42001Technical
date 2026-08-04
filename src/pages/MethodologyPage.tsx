import { useLanguage } from "../context/LanguageContext";
import { FileText, GitPullRequest, Info } from "lucide-react";
import { InteractiveText } from "../components/InteractiveText";

export function MethodologyPage() {
  const { language } = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }} className="fade-in">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "Akademik Metodoloji ve Entegrasyon Yaklaşımı", en: "Academic Methodology & Integration Approach" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
          {{
            tr: "ISO/IEC 42001 standardının yönetsel kontrollerinin makine öğrenimi (MLOps) operasyon süreçleriyle eşleştirilme metodolojisi.",
            en: "Methodology mapping managerial requirements of the ISO/IEC 42001 standard to machine learning engineering (MLOps) operations."
          }[language]}
        </p>
      </div>

      {/* PUKÖ Döngüsü ve MLOps İlişkisi */}
      <section className="glass-card" style={{ padding: "35px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
          <GitPullRequest size={22} style={{ color: "#2563EB" }} />
          {{ tr: "PUKÖ Döngüsü ve MLOps Eşleşmesi", en: "PDCA Cycle & MLOps Mapping" }[language]}
        </h2>
        <div style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6 }}>
          <p style={{ marginBottom: "15px" }}>
            <InteractiveText text={
              {
                tr: "Yapay Zekâ Yönetim Sistemleri (AIMS), klasik yazılım sistemlerinden farklı olarak statik olmayan, zamanla girdilere göre davranış değiştiren (konsept/veri kayması) dinamik bir yapıya sahiptir. Bu nedenle ISO/IEC 42001 standardı, yönetim sistemini sürekli iyileştirmeyi amaçlayan Planla-Uygula-Kontrol Et-Önlem Al (PUKÖ) döngüsü üzerine kurar.",
                en: "Unlike traditional static software, Artificial Intelligence Management Systems (AIMS) represent dynamic architectures that decay or drift in performance over time under changing data. Consequently, ISO/IEC 42001 anchors AI governance on the Plan-Do-Check-Act (PDCA) lifecycle."
              }[language]
            } />
          </p>
          <p style={{ marginBottom: "20px" }}>
            <InteractiveText text={
              {
                tr: "Önerilen operasyonel model, bu döngüyü MLOps aşamalarıyla şu şekilde ilişkilendirir:",
                en: "The proposed model correlates this cyclic feedback loop to MLOps engineering stages as follows:"
              }[language]
            } />
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginTop: "20px" }}>
            <div style={{ background: "hsl(var(--bg-tertiary))", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #2563EB" }}>
              <h4 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>1. PLANLA</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                <InteractiveText text={
                  {
                    tr: "İş probleminin ve başarım metriklerinin tanımlanması, risk değerlendirmesi ve etki analizlerinin (EIA) yapılması.",
                    en: "Specify business tasks, metrics targets, and draft baseline risk registers and impact assessments (EIA)."
                  }[language]
                } />
              </p>
              <span style={{ fontSize: "0.8rem", color: "#2563EB", fontWeight: 600, display: "block", marginTop: "10px" }}>
                {{ tr: "Model Aşaması: Yönetişim", en: "Model Stage: Governance" }[language]}
              </span>
            </div>

            <div style={{ background: "hsl(var(--bg-tertiary))", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #16A34A" }}>
              <h4 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>2. UYGULA</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                <InteractiveText text={
                  {
                    tr: "Verinin toplanması, hazırlanması, modelin eğitilmesi, test edilmesi, dağıtılması ve olay loglarının kaydedilmesi.",
                    en: "Data curation, preprocessing, model design training, V&V testing, CI/CD deploy, and logging trails."
                  }[language]
                } />
              </p>
              <span style={{ fontSize: "0.8rem", color: "#16A34A", fontWeight: 600, display: "block", marginTop: "10px" }}>
                {{ tr: "Model Aşaması: Geliştirme, Test, Dağıtım", en: "Model Stage: Dev, Validation, Deploy" }[language]}
              </span>
            </div>

            <div style={{ background: "hsl(var(--bg-tertiary))", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #EA580C" }}>
              <h4 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>3. KONTROL ET</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                <InteractiveText text={
                  {
                    tr: "Canlı ortamda model performansının, veri ve kavram sapmalarının (drift) sürekli izlenmesi ve raporlanması.",
                    en: "Real-time tracking of data drift, concept drift, system metrics, and reporting degradation signs."
                  }[language]
                } />
              </p>
              <span style={{ fontSize: "0.8rem", color: "#EA580C", fontWeight: 600, display: "block", marginTop: "10px" }}>
                {{ tr: "Model Aşaması: İzleme", en: "Model Stage: Monitoring" }[language]}
              </span>
            </div>

            <div style={{ background: "hsl(var(--bg-tertiary))", padding: "20px", borderRadius: "10px", borderLeft: "4px solid #EA580C" }}>
              <h4 style={{ color: "var(--text-primary)", marginBottom: "8px" }}>4. ÖNLEM AL</h4>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>
                <InteractiveText text={
                  {
                    tr: "Sapma durumunda modelin güncellenmesi, yeni verilerle yeniden eğitilmesi ve düzeltici faaliyetlerin yürütülmesi.",
                    en: "Triggers retraining loops, model updates release, and executing corrective tasks (CAPA)."
                  }[language]
                } />
              </p>
              <span style={{ fontSize: "0.8rem", color: "#EA580C", fontWeight: 600, display: "block", marginTop: "10px" }}>
                {{ tr: "Model Aşaması: Geri Bildirim", en: "Model Stage: Retraining" }[language]}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* YZ Yönetişim Yaklaşımlarının Karşılaştırılması */}
      <section className="glass-card" style={{ padding: "35px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
          <FileText size={22} style={{ color: "#EA580C" }} />
          {{ tr: "Yapay Zekâ Yönetişim Yaklaşımlarının Karşılaştırılması", en: "Comparison of AI Governance Frameworks" }[language]}
        </h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem", textAlign: "left", color: "var(--text-secondary)" }}>
            <thead>
              <tr style={{ borderBottom: "2px solid rgba(0,0,0,0.08)", color: "var(--text-primary)" }}>
                <th style={{ padding: "12px" }}>{{ tr: "Çerçeve / Standart", en: "Framework / Standard" }[language]}</th>
                <th style={{ padding: "12px" }}>{{ tr: "Tür", en: "Type" }[language]}</th>
                <th style={{ padding: "12px" }}>{{ tr: "Bağlayıcılık", en: "Binding Status" }[language]}</th>
                <th style={{ padding: "12px" }}>{{ tr: "Sertifikasyon", en: "Certification" }[language]}</th>
                <th style={{ padding: "12px" }}>{{ tr: "Teknik Uygulanabilirlik", en: "Technical Utility" }[language]}</th>
                <th style={{ padding: "12px" }}>{{ tr: "Güçlü Yön", en: "Core Strength" }[language]}</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <td style={{ padding: "12px", fontWeight: 700, color: "var(--text-primary)" }}>ISO/IEC 42001:2023</td>
                <td style={{ padding: "12px" }}>{{ tr: "Yönetim Sistemi Standart", en: "Management System Standard" }[language]}</td>
                <td style={{ padding: "12px" }}>{{ tr: "Gönüllü", en: "Voluntary" }[language]}</td>
                <td style={{ padding: "12px", color: "#16A34A", fontWeight: 700 }}>{{ tr: "Var", en: "Yes" }[language]}</td>
                <td style={{ padding: "12px", fontWeight: 600 }}>{{ tr: "Orta - Yüksek", en: "Medium - High" }[language]}</td>
                <td style={{ padding: "12px" }}>
                  {{
                    tr: "Sertifikalandırılabilir, mevcut ISO sistemleriyle tam entegre.",
                    en: "Auditable and certifiable, seamless integration with other ISO standards."
                  }[language]}
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <td style={{ padding: "12px", fontWeight: 700, color: "var(--text-primary)" }}>NIST AI RMF</td>
                <td style={{ padding: "12px" }}>{{ tr: "Rehber Çerçeve", en: "Guidelines Framework" }[language]}</td>
                <td style={{ padding: "12px" }}>{{ tr: "Gönüllü", en: "Voluntary" }[language]}</td>
                <td style={{ padding: "12px", color: "#EF4444" }}>{{ tr: "Yok", en: "No" }[language]}</td>
                <td style={{ padding: "12px" }}>{{ tr: "Orta", en: "Medium" }[language]}</td>
                <td style={{ padding: "12px" }}>
                  {{
                    tr: "Esnek yapı, risk odaklı ve detaylı yaklaşım.",
                    en: "Highly customizable structure, solid risk-focused breakdown."
                  }[language]}
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <td style={{ padding: "12px", fontWeight: 700, color: "var(--text-primary)" }}>EU AI Act</td>
                <td style={{ padding: "12px" }}>{{ tr: "Hukuki Regülasyon", en: "Legal Regulation" }[language]}</td>
                <td style={{ padding: "12px", color: "#EA580C" }}>{{ tr: "Zorunlu (AB)", en: "Mandatory (EU)" }[language]}</td>
                <td style={{ padding: "12px" }}>{{ tr: "Dolaylı Uyumluluk", en: "Indirect Compliance" }[language]}</td>
                <td style={{ padding: "12px" }}>{{ tr: "Düşük - Orta", en: "Low - Medium" }[language]}</td>
                <td style={{ padding: "12px" }}>
                  {{
                    tr: "Yasal yaptırım gücü, net risk kategorileri.",
                    en: "Statutory binding penalty fines, clear risk thresholds."
                  }[language]}
                </td>
              </tr>
              <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                <td style={{ padding: "12px", fontWeight: 700, color: "var(--text-primary)" }}>OECD AI Principles</td>
                <td style={{ padding: "12px" }}>{{ tr: "İlke Seti", en: "Principles Set" }[language]}</td>
                <td style={{ padding: "12px" }}>{{ tr: "Gönüllü", en: "Voluntary" }[language]}</td>
                <td style={{ padding: "12px", color: "#EF4444" }}>{{ tr: "Yok", en: "No" }[language]}</td>
                <td style={{ padding: "12px" }}>{{ tr: "Düşük", en: "Low" }[language]}</td>
                <td style={{ padding: "12px" }}>
                  {{
                    tr: "Küresel kabul görmüş etik çerçeve.",
                    en: "Globally accepted, high-level ethical guidelines."
                  }[language]}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Güven Seviyeleri Metodolojisi */}
      <section className="glass-card" style={{ padding: "35px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "var(--text-primary)", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Info size={22} style={{ color: "#2563EB" }} />
          {{ tr: "Eşleştirmelerde Güven Seviyeleri", en: "Mapping Confidence Methodology" }[language]}
        </h2>
        <div style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.6, display: "flex", flexDirection: "column", gap: "15px" }}>
          <p>
            <InteractiveText text={
              {
                tr: "Rehberdeki her teknik faaliyet ile standart maddesi arasındaki eşleşmeler, bilimsel tekrarlanabilirlik ve şeffaflık adına 3 farklı güven seviyesinde sınıflandırılmıştır:",
                en: "To guarantee scientific rigor, auditability, and clarity, each correlation between engineering tasks and standard clauses is graded across three levels of confidence:"
              }[language]
            } />
          </p>
          <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
            <li>
              <span className="badge" style={{ background: "rgba(22, 163, 74, 0.1)", color: "#16A34A", marginRight: "8px", fontWeight: 700 }}>
                {{ tr: "Yüksek:", en: "High:" }[language]}
              </span>
              <InteractiveText text={
                {
                  tr: "Standart metninde veya Annex A kontrollerinde ilgili teknik faaliyetin yapılması doğrudan ve açıkça zorunlu kılınmıştır (ör. veri kökeninin izlenmesi - A.7.5).",
                  en: "The standard text or Annex A explicitly mandates the execution of the technical activity (e.g. data provenance recording - A.7.5)."
                }[language]
              } />
            </li>
            <li>
              <span className="badge" style={{ background: "rgba(234, 88, 12, 0.1)", color: "#EA580C", marginRight: "8px", fontWeight: 700 }}>
                {{ tr: "Orta:", en: "Medium:" }[language]}
              </span>
              <InteractiveText text={
                {
                  tr: "Birden fazla standart maddesinin teknik yorumu ile veya Annex B uygulama rehberliğindeki tavsiyelerin entegrasyonuyla kurulan ilişki (ör. model güncelleme ve retraining - Clause 10).",
                  en: "Derived from technical interpretations of multiple clauses or recommendations within Annex B (e.g. model retraining triggers - Clause 10)."
                }[language]
              } />
            </li>
            <li>
              <span className="badge" style={{ background: "rgba(239, 68, 68, 0.1)", color: "#EF4444", marginRight: "8px", fontWeight: 700 }}>
                {{ tr: "Düşük:", en: "Low:" }[language]}
              </span>
              <InteractiveText text={
                {
                  tr: "Standartta genel yönetim sistemi kontrolü olarak geçen ancak MLOps mühendisliğinde dolaylı olarak uyum sağlanan, uzman yorumuna dayalı eşleşmeler.",
                  en: "Represents expert-opinion correlations mapping high-level management system tasks that are indirectly addressed in MLOps pipelines."
                }[language]
              } />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
