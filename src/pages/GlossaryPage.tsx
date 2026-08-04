import { useState } from "react";
import { glossaryData } from "../data/glossary";
import { useLanguage } from "../context/LanguageContext";
import { Search } from "lucide-react";

export function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { language, t } = useLanguage();

  const filteredTerms = glossaryData.filter(
    (item) =>
      t(item.term).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(item.definition).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.englishEquivalent && item.englishEquivalent.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className="fade-in">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "Terimler Sözlüğü", en: "Glossary of Terms" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
          {{
            tr: "ISO/IEC 42001 standardı ve MLOps mühendisliğinde kullanılan ortak kavramların tanımları.",
            en: "Definitions of key concepts used across the ISO/IEC 42001 standard and MLOps engineering processes."
          }[language]}
        </p>
      </div>

      {/* Search Input */}
      <div className="glass-card" style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <Search size={18} style={{ color: "var(--text-secondary)" }} />
        <input
          type="text"
          placeholder={{ tr: "Terim veya tanım ara...", en: "Search term or definition..." }[language]}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            color: "var(--text-primary)",
            fontSize: "0.95rem",
            outline: "none"
          }}
        />
      </div>

      {/* Glossary list */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "20px" }}>
        {filteredTerms.length > 0 ? (
          filteredTerms.map((item, idx) => (
            <div key={idx} className="glass-card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                  <h3 style={{ fontSize: "1.15rem", color: "var(--text-primary)", margin: 0 }}>{t(item.term)}</h3>
                  {item.isoReference && (
                    <span className="badge badge-standard" style={{ fontSize: "0.65rem", flexShrink: 0 }}>
                      {item.isoReference}
                    </span>
                  )}
                </div>
                {item.englishEquivalent && (
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block", marginBottom: "10px", fontStyle: "italic" }}>
                    Eng: {item.englishEquivalent}
                  </span>
                )}
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.5 }}>
                  {t(item.definition)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-card" style={{ gridColumn: "1 / -1", textAlign: "center", padding: "40px" }}>
            <p style={{ color: "var(--text-secondary)" }}>
              {{ tr: "Arama kriterlerine uygun terim bulunamadı.", en: "No matching glossary terms found." }[language]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
