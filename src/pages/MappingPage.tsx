import { useState } from "react";
import { isoClausesData } from "../data/mappings";
import { modelData } from "../data/model";
import { useLanguage } from "../context/LanguageContext";
import { ClauseModal } from "../components/mapping/ClauseModal";
import { Link } from "react-router-dom";
import { Search, Filter, GitBranch, ArrowRight, Eye } from "lucide-react";

export function MappingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [relationFilter, setRelationFilter] = useState("all");
  const [stageFilter, setStageFilter] = useState("all");
  const [selectedClauseId, setSelectedClauseId] = useState<string | null>(null);

  const { language, t } = useLanguage();

  const getRelationshipBadge = (type: string) => {
    switch (type) {
      case "direct":
        return <span className="badge badge-standard">{{ tr: "Doğrudan", en: "Direct" }[language]}</span>;
      case "supporting":
        return <span className="badge badge-recommendation">{{ tr: "Destekleyici", en: "Supporting" }[language]}</span>;
      default:
        return <span className="badge badge-not-started">{{ tr: "Dolaylı", en: "Indirect" }[language]}</span>;
    }
  };

  // Convert map record to array for filtering and sorting
  const clausesList = Object.values(isoClausesData);

  // Apply filters
  const filteredClauses = clausesList.filter((c) => {
    const matchesSearch = c.clause.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          t(c.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t(c.description).toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter relation
    let matchesRelation = true;
    if (relationFilter !== "all") {
      matchesRelation = c.relatedActivities.some(r => r.relationType === relationFilter);
    }

    // Filter stage
    let matchesStage = true;
    if (stageFilter !== "all") {
      matchesStage = c.relatedActivities.some(r => {
        // Find which stage this activity belongs to
        const activitySlug = r.activitySlug;
        const stageMatch = modelData.find(s => s.activities.some(a => a.slug === activitySlug));
        return stageMatch ? stageMatch.slug === stageFilter : false;
      });
    }

    return matchesSearch && matchesRelation && matchesStage;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }} className="fade-in">
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: "10px" }}>
          {{ tr: "ISO/IEC 42001 Eşleştirme Matrisi", en: "ISO/IEC 42001 Mapping Matrix" }[language]}
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "800px", margin: "0 auto" }}>
          {{
            tr: "MLOps süreçleri ile standardın AIMS gereksinimleri arasındaki yapısal ilişkilerin, gerekçelerin ve izlenebilirlik derecelerinin tam dökümü.",
            en: "A comprehensive mapping matrix showing structural correlations, justifications, and traceability ratings between MLOps and AIMS requirements."
          }[language]}
        </p>
      </div>

      {/* Filter bar layout */}
      <div className="glass-card" style={{ display: "flex", flexWrap: "wrap", gap: "20px", alignItems: "center" }}>
        {/* Search input */}
        <div style={{ flex: "2 1 300px", position: "relative" }}>
          <Search size={18} style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", color: "var(--text-secondary)" }} />
          <input
            type="text"
            placeholder={{ tr: "Standart maddesi, başlık veya açıklama ara...", en: "Search clauses, titles, or descriptions..." }[language]}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 12px 12px 45px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.9rem",
              outline: "none"
            }}
          />
        </div>

        {/* Filter relation */}
        <div style={{ flex: "1 1 180px", display: "flex", alignItems: "center", gap: "10px" }}>
          <Filter size={16} style={{ color: "var(--text-secondary)" }} />
          <select
            value={relationFilter}
            onChange={(e) => setRelationFilter(e.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.9rem",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="all">{{ tr: "Tüm İlişkiler", en: "All Relations" }[language]}</option>
            <option value="direct">{{ tr: "Doğrudan İlişki", en: "Direct Relation" }[language]}</option>
            <option value="supporting">{{ tr: "Destekleyici İlişki", en: "Supporting Relation" }[language]}</option>
          </select>
        </div>

        {/* Filter stage */}
        <div style={{ flex: "1 1 180px", display: "flex", alignItems: "center", gap: "10px" }}>
          <GitBranch size={16} style={{ color: "var(--text-secondary)" }} />
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            style={{
              flex: 1,
              padding: "12px",
              background: "hsl(var(--bg-primary))",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "8px",
              color: "hsl(var(--text-primary))",
              fontSize: "0.9rem",
              outline: "none",
              cursor: "pointer"
            }}
          >
            <option value="all">{{ tr: "Tüm Aşamalar", en: "All Stages" }[language]}</option>
            {modelData.map((stage) => (
              <option key={stage.id} value={stage.slug}>
                {{ tr: `Aşama ${stage.order}: ${t(stage.title)}`, en: `Stage ${stage.order}: ${t(stage.title)}` }[language]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid of Matris cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {filteredClauses.length > 0 ? (
          filteredClauses.map((c) => (
            <div key={c.clause} className="glass-card" style={{ padding: "30px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "15px", marginBottom: "15px" }}>
                <div>
                  <button 
                    onClick={() => setSelectedClauseId(c.clause)}
                    style={{ 
                      background: "transparent", 
                      border: "none", 
                      cursor: "pointer", 
                      color: "var(--accent-blue)",
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      padding: 0,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <Eye size={18} />
                    {c.clause}: {t(c.title)}
                  </button>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", marginTop: "5px" }}>
                    {{ tr: "Kaynak Standart Sayfası:", en: "Standard Reference Page:" }[language]} <strong>Sayfa {c.page}</strong>
                  </p>
                </div>
                <div>
                  <button 
                    className="btn btn-secondary" 
                    onClick={() => setSelectedClauseId(c.clause)}
                    style={{ padding: "6px 12px", fontSize: "0.8rem" }}
                  >
                    {{ tr: "Hüküm Özetini Gör", en: "See Summary" }[language]}
                  </button>
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", lineHeight: 1.5, marginBottom: "20px" }}>
                {t(c.summary)}
              </p>

              {/* Mappings sub-grid */}
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "15px" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "var(--text-secondary)", display: "block", marginBottom: "10px", textTransform: "uppercase" }}>
                  {{ tr: "Eşleşen MLOps Faaliyetleri", en: "Corresponding MLOps Activities" }[language]}
                </span>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  {c.relatedActivities.map((rel, idx) => {
                    // Find stage
                    const stageMatch = modelData.find(s => s.activities.some(a => a.slug === rel.activitySlug));
                    const activityMatch = stageMatch?.activities.find(a => a.slug === rel.activitySlug);
                    
                    if (!stageMatch || !activityMatch) return null;

                    return (
                      <div 
                        key={idx} 
                        style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center", 
                          padding: "10px 16px", 
                          background: "hsl(var(--bg-tertiary))", 
                          borderRadius: "8px",
                          flexWrap: "wrap",
                          gap: "10px"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          {getRelationshipBadge(rel.relationType)}
                          <Link 
                            to={`/stages/${stageMatch.slug}/${activityMatch.slug}`}
                            style={{ fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}
                          >
                            {{ tr: `Aşama ${stageMatch.order}: ${t(activityMatch.title)}`, en: `Stage ${stageMatch.order}: ${t(activityMatch.title)}` }[language]}
                          </Link>
                        </div>
                        <Link to={`/stages/${stageMatch.slug}/${activityMatch.slug}`} className="btn btn-secondary" style={{ padding: "4px 10px", fontSize: "0.75rem", gap: "3px" }}>
                          {{ tr: "Faaliyete Git", en: "Go to Activity" }[language]} <ArrowRight size={12} />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="glass-card" style={{ textAlign: "center", padding: "40px" }}>
            <p style={{ color: "var(--text-secondary)" }}>
              {{ tr: "Arama kriterlerine uygun ISO/IEC 42001 eşleşmesi bulunamadı.", en: "No matching ISO/IEC 42001 correlations found." }[language]}
            </p>
          </div>
        )}
      </div>

      {/* ClauseModal */}
      {selectedClauseId && (
        <ClauseModal 
          clauseId={selectedClauseId} 
          onClose={() => setSelectedClauseId(null)} 
        />
      )}
    </div>
  );
}
