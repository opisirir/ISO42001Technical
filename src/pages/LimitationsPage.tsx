import { useLanguage } from "../context/LanguageContext";
import { AlertTriangle, ShieldCheck, HelpCircle } from "lucide-react";

export function LimitationsPage() {
  const { language } = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className="fade-in">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "Sınırlılıklar ve Yasal Sorumluluk Reddi", en: "Limitations and Legal Disclaimer" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
          {{
            tr: "Rehber içeriğinin kullanımına dair yasal sınırlar, telif ve uyumluluk bildirimleri.",
            en: "Legal limitations, copyright permissions, and compliance notices regarding this portal."
          }[language]}
        </p>
      </div>

      <div className="glass-card" style={{ borderLeft: "4px solid #EA580C", background: "rgba(245, 158, 11, 0.02)" }}>
        <div style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
          <AlertTriangle size={28} style={{ color: "#EA580C", flexShrink: 0, marginTop: "2px" }} />
          <div>
            <h2 style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "10px" }}>
              {{ tr: "Resmi Sertifikasyon Uyarısı", en: "Official Certification Warning" }[language]}
            </h2>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.6, fontSize: "0.95rem" }}>
              {{
                tr: "Bu web portalı, ISO/IEC 42001:2023 standardının teknik entegrasyonuna yönelik akademik bir çalışma yorumudur. Resmi bir ISO denetim/sertifikasyon aracı değildir ve bağımsız belgelendirme denetimlerinin yerine geçmez. Sistemlerin resmi sertifikasyona hazırlanması sürecinde resmi ISO standart dokümanının satın alınarak incelenmesi yasal bir zorunluluktur.",
                en: "This guidelines portal represents an academic interpretation mapping engineering workflows to the ISO/IEC 42001:2023 standard. It is not an official ISO audit checklist and does not replace official compliance certification. For formal compliance audits, purchasing the official ISO standard is legally required."
              }[language]}
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        <div className="glass-card">
          <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <ShieldCheck size={20} style={{ color: "#16A34A" }} /> 
            {{ tr: "Fikri Mülkiyet ve Telif Hakları", en: "Intellectual Property & Copyrights" }[language]}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>
            {{
              tr: "ISO standart metinleri telif hakkıyla korunmaktadır. Bu portalda standardın tam ve birebir metni izinsiz olarak yayımlanmamıştır. İçerikler, standardın mühendislik süreçlerine uygulanabilirliğini göstermek amacıyla özetlenmiş, yorumlanmış ve ilgili madde numaralarına atıfta bulunulmuştur.",
              en: "ISO specifications are protected under copyright. Full, verbatim copies of the standard are not reproduced here. Contents are compiled as summaries and expert interpretations to demonstrate practical utility in MLOps, linking back to clause references."
            }[language]}
          </p>
        </div>

        <div className="glass-card">
          <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "12px", display: "flex", alignItems: "center", gap: "8px" }}>
            <HelpCircle size={20} style={{ color: "#2563EB" }} /> 
            {{ tr: "Danışmanlık ve Sorumluluk", en: "Consultation and Liabilities" }[language]}
          </h3>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>
            {{
              tr: "Bu sitede sunulan checklistler, kanıt önerileri ve pratik süreçler öneri niteliğindedir. Organizasyonların özel yasal, sektörel veya teknik kısıtları doğrultusunda kendi süreçlerini uyarlamaları gerekir. Rehberin kullanımından doğabilecek olası belgelendirme başarısızlıklarından yazarlar sorumlu tutulamaz.",
              en: "Checklists, expected evidence, and processes shown on this site represent technical suggestions. Organizations must customize these mappings for their unique regulatory, business, or operational constraints. Authors cannot be held liable for audit outcomes."
            }[language]}
          </p>
        </div>
      </div>

      <section className="glass-card">
        <h3 style={{ fontSize: "1.2rem", color: "var(--text-primary)", marginBottom: "15px" }}>
          {{ tr: "Akademik ve Teknik Sürüm Detayları", en: "Academic and Technical Version Details" }[language]}
        </h3>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", color: "var(--text-secondary)" }}>
          <tbody>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <td style={{ padding: "10px", fontWeight: 700, color: "var(--text-primary)" }}>{{ tr: "Standart Sürümü", en: "Standard Edition" }[language]}</td>
              <td style={{ padding: "10px" }}>ISO/IEC 42001:2023 (First Edition, {{ tr: "Aralık 2023", en: "December 2023" }[language]})</td>
            </tr>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <td style={{ padding: "10px", fontWeight: 700, color: "var(--text-primary)" }}>{{ tr: "Rehber Yazılım Sürümü", en: "Guide Application Version" }[language]}</td>
              <td style={{ padding: "10px" }}>v1.0.0-beta</td>
            </tr>
            <tr style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
              <td style={{ padding: "10px", fontWeight: 700, color: "var(--text-primary)" }}>{{ tr: "Son Güncelleme / Erişim Tarihi", en: "Last Updated / Access Date" }[language]}</td>
              <td style={{ padding: "10px" }}>16 {{ tr: "Temmuz", en: "July" }[language]} 2026</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
