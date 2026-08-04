import type { ModelStage } from "../types/domain";

export const modelData: ModelStage[] = [
  {
    id: "stage-1",
    order: 1,
    slug: "data-collection-preparation",
    title: {
      tr: "Veri Toplama ve Hazırlık",
      en: "Data Collection and Preparation"
    },
    summary: {
      tr: "ISO/IEC 42001 A.7 veri kontrol grubu gerekliliklerine göre verinin yaşam döngüsü boyunca kalitesinin, kökeninin ve güvenliğinin teknik olarak yönetilmesi.",
      en: "Technical management of data quality, provenance, and security throughout the life cycle in compliance with ISO/IEC 42001 Annex A.7."
    },
    activities: [
      {
        id: "act-1",
        slug: "data-collection-cleaning-labeling",
        title: {
          tr: "Veri Toplama, Temizleme ve Etiketleme",
          en: "Data Collection, Cleaning, and Labeling"
        },
        objective: {
          tr: "Model eğitimi ve testleri için kullanılan veri setlerinin kalitesini, izlenebilirliğini ve yasal uyumluluğunu teknik olarak güvence altına almak.",
          en: "Ensuring the quality, traceability, and legal compliance of data sets used for model training and testing."
        },
        description: {
          tr: "Yapay zekâ modellerinin başarısı ve güvenilirliği doğrudan kullanılan veriye bağlıdır. Bu aşamada, veri kaynaklarının tespiti, veri temizliği, etiketleme standartlarının oluşturulması, veri kökeninin (provenance) kaydedilmesi ve veri hazırlama aşamaları yönetilir.",
          en: "The success of AI models depends on the data. This stage manages data source identification, cleaning, labeling standards, provenance tracking, and formatting."
        },
        actions: {
          tr: [
            "Veri kaynaklarının ve edinilme yöntemlerinin tanımlanması",
            "Kişisel veriler ve fikri mülkiyet haklarının doğrulanması",
            "Veri kalitesi kriterlerinin belirlenmesi",
            "Veri kökeninin ve yapılan her değişikliğin sürüm kontrolüyle kayıt altına alınması",
            "Veri hazırlama işlemlerinin belgelenmesi"
          ],
          en: [
            "Identify data sources and acquisition methods",
            "Verify PII consent and intellectual property (copyright) rights",
            "Define data quality criteria (accuracy, completeness, balance)",
            "Track data provenance and version control every change in lineage",
            "Document preprocessing steps (normalization, labeling, imputation)"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.7.2",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Geliştirme ve iyileştirme süreçlerinde veri yönetimi süreçlerinin tanımlanmasını ve uygulanmasını zorunlu kılar.",
              en: "Requires definition and implementation of data management processes during development and enhancement."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.2", page: 19 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.7.3",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Kullanılan verilerin edinilmesi ve seçilmesine ilişkin detayların belirlenmesini ve belgelenmesini gerektirir.",
              en: "Requires determining and documenting details about the acquisition and selection of data."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.3", page: 19 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.7.4",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Veri kalitesi gereksinimlerinin tanımlanmasını ve eğitim verilerinin bu kriterleri karşılamasını zorunlu kılar.",
              en: "Mandates defining data quality requirements and ensuring data meets them."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.4", page: 19 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.7.5",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Veri kökeninin veri ve YZ sistemi yaşam döngüsü boyunca kaydedilmesini şart koşar.",
              en: "Requires recording data provenance over the life cycles of data and the AI system."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.5", page: 19 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.7.6",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Veri hazırlama yöntemlerinin ve seçim kriterlerinin belgelenmesini ve uygulanmasını gerektirir.",
              en: "Requires documenting criteria for data preparation and preparation methods."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.6", page: 19 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-1-1",
            title: {
              tr: "Veri Kaynaklarının Belgelenmesi",
              en: "Data Source Documentation"
            },
            description: {
              tr: "Eğitim ve test süreçlerinde kullanılan tüm veri kaynaklarının kaynağı, türü ve elde edilme yöntemleri kayıt altına alınmalıdır.",
              en: "All data sources, types, and collection methods used in training and testing must be logged."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.7.3",
                relationship: "direct",
                rationale: { tr: "Veri edinim detaylarının belgelenmesi gereksinimi.", en: "Requirement to document data acquisition details." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.3", page: 19 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Veri Kaynağı Envanteri", "Veri Edinme Protokolü"],
              en: ["Data Source Inventory", "Data Acquisition Protocol"]
            },
            responsibleRoles: {
              tr: ["Veri Bilimci (Data Scientist)", "Veri Mühendisi (Data Engineer)"],
              en: ["Data Scientist", "Data Engineer"]
            },
            verificationMethod: {
              tr: "Veri envanteri dokümanının güncelliğinin ve tüm veri setlerini kapsadığının gözden geçirilmesi.",
              en: "Review the data inventory document for completeness and updates across all data sets."
            },
            status: "not-started"
          },
          {
            id: "chk-1-2",
            title: {
              tr: "Kişisel Veri ve Telif Hakları Kontrolü",
              en: "PII and Copyright Compliance Check"
            },
            description: {
              tr: "Kullanılan verilerin kişisel veri koruma (KVKK) kanunlarına uygunluğu ve telif hakkı ihlali barındırmadığı doğrulanmalıdır.",
              en: "Verifying that utilized data complies with privacy acts (GDPR) and contains no copyright infringements."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.7.3",
                relationship: "direct",
                rationale: { tr: "Veri haklarının doğrulanması.", en: "Verifying data rights." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.3", page: 37 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Veri Lisansı Uygunluk Raporu", "KVKK Analiz Tutanağı"],
              en: ["Data License Compliance Report", "GDPR Impact Record"]
            },
            responsibleRoles: {
              tr: ["Uyum Sorumlusu", "Veri Mühendisi"],
              en: ["Compliance Officer", "Data Engineer"]
            },
            verificationMethod: {
              tr: "Veri lisanslarının yasal ekiplerce onaylandığının doğrulanması.",
              en: "Confirming that data licenses are reviewed and approved by legal/compliance teams."
            },
            status: "not-started"
          },
          {
            id: "chk-1-3",
            title: {
              tr: "Veri Kalitesi Kriterlerinin Belirlenmesi",
              en: "Establishing Data Quality Criteria"
            },
            description: {
              tr: "Eğitim, doğrulama ve test verilerinin kalite metrikleri tanımlanmalı ve test edilmelidir.",
              en: "Define and test data quality metrics (null rates, bias balance, accuracy) for training/testing sets."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.7.4",
                relationship: "direct",
                rationale: { tr: "Veri kalitesi gereksinimlerinin tanımlanması ve izlenmesi.", en: "Defining and monitoring data quality requirements." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.4", page: 19 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Veri Kalite Raporu", "Veri Profilleme Logları"],
              en: ["Data Quality Report", "Data Profiling Logs"]
            },
            responsibleRoles: {
              tr: ["Veri Bilimci"],
              en: ["Data Scientist"]
            },
            verificationMethod: {
              tr: "Veri profilleme kodlarının çalıştırılması ve kalite eşik değerlerinin geçildiğinin doğrulanması.",
              en: "Run automated profiling pipelines and verify that thresholds are met."
            },
            status: "not-started"
          },
          {
            id: "chk-1-4",
            title: {
              tr: "Veri Kökeni (Provenance) Takibi",
              en: "Tracking Data Provenance"
            },
            description: {
              tr: "Verinin ilk kaynağından model girişine kadar geçirdiği tüm dönüşüm aşamaları ve kökeni izlenebilir şekilde loglanmalıdır.",
              en: "Log every transformation step from source to model input to guarantee lineage traceability."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.7.5",
                relationship: "direct",
                rationale: { tr: "Veri kökeninin kayıt altına alınması.", en: "Recording data provenance." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.5", page: 19 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Veri İzlenebilirlik Matrisi (Data Lineage)", "DVC Pipeline Tanımları"],
              en: ["Data Lineage Map", "DVC Pipeline Configurations"]
            },
            responsibleRoles: {
              tr: ["Veri Mühendisi", "MLOps Mühendisi"],
              en: ["Data Engineer", "MLOps Engineer"]
            },
            verificationMethod: {
              tr: "Veri pipeline'nının her aşamanın hash kodları ve sürüm etiketleri üzerinden doğrulanması.",
              en: "Verify commit hashes and dataset tags on every data pipeline step."
            },
            status: "not-started"
          },
          {
            id: "chk-1-5",
            title: {
              tr: "Veri Hazırlama Kriterlerinin Belgelenmesi",
              en: "Documenting Data Preparation Rules"
            },
            description: {
              tr: "Eksik verilerin doldurulması (imputation), normalizasyon, scaling ve etiketleme kuralları yazılı hale getirilmelidir.",
              en: "Write explicit rules for missing values imputation, scaling, normalization, and label guidelines."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.7.6",
                relationship: "direct",
                rationale: { tr: "Veri hazırlama seçim kriterlerinin belgelenmesi.", en: "Documenting data preparation selection criteria." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.7.6", page: 19 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Veri Hazırlama Kılavuzu", "Preprocessing Betikleri"],
              en: ["Data Preparation Guide", "Preprocessing Scripts"]
            },
            responsibleRoles: {
              tr: ["Veri Bilimci (Data Scientist)"],
              en: ["Data Scientist"]
            },
            verificationMethod: {
              tr: "Veri hazırlama betiklerinin kod incelemesinin yapılması.",
              en: "Conduct code reviews on preprocessing scripts to verify compliance with rules."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-1-1",
            title: {
              tr: "Veri Seti Dokümantasyonu",
              en: "Datasheet for Datasets"
            },
            description: {
              tr: "Veri setinin kapsamı, toplanma yöntemi, yasal durumu ve kalite özelliklerini açıklayan doküman.",
              en: "Document detailing the dataset scope, compilation context, license status, and metadata structure."
            },
            formatExamples: ["datasheet.md", "dataset_metadata.json"],
            required: true,
            verificationMethod: {
              tr: "Teknik lider gözden geçirmesi ve onay kaydı.",
              en: "Review and sign-off by the technical lead."
            }
          },
          {
            id: "ev-1-2",
            title: {
              tr: "Veri Kalitesi Raporu",
              en: "Data Quality Report"
            },
            description: {
              tr: "Veri setinde çalıştırılan profil testlerinin sonuçlarını ve istatistiksel dağılımları gösteren rapor.",
              en: "Report showing profiling metrics, null ratios, and statistical distributions."
            },
            formatExamples: ["quality_report.html", "data_drift_baseline.json"],
            required: true,
            verificationMethod: {
              tr: "Otomatik kalite boru hattı (pipeline) başarılı çalışma logu.",
              en: "Automated verification from pipeline run logs."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Tüm veri kaynakları yasal lisansları ve sahiplik bilgileriyle kayıt altına alınmıştır.",
            "Veri seti için minimum kalite eşikleri belirlenmiş ve kalite testleri başarıyla tamamlanmıştır.",
            "Dönüşüm adımlarının tamamı (data lineage) sürüm kontrollü kod veya araçlarla izlenebilir hale getirilmiştir.",
            "Kritik veri ihlalleri veya telif uyuşmazlıkları çözülmüş ya da kabul edilmiş risk olarak atanmıştır."
          ],
          en: [
            "All data sources are logged with copyright/license status and ownership details.",
            "Quality metrics baseline thresholds are set and tests have run successfully.",
            "Complete data lineage mapping is configured via versioned codebase/pipeline.",
            "Any critical license conflicts or violations are resolved or formally signed-off."
          ]
        },
        commonMistakes: {
          tr: [
            "Verinin yasal edinme izinleri (telif/KVKK) kontrol edilmeden doğrudan model eğitimine başlanması.",
            "Eksik veri doldurma veya veri temizleme adımlarının belgelenmemesi, dolayısıyla tekrarlanabilirliğin (reproducibility) kaybolması.",
            "Veri kalite testlerinin tek seferlik yapılıp, sonraki veri beslemelerinde otomatize edilmemesi."
          ],
          en: [
            "Starting training before validating legal permissions (PII, consent, copyrights).",
            "Omitting preprocessing/imputation logic documentation, breaking experiment reproducibility.",
            "Running quality checks manually and failing to automate them in pipeline schedules."
          ]
        },
        relatedActivities: ["model-training-hyperparameter-tuning", "technical-records-transparency"]
      }
    ]
  },
  {
    id: "stage-2",
    order: 2,
    slug: "model-development",
    title: {
      tr: "Model Geliştirme",
      en: "Model Development"
    },
    summary: {
      tr: "ISO/IEC 42001 A.6 standardı doğrultusunda, sorumlu yapay zekâ hedefleriyle uyumlu model seçimi, eğitimi ve hiperparametre optimizasyonu.",
      en: "Model selection, training, and hyperparameter tuning aligned with responsible AI targets under ISO/IEC 42001 Annex A.6."
    },
    activities: [
      {
        id: "act-2",
        slug: "model-training-hyperparameter-tuning",
        title: {
          tr: "Model Eğitimi ve Hiperparametre Optimizasyonu",
          en: "Model Training and Hyperparameter Tuning"
        },
        objective: {
          tr: "Adillik, doğruluk, sürdürülebilirlik ve güvenlik hedeflerini gözeten yapay zekâ modellerini tasarlamak ve eğitmek.",
          en: "Designing and training AI models aligned with safety, fairness, accuracy, and efficiency objectives."
        },
        description: {
          tr: "Bu aşamada algoritma seçimi, model mimarisinin tasarımı, eğitim süreçleri ve hiperparametre optimizasyonu gerçekleştirilir. Bu mühendislik faaliyetleri gerçekleştirilirken AIMS kapsamında tanımlanan hedefler göz önünde bulundurulur.",
          en: "Covers algorithm selection, architecture design, training pipelines, and hyperparameter logs, observing AIMS objectives."
        },
        actions: {
          tr: [
            "Model gereksinimlerinin ve hedeflerinin (doğruluk, adalet, vb.) belirlenmesi ve yazılı hale getirilmesi",
            "Kullanılan algoritmaların, kütüphanelerin ve model mimarisinin dokümante edilmesi",
            "Hiperparametre optimizasyon süreçlerinin ve deney sonuçlarının otomatik olarak loglanması",
            "Modelin siber güvenlik tehditlerine (veri zehirlenmesi, model çalınması vb.) karşı dayanıklılığının tasarım aşamasında değerlendirilmesi"
          ],
          en: [
            "Specify model goals and objectives (fairness, baseline accuracy) in writing",
            "Document code libraries, algorithms, and deep learning architectures used",
            "Enable automated hyperparameter tuning logging for experiments",
            "Analyze model robustness to cyber attacks (evasion, poisoning) during design"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.6.2.2",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Yapay zekâ sistemi gereksinimlerinin ve özelliklerinin belirlenmesini ve belgelenmesini gerektirir.",
              en: "Requires defining and documenting AI system requirements and specifications."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.2", page: 18 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.6.2.3",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Tasarım ve geliştirme süreçlerinin, organizasyonel hedefler ve gereksinimler temelinde belgelenmesini zorunlu kılar.",
              en: "Requires documenting design and development processes based on organizational requirements."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.3", page: 18 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-2-1",
            title: {
              tr: "Model Gereksinimleri Dokümantasyonu",
              en: "Model Requirements Documentation"
            },
            description: {
              tr: "Geliştirilecek modelin fonksiyonel (doğruluk, gecikme süresi vb.) ve fonksiyonel olmayan (etik, adillik, güvenlik vb.) özellikleri tanımlanmalıdır.",
              en: "Functional (accuracy, latency) and non-functional (ethics, safety) metrics should be mapped out."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.2",
                relationship: "direct",
                rationale: { tr: "Gereksinimlerin belirlenmesi.", en: "Establishing design requirements." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.2", page: 18 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Model Gereksinim Bildirimi"],
              en: ["Model Requirements Specification"]
            },
            responsibleRoles: {
              tr: ["Makine Öğrenimi Mühendisi (ML Engineer)", "Ürün Yöneticisi (Product Owner)"],
              en: ["ML Engineer", "Product Owner"]
            },
            verificationMethod: {
              tr: "Gereksinim bildiriminin paydaşlarla onaylandığı toplantı kaydı.",
              en: "Verify requirements sign-off meetings minutes and documentation tags."
            },
            status: "not-started"
          },
          {
            id: "chk-2-2",
            title: {
              tr: "Tasarım ve Geliştirme Kararlarının Kaydı",
              en: "Design and Development Logging"
            },
            description: {
              tr: "Seçilen model tipi (ör. derin öğrenme, karar ağacı), transfer learning kullanılıp kullanılmadığı ve mimari kararlar belgelenmelidir.",
              en: "Architectural options, model types, transfer learning baseline paths, and selections must be documented."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.3",
                relationship: "direct",
                rationale: { tr: "Tasarım ve geliştirme kararlarının dokümante edilmesi.", en: "Documenting design and development decisions." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.3", page: 18 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Mimari Tasarım Dokümanı", "Kod Deposu"],
              en: ["Architecture Design Document", "Git Repository Logs"]
            },
            responsibleRoles: {
              tr: ["Makine Öğrenimi Mühendisi (ML Engineer)", "Sistem Mimarı (System Architect)"],
              en: ["ML Engineer", "System Architect"]
            },
            verificationMethod: {
              tr: "Sistem mimari şemalarının güncel kod yapısını yansıttığının doğrulanması.",
              en: "Confirm architecture layout documents match codebase structure."
            },
            status: "not-started"
          },
          {
            id: "chk-2-3",
            title: {
              tr: "Model Güvenlik Tehditleri Analizi",
              en: "Model Threat Analysis"
            },
            description: {
              tr: "Tasarım aşamasında model çalınması (extraction), tersine mühendislik ve veri zehirlenmesi (poisoning) gibi YZ-özgü güvenlik riskleri analiz edilmeli ve önlemler alınmalıdır.",
              en: "Evaluate threat models for poisoning, model inversion, extraction, and other AI-specific risks."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.3",
                relationship: "supporting",
                rationale: { tr: "Tasarım kararlarında güvenlik tehditlerinin ele alınması gerekliliği.", en: "Addressing security threats in design." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.3", page: 32 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Model Tehdit Analiz Raporu", "Adversarial Test Logları"],
              en: ["Model Threat Analysis Report", "Adversarial Robustness Logs"]
            },
            responsibleRoles: {
              tr: ["Makine Öğrenimi Mühendisi (ML Engineer)", "Güvenlik Analisti (Security Analyst)"],
              en: ["ML Engineer", "Security Analyst"]
            },
            verificationMethod: {
              tr: "Tasarım inceleme tutanağında siber güvenlik maddelerinin ele alındığının teyidi.",
              en: "Verify security threat assessment sign-off by the CISO/Security lead."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-2-1",
            title: {
              tr: "Model Tasarım Dokümanı ve Eğitim Logları",
              en: "Model Design and Training Logs"
            },
            description: {
              tr: "Kullanılan mimariyi, eğitim parametrelerini ve hiperparametre optimizasyon loglarını içeren teknik kayıtlar.",
              en: "Technical files describing model architecture, training runs parameters, and hyperparameter logs."
            },
            formatExamples: ["architecture_design.pdf", "mlflow_training_run.json"],
            required: true,
            verificationMethod: {
              tr: "MLflow, Weights & Biases veya benzeri bir araçla otomatik oluşturulan eğitim logları.",
              en: "Automated MLflow or Weights & Biases runs output logs."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Model gereksinimleri tüm paydaşlar tarafından gözden geçirilip onaylanmıştır.",
            "Eğitim süreçleri (kod, hiperparametreler, veri sürümleri) takip edilebilir şekilde loglanmıştır.",
            "Siber güvenlik risk değerlendirmesi yapılmış ve tasarım aşamasında gerekli hafifletmeler uygulanmıştır."
          ],
          en: [
            "Requirements specs are reviewed and approved by stakeholders.",
            "Training setup (source code, params, weights, dataset tags) is locked and logged.",
            "Security threat vectors are modeled and baseline defense mechanisms implemented."
          ]
        },
        commonMistakes: {
          tr: [
            "Eğitim parametrelerinin ve hiperparametre denemelerinin manuel ve belgesiz yürütülmesi (takip edilemeyen denemeler).",
            "Güvenlik veya gizlilik gereksinimlerinin kod yazım aşamasında hiç hesaba katılmaması.",
            "Kullanılan açık kaynak kütüphanelerin lisans ve güvenlik zafiyeti taramalarının (SCA) yapılmaması."
          ],
          en: [
            "Running training sessions manually without any automated telemetry/logging tools.",
            "Ignoring safety and privacy policies until model training is complete.",
            "Skipping license vulnerability scanning (SCA) for open source model libraries."
          ]
        },
        relatedActivities: ["data-collection-cleaning-labeling", "performance-measurement-validation"]
      }
    ]
  },
  {
    id: "stage-3",
    order: 3,
    slug: "validation-testing",
    title: {
      tr: "Doğrulama ve Test",
      en: "Validation and Testing"
    },
    summary: {
      tr: "ISO/IEC 42001 B.6.2.4 kılavuzuna uygun olarak model performansının, kalitesinin, güvenilirliğinin ve risk etki seviyelerinin bağımsız olarak doğrulanması.",
      en: "Independent validation of model performance, safety, and operational boundary checks under ISO/IEC 42001 Annex B.6.2.4."
    },
    activities: [
      {
        id: "act-3",
        slug: "performance-measurement-validation",
        title: {
          tr: "Performans Ölçümü ve Doğrulama (V&V)",
          en: "Performance Measurement and Validation (V&V)"
        },
        objective: {
          tr: "Yapay zekâ modelinin hedeflenen operasyonel koşullar altında güvenli, doğru ve adil çalışacağını objektif testlerle doğrulamak.",
          en: "Verifying that the model performs safely, accurately, and fairly in target operational conditions."
        },
        description: {
          tr: "Doğrulama ve geçerleme (Verification and Validation - TEVV) adımı, modelin hedeflenen kullanım alanına uygunluğunu bağımsız olarak ölçer. Bu aşamada sadece genel doğruluk (accuracy) değil, aynı zamanda robustlık, sapma ve adillik metrikleri de test edilir.",
          en: "TEVV measures model readiness. Spans baseline accuracy checks, slice analysis, adversarial robustness testing, and demographic parity/fairness metrics."
        },
        actions: {
          tr: [
            "Doğrulama ve geçerleme planının hazırlanması",
            "Test veri setlerinin operasyonel ortamı ve tüm demografik grupları temsil etme gücünün doğrulanması",
            "Hata oranları, kabul kriterleri ve sürüm kriterlerinin (release criteria) test edilmesi",
            "Adillik (fairness) testleri yapılarak belirli gruplara karşı yanlılık (bias) olmadığının teyit edilmesi"
          ],
          en: [
            "Write a formal verification and validation (V&V) plan",
            "Ensure test datasets are representative of demographics and environments",
            "Test error limits and release criteria benchmarks",
            "Evaluate model bias via fairness analysis metrics on sub-groups"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.6.2.4",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "YZ sistemi için doğrulama ve geçerleme önlemlerinin tanımlanmasını ve kriterlerin belirlenmesini gerektirir.",
              en: "Requires defining verification and validation measures and specifying their criteria."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.4", page: 18 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-3-1",
            title: {
              tr: "Test ve Doğrulama Planı Oluşturulması",
              en: "V&V Plan Creation"
            },
            description: {
              tr: "Modelin hangi metriklerle (Precision, Recall, F1-Score vb.) ve hangi veri kümeleriyle test edileceği yazılı hale getirilmelidir.",
              en: "Create a plan specifying metrics (F1, AUC), datasets, and acceptable error bounds."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.4",
                relationship: "direct",
                rationale: { tr: "V&V kriterlerinin tanımlanması.", en: "Defining V&V criteria." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.4", page: 18 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Doğrulama ve Geçerleme Planı"],
              en: ["Verification and Validation Plan"]
            },
            responsibleRoles: {
              tr: ["Test Mühendisi (QA Engineer)", "Yapay Zekâ Test Uzmanı (ML Tester)"],
              en: ["QA Engineer", "ML Tester"]
            },
            verificationMethod: {
              tr: "Test planının hedeflenen tüm kullanım senaryolarını kapsadığının doğrulanması.",
              en: "Confirm the test plan addresses all potential deployment environments."
            },
            status: "not-started"
          },
          {
            id: "chk-3-2",
            title: {
              tr: "Adillik ve Yanlılık (Bias) Analizi",
              en: "Fairness and Bias Auditing"
            },
            description: {
              tr: "Farklı demografik gruplar (yaş, cinsiyet, ırk vb.) bazında model tahmin sapmaları ölçülmeli ve adillik kriterleri test edilmelidir.",
              en: "Check prediction disparity across gender, age, race, or protected groups."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.4",
                relationship: "supporting",
                rationale: { tr: "Adillik ve sapma hedeflerinin doğrulama aşamasında ölçülmesi.", en: "Measuring bias and fairness targets in validation." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.4", page: 32 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Bias Test Raporu", "Adillik Değerlendirme Logları"],
              en: ["Bias Audit Report", "Fairness Assessment Logs"]
            },
            responsibleRoles: {
              tr: ["Veri Bilimci (Data Scientist)", "Uyum Sorumlusu (Compliance Officer)"],
              en: ["Data Scientist", "Compliance Officer"]
            },
            verificationMethod: {
              tr: "Fairness test araçları (ör. AIF360, Fairlearn) çıktılarının incelenmesi.",
              en: "Review output logs from open-source fairness tools (e.g., Fairlearn, AIF360)."
            },
            status: "not-started"
          },
          {
            id: "chk-3-3",
            title: {
              tr: "Sınır Koşulları ve Hata Analizi",
              en: "Robustness and Stress Testing"
            },
            description: {
              tr: "Gürültülü (noisy) veriler veya bozulmuş girdi durumlarında modelin göstereceği tepki ve kararlılık (robustness) test edilmelidir.",
              en: "Assess how the model behaves when fed noisy inputs or invalid distribution records."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.4",
                relationship: "supporting",
                rationale: { tr: "Gürültülü veriler veya olağan dışı girdilerde model davranışının analizi.", en: "Analyzing model behavior on noisy or spurious inputs." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.4", page: 33 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Robustness Test Raporu", "Stres Testi Sonuçları"],
              en: ["Robustness Audit Report", "Stress Testing Logs"]
            },
            responsibleRoles: {
              tr: ["Yapay Zekâ Test Uzmanı (ML Tester)", "Makine Öğrenimi Mühendisi (ML Engineer)"],
              en: ["ML Tester", "ML Engineer"]
            },
            verificationMethod: {
              tr: "Stres testi senaryolarının çalıştırılması ve elde edilen kararlılık oranının kabul edilebilir sınırlarda olduğunun teyidi.",
              en: "Verify robustness thresholds (accuracy under drift) are met in test runner scripts."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-3-1",
            title: {
              tr: "Test Sonuçları ve Geçerleme Raporu",
              en: "Test Results and Validation Report"
            },
            description: {
              tr: "Modelin performans sonuçlarını, kabul sınırlarını ve yapılan doğrulama testlerinin kayıtlarını barındıran resmi rapor.",
              en: "Official document detailing model metrics, boundary test cases, and validation approvals."
            },
            formatExamples: ["test_report.pdf", "model_card.json"],
            required: true,
            verificationMethod: {
              tr: "Bağımsız test uzmanı ve proje yöneticisi onay kaydı.",
              en: "Check validation sign-off and approval stamps by QA and PM."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Önceden tanımlanmış tüm test senaryoları çalıştırılmış ve sonuçlar kaydedilmiştir.",
            "Model, belirlenen doğruluk ve robustlık eşik değerlerini karşılamıştır.",
            "Adillik testlerinden geçilmiş, tespit edilen ciddi sapmalar hafifletilmiştir.",
            "Sürüm kriterleri (release criteria) başarıyla sağlanmıştır."
          ],
          en: [
            "All test suite cases run successfully with metrics recorded.",
            "Model meets baseline performance, accuracy, and robustness thresholds.",
            "Fairness criteria pass, with any critical bias issues logged and mitigated.",
            "Pre-release criteria (release gates) are fully met."
          ]
        },
        commonMistakes: {
          tr: [
            "Model doğrulamasını yalnızca genel bir test seti doğruluk oranına (ör. %92 Accuracy) indirgemek ve alt kırılımları (slice analysis) atlamak.",
            "Test verilerinin operasyonel canlı verileri temsil etmemesi (lab-canlı uyumsuzluğu).",
            "Kullanıcı tarafındaki açıklanabilirlik ve yorumlanabilirlik ihtiyaçlarının test edilmemesi."
          ],
          en: [
            "Relying purely on aggregate accuracy (e.g., 90% accuracy) while ignoring model performance on subgroups (slice analysis).",
            "Evaluating models on clean test sets that fail to mirror noisy real-world inputs.",
            "Neglecting to test user explainability or interpretability requirements."
          ]
        },
        relatedActivities: ["model-training-hyperparameter-tuning", "model-deployment-production"]
      }
    ]
  },
  {
    id: "stage-4",
    order: 4,
    slug: "deployment",
    title: {
      tr: "Dağıtım",
      en: "Deployment"
    },
    summary: {
      tr: "ISO/IEC 42001 A.6.2.5 standardına uygun olarak, modelin güvenli ve izlenebilir bir şekilde üretim ortamına aktarılması ve sürüm yönetimi.",
      en: "Deploying model and software components securely and versioning them under ISO/IEC 42001 Annex A.6.2.5."
    },
    activities: [
      {
        id: "act-4",
        slug: "model-deployment-production",
        title: {
          tr: "Modelin Canlı Ortama Dağıtılması",
          en: "Model Deployment to Production"
        },
        objective: {
          tr: "Onaylanmış modeli, hedef üretim ortamına güvenli, kesintisiz ve izlenebilir bir şekilde kurmak.",
          en: "Configuring and deploying approved models to production with strict tracking and stability controls."
        },
        description: {
          tr: "Bu aşama, model ve onu saran yazılım bileşenlerinin CI/CD süreçleriyle canlıya alınmasını kapsar. Dağıtımda model versiyon kontrolü, geri alma (rollback) planları ve işletim onayları teknik olarak yürütülür.",
          en: "Executes deployment pipelines (CI/CD). Manages artifact tags, rollback automation rules, and production sign-off controls."
        },
        actions: {
          tr: [
            "Yazılı bir dağıtım planının (deployment plan) hazırlanması",
            "Model ve uygulama bağımlılıklarının sürüm kontrolüne (versioning) bağlanması",
            "Canlıya geçiş öncesi sürüm kriterlerinin (release criteria) ve yönetim onaylarının kontrol edilmesi",
            "Olası hatalarda çalıştırılacak geri alma (rollback) planının doğrulanması"
          ],
          en: [
            "Write a formal deployment plan document",
            "Tag and version both model objects and package dependencies",
            "Verify all release gates, approvals, and sign-offs are in place",
            "Test and automate rollback procedures in case of production failures"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.6.2.5",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Dağıtım planının oluşturulmasını ve dağıtım öncesi gereksinimlerin karşılanmasını gerektirir.",
              en: "Requires documenting a deployment plan and verifying requirements are met prior to release."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.5", page: 18 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-4-1",
            title: {
              tr: "Dağıtım Planının Hazırlanması",
              en: "Deployment Plan Setup"
            },
            description: {
              tr: "Modelin üretim ortamında nasıl konuşlandırılacağı, altyapı ihtiyaçları (CPU/GPU, RAM), rollback adımları ve yetkilendirmeler tanımlanmalıdır.",
              en: "Specify how the model is deployed, resource allocations, staging steps, and rollback routines."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.5",
                relationship: "direct",
                rationale: { tr: "Dağıtım planının belgelenmesi zorunluluğu.", en: "Requirement to document the deployment plan." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.5", page: 18 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Dağıtım Planı"],
              en: ["Deployment Plan Document"]
            },
            responsibleRoles: {
              tr: ["MLOps Mühendisi (MLOps Engineer)", "Bulut Mimarı (Cloud Architect)"],
              en: ["MLOps Engineer", "Cloud Architect"]
            },
            verificationMethod: {
              tr: "Dağıtım planının güncel altyapı şemalarıyla uyumluluğunun gözden geçirilmesi.",
              en: "Review deployment documentation against current cloud infrastructure mappings."
            },
            status: "not-started"
          },
          {
            id: "chk-4-2",
            title: {
              tr: "Sürüm Kriterlerinin (Release Criteria) Doğrulanması",
              en: "Verifying Release Gates"
            },
            description: {
              tr: "Canlıya çıkış öncesinde bağımsız testlerin tamamlandığı, onay süreçlerinin işletildiği ve tüm sürüm eşiklerinin geçildiği teyit edilmelidir.",
              en: "Verify all QA validation tests pass, and model registry tags are approved."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.5",
                relationship: "direct",
                rationale: { tr: "Dağıtım öncesi gereksinimlerin karşılanmasının sağlanması.", en: "Ensuring pre-deployment requirements are met." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.5", page: 33 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Canlıya Geçiş Onay Formu", "CI/CD Pipeline Başarı Logları"],
              en: ["Sign-off Form", "CI/CD Run Status Logs"]
            },
            responsibleRoles: {
              tr: ["Ürün Yöneticisi (Product Owner)", "Test Yöneticisi (QA Manager)"],
              en: ["Product Owner", "QA Manager"]
            },
            verificationMethod: {
              tr: "CI/CD boru hattı üzerindeki tüm aşamaların başarıyla tamamlandığının otomatik loglar üzerinden teyidi.",
              en: "Verify automated test results and registry tags in deployment logs."
            },
            status: "not-started"
          },
          {
            id: "chk-4-3",
            title: {
              tr: "Rollback (Geri Alma) Planının Test Edilmesi",
              en: "Testing Rollback Plan"
            },
            description: {
              tr: "Üretim ortamında yaşanabilecek olası bir çökme veya aşırı performans kaybında sistemin bir önceki kararlı modele otomatik/yarı otomatik dönebilmesi sağlanmalıdır.",
              en: "Automate rollback commands in staging to ensure recovery is stable and fast."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.5",
                relationship: "supporting",
                rationale: { tr: "Hata durumlarında rollback (geri alma) planının olması.", en: "Having a rollback plan for failures." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.7", page: 36 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Rollback Test Senaryosu ve Sonuç Raporu"],
              en: ["Rollback Simulation Report"]
            },
            responsibleRoles: {
              tr: ["MLOps Mühendisi (MLOps Engineer)"],
              en: ["MLOps Engineer"]
            },
            verificationMethod: {
              tr: "Staging ortamında rollback komutunun çalıştırılarak eski sürüme dönüş süresinin ve veri tutarlılığının ölçülmesi.",
              en: "Run rollback scripts on staging to verify system resets to a stable state within SLA."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-4-1",
            title: {
              tr: "Dağıtım Logları ve Sürüm Kontrol Kayıtları",
              en: "Deployment Logs and Version Control"
            },
            description: {
              tr: "CI/CD boru hatlarında çalışan testlerin, entegrasyon adımlarının ve dağıtım anındaki sistem durumunun kayıtları.",
              en: "Logs showing validation builds, container runs, and Kubernetes deployment manifest versions."
            },
            formatExamples: ["github_actions_run.log", "kubernetes_deploy.yaml"],
            required: true,
            verificationMethod: {
              tr: "Dağıtım sisteminden alınan sürüm ve durum çıktıları.",
              en: "Check container tags and registry tag status."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Dağıtım planı hazırlanmış ve teknik liderler tarafından onaylanmıştır.",
            "Model, bağımlılıkları ve veri şemasıyla birlikte tam sürüm kontrolüne (Git tags, Docker tags vb.) tabi tutulmuştur.",
            "Canlı ortamda test edilmiş ve rollback mekanizmasının başarıyla çalıştığı doğrulanmıştır."
          ],
          en: [
            "Deployment steps are finalized and signed-off by leads.",
            "Model artifacts, pipelines, config variables, and Docker tags are locked in Git.",
            "Rollback scripts run successfully in staging environment tests."
          ]
        },
        commonMistakes: {
          tr: [
            "Canlıya geçiş öncesinde yazılı bir onay (sign-off) sürecinin işletilmemesi.",
            "Hata durumunda önceki kararlı sürüme nasıl dönüleceğinin (rollback) önceden planlanıp test edilmemesi.",
            "Canlı ortam parametrelerinin (ör. cloud resource limitleri) test ortamıyla uyumsuz olması nedeniyle sistemin kilitlenmesi."
          ],
          en: [
            "Skipping formal production gate approvals before deployment.",
            "Deploying without testing how to restore the system during runtime errors.",
            "Failing to sync resource limits (CPU/GPU) between testing and production clusters."
          ]
        },
        relatedActivities: ["performance-measurement-validation", "drift-detection-performance-monitoring"]
      }
    ]
  },
  {
    id: "stage-5",
    order: 5,
    slug: "monitoring",
    title: {
      tr: "İzleme",
      en: "Monitoring"
    },
    summary: {
      tr: "ISO/IEC 42001 B.6.2.6 doğrultusunda, modelin üretim ortamındaki veri/kavram kaymalarının, doğruluğunun ve performansının sürekli izlenmesi.",
      en: "Tracking production data drift, concept drift, and system health under ISO/IEC 42001 Annex B.6.2.6."
    },
    activities: [
      {
        id: "act-5",
        slug: "drift-detection-performance-monitoring",
        title: {
          tr: "Sapma Tespiti ve Canlı İzleme",
          en: "Drift Detection and Live Monitoring"
        },
        objective: {
          tr: "Üretim ortamındaki yapay zekâ sisteminin performansını sürekli takip etmek, veri kaymalarını ve hataları erken aşamada tespit etmek.",
          en: "Tracking runtime telemetry, model drift metrics, and system anomalies in production."
        },
        description: {
          tr: "Yapay zekâ modelleri canlıya alındıktan sonra zamanla performans kaybına (model degradation) uğrayabilir. Bu aşamada, veri sapması (data drift), kavram sapması (concept drift), teknik altyapı performansı ve güvenlik anomalileri sürekli izlenir.",
          en: "Tracks model performance decay. Inspects input features drift, prediction distribution shifts, system metrics, and adversarial inputs."
        },
        actions: {
          tr: [
            "Sistem sağlığı ve performans izleme metriklerinin (latency, throughput vb.) belirlenmesi",
            "Canlı veriler ile eğitim verileri arasındaki istatistiksel sapmaların (data drift) tespiti",
            "Performans düşüşlerinde teknik ekipleri uyaracak alarm ve eşik (threshold) yapılarının kurulması",
            "Canlı veri akışında siber güvenlik ihlallerinin izlenmesi"
          ],
          en: [
            "Establish system SLA parameters (latency, CPU, throughput)",
            "Deploy statistical tests to check input drift compared to baseline training datasets",
            "Configure warning and failure thresholds linking to alert channels",
            "Monitor live APIs for poison signatures or intrusion patterns"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.6.2.6",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "YZ sisteminin sürekli operasyonu için izleme, bakım, güncelleme ve destek süreçlerinin tanımlanmasını gerektirir.",
              en: "Requires defining ongoing operation, monitoring, maintenance, and support elements."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.6", page: 19 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-5-1",
            title: {
              tr: "İzleme Metriklerinin ve Altyapısının Kurulması",
              en: "Monitoring Infrastructure Setup"
            },
            description: {
              tr: "Modelin canlıda ürettiği çıktılar, doğruluk oranları, gecikme süreleri ve kaynak tüketimleri sürekli izlenmelidir.",
              en: "Configure real-time monitoring for prediction latency, throughput, CPU load, and resource bounds."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.6",
                relationship: "direct",
                rationale: { tr: "Sistem ve performans izleme gerekliliği.", en: "Requirement for system and performance monitoring." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.6", page: 19 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["İzleme Paneli", "İzleme Metrikleri Listesi"],
              en: ["Monitoring Dashboard", "Active Telemetry Metrics List"]
            },
            responsibleRoles: {
              tr: ["MLOps Mühendisi", "Makine Öğrenimi Mühendisi"],
              en: ["MLOps Engineer", "ML Engineer"]
            },
            verificationMethod: {
              tr: "Canlı izleme panelinin çalıştığının ve tüm kritik metrikleri canlı olarak gösterdiğinin teyidi.",
              en: "Verify monitoring dashboard (e.g., Grafana, Prometheus) displays production data correctly."
            },
            status: "not-started"
          },
          {
            id: "chk-5-2",
            title: {
              tr: "Sapma (Drift) Tespit Mekanizmaları",
              en: "Drift Detection Pipelines"
            },
            description: {
              tr: "Eğitim veri seti ile canlı veri akışı arasındaki istatistiksel farklılıklar düzenli olarak hesaplanmalıdır.",
              en: "Deploy cron tests to compute statistical divergence (KS test, PSI) between training and production runs."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.6",
                relationship: "supporting",
                rationale: { tr: "Konsept ve veri drift analizi ile retraining ihtiyacının belirlenmesi.", en: "Concept and data drift analysis to flag retraining needs." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.6", page: 34 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Drift Analiz Raporları", "Drift Kütüphane Ayarları"],
              en: ["Drift Audit Reports", "Evidently/Whylogs config files"]
            },
            responsibleRoles: {
              tr: ["Veri Bilimci", "MLOps Mühendisi"],
              en: ["Data Scientist", "MLOps Engineer"]
            },
            verificationMethod: {
              tr: "Sapma analiz betiklerinin çalıştırılarak PSI veya KS test sonuçlarının doğrulanması.",
              en: "Run baseline drift analysis scripts and confirm PSI outputs are below thresholds."
            },
            status: "not-started"
          },
          {
            id: "chk-5-3",
            title: {
              tr: "Alarm ve Eşik Değerlerinin Belirlenmesi",
              en: "Configuring Alert Rules"
            },
            description: {
              tr: "Belirlenen doğruluk veya performans eşiklerinin altına inildiğinde teknik ekiplere otomatik bildirim gönderecek alarmlar kurulmalıdır.",
              en: "Set up alerting rules to ping oncall support on Slack or PagerDuty if performance metrics decay."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.6",
                relationship: "supporting",
                rationale: { tr: "Performans bozulmalarına karşı alarm sistemlerinin kurulması.", en: "Setting up alarm systems for performance decay." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.6", page: 34 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Alarm Konfigürasyon Logları"],
              en: ["Alert Rule Configurations"]
            },
            responsibleRoles: {
              tr: ["MLOps Mühendisi (MLOps Engineer)"],
              en: ["MLOps Engineer"]
            },
            verificationMethod: {
              tr: "Yapay bir hata/performans düşüşü senaryosu simüle edilerek alarmların tetiklendiğinin doğrulanması.",
              en: "Inject a mock latency spike/error status code in staging and verify alerts trigger correctly."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-5-1",
            title: {
              tr: "İzleme Günlükleri ve Alarm Sistemleri",
              en: "Monitoring Telemetry and Alerts"
            },
            description: {
              tr: "Canlı ortamdaki model durumunu, sapma durumunu ve tetiklenen alarmları gösteren log dosyaları ve sistem kayıtları.",
              en: "Production dashboard configuration files, drift analysis telemetry JSONs, and active alert rules."
            },
            formatExamples: ["monitoring_logs.json", "alert_rules.yaml"],
            required: true,
            verificationMethod: {
              tr: "Alarm yönetim sistemi kayıtları ve izleme panosu ekran görüntüleri.",
              en: "Confirm alert routing logs and check dashboard state."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Sürekli izleme panosu yayındadır ve canlı verilerle beslenmektedir.",
            "Veri/kavram sapması (drift) testleri otomatik bir takvime bağlanmıştır.",
            "Kritik performans düşüşlerinde veya veri sapmalarında ilgili rollere alarm gönderilmesi sağlanmıştır."
          ],
          en: [
            "Production dashboard is running with active telemetry metrics.",
            "Drift checking cron is configured and outputs recorded.",
            "Warning alerts are configured to ping technical roles on decay/failure."
          ]
        },
        commonMistakes: {
          tr: [
            "Yalnızca sunucu kaynaklarının (CPU/RAM) izlenmesi, modelin tahmin performansındaki (accuracy/drift) düşüşlerin gözden kaçırılması.",
            "Alarm limitlerinin çok yüksek ya da çok düşük tutularak teknik ekibin alarm yorgunluğuna (alert fatigue) uğratılması.",
            "İzleme verilerinin geçmişe dönük analiz edilebilecek şekilde saklanmaması."
          ],
          en: [
            "Monitoring hardware resource usage (CPU/RAM) but ignoring model feature drift/accuracy metrics.",
            "Flooding Slack/PagerDuty channels with low-priority warnings, causing alert fatigue.",
            "Deleting runtime logs immediately without archiving baseline drift context."
          ]
        },
        relatedActivities: ["model-deployment-production", "model-update-retraining"]
      }
    ]
  },
  {
    id: "stage-6",
    order: 6,
    slug: "feedback-improvement",
    title: {
      tr: "Geri Bildirim ve İyileştirme",
      en: "Feedback and Improvement"
    },
    summary: {
      tr: "ISO/IEC 42001 Clause 10 sürekli iyileştirme prensiplerine dayanarak, model performans düşüşlerinde düzeltici faaliyetlerin ve yeniden eğitimin tetiklenmesi.",
      en: "Continual improvement under ISO/IEC 42001 Clause 10, managing retraining pipelines and CAPA loops."
    },
    activities: [
      {
        id: "act-6",
        slug: "model-update-retraining",
        title: {
          tr: "Model Güncelleme ve Yeniden Eğitme",
          en: "Model Retraining and Updates"
        },
        objective: {
          tr: "Canlıda tespit edilen hatalar, sapmalar veya performans kayıpları doğrultusunda modeli sürekli iyileştirmek ve güncellemek.",
          en: "Retraining and deploying models to mitigate drift, anomalies, or degraded accuracy."
        },
        description: {
          tr: "Sürekli iyileştirme (continual improvement), PUKÖ döngüsünün 'Önlem Al' aşamasıdır. İzleme aşamasında belirlenen sapmalar doğrultusunda modelin yeni verilerle yeniden eğitilmesi (retraining) veya güncellenmesi sağlanır.",
          en: "Handles the Act phase of PDCA. Evaluates drift alerts, initiates retraining loops, checks regression, and logs corrective actions."
        },
        actions: {
          tr: [
            "Canlı izlemede eşik değerleri aşan sapmalar için yeniden eğitim (retraining) sürecinin tetiklenmesi",
            "Modelde tespit edilen uygunsuzluklar için düzeltici faaliyetlerin (corrective action) başlatılması",
            "Güncellemelerin ve değişikliklerin geriye dönük uyumluluk testlerinin (regression tests) yapılması",
            "Değişikliklerin ve yeni sürümlerin sürüm kontrol sisteminde kayıt altına alınması"
          ],
          en: [
            "Trigger retraining runs when data drift thresholds are crossed",
            "Initiate CAPA loops for nonconformities (e.g. system failures or biased decisions)",
            "Run regression testing suites on retrained candidates before deployment",
            "Lock and version model updates on the Model Registry"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "10.1",
            relationship: "direct",
            rationale: {
              tr: "Yapay zekâ yönetim sisteminin ve YZ sistemlerinin sürekli olarak iyileştirilmesini şart koşar.",
              en: "Mandates continual improvement of the suitability, adequacy, and effectiveness of the management system."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "10.1", page: 15 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "10.2",
            relationship: "direct",
            rationale: {
              tr: "Ortaya çıkan uygunsuzlukların belirlenmesini, sebeplerinin analiz edilmesini ve düzeltici faaliyetlerin uygulanmasını zorunlu kılar.",
              en: "Requires reacting to nonconformities, evaluating root causes, and applying corrective actions."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "10.2", page: 16 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-6-1",
            title: {
              tr: "Yeniden Eğitim (Retraining) Tetikleyicilerinin Tanımlanması",
              en: "Setting Retraining Rules"
            },
            description: {
              tr: "Hangi sapma veya performans kaybı limitlerinde modelin yeni verilerle eğitileceğine dair teknik kurallar belirlenmelidir.",
              en: "Define explicit data drift or accuracy decay thresholds that execute retraining pipelines."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "10.1",
                relationship: "direct",
                rationale: { tr: "Sürekli iyileştirme için güncelleme mekanizmalarının işletilmesi.", en: "Executing update mechanisms for continual improvement." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "10.1", page: 15 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Yeniden Eğitim Tetikleme Kılavuzu"],
              en: ["Retraining Trigger Guidelines"]
            },
            responsibleRoles: {
              tr: ["Veri Bilimci (Data Scientist)", "MLOps Mühendisi (MLOps Engineer)"],
              en: ["Data Scientist", "MLOps Engineer"]
            },
            verificationMethod: {
              tr: "Sapma limitleri aşıldığında yeniden eğitim betiklerinin otomatik çalışıp çalışmadığının testi.",
              en: "Test whether retraining runs execute when input drift metric is artificially injected above thresholds."
            },
            status: "not-started"
          },
          {
            id: "chk-6-2",
            title: {
              tr: "Düzeltici Faaliyetlerin Başlatılması",
              en: "Executing CAPA Loops"
            },
            description: {
              tr: "Canlı ortamda hatalı tahmin veya sistem kesintisi yaşandığında, kök neden analizi yapılmalı ve kalıcı çözümler uygulanmalıdır.",
              en: "Run root-cause analysis on failures or prediction defects, documenting resolutions."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "10.2",
                relationship: "direct",
                rationale: { tr: "Uygunsuzlukların tespiti ve düzeltici faaliyet süreci.", en: "Nonconformity tracking and corrective actions." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "10.2", page: 16 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Düzeltici ve Önleyici Faaliyet Formu (DÖF)"],
              en: ["Corrective and Preventive Action (CAPA) Log"]
            },
            responsibleRoles: {
              tr: ["Uyum Sorumlusu (Compliance Officer)", "Makine Öğrenimi Mühendisi (ML Engineer)"],
              en: ["Compliance Officer", "ML Engineer"]
            },
            verificationMethod: {
              tr: "Hata kayıtlarının kapatılma sürelerinin ve uygulanan kök neden analizlerinin gözden geçirilmesi.",
              en: "Review ticket resolution times and root-cause files in the CAPA dashboard."
            },
            status: "not-started"
          },
          {
            id: "chk-6-3",
            title: {
              tr: "Geriye Dönük Uyumluluk (Regression) Testleri",
              en: "Regression Verification"
            },
            description: {
              tr: "Yeni eğitilen model sürümü canlıya çıkmadan önce, eski kararlı sürüme kıyasla temel yeteneklerde gerileme olmadığını kanıtlayacak testler çalıştırılmalıdır.",
              en: "Ensure retrained candidate outputs display no regression in baseline capabilities."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "10.1",
                relationship: "supporting",
                rationale: { tr: "Güncellemelerin sistem kalitesini bozmadığının doğrulanması.", en: "Ensuring updates do not degrade system quality." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.6.2.6", page: 34 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Regresyon Test Raporu", "Shadow Dağıtım Günlükleri"],
              en: ["Regression Test Report", "Shadow Deployment Logs"]
            },
            responsibleRoles: {
              tr: ["Yapay Zekâ Test Uzmanı (ML Tester)", "Makine Öğrenimi Mühendisi (ML Engineer)"],
              en: ["ML Tester", "ML Engineer"]
            },
            verificationMethod: {
              tr: "Shadow veya Canary dağıtım loglarının incelenerek yeni modelin eski model çıktısıyla uyumluluğunun kontrolü.",
              en: "Verify shadow deployment logs to check inference consistency between active and candidate models."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-6-1",
            title: {
              tr: "Güncellenmiş Model ve İyileştirme Kayıtları",
              en: "Updated Model and CAPA Records"
            },
            description: {
              tr: "Model güncellemelerinin nedenlerini, kök neden analizlerini ve yeni sürüm performans testlerini barındıran teknik kayıtlar.",
              en: "CAPA reports for prediction issues, retraining runs parameters, and regression checks."
            },
            formatExamples: ["capa_report.pdf", "retrained_model_metrics.json"],
            required: true,
            verificationMethod: {
              tr: "Değişiklik onay kayıtları ve yeni sürüm test raporu.",
              en: "Verify model version registry logs and QA sign-off stamps."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Yeniden eğitim tetikleme kuralları kodlanmış ve otomatik hale getirilmiştir.",
            "Hata durumları için düzeltici faaliyet süreci tanımlanmış ve kayıtlar tutulmaktadır.",
            "Model güncellemeleri geriye dönük uyumluluk (regression) testlerinden geçirilmiştir."
          ],
          en: [
            "Retraining automation routines are coded and active.",
            "CAPA loop registers are active with logs showing root-cause results.",
            "Updates undergo regression testing prior to production release."
          ]
        },
        commonMistakes: {
          tr: [
            "Performans düşüşü tespit edilmesine rağmen modeli yeniden eğitmeme veya güncellemeyi sürekli erteleme.",
            "Hatalardan ders çıkarılmaması; kök neden analizi yapılmadan modelin sürekli aynı veri yapısıyla yeniden eğitilmesi.",
            "Model güncellemelerinin versiyonlanmaması ve eski kararlı modellere dönüş yolunun kapatılması."
          ],
          en: [
            "Delaying model updates despite clear drift/performance decay alerts.",
            "Retraining models blindly without evaluating the underlying bug or root-cause.",
            "Failing to version model releases, making rollback transitions impossible."
          ]
        },
        relatedActivities: ["drift-detection-performance-monitoring", "risk-analysis-impact-assessment"]
      }
    ]
  },
  {
    id: "stage-7",
    order: 7,
    slug: "governance-risk-management",
    title: {
      tr: "Yönetişim ve Risk Yönetimi",
      en: "Governance and Risk Management"
    },
    summary: {
      tr: "ISO/IEC 42001 Clause 6.1 ve AIMS etki değerlendirme standartlarına göre, yapay zekâ sisteminin getirebileceği sosyo-teknik risklerin belirlenmesi ve yönetilmesi.",
      en: "Assessing socio-technical risks, and drafting system impact assessments (EIA) under Clause 6.1 and 8.4."
    },
    activities: [
      {
        id: "act-7",
        slug: "risk-analysis-impact-assessment",
        title: {
          tr: "Risk Analizi ve Etki Değerlendirmesi",
          en: "Risk Analysis and Impact Assessment"
        },
        objective: {
          tr: "Yapay zekânın bireyler, organizasyon ve toplum üzerindeki potansiyel olumsuz etkilerini (güvenlik, mahremiyet, adillik vb.) sistematik olarak belirlemek ve yönetmek.",
          en: "Identifying, prioritizing, and mitigating risks and societal impacts posed by AI systems."
        },
        description: {
          tr: "Yönetişim ve risk yönetimi, standardın temel omurgasını oluşturur. YZ sisteminin geliştirilmesi veya kullanılması aşamalarından önce ve yaşam döngüsü boyunca risk değerlendirmesi ve etki analizi (AIMS-EIA) yapılması zorunludur.",
          en: "Governance is core to ISO/IEC 42001. Requires executing repeatable risk assessments and documentation of AI System Impact Assessments (AIMS-EIA)."
        },
        actions: {
          tr: [
            "Yapay zekâ risk kriterlerinin ve kabul edilebilir risk sınırlarının belirlenmesi",
            "Modelin bireyler (insan hakları, mahremiyet) ve toplum üzerindeki etkilerinin analiz edilmesi (AI System Impact Assessment)",
            "Belirlenen riskleri hafifletecek (mitigation) teknik ve yönetimsel kontrollerin seçilmesi",
            "Risk değerlendirme sonuçlarının güncel tutulması ve risk işleme planının yönetim onayına sunulması"
          ],
          en: [
            "Establish risk acceptability criteria and limits",
            "Execute AI System Impact Assessments (consequences on human rights, privacy, society)",
            "Select technical controls to mitigate identified risks",
            "Keep risk registers up-to-date and present treatment plans for top management sign-off"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "6.1.2",
            relationship: "direct",
            rationale: {
              tr: "YZ risk değerlendirme sürecinin kurulmasını, risk analizlerinin yapılmasını ve seviyelerinin belirlenmesini zorunlu kılar.",
              en: "Requires defining and establishing an AI risk assessment process to estimate levels of risk."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "6.1.2", page: 9 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "6.1.4",
            relationship: "direct",
            rationale: {
              tr: "YZ sisteminin bireyler ve toplum üzerindeki potansiyel etkilerini değerlendirmek için etki analizi yapılmasını şart koşar.",
              en: "Mandates establishing a process to assess potential consequences to individuals and societies."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "6.1.4", page: 10 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "8.2",
            relationship: "direct",
            rationale: {
              tr: "Risk değerlendirmelerinin planlı aralıklarla veya değişiklik olduğunda tekrarlanmasını gerektirir.",
              en: "Requires performing AI risk assessments at planned intervals or when changes occur."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "8.2", page: 13 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "8.4",
            relationship: "direct",
            rationale: {
              tr: "YZ sistemi etki değerlendirme sürecinin operasyonel olarak yürütülmesini ve sonuçların dokümante edilmesini şart koşar.",
              en: "Requires performing AI system impact assessments at planned intervals."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "8.4", page: 14 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-7-1",
            title: {
              tr: "Yapay Zekâ Risk Değerlendirmesinin Yapılması",
              en: "AI Risk Assessment"
            },
            description: {
              tr: "Modelin teknik, yasal ve etik riskleri (ör. veri güvenliği, algoritmik yanlılık, şeffaflık eksikliği) belirlenmeli ve önceliklendirilmelidir.",
              en: "Identify and grade technical, legal, and ethical risks (disparities, privacy, data leaks)."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "6.1.2",
                relationship: "direct",
                rationale: { tr: "YZ risk değerlendirme sürecinin işletilmesi.", en: "Executing the AI risk assessment process." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "6.1.2", page: 9 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["YZ Risk Değerlendirme Kaydı"],
              en: ["AI Risk Register"]
            },
            responsibleRoles: {
              tr: ["Risk Yöneticisi (Risk Manager)", "Teknik Lider (ML Lead)"],
              en: ["Risk Manager", "ML Lead"]
            },
            verificationMethod: {
              tr: "Risk kaydının güncelliğinin ve etki puanlamalarının gözden geçirilmesi.",
              en: "Verify the risk spreadsheet contains correct likelihood scores and mitigation tasks."
            },
            status: "not-started"
          },
          {
            id: "chk-7-2",
            title: {
              tr: "YZ Sistem Etki Değerlendirmesi (AIMS-EIA)",
              en: "AI System Impact Assessment"
            },
            description: {
              tr: "Sistemin insanlar, gruplar ve genel toplum üzerindeki potansiyel etkileri, veri gizliliği, güvenlik ve ayrımcılık riskleri çerçevesinde değerlendirilmelidir.",
              en: "Run formal assessments mapping how the model affects human safety, data subjects, and user access."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "6.1.4",
                relationship: "direct",
                rationale: { tr: "Sistem etki değerlendirmesinin yapılması ve dokümante edilmesi.", en: "Performing and documenting system impact assessments." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "6.1.4", page: 10 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["YZ Sistem Etki Analizi Raporu"],
              en: ["AI System Impact Assessment Report (EIA)"]
            },
            responsibleRoles: {
              tr: ["Uyum Sorumlusu (Compliance Officer)", "Risk Yöneticisi (Risk Manager)"],
              en: ["Compliance Officer", "Risk Manager"]
            },
            verificationMethod: {
              tr: "Etki analizi raporundaki hafifletme (mitigation) önerilerinin teknik ekiplerce uygulandığının teyidi.",
              en: "Ensure mitigation items listed in the EIA document are actively added to development tickets."
            },
            status: "not-started"
          },
          {
            id: "chk-7-3",
            title: {
              tr: "Risk İşleme Planı ve Yönetim Onayı",
              en: "Risk Treatment and Approvals"
            },
            description: {
              tr: "Belirlenen risklerin nasıl azaltılacağı, transfer edileceği veya kabul edileceğine dair kararlar belgelenmeli ve yönetimce imzalanmalıdır.",
              en: "Document options to avoid, transfer, or accept residual risks, getting management sign-off."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "6.1.3",
                relationship: "direct",
                rationale: { tr: "Risk işleme planının belgelenmesi ve onaylanması.", en: "Documenting and approving the risk treatment plan." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "6.1.3", page: 9 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Risk İşleme Planı", "Yönetim Onay Tutanağı"],
              en: ["Risk Treatment Plan", "Management Sign-off Record"]
            },
            responsibleRoles: {
              tr: ["Risk Yöneticisi (Risk Manager)", "Üst Yönetim (Top Management)"],
              en: ["Risk Manager", "Top Management"]
            },
            verificationMethod: {
              tr: "Yönetimin kabul ettiği kalıntı (residual) riskler listesinin onaylı kopyasının teyidi.",
              en: "Check approved residual risks log signed by top executives."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-7-1",
            title: {
              tr: "Risk Matrisi ve Etki Değerlendirme Raporları",
              en: "Risk Matrix and Impact Assessments"
            },
            description: {
              tr: "Tespit edilen risk kalemlerini, olasılık ve şiddet puanlarını, kontrol önlemlerini ve etki analizlerini içeren doküman seti.",
              en: "AI risk spreadsheet logs, severity matrices, and the formal EIA document."
            },
            formatExamples: ["risk_matrix.xlsx", "impact_assessment_report.pdf"],
            required: true,
            verificationMethod: {
              tr: "Risk yönetim komitesi gözden geçirme tutanağı.",
              en: "Check risk committee review log files."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Risk kriterleri belirlenmiş ve organizasyonel risk politikalarıyla uyumlaştırılmıştır.",
            "YZ sistem etki değerlendirmesi (EIA) yapılmış ve sonuçlar belgelenmiştir.",
            "Kalıntı riskler üst yönetim tarafından yazılı olarak kabul edilmiştir."
          ],
          en: [
            "AI risk bounds are configured and linked to AIMS policies.",
            "AI system impact assessment is complete and documented.",
            "Residual risks are formally accepted in writing by top management."
          ]
        },
        commonMistakes: {
          tr: [
            "Risk değerlendirmesini yalnızca projenin ilk başında yapıp bir daha hiç güncellememek.",
            "Yapay zekâ etki değerlendirmesinde (EIA) sadece teknik model performans hatalarına odaklanıp, toplumsal ve etik etkileri (ör. adillik, iş gücü etkisi) atlamak.",
            "Risk hafifletme planlarını belgelendirmek ancak bu önlemleri teknik backlog'a dahil etmemek."
          ],
          en: [
            "Conducting risk assessments once at kick-off and ignoring post-deployment updates.",
            "Ignoring downstream impacts on natural persons in the EIA, focusing only on F1 scores.",
            "Listing risk treatment measures in documentation but failing to allocate developer tickets."
          ]
        },
        relatedActivities: ["model-update-retraining", "technical-records-transparency"]
      }
    ]
  },
  {
    id: "stage-8",
    order: 8,
    slug: "documentation",
    title: {
      tr: "Dokümantasyon",
      en: "Documentation"
    },
    summary: {
      tr: "ISO/IEC 42001 A.6.2.7 teknik dokümantasyon ve A.6.2.8 olay loglama gerekliliklerine göre, tüm yaşam döngüsü adımlarının izlenebilirliğinin ve şeffaflığının sağlanması.",
      en: "Documenting model specifications and automated event log logging under ISO/IEC 42001 Annex A.6.2.7 and A.6.2.8."
    },
    activities: [
      {
        id: "act-8",
        slug: "technical-records-transparency",
        title: {
          tr: "Teknik Kayıtlar ve Şeffaflık",
          en: "Technical Records and Transparency"
        },
        objective: {
          tr: "Yapay zekâ sisteminin tasarım kararlarını, kullanılan verileri ve operasyonel olay loglarını izlenebilirlik ve şeffaflık adına kayıt altına almak.",
          en: "Logging system specifications, model cards, and automated operational logs to ensure transparency."
        },
        description: {
          tr: "Dokümantasyon aşaması, tüm MLOps döngüsünü kesen yatay bir destek sürecidir. Sistem mimarisi, kullanılan veri setleri, test sonuçları, olay logları (event logs) ve kullanıcı rehberleri standardın gerektirdiği şeffaflığı sağlamak için belgelenir.",
          en: "Cross-cutting support phase. Coordinates Model Cards, System Cards, runtime event logs, and operator guidelines to ensure auditability."
        },
        actions: {
          tr: [
            "İlgili paydaşlar (kullanıcılar, denetçiler, iş ortakları) için uygun dilde teknik dokümantasyon hazırlanması",
            "Model Kartları (Model Cards) ve Sistem Kartlarının (System Cards) oluşturulması",
            "Yapay zekâ sistemi çalışırken oluşabilecek önemli olayların (event logs) otomatik olarak kaydedilmesi",
            "Olay günlüklerinin izlenebilirlik ve denetlenebilirlik amacıyla güvenli bir şekilde saklanması"
          ],
          en: [
            "Draft targeted technical documentations for users, partners, and auditors",
            "Publish Model Cards and System Cards details",
            "Enable automated, timestamped event logging in operational use",
            "Secure audit trails and logs under defined retention policies"
          ]
        },
        isoReferences: [
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.6.2.7",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "Kullanıcılar, ortaklar ve denetim otoriteleri gibi farklı paydaşlar için teknik dokümantasyonun hazırlanmasını şart koşar.",
              en: "Requires providing appropriate AI system technical documentation for stakeholders."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.7", page: 19 }],
            confidence: "high"
          },
          {
            standard: "ISO/IEC 42001:2023",
            clause: "A.6.2.8",
            annex: "Annex A",
            relationship: "direct",
            rationale: {
              tr: "YZ sisteminin yaşam döngüsü boyunca, özellikle sistem kullanımdayken olay loglarının otomatik kaydedilmesini gerektirir.",
              en: "Requires enabling automated record keeping of event logs, especially during operational use."
            },
            sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.8", page: 19 }],
            confidence: "high"
          }
        ],
        checklist: [
          {
            id: "chk-8-1",
            title: {
              tr: "Teknik Dokümantasyon Setinin Oluşturulması",
              en: "Technical Documentation Compile"
            },
            description: {
              tr: "Sistem mimarisi, tasarım kararları, veri kaynakları ve test sonuçlarını içeren kapsamlı bir teknik kılavuz bulunmalıdır.",
              en: "Prepare documents describing model algorithms, data inputs, and test baselines."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.7",
                relationship: "direct",
                rationale: { tr: "Paydaşlar için teknik dokümantasyon gerekliliği.", en: "Requirement for technical documentation." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.7", page: 19 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Sistem Mimari Dokümanı", "Model Kartı"],
              en: ["Architecture Specification Doc", "Model Card"]
            },
            responsibleRoles: {
              tr: ["Makine Öğrenimi Mühendisi (ML Engineer)", "Teknik Yazar (Technical Writer)"],
              en: ["ML Engineer", "Technical Writer"]
            },
            verificationMethod: {
              tr: "Dokümantasyon setinin en son sürüm modeli tam olarak yansıttığının gözden geçirilmesi.",
              en: "Review system cards against active production model parameters."
            },
            status: "not-started"
          },
          {
            id: "chk-8-2",
            title: {
              tr: "Otomatik Olay Loglaması (Event Logging)",
              en: "Automating Event Logs"
            },
            description: {
              tr: "Modelin tahmin istekleri, aldığı girdiler, ürettiği çıktılar ve olası sistem hataları otomatik olarak zaman damgasıyla kaydedilmelidir.",
              en: "Configure database triggers or logger calls to record prediction records with timestamps."
            },
            requirementType: "standard-related",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.6.2.8",
                relationship: "direct",
                rationale: { tr: "Yaşam döngüsü boyunca olay loglarının tutulması.", en: "Tracking event logs over the life cycle." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "A.6.2.8", page: 19 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Uygulama Olay Logları", "Log Saklama Politikası"],
              en: ["Application Event Logs", "Log Retention Policy Document"]
            },
            responsibleRoles: {
              tr: ["MLOps Mühendisi (MLOps Engineer)", "Yazılım Mühendisi (Software Engineer)"],
              en: ["MLOps Engineer", "Software Engineer"]
            },
            verificationMethod: {
              tr: "Sistem çalışırken üretilen log kayıtlarının şifreli ve değiştirilemez şekilde saklandığının teyidi.",
              en: "Verify logs storage is secure and follows write-once-read-many (WORM) storage protocols."
            },
            status: "not-started"
          },
          {
            id: "chk-8-3",
            title: {
              tr: "Kullanıcı Bilgilendirme ve Rehberler",
              en: "User Guides and Oversight Guidelines"
            },
            description: {
              tr: "Yapay zekâ çıktısıyla etkileşime girecek son kullanıcılar veya operatörler için sistemi anlama ve gerektiğinde müdahale etme (human oversight) rehberleri bulunmalıdır.",
              en: "Provide operators and end-users with guides on model limitations and override protocols."
            },
            requirementType: "recommended-practice",
            isoReferences: [
              {
                standard: "ISO/IEC 42001:2023",
                clause: "A.8.2",
                relationship: "supporting",
                rationale: { tr: "Kullanıcılar için sistem dokümantasyonu ve kullanım yönergeleri sunma.", en: "Providing system documentation and usage guidelines for users." },
                sources: [{ sourceId: "iso-42001", fileName: "ISO/IEC 42001:2023", clause: "B.8.2", page: 39 }],
                confidence: "high"
              }
            ],
            evidence: {
              tr: ["Kullanıcı El Kitabı", "İnsan Gözetim Yönergesi"],
              en: ["Operator Manual", "Human Oversight Instructions"]
            },
            responsibleRoles: {
              tr: ["Ürün Yöneticisi (Product Owner)", "Teknik Yazar (Technical Writer)"],
              en: ["Product Owner", "Technical Writer"]
            },
            verificationMethod: {
              tr: "Kullanıcı ara yüzlerinde YZ etkileşimi uyarılarının ve açıklayıcı metinlerin varlığının kontrolü.",
              en: "Inspect UI screens to ensure users are clearly notified of AI-supported choices."
            },
            status: "not-started"
          }
        ],
        evidence: [
          {
            id: "ev-8-1",
            title: {
              tr: "Teknik Dokümanlar ve Olay Günlükleri",
              en: "Technical Specifications and Logs"
            },
            description: {
              tr: "Model ve sistem kartları, mimari dokümanlar, API dokümantasyonu ve olay log depoları.",
              en: "Model cards, API docs, architecture specs, and archived event log databases."
            },
            formatExamples: ["system_card.md", "audit_trail.log"],
            required: true,
            verificationMethod: {
              tr: "Denetim izi (audit trail) doğruluğunun ve log saklama politikasına uygunluğunun kontrolü.",
              en: "Confirm the existence of secure audit logs and retention policy files."
            }
          }
        ],
        completionCriteria: {
          tr: [
            "Teknik dokümantasyon seti en güncel sistem mimarisine göre tamamlanmıştır.",
            "Model ve Sistem kartları hazırlanmış ve kamuya/paydaşlara açık hale getirilmiştir.",
            "Olay logları (event logs) otomatik olarak toplanmakta ve değiştirilemez biçimde saklanmaktadır."
          ],
          en: [
            "Technical guidelines files match current system deployment configurations.",
            "Model Cards and System Cards are generated and made accessible.",
            "Event logs collect automatically at runtime and are secured."
          ]
        },
        commonMistakes: {
          tr: [
            "Kayıtların (logs) yetersiz tutulması nedeniyle geriye dönük tahmin doğrulanabilirliğinin (traceability) kaybolması.",
            "Kullanıcı kılavuzlarının son derece karmaşık olması ve son kullanıcıların YZ çıktısını nasıl yorumlayacağını açıklamaması.",
            "Dokümanların güncel sistem sürümünü yansıtmaması, eski sürümlere ait kalması."
          ],
          en: [
            "Failing to capture input vectors in event logs, preventing prediction auditability.",
            "Drafting highly complex manuals that do not instruct users how to handle AI failures.",
            "Letting documentation stagnate and decay while the codebase updates."
          ]
        },
        relatedActivities: ["risk-analysis-impact-assessment", "data-collection-cleaning-labeling"]
      }
    ]
  }
];
