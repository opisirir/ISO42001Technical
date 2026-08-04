import { useLanguage } from "../context/LanguageContext";
import { Book, Globe, Award, Share2 } from "lucide-react";

export function ReferencesPage() {
  const { language } = useLanguage();

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "40px" }} className="fade-in">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "Akademik ve Normatif Kaynaklar", en: "Academic and Normative References" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
          {{
            tr: "Rehber içeriğinin hazırlanmasında kullanılan standartlar, bilimsel makaleler ve referans kütüphaneler.",
            en: "Standards, academic research papers, and reference guides leveraged to design the mapping database."
          }[language]}
        </p>
      </div>

      {/* Makale Atıf Bilgisi */}
      <section className="glass-card" style={{ borderLeft: "4px solid #2563EB" }}>
        <h2 style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "15px", display: "flex", alignItems: "center", gap: "8px" }}>
          <Award size={22} style={{ color: "#2563EB" }} /> 
          {{ tr: "Birincil Akademik Atıf", en: "Primary Academic Citation" }[language]}
        </h2>
        <div style={{ background: "hsl(var(--bg-primary))", padding: "20px", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.05)", marginBottom: "20px" }}>
          <p style={{ fontFamily: "monospace", fontSize: "0.95rem", color: "var(--text-primary)", lineHeight: 1.5 }}>
            Pişirir, O. M. (2026). ISO/IEC 42001:2023 Kapsamında Yapay Zekâ Yönetim Sistemleri: Teknik Süreçler ve Operasyonel Bir Model. 
            <em> Adv. Artif. Intell. Res.</em>, 5(1), 14-22.
          </p>
        </div>
        <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem", lineHeight: 1.5 }}>
          {{
            tr: "Bu web portalındaki 8 aşamalı MLOps ve ISO/IEC 42001 eşleştirme modeli, Onur Mahmut Pişirir'in çalışmasında önerilen operasyonel süreç entegrasyonu modelinin interaktif bir yazılım uygulamasıdır.",
            en: "The 8-stage MLOps and ISO/IEC 42001 alignment model built into this guide acts as the interactive software deployment of the integration model proposed in Pişirir (2026)."
          }[language]}
        </p>
      </section>

      {/* Normatif Referanslar */}
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        <div className="glass-card">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <Book size={20} style={{ color: "#2563EB" }} />
            <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>ISO/IEC 42001:2023</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "15px" }}>
            {{
              tr: "Information technology — Artificial intelligence — Management system standardı. Yapay zekâ yönetim sistemlerinin kurulması için dünyadaki ilk sertifikalandırılabilir standarttır.",
              en: "Information technology — Artificial intelligence — Management system standard. World's first certifiable standard for configuring AI management systems responsibly."
            }[language]}
          </p>
          <a href="https://www.iso.org/standard/81230.html" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Globe size={14} /> {{ tr: "ISO Sayfası →", en: "ISO Website →" }[language]}
          </a>
        </div>

        <div className="glass-card">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <Book size={20} style={{ color: "#16A34A" }} />
            <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>ISO/IEC 22989:2022</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "15px" }}>
            {{
              tr: "Information technology — Artificial intelligence — Concepts and terminology standardı. Rehberdeki yapay zekâ terimleri ve temel kavramlar bu kaynağa dayanmaktadır.",
              en: "Information technology — Artificial intelligence — Concepts and terminology standard. Serves as the base glossary framework for terminology definitions."
            }[language]}
          </p>
          <a href="https://www.iso.org/standard/77609.html" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Globe size={14} /> {{ tr: "ISO Sayfası →", en: "ISO Website →" }[language]}
          </a>
        </div>

        <div className="glass-card">
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <Share2 size={20} style={{ color: "#EA580C" }} />
            <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>NIST AI RMF 1.0</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "15px" }}>
            {{
              tr: "National Institute of Standards and Technology Yapay Zekâ Risk Yönetim Çerçevesi. Risk yönetimi hedeflerinin belirlenmesinde kullanılan tamamlayıcı kılavuz.",
              en: "National Institute of Standards and Technology AI Risk Management Framework. A complementary resource referenced for engineering threat classification models."
            }[language]}
          </p>
          <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
            <Globe size={14} /> {{ tr: "NIST Sayfası →", en: "NIST Website →" }[language]}
          </a>
        </div>
      </section>

      {/* Bibliyografya */}
      <section className="glass-card">
        <h2 style={{ fontSize: "1.4rem", color: "var(--text-primary)", marginBottom: "20px" }}>
          {{ tr: "Uluslararası Standartlar Bibliyografyası", en: "International Standards Bibliography" }[language]}
        </h2>
        <ul style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-secondary)", fontSize: "0.9rem" }}>
          <li>
            <strong>ISO/IEC 27001:</strong> 
            {{
              tr: " Bilgi güvenliği yönetim sistemi standartları entegrasyonu (A.6.2.3, A.6.2.6 ile ilişkili).",
              en: " Information security management system standards integration (referenced by A.6.2.3, A.6.2.6)."
            }[language]}
          </li>
          <li>
            <strong>ISO/IEC 27701:</strong> 
            {{
              tr: " Kişisel veri ve mahremiyet yönetimi entegrasyonu (A.7.3 ile ilişkili).",
              en: " Personal data and privacy management guidelines mapping (referenced by A.7.3)."
            }[language]}
          </li>
          <li>
            <strong>ISO/IEC 25059:</strong> 
            {{
              tr: " Yazılım ve YZ sistemi kalite modeli standardı (A.6.2.4 ile ilişkili).",
              en: " Software engineering quality model standard for AI systems (referenced by A.6.2.4)."
            }[language]}
          </li>
          <li>
            <strong>ISO/IEC 23053:</strong> 
            {{
              tr: " Makine öğrenimi sistem mimarisi ve terim çerçevesi (A.6.1 ile ilişkili).",
              en: " Machine learning systems architectural frameworks and parameters definitions (referenced by A.6.1)."
            }[language]}
          </li>
        </ul>
      </section>
    </div>
  );
}
