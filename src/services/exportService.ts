import type { ChecklistStore } from "../hooks/useChecklist";
import { modelData } from "../data/model";

export const exportService = {
  // Export to JSON file
  exportToJson(state: ChecklistStore) {
    const dataStr = JSON.stringify(state, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    
    const date = new Date().toISOString().split("T")[0];
    const link = document.createElement("a");
    link.href = url;
    link.download = `iso42001-mlops-checklist-${date}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  // Export to Markdown Report with multi-language formatting
  exportToMarkdown(state: ChecklistStore) {
    let lang = "tr";
    try {
      const saved = window.localStorage.getItem("iso42001-mlops-lang");
      if (saved === "en" || saved === "tr") lang = saved;
    } catch {}

    const isTr = lang === "tr";

    let md = isTr 
      ? `# ISO/IEC 42001 MLOps Teknik Rehber - İlerleme Raporu\n` 
      : `# ISO/IEC 42001 MLOps Technical Guide - Progress Report\n`;
      
    md += isTr 
      ? `Oluşturulma Tarihi: ${new Date().toLocaleDateString("tr-TR")}\n\n`
      : `Created Date: ${new Date().toLocaleDateString("en-US")}\n\n`;

    let totalItems = 0;
    let completedItems = 0;

    modelData.forEach((stage) => {
      md += `## ${stage.order}. ${stage.title[lang as "tr" | "en"]}\n\n`;
      
      stage.activities.forEach((act) => {
        md += `### ${act.title[lang as "tr" | "en"]}\n`;
        md += `*${isTr ? "Hedef" : "Objective"}: ${act.objective[lang as "tr" | "en"]}*\n\n`;
        
        act.checklist.forEach((item) => {
          totalItems++;
          const itemState = state[item.id] || { status: "not-started", notes: "" };
          let statusText = isTr ? "⬜ Başlanmadı" : "⬜ Not Started";
          if (itemState.status === "completed") {
            completedItems++;
            statusText = isTr ? "✅ Tamamlandı" : "✅ Completed";
          } else if (itemState.status === "in-progress") {
            statusText = isTr ? "🔄 Devam Ediyor" : "🔄 In Progress";
          } else if (itemState.status === "not-applicable") {
            statusText = isTr ? "➖ Uygulanamaz" : "➖ N/A";
          }

          const reqType = item.requirementType === "standard-related" 
            ? (isTr ? "Standart Zorunluluğu" : "Standard Requirement")
            : (isTr ? "Öneri Uygulama" : "Best Practice Recommendation");

          md += `* **[${itemState.status === "completed" ? "x" : " "}] ${item.title[lang as "tr" | "en"]}** - *${statusText}* (${reqType})\n`;
          md += `  * *${isTr ? "Açıklama" : "Description"}:* ${item.description[lang as "tr" | "en"]}\n`;
          md += `  * *${isTr ? "Sorumlu" : "Responsible"}:* ${item.responsibleRoles[lang as "tr" | "en"].join(", ")}\n`;
          md += `  * *${isTr ? "Kanıt" : "Evidence"}:* ${item.evidence[lang as "tr" | "en"].join(", ")}\n`;
          if (itemState.notes) {
            md += `  * *${isTr ? "Notlar" : "Notes"}:* ${itemState.notes}\n`;
          }
          md += `\n`;
        });
      });
      md += `---\n\n`;
    });

    const completionRate = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;
    
    const titlePrefix = isTr 
      ? `# ISO/IEC 42001 MLOps İlerleme Raporu (Tamamlanma Oranı: %${completionRate})\n\n`
      : `# ISO/IEC 42001 MLOps Progress Report (Completion Rate: %${completionRate})\n\n`;
      
    md = titlePrefix + md;

    const blob = new Blob([md], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const date = new Date().toISOString().split("T")[0];
    const link = document.createElement("a");
    link.href = url;
    link.download = `iso42001-mlops-report-${date}.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  // Read JSON file upload
  importFromJson(file: File): Promise<ChecklistStore> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const result = event.target?.result as string;
          const parsed = JSON.parse(result);
          resolve(parsed);
        } catch (e) {
          reject(new Error("Geçersiz JSON dosyası yapısı."));
        }
      };
      reader.onerror = () => reject(new Error("Dosya okuma hatası."));
      reader.readAsText(file);
    });
  }
};
