import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

interface DictionaryDetails {
  title: string;
  description: string;
  examples?: string;
}

interface DictionaryEntry {
  numWords: number;
  tr: DictionaryDetails;
  en: DictionaryDetails;
}

const BILINGUAL_DICTIONARY: Record<string, DictionaryEntry> = {
  "pipeline": {
    numWords: 2,
    tr: {
      title: "Boru Hattı (Pipeline)",
      description: "Veri toplama, temizleme, model eğitimi, test ve dağıtım adımlarının otomatik olarak sırasıyla çalıştırılmasını sağlayan yazılım mimarisi.",
      examples: "Örnek: GitHub Actions, GitLab CI/CD, Apache Airflow, Kubeflow, MLflow Pipelines."
    },
    en: {
      title: "Pipeline",
      description: "Automated workflow of software steps that executes data preparation, training, testing, and deployment sequentially.",
      examples: "Examples: GitHub Actions, GitLab CI/CD, Apache Airflow, Kubeflow, MLflow."
    }
  },
  "provenance": {
    numWords: 2,
    tr: {
      title: "Veri Kökeni (Data Provenance)",
      description: "Verinin ilk kaynağından başlayarak geçirdiği tüm dönüşüm aşamalarının, kim tarafından ve ne zaman değiştirildiğinin geriye dönük izlenebilirliği.",
      examples: "Örnek: Veri soy ağacı (Data Lineage) şemaları, veri seti hash kayıtları."
    },
    en: {
      title: "Data Provenance",
      description: "The historical record of data origin, transformations, ownership, and changes throughout its life cycle.",
      examples: "Examples: Data lineage maps, dataset commit hashes, audit trails."
    }
  },
  "KVKK": {
    numWords: 3,
    tr: {
      title: "KVKK (Kişisel Verileri Koruma Kanunu)",
      description: "Türkiye Cumhuriyeti'nde kişisel verilerin korunmasını, gizliğini ve işleme kurallarını düzenleyen yasal mevzuat.",
      examples: "Örnek: Veri sahibinin açık rızasının alınması, veri maskeleme, aydınlatma metinleri."
    },
    en: {
      title: "KVKK",
      description: "Personal Data Protection Law of Turkey, regulating privacy, consent, and processing standards for personal data.",
      examples: "Examples: Explicit consent records, data anonymization, privacy policies."
    }
  },
  "GDPR": {
    numWords: 2,
    tr: {
      title: "GDPR (Genel Veri Koruma Tüzüğü)",
      description: "Avrupa Birliği genelinde kişisel verilerin korunmasını ve bireylerin gizlilik haklarını güvenceye alan uluslararası regülasyon.",
      examples: "Örnek: Unutulma hakkı, rıza yönetimi, veri taşınabilirliği."
    },
    en: {
      title: "GDPR",
      description: "General Data Protection Regulation, the comprehensive privacy framework protecting data subjects in the European Union.",
      examples: "Examples: Right to be forgotten, cookie consent banners, data protection officers (DPO)."
    }
  },
  "imputation": {
    numWords: 2,
    tr: {
      title: "Eksik Veri Doldurma (Imputation)",
      description: "Veri setindeki eksik veya kayıp değerlerin, istatistiksel veya makine öğrenimi modelleriyle tahmin edilerek doldurulması süreci.",
      examples: "Örnek: Ortalama/Medyan doldurma, K-En Yakın Komşu (KNN) imputation, MICE algoritmaları."
    },
    en: {
      title: "Imputation",
      description: "The statistical process of replacing missing or null data values with estimated values to preserve dataset integrity.",
      examples: "Examples: Mean/Median replacement, K-Nearest Neighbors (KNN) imputation, multiple imputation."
    }
  },
  "extraction": {
    numWords: 2,
    tr: {
      title: "Model Çalınması (Model Extraction)",
      description: "Saldırganın, bir yapay zekâ modeline çok sayıda sorgu göndererek modelin ağırlıklarını veya davranışını taklit eden kopya bir model üretme saldırısı.",
      examples: "Örnek: Black-box sorgulama yoluyla karar sınırlarının kopyalanması."
    },
    en: {
      title: "Model Extraction",
      description: "A cyber attack where an adversary queries an AI system repeatedly to copy its internal weights, decision boundaries, or functionality.",
      examples: "Examples: Reverse-engineering model outputs via API queries to train a clone model."
    }
  },
  "poisoning": {
    numWords: 2,
    tr: {
      title: "Veri Zehirlenmesi (Data Poisoning)",
      description: "Eğitim veri setine kötü niyetli veya manipüle edilmiş veriler sızdırılarak modelin belirli senaryolarda yanlış veya yanlı tahmin yapmasının sağlanması saldırısı.",
      examples: "Örnek: Spam filtrelerine meşru maillerin spam olarak etiketlenip beslenmesi."
    },
    en: {
      title: "Data Poisoning",
      description: "A security attack where malicious or distorted samples are injected into the training data to compromise model integrity or introduce backdoors.",
      examples: "Examples: Label manipulation, inserting adversarial triggers into training images."
    }
  },
  "drift": {
    numWords: 1,
    tr: {
      title: "Model/Veri Sapması (Drift)",
      description: "Zaman içerisinde canlı ortamdaki verilerin istatistiksel özelliklerinin eğitim verilerinden farklılaşması sonucu model performansının düşmesi.",
      examples: "Örnek: Covariate shift, prior probability shift, concept drift."
    },
    en: {
      title: "Model Drift",
      description: "The decay of predictive performance over time due to statistical changes in real-world input data or shifting target concepts.",
      examples: "Examples: Covariate shift, prior probability shift, concept drift."
    }
  },
  "data drift": {
    numWords: 2,
    tr: {
      title: "Veri Sapması (Data Drift)",
      description: "Modelin girdi özelliklerinin (features) zaman içindeki istatistiksel dağılım değişimi. Girdiler değişir fakat aralarındaki ilişki aynı kalabilir.",
      examples: "Örnek: Yeni bir kullanıcı kitlesinin uygulamayı kullanmaya başlamasıyla demografik verilerin değişmesi."
    },
    en: {
      title: "Data Drift",
      description: "The statistical shift in the distribution of input features over time, while the relationship with targets may remain similar.",
      examples: "Examples: A sudden shift in user demographics or device models sending API requests."
    }
  },
  "concept drift": {
    numWords: 2,
    tr: {
      title: "Kavram Sapması (Concept Drift)",
      description: "Girdiler aynı kalsa bile, girdiler ile hedef değişken (etiket) arasındaki ilişkinin zamanla değişmesi.",
      examples: "Örnek: Enflasyon veya kriz durumlarında aynı gelir düzeyindeki insanların harcama alışkanlıklarının değişmesi."
    },
    en: {
      title: "Concept Drift",
      description: "A change in the statistical properties of the target variable and its relationship with the input features over time.",
      examples: "Examples: Shifting macroeconomic conditions changing consumer spending behavior for the same income level."
    }
  },
  "bias": {
    numWords: 1,
    tr: {
      title: "Sapma ve Yanlılık (Bias)",
      description: "Modelin tahminlerinde belirli bir demografik gruba, özelliğe veya sınıfa karşı adil olmayan, yanlı kararlar vermesi eğilimi.",
      examples: "Örnek: Kredi onay modelinin cinsiyet veya yaş grupları arasında farklı hata oranları sergilemesi."
    },
    en: {
      title: "Algorithmic Bias",
      description: "Systematic and unfair prejudice in model predictions that privileges certain groups over others based on protected attributes.",
      examples: "Examples: Credit scoring models showing higher rejection rates for minority demographics with similar creditworthiness."
    }
  },
  "noisy": {
    numWords: 1,
    tr: {
      title: "Gürültülü Veri (Noisy Data)",
      description: "Veri setinde yer alan, ölçüm hatalarından, sensör bozukluklarından veya insan hatalarından kaynaklanan bozuk, anlamsız veya hatalı sinyaller.",
      examples: "Örnek: Eksik pikselli resimler, hatalı girilmiş yaş değerleri (-5 gibi)."
    },
    en: {
      title: "Noisy Data",
      description: "Corrupted, distorted, or meaningless signals in data collections caused by sensor malfunctions, network issues, or human logging errors.",
      examples: "Examples: Outliers, random background sounds in audio files, negative age entries."
    }
  },
  "robustness": {
    numWords: 1,
    tr: {
      title: "Kararlılık (Robustness)",
      description: "Modelin beklenmeyen girdilere, gürültülü verilere veya siber saldırılara maruz kaldığında performansını ve güvenliğini koruyabilme yeteneği.",
      examples: "Örnek: Görüntülere gürültü (noise) eklense bile modelin doğru sınıflandırma yapabilmesi."
    },
    en: {
      title: "Robustness",
      description: "The ability of an AI system to maintain its performance, safety, and operational boundary limits under abnormal or adversarial inputs.",
      examples: "Examples: An image classifier successfully identifying objects even under heavy visual noise or rotation."
    }
  },
  "retraining": {
    numWords: 2,
    tr: {
      title: "Yeniden Eğitme (Retraining)",
      description: "Canlıdaki modelin güncel veriler veya yeni etiketlenmiş veri setleri kullanılarak tekrardan eğitilmesi ve güncellenmesi süreci.",
      examples: "Örnek: Her hafta sonu yeni gelen müşteri işlemleriyle dolandırıcılık tespit modelinin eğitilmesi."
    },
    en: {
      title: "Retraining",
      description: "The pipeline execution that updates model weights by training the architecture on newly collected, fresh operational datasets.",
      examples: "Examples: Triggering a weekly retraining script using the past week's transaction logs to update credit scoring."
    }
  },
  "corrective action": {
    numWords: 2,
    tr: {
      title: "Düzeltici Faaliyet (Corrective Action)",
      description: "YZ sisteminde veya süreçlerinde tespit edilen uygunsuzlukların ve hataların kök nedenlerini analiz ederek tekrarını önleyecek kalıcı çözümler getirme süreci.",
      examples: "Örnek: Bir model çökmesi sonrası altyapı limitlerinin artırılması ve log analizlerinin yapılması."
    },
    en: {
      title: "Corrective Action",
      description: "Actions taken to eliminate the root causes of identified nonconformities, operational failures, or bias alerts to prevent recurrence.",
      examples: "Examples: Updating training pipelines or adjusting hardware bounds in response to an automated system outage ticket."
    }
  },
  "regression tests": {
    numWords: 4,
    tr: {
      title: "Regresyon (Gerileme) Testleri",
      description: "Yeni eğitilen veya güncellenen bir modelin, eski kararlı sürüme kıyasla temel işlevlerde gerileme (regression) yaşamadığını kanıtlayan test suite'leri.",
      examples: "Örnek: Yeni modelin, eski modelin %100 doğru bildiği kritik test örneklerini bozmadığının denetlenmesi."
    },
    en: {
      title: "Regression Testing",
      description: "Testing suites designed to verify that updates or newly retrained model versions do not degrade or regress in core capabilities compared to the current champion model.",
      examples: "Examples: Running a benchmark set of historical golden inputs to check if accuracy drops in newly trained models."
    }
  },
  "DÖF": {
    numWords: 5,
    tr: {
      title: "DÖF (Düzeltici ve Önleyici Faaliyetler)",
      description: "ISO 42001 kapsamında tespit edilen her türlü hata, sapma veya standart dışı durum için kurulan yönetim ve teknik iyileştirme mekanizmaları.",
      examples: "Örnek: Kök neden analiz formu (5 Neden Analizi), süreç iyileştirme biletleri."
    },
    en: {
      title: "CAPA (Corrective and Preventive Action)",
      description: "Corrective and Preventive Actions, a key process under ISO 42001/9001 to resolve existing issues and implement changes preventing future risks.",
      examples: "Examples: 5-Whys root cause analysis templates, change management tickets."
    }
  },
  "CAPA": {
    numWords: 5,
    tr: {
      title: "CAPA (Düzeltici ve Önleyici Faaliyetler)",
      description: "ISO 42001 kapsamında tespit edilen her türlü hata, sapma veya standart dışı durum için kurulan yönetim ve teknik iyileştirme mekanizmaları.",
      examples: "Örnek: Kök neden analiz formu (5 Neden Analizi), süreç iyileştirme biletleri."
    },
    en: {
      title: "CAPA (Corrective and Preventive Action)",
      description: "Corrective and Preventive Actions, a key process under ISO 42001/9001 to resolve existing issues and implement changes preventing future risks.",
      examples: "Examples: 5-Whys root cause analysis templates, change management tickets."
    }
  },
  "AIMS-EIA": {
    numWords: 2,
    tr: {
      title: "YZ Sistem Etki Analizi (AIMS-EIA)",
      description: "ISO/IEC 42001 doğrultusunda, YZ sisteminin bireylerin hak ve özgürlükleri, adillik, mahremiyet ve toplum üzerindeki potansiyel etkilerini değerlendiren etki raporu.",
      examples: "Örnek: Yapay Zekâ Etki Değerlendirme Formu (Artificial Intelligence Impact Assessment)."
    },
    en: {
      title: "AI System Impact Assessment (AIMS-EIA)",
      description: "Process of evaluating the potential impact of an AI system on individuals, demographics, and society, particularly regarding safety, bias, and privacy.",
      examples: "Examples: Drafting an EU AI Act conformity impact assessment before deploying high-risk models."
    }
  },
  "mitigation": {
    numWords: 1,
    tr: {
      title: "Hafifletme (Mitigation)",
      description: "Belirlenen risklerin etki veya gerçekleşme olasılığını teknik, yönetsel veya operasyonel önlemlerle kabul edilebilir seviyelere düşürme faaliyeti.",
      examples: "Örnek: Veri sızıntısı riskine karşı şifreleme eklenmesi, model sapmasına karşı insan gözetimi eklenmesi."
    },
    en: {
      title: "Risk Mitigation",
      description: "The implementation of controls and safeguards to minimize the likelihood or severity of potential negative impacts or risks.",
      examples: "Examples: Adding human-in-the-loop validation to reduce the impact of potential automated decision errors."
    }
  },
  "SCA": {
    numWords: 2,
    tr: {
      title: "Yazılım Bileşen Analizi (SCA)",
      description: "Uygulamada kullanılan üçüncü parti kütüphanelerin ve açık kaynak paketlerin güvenlik açıklarına ve lisans uyumluluklarına karşı otomatik taranması işlemi.",
      examples: "Örnek: Snyk, OWASP Dependency-Check veya GitHub Dependabot taramaları."
    },
    en: {
      title: "Software Composition Analysis (SCA)",
      description: "Automated security tooling that scans open-source libraries and package dependencies for known vulnerabilities and license compliance risks.",
      examples: "Examples: Integrating Snyk, Dependabot, or SonarQube in the CI/CD pipeline."
    }
  },
  "Verification and Validation - TEVV": {
    numWords: 3,
    tr: {
      title: "Doğrulama ve Geçerleme (TEVV)",
      description: "YZ sisteminin belirlenen standartlara uygunluğunun (Verification) ve hedeflenen gerçek dünya amacına hizmet ettiğinin (Validation) kanıtlanması süreci.",
      examples: "Örnek: Birim testleri (Verification) ve kullanıcı kabul testleri (Validation)."
    },
    en: {
      title: "Verification and Validation (V&V)",
      description: "Test evaluation processes proving the AI system meets specs (Verification) and successfully achieves real-world goals (Validation).",
      examples: "Examples: Running unit/integration code tests (Verification) and field tests with end-users (Validation)."
    }
  },
  "Data Lineage": {
    numWords: 3,
    tr: {
      title: "Veri Soy Ağacı (Data Lineage)",
      description: "Verinin kaynaktan hedef sisteme kadar olan tüm yolculuğunun, geçirdiği dönüşümlerin ve diğer veri setleriyle olan ilişkilerinin haritalandırılması.",
      examples: "Örnek: dbt soy ağacı şeması, Apache Atlas veri katalogları."
    },
    en: {
      title: "Data Lineage",
      description: "The visual mapping of data flow from origin through preprocessing pipelines to final consumption, describing how columns or tables change.",
      examples: "Examples: dbt lineage graphs, metadata maps in Apache Atlas."
    }
  },
  "DVC": {
    numWords: 1,
    tr: {
      title: "DVC (Data Version Control)",
      description: "Büyük veri setlerini, makine öğrenimi modellerini ve pipeline kodlarını Git benzeri bir yapıyla versiyonlayan açık kaynaklı MLOps aracı.",
      examples: "Örnek: Veri dosyalarının hash kodlarını Git'te, orijinal veriyi S3 veya GCS'de depolama."
    },
    en: {
      title: "Data Version Control (DVC)",
      description: "An open-source version control tool designed for machine learning datasets, model artifacts, and pipeline tracking using Git repository metadata.",
      examples: "Examples: Tracking dataset references via small `.dvc` files in Git, while storage is offloaded to S3."
    }
  },
  "release criteria": {
    numWords: 2,
    tr: {
      title: "Sürüm Kriterleri (Release Criteria)",
      description: "Modelin test ortamından çıkıp canlı üretim ortamına geçebilmesi için sağlaması gereken teknik, güvenlik ve uyumluluk eşik değerleri.",
      examples: "Örnek: Test seti doğruluk oranının en az %90 olması, model zafiyet taramasından geçilmesi."
    },
    en: {
      title: "Release Criteria",
      description: "The quantitative gate requirements that a candidate model must satisfy before receiving deployment approval.",
      examples: "Examples: Model validation accuracy > 90%, zero critical security bugs, and full bias audit sign-off."
    }
  },
  "Model Registry": {
    numWords: 3,
    tr: {
      title: "Model Kayıt Merkezi (Model Registry)",
      description: "Makine öğrenimi modellerinin tüm sürümlerini, meta verilerini, performans metriklerini ve canlıya geçiş durumlarını saklayan merkezi depo.",
      examples: "Örnek: MLflow Model Registry, Hugging Face Hub (Private), SageMaker Model Registry."
    },
    en: {
      title: "Model Registry",
      description: "A centralized model storage repository managing version tracking, lifecycle transitions, code dependencies, and performance telemetry.",
      examples: "Examples: MLflow Model Registry, Weights & Biases Artifacts, AWS SageMaker Model Registry."
    }
  },
  "human-in-the-loop": {
    numWords: 2,
    tr: {
      title: "İnsan Gözetimi (Human-in-the-Loop)",
      description: "YZ sisteminin karar alma veya eğitim aşamasında insanın denetleyici veya onaylayıcı olarak sürece dâhil edilmesi.",
      examples: "Örnek: Kredi onaylarında yapay zekâ skoru sınırda olan müşterilerin son onayının bir bankacı tarafından verilmesi."
    },
    en: {
      title: "Human-in-the-Loop (HITL)",
      description: "An architectural model incorporating human review, override controls, or verification steps in the AI decision cycle.",
      examples: "Examples: Flagged medical classification predictions held for final sign-off by a radiologist."
    }
  },
  "System Card": {
    numWords: 2,
    tr: {
      title: "Sistem Kartı (System Card)",
      description: "Yapay zekâ sisteminin genel amacını, mimarisini, veri kullanımını, sınırlarını ve alınan güvenlik önlemlerini açıklayan şeffaflık dokümanı.",
      examples: "Örnek: Model Cards, OpenAI GPT-4 System Card."
    },
    en: {
      title: "System Card",
      description: "A public-facing transparency report describing an AI system's intended use, architecture, training details, safety tests, and limitations.",
      examples: "Examples: Model Cards for Model Reporting, OpenAI GPT-4 System Card."
    }
  },
  "EIA": {
    numWords: 2,
    tr: {
      title: "YZ Sistem Etki Analizi (AIMS-EIA)",
      description: "ISO/IEC 42001 doğrultusunda, YZ sisteminin bireylerin hak ve özgürlükleri, adillik, mahremiyet ve toplum üzerindeki potansiyel etkilerini değerlendiren etki raporu.",
      examples: "Örnek: Yapay Zekâ Etki Değerlendirme Formu (Artificial Intelligence Impact Assessment)."
    },
    en: {
      title: "AI System Impact Assessment (AIMS-EIA)",
      description: "Process of evaluating the potential impact of an AI system on individuals, demographics, and society, particularly regarding safety, bias, and privacy.",
      examples: "Examples: Drafting an EU AI Act conformity impact assessment before deploying high-risk models."
    }
  },
  "copyright": {
    numWords: 2,
    tr: {
      title: "Telif Hakkı (Copyright)",
      description: "Bir eserin üreticisine yasalarla tanınan, eserin kopyalanması, dağıtılması ve işlenmesi haklarını kısıtlayan yasal hak.",
      examples: "Örnek: Açık kaynak lisansları (MIT, Apache 2.0), tescilli yazılım lisansları."
    },
    en: {
      title: "Copyright",
      description: "A legal right that grants the creator of an original work exclusive rights to its use and distribution.",
      examples: "Examples: Open-source licenses (MIT, Apache 2.0), proprietary EULAs."
    }
  },
  "telif/KVKK": {
    numWords: 3,
    tr: {
      title: "Telif ve Kişisel Veri Uyumluluğu",
      description: "Fikri mülkiyet hakları (Telif) ve Kişisel Verilerin Korunması Kanunu (KVKK) gerekliliklerine uygunluk.",
      examples: "Örnek: Açık kaynak veri seti lisans doğrulaması, aydınlatma ve açık rıza onay süreçleri."
    },
    en: {
      title: "Copyright & PII Compliance",
      description: "Compliance processes with intellectual property (Copyright) and Personally Identifiable Information (PII) protection rules.",
      examples: "Examples: Open-source data license checks, user consent confirmation audits."
    }
  }
};

function isReference(content: string): boolean {
  if (/^[A-Z]\.\d+(\.\d+)*$/i.test(content)) return true;
  if (/^annex\s+[a-z]/i.test(content)) return true;
  if (/^clause\s+\d+/i.test(content)) return true;
  if (/^v\d+\.\d+/i.test(content)) return true;
  if (/^\d+%?$/i.test(content)) return true;
  return false;
}

interface HoverTermProps {
  term: string;
  entry: DictionaryDetails;
}

function HoverTerm({ term, entry }: HoverTermProps) {
  const [active, setActive] = useState(false);
  const termRef = useRef<HTMLSpanElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Safeguard viewport bounds
  useEffect(() => {
    if (active && popupRef.current && termRef.current) {
      const popup = popupRef.current;
      const rect = popup.getBoundingClientRect();
      
      // Shift left or right if overflowing screen sides
      let offset = 0;
      if (rect.left < 10) {
        offset = 10 - rect.left;
      } else if (rect.right > window.innerWidth - 10) {
        offset = window.innerWidth - 10 - rect.right;
      }
      
      if (offset !== 0) {
        popup.style.transform = `translateX(calc(-50% + ${offset}px)) translateY(-6px)`;
      } else {
        popup.style.transform = `translateX(-50%) translateY(-6px)`;
      }
    }
  }, [active]);

  return (
    <span
      ref={termRef}
      className="interactive-term"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{ display: "inline" }}
    >
      {term}
      {active && (
        <span
          ref={popupRef}
          className="interactive-term-popup"
          role="tooltip"
        >
          <div className="interactive-term-popup-title">{entry.title}</div>
          <div className="interactive-term-popup-desc">{entry.description}</div>
          {entry.examples && (
            <div className="interactive-term-popup-example">{entry.examples}</div>
          )}
        </span>
      )}
    </span>
  );
}

interface InteractiveTextProps {
  text: string | string[];
}

export function InteractiveText({ text }: InteractiveTextProps) {
  const { language } = useLanguage();

  if (Array.isArray(text)) {
    return (
      <>
        {text.map((item, idx) => (
          <span key={idx} style={{ display: "block" }}>
            <InteractiveText text={item} />
          </span>
        ))}
      </>
    );
  }

  if (typeof text !== "string") {
    return <>{text}</>;
  }

  const regex = /\(([^)]+)\)/g;
  let match;
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let keyIdx = 0;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    const fullMatch = match[0];
    const innerContent = match[1].trim();

    // Text between the end of the last match and the start of this match
    const midString = text.substring(lastIndex, matchIndex);

    // Look up dictionary
    const entry = BILINGUAL_DICTIONARY[innerContent];

    if (entry) {
      const numWords = entry.numWords || 1;
      const trimmedMid = midString.trimEnd();
      const trailingSpaces = midString.substring(trimmedMid.length);
      const words = trimmedMid.split(/\s+/);

      if (words.length >= numWords && trimmedMid.length > 0) {
        const termWords = words.slice(-numWords);
        const remainingWords = words.slice(0, -numWords);

        const term = termWords.join(" ");
        const remaining = remainingWords.join(" ") + (remainingWords.length > 0 ? " " : "");

        if (remaining) {
          nodes.push(remaining);
        }

        nodes.push(
          <HoverTerm
            key={keyIdx++}
            term={term}
            entry={entry[language]}
          />
        );
        nodes.push(trailingSpaces);
      } else {
        nodes.push(midString + fullMatch);
      }
    } else if (innerContent.startsWith("ör.") || innerContent.startsWith("e.g.")) {
      // Dynamic example mapping
      const isEn = innerContent.startsWith("e.g.");
      const examplesText = innerContent.substring(isEn ? 4 : 3).trim();
      const numWords = 1;

      const trimmedMid = midString.trimEnd();
      const trailingSpaces = midString.substring(trimmedMid.length);
      const words = trimmedMid.split(/\s+/);

      if (words.length >= numWords && trimmedMid.length > 0) {
        const termWords = words.slice(-numWords);
        const remainingWords = words.slice(0, -numWords);

        const term = termWords.join(" ");
        const remaining = remainingWords.join(" ") + (remainingWords.length > 0 ? " " : "");

        if (remaining) {
          nodes.push(remaining);
        }

        const dynamicEntry: DictionaryDetails = {
          title: isEn ? "Examples" : "Örnekler",
          description: isEn ? "Examples of this concept:" : "Bu kavrama yönelik örnekler:",
          examples: examplesText
        };

        nodes.push(
          <HoverTerm
            key={keyIdx++}
            term={term}
            entry={dynamicEntry}
          />
        );
        nodes.push(trailingSpaces);
      } else {
        nodes.push(midString + fullMatch);
      }
    } else if (isReference(innerContent)) {
      // Standard references like (A.7.2) remain unchanged in the sentence
      nodes.push(midString + fullMatch);
    } else {
      // Fallback: dynamic tooltip translation/meaning for other parenthesized terms
      const numWords = 1;
      const trimmedMid = midString.trimEnd();
      const trailingSpaces = midString.substring(trimmedMid.length);
      const words = trimmedMid.split(/\s+/);

      if (words.length >= numWords && trimmedMid.length > 0) {
        const termWords = words.slice(-numWords);
        const remainingWords = words.slice(0, -numWords);

        const term = termWords.join(" ");
        const remaining = remainingWords.join(" ") + (remainingWords.length > 0 ? " " : "");

        if (remaining) {
          nodes.push(remaining);
        }

        const dynamicEntry: DictionaryDetails = {
          title: language === "tr" ? "Terim Tanımı" : "Term Definition",
          description: language === "tr" 
            ? `İngilizce / Açıklama: ${innerContent}` 
            : `Meaning / Explanation: ${innerContent}`
        };

        nodes.push(
          <HoverTerm
            key={keyIdx++}
            term={term}
            entry={dynamicEntry}
          />
        );
        nodes.push(trailingSpaces);
      } else {
        nodes.push(midString + fullMatch);
      }
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    nodes.push(text.substring(lastIndex));
  }

  return <>{nodes.length > 0 ? nodes : text}</>;
}
