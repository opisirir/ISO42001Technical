import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useChecklist } from "../../hooks/useChecklist";
import { useLanguage } from "../../context/LanguageContext";
import {
  FileText,
  CheckSquare,
  Layers,
  GitFork,
  BookOpen,
  AlertTriangle,
  Award,
  BookMarked,
  Languages
} from "lucide-react";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const { getProgress } = useChecklist();
  const { language, setLanguage } = useLanguage();
  const progress = getProgress();

  const isLinkActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    {
      path: "/",
      label: { tr: "Ana Sayfa", en: "Home" }[language],
      icon: BookOpen
    },
    {
      path: "/model",
      label: { tr: "Model Aşamaları", en: "Model Stages" }[language],
      icon: Layers
    },
    {
      path: "/mapping",
      label: { tr: "ISO 42001 Matrisi", en: "ISO 42001 Matrix" }[language],
      icon: GitFork
    },
    {
      path: "/checklist",
      label: { tr: "Teknik Kontrol Listesi", en: "Technical Checklist" }[language],
      icon: CheckSquare
    },
    {
      path: "/evidence",
      label: { tr: "Kanıt Kataloğu", en: "Evidence Catalog" }[language],
      icon: FileText
    },
    {
      path: "/glossary",
      label: { tr: "Sözlük", en: "Glossary" }[language],
      icon: BookMarked
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Top Navbar */}
      <nav style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "rgba(255, 255, 255, 0.9)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
        padding: "12px 0"
      }} className="no-print">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "15px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-primary)" }}>
            <Award size={28} style={{ color: "#2563EB" }} />
            <div>
              <span style={{ fontWeight: 800, fontFamily: "var(--font-title)", fontSize: "1.1rem" }}>ISO/IEC 42001</span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)", display: "block", marginTop: "-3px" }}>
                {{ tr: "MLOps Teknik Entegrasyon Rehberi", en: "MLOps Technical Integration Guide" }[language]}
              </span>
            </div>
          </Link>

          <div style={{ display: "flex", gap: "15px", alignItems: "center", flexWrap: "wrap" }}>
            {/* Nav Menu */}
            <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
              {navLinks.map((link) => {
                const Icon = link.icon;
                const active = isLinkActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: active ? "#2563EB" : "var(--text-secondary)",
                      background: active ? "rgba(37, 99, 235, 0.08)" : "transparent",
                      border: active ? "1px solid rgba(37, 99, 235, 0.2)" : "1px solid transparent",
                      transition: "var(--transition-fast)"
                    }}
                  >
                    <Icon size={15} style={{ color: active ? "#2563EB" : "inherit" }} />
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Language Switcher */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "4px",
              background: "hsl(var(--bg-tertiary))",
              borderRadius: "8px",
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
              <Languages size={14} style={{ color: "var(--text-secondary)", marginLeft: "4px", marginRight: "2px" }} />
              <button
                onClick={() => setLanguage("tr")}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  background: language === "tr" ? "white" : "transparent",
                  color: language === "tr" ? "#2563EB" : "var(--text-secondary)",
                  boxShadow: language === "tr" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  transition: "var(--transition-fast)"
                }}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage("en")}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "4px 8px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                  background: language === "en" ? "white" : "transparent",
                  color: language === "en" ? "#2563EB" : "var(--text-secondary)",
                  boxShadow: language === "en" ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  transition: "var(--transition-fast)"
                }}
              >
                EN
              </button>
            </div>

            {/* Checklist Progress Indicator in Nav */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              paddingLeft: "15px",
              borderLeft: "1px solid rgba(0, 0, 0, 0.08)"
            }}>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", display: "block" }}>
                  {{ tr: "Genel İlerleme", en: "Overall Progress" }[language]}
                </span>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#16A34A" }}>%{progress.progressPercent}</span>
              </div>
              <div style={{
                width: "50px",
                height: "6px",
                background: "hsl(var(--bg-tertiary))",
                borderRadius: "3px",
                overflow: "hidden"
              }}>
                <div style={{
                  width: `${progress.progressPercent}%`,
                  height: "100%",
                  background: "#16A34A",
                  transition: "width 0.5s ease-out"
                }} />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: "40px 0" }}>
        <div className="container">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: "hsl(var(--bg-secondary))",
        borderTop: "1px solid rgba(0, 0, 0, 0.06)",
        padding: "40px 0 20px 0",
        marginTop: "60px",
        fontSize: "0.85rem",
        color: "var(--text-secondary)"
      }} className="no-print">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "40px", marginBottom: "40px" }}>
            <div>
              <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "15px" }}>
                {{ tr: "Akademik Referans", en: "Academic Reference" }[language]}
              </h4>
              <p style={{ lineHeight: 1.5, marginBottom: "10px" }}>
                {{
                  tr: "Bu çalışma, Dr. Onur Mahmut Pişirir tarafından hazırlanan \"ISO/IEC 42001:2023 Kapsamında Yapay Zekâ Yönetim Sistemleri: Teknik Süreçler ve Operasyonel Bir Model\" başlıklı bilimsel makaleyi temel almaktadır.",
                  en: "This work is based on the research paper \"Artificial Intelligence Management Systems Under ISO/IEC 42001:2023: Technical Processes and an Operational Model\" authored by Dr. Onur Mahmut Pişirir."
                }[language]}
              </p>
              <Link to="/methodology" style={{ fontWeight: 600, display: "inline-flex", alignItems: "center", gap: "4px" }}>
                {{ tr: "Metodoloji & Akademik Atıf →", en: "Methodology & Citation →" }[language]}
              </Link>
            </div>

            <div>
              <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "15px" }}>
                {{ tr: "Hızlı Bağlantılar", en: "Quick Links" }[language]}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li><Link to="/methodology" style={{ color: "var(--text-secondary)" }}>{{ tr: "Metodoloji & Tasarım Bilgisi", en: "Methodology & Design" }[language]}</Link></li>
                <li><Link to="/references" style={{ color: "var(--text-secondary)" }}>{{ tr: "Akademik ve Normatif Kaynaklar", en: "References & Standards" }[language]}</Link></li>
                <li><Link to="/limitations" style={{ color: "var(--text-secondary)" }}>{{ tr: "Sınırlılıklar & Yasal Sorumluluk Reddi", en: "Limitations & Disclaimer" }[language]}</Link></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: "1rem", color: "var(--text-primary)", marginBottom: "15px" }}>
                {{ tr: "Yasal Bildirim", en: "Legal Notice" }[language]}
              </h4>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", background: "rgba(245, 158, 11, 0.04)", border: "1px solid rgba(245, 158, 11, 0.12)", padding: "12px", borderRadius: "8px" }}>
                <AlertTriangle size={20} style={{ color: "#EA580C", flexShrink: 0, marginTop: "2px" }} />
                <p style={{ fontSize: "0.75rem", lineHeight: 1.4 }}>
                  {{
                    tr: "Bu rehber resmi bir ISO sertifikasyon aracı veya hukuki danışmanlık hizmeti değildir. Standarda uyum için resmi standart dokümanı esas alınmalıdır.",
                    en: "This guide is not an official ISO certification tool or legal counsel. The official ISO/IEC 42001 standard specification must be referenced for compliance audits."
                  }[language]}
                </p>
              </div>
            </div>
          </div>

          <div style={{
            borderTop: "1px solid rgba(0, 0, 0, 0.05)",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px"
          }}>
            <span>
              {{
                tr: "© 2026 ISO/IEC 42001 MLOps Teknik Entegrasyon Rehberi. Tüm Hakları Saklıdır.",
                en: "© 2026 ISO/IEC 42001 MLOps Technical Integration Guide. All Rights Reserved."
              }[language]}
            </span>
            <div style={{ display: "flex", gap: "15px" }}>
              <span className="badge badge-standard">{{ tr: "Sürüm 1.0.0", en: "Version 1.0.0" }[language]}</span>
              <span className="badge badge-recommendation">{{ tr: "Akademik Çalışma Modeli", en: "Academic Model" }[language]}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
