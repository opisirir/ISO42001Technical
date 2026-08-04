import type { GlossaryTerm } from "../types/domain";

export const glossaryData: GlossaryTerm[] = [
  {
    term: {
      tr: "AIMS (Yapay Zekâ Yönetim Sistemi)",
      en: "AIMS (Artificial Intelligence Management System)"
    },
    englishEquivalent: "Artificial Intelligence Management System",
    definition: {
      tr: "Bir kuruluşun yapay zekâ ile ilgili politikalarını, hedeflerini ve süreçlerini belirlemek, yönetmek ve sürekli iyileştirmek için kullandığı birbiriyle ilişkili veya etkileşimli unsurlar kümesi.",
      en: "A set of interrelated or interacting elements of an organization to establish policies, objectives, and processes to responsibly manage AI risks and opportunities and continually improve."
    },
    isoReference: "Clause 3.4"
  },
  {
    term: {
      tr: "Yapay Zekâ Sistemi (YZ Sistemi)",
      en: "Artificial Intelligence System (AI System)"
    },
    englishEquivalent: "AI System",
    definition: {
      tr: "İnsan tarafından tanımlanmış bir dizi hedef için, veri ve girdileri işleyerek tahminler, öneriler veya kararlar gibi fiziksel veya sanal ortamları etkileyebilecek çıktılar üreten mühendislik ürünü sistem.",
      en: "An engineered system that, for a set of human-defined objectives, processes data and inputs to generate outputs such as predictions, recommendations, or decisions that can influence physical or virtual environments."
    },
    isoReference: "ISO/IEC 22989:2022"
  },
  {
    term: {
      tr: "İlgili Taraf",
      en: "Interested Party"
    },
    englishEquivalent: "Interested Party",
    definition: {
      tr: "Bir karardan veya faaliyetten etkilenebilecek, bunları etkileyebilecek veya etkilendiğini düşünebilecek kişi ya da kuruluş (ör. kullanıcılar, müşteriler, düzenleyiciler, veri sahipleri).",
      en: "Person or organization that can affect, be affected by, or perceive itself to be affected by a decision or activity (e.g., users, customers, regulators, data subjects)."
    },
    isoReference: "Clause 3.2"
  },
  {
    term: {
      tr: "Risk",
      en: "Risk"
    },
    englishEquivalent: "Risk",
    definition: {
      tr: "Belirsizliğin hedefler üzerindeki etkisi. Genellikle olası olaylar, sonuçlar ve bunların gerçekleşme olasılıklarının kombinasyonuyla ifade edilir.",
      en: "Effect of uncertainty on objectives. It is often characterized by reference to potential events, consequences, and their likelihood."
    },
    isoReference: "Clause 3.7"
  },
  {
    term: {
      tr: "Kontrol",
      en: "Control"
    },
    englishEquivalent: "Control",
    definition: {
      tr: "Riski sürdüren ve/veya değiştiren önlem (ör. süreç, politika, cihaz, uygulama veya diğer eylemler).",
      en: "Measure that maintains and/or modifies risk (e.g., any process, policy, device, practice, or other actions)."
    },
    isoReference: "Clause 3.21"
  },
  {
    term: {
      tr: "YZ Sistem Etki Değerlendirmesi",
      en: "AI System Impact Assessment"
    },
    englishEquivalent: "AI System Impact Assessment",
    definition: {
      tr: "Yapay zekâ sistemi geliştiren, sağlayan veya kullanan bir kuruluş tarafından, sistemin bireyler, gruplar ve toplum üzerindeki etkilerinin belirlendiği, değerlendirildiği ve ele alındığı resmi, belgelenmiş süreç.",
      en: "Formal, documented process by which the impacts on individuals, groups, or societies are identified, evaluated, and addressed by an organization developing, providing, or using AI systems."
    },
    isoReference: "Clause 3.24"
  },
  {
    term: {
      tr: "Veri Kalitesi",
      en: "Data Quality"
    },
    englishEquivalent: "Data Quality",
    definition: {
      tr: "Verilerin, belirli bir bağlamdaki veri gereksinimlerini karşılama derecesi.",
      en: "Characteristic of data that the data meet the organization's data requirements for a specific context."
    },
    isoReference: "Clause 3.25"
  },
  {
    term: {
      tr: "Uygulanabilirlik Bildirgesi (SoA)",
      en: "Statement of Applicability (SoA)"
    },
    englishEquivalent: "Statement of Applicability",
    definition: {
      tr: "Kuruluşun yapay zekâ yönetim sistemi için gerekli gördüğü kontrolleri (Annex A referans kontrolleri dahil) ve bunların dahil edilme veya hariç tutulma gerekçelerini içeren resmi belge.",
      en: "Documentation of all necessary controls and justification for inclusion or exclusion of controls, reflecting the risk management measures."
    },
    isoReference: "Clause 3.26"
  },
  {
    term: {
      tr: "Veri Kökeni / Kaynağı",
      en: "Data Provenance"
    },
    englishEquivalent: "Data Provenance",
    definition: {
      tr: "Verilerin kaynağını, geçirdiği dönüşüm adımlarını, sahipliğini ve veri yaşam döngüsü boyunca üzerindeki denetim geçmişini gösteren kayıt zinciri.",
      en: "A record of data provenance including information about the creation, update, validation, sharing, and transformation of data over its life cycle."
    },
    isoReference: "ISO 8000-2"
  },
  {
    term: {
      tr: "Veri/Kavram Sapması",
      en: "Data/Concept Drift"
    },
    englishEquivalent: "Data/Concept Drift",
    definition: {
      tr: "Zaman içerisinde modelin eğitildiği eğitim verileri ile gerçek dünyadaki canlı veriler veya hedeflenen çıktı ilişkisi arasındaki sapma ve istatistiksel değişim.",
      en: "The change in data distributions (data drift) or semantic relationships between inputs and outputs (concept drift) over time in production compared to training."
    },
    isoReference: "ISO/IEC 23053"
  },
  {
    term: {
      tr: "Doğrulama ve Geçerleme (V&V)",
      en: "Verification and Validation (V&V)"
    },
    englishEquivalent: "Verification and Validation",
    definition: {
      tr: "Bir yapay zeka sisteminin belirtilen gereksinimleri karşılayıp karşılamadığını ve hedeflenen kullanım amacına uygun olup olmadığını teyit etmek için yapılan test ve analiz faaliyetleri.",
      en: "Activities verifying that the AI system meets specified requirements and validates that it achieves the intended real-world objectives."
    },
    isoReference: "A.6.2.4"
  },
  {
    term: {
      tr: "Sürekli İyileştirme",
      en: "Continual Improvement"
    },
    englishEquivalent: "Continual Improvement",
    definition: {
      tr: "Performansı artırmak amacıyla yürütülen mükerrer faaliyet. AIMS kapsamında PUKÖ (Planla-Uygula-Kontrol Et-Önlem Al) döngüsüyle yönetilir.",
      en: "Recurring activity to enhance overall performance of the management system and the AI systems, guided by the PDCA cycle."
    },
    isoReference: "Clause 3.12"
  }
];
