import type { Translatable } from "../types/domain";

export interface IsoClauseDetail {
  clause: string;
  title: Translatable;
  type: "clause" | "control";
  summary: Translatable;
  description: Translatable;
  page: number;
  relatedActivities: { activitySlug: string; relationType: "direct" | "supporting" }[];
}

export const isoClausesData: Record<string, IsoClauseDetail> = {
  "A.7.2": {
    clause: "A.7.2",
    title: {
      tr: "Yapay zekâ sistemi geliştirme ve geliştirme için veri",
      en: "Data for development and enhancement of AI system"
    },
    type: "control",
    summary: {
      tr: "Geliştirme ve iyileştirme süreçlerinde veri yönetimi süreçlerinin tanımlanması ve uygulanması.",
      en: "Definition and implementation of data management processes during development and enhancement stages."
    },
    description: {
      tr: "Kuruluş, yapay zekâ sistemlerinin geliştirilmesi ve iyileştirilmesi ile ilgili veri yönetimi süreçlerini tanımlamalı, belgelemeli ve uygulamalıdır. Bu süreçler veri güvenliği, gizlilik, temsil gücü ve doğruluğu kapsar.",
      en: "The organization shall define, document, and implement data management processes related to the development and enhancement of AI systems. This covers data privacy, security, representativeness, and accuracy."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "data-collection-cleaning-labeling", relationType: "direct" }
    ]
  },
  "A.7.3": {
    clause: "A.7.3",
    title: {
      tr: "Veri edinimi",
      en: "Acquisition of data"
    },
    type: "control",
    summary: {
      tr: "YZ sistemlerinde kullanılan verilerin edinilmesi ve seçilmesine ilişkin detayların belirlenmesi ve belgelenmesi.",
      en: "Determining and documenting details about the acquisition and selection of data used in AI systems."
    },
    description: {
      tr: "Yapay zekâ sistemlerinde kullanılan verilerin edinilmesi ve seçilmesi ile ilgili ayrıntılar belirlenmeli ve belgelenmelidir. Veri hakları (telif hakkı, kişisel veriler vb.) ve veri kaynaklarının güvenilirliği bu kapsamda değerlendirilir.",
      en: "The organization shall determine and document details about the acquisition and selection of the data used in AI systems. This includes checking data rights (copyrights, PII) and source trust."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "data-collection-cleaning-labeling", relationType: "direct" }
    ]
  },
  "A.7.4": {
    clause: "A.7.4",
    title: {
      tr: "Yapay zekâ sistemleri için veri kalitesi",
      en: "Quality of data for AI systems"
    },
    type: "control",
    summary: {
      tr: "Veri kalitesi gereksinimlerinin tanımlanması ve kullanılan verilerin bu gereksinimleri karşılamasının sağlanması.",
      en: "Defining data quality requirements and ensuring utilized data meets those requirements."
    },
    description: {
      tr: "Yapay zekâ sistemlerini geliştirmek ve işletmek için kullanılan verilerin kalite gereksinimleri tanımlanmalı, belgelenmeli ve bu verilerin belirlenen kalite standartlarını karşıladığından emin olunmalıdır. Kalite metrikleri ve sapma payları göz önünde bulundurulur.",
      en: "The organization shall define and document requirements for data quality and ensure that data used to develop and operate the AI system meet those requirements, checking metrics and bias indicators."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "data-collection-cleaning-labeling", relationType: "direct" }
    ]
  },
  "A.7.5": {
    clause: "A.7.5",
    title: {
      tr: "Veri kaynağı/kökeni",
      en: "Data provenance"
    },
    type: "control",
    summary: {
      tr: "Yapay zekâ sisteminde kullanılan verilerin köken ve geçmiş bilgilerinin yaşam döngüsü boyunca kayıt altına alınması.",
      en: "Recording the provenance and history of data used in AI systems over their life cycles."
    },
    description: {
      tr: "Yapay zekâ sistemlerinde kullanılan verilerin kökenini (provenance/lineage) ve geçmişini veri ile YZ sisteminin yaşam döngüsü boyunca kaydetmek için bir süreç tanımlanmalı ve belgelenmelidir. Bu süreç verinin tüm dönüşüm adımlarını kapsar.",
      en: "The organization shall define and document a process for recording the provenance of data used in its AI systems over the life cycles of the data and the AI system, tracking all pipelines."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "data-collection-cleaning-labeling", relationType: "direct" }
    ]
  },
  "A.7.6": {
    clause: "A.7.6",
    title: {
      tr: "Veri hazırlığı",
      en: "Data preparation"
    },
    type: "control",
    summary: {
      tr: "Veri hazırlama adımlarının ve kullanılan yöntemlerin seçim kriterlerinin belgelenmesi.",
      en: "Documenting criteria for selecting data preparations and the preparation methods used."
    },
    description: {
      tr: "Kuruluş, veri hazırlığı için seçim kriterlerini ve kullanılacak veri hazırlama yöntemlerini (normalizasyon, scaling, imputation, etiketleme vb.) tanımlamalı ve belgelemelidir. Hatalı veri hazırlığının sistem hatalarına yol açabileceği unutulmamalıdır.",
      en: "The organization shall define and document its criteria for selecting data preparations and the data preparation methods to be used (imputation, scaling, encoding) to prevent downstream failures."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "data-collection-cleaning-labeling", relationType: "direct" }
    ]
  },
  "A.6.2.2": {
    clause: "A.6.2.2",
    title: {
      tr: "Yapay zekâ sistemi gereksinimleri ve özellikleri",
      en: "AI system requirements and specification"
    },
    type: "control",
    summary: {
      tr: "Yeni YZ sistemleri veya mevcut sistemlerdeki önemli geliştirmeler için gereksinimlerin belirlenmesi ve belgelenmesi.",
      en: "Specifying and documenting requirements for new AI systems or material enhancements to existing systems."
    },
    description: {
      tr: "Yeni yapay zekâ sistemleri veya mevcut sistemlere yapılan önemli geliştirmeler için gereksinimler belirtilmeli ve belgelenmelidir. Bu gereksinimler modelin eğitilme biçimini ve veri ihtiyaçlarını da kapsar.",
      en: "The organization shall specify and document requirements for new AI systems or material enhancements to existing systems. This spans the entire life cycle, detailing objectives and model criteria."
    },
    page: 18,
    relatedActivities: [
      { activitySlug: "model-training-hyperparameter-tuning", relationType: "direct" }
    ]
  },
  "A.6.2.3": {
    clause: "A.6.2.3",
    title: {
      tr: "Yapay zekâ sistemi tasarım ve geliştirme belgelendirmesi",
      en: "Documentation of AI system design and development"
    },
    type: "control",
    summary: {
      tr: "Tasarım ve geliştirme süreçlerinin organizasyonel hedefler ve gereksinimler temelinde belgelenmesi.",
      en: "Documenting AI system design and development based on organizational objectives and specs."
    },
    description: {
      tr: "Yapay zekâ sistemi tasarımı ve geliştirmesi; organizasyonel hedefler, belgelenmiş gereksinimler ve şartname kriterlerine dayanarak dokümante edilmelidir. Mimari seçimler, kullanılan algoritmalar ve güvenlik analizleri bu dokümantasyona dahildir.",
      en: "The organization shall document the AI system design and development based on organizational objectives, documented requirements, and specification criteria. Includes algorithm choice and cyber risks."
    },
    page: 18,
    relatedActivities: [
      { activitySlug: "model-training-hyperparameter-tuning", relationType: "direct" }
    ]
  },
  "A.6.2.4": {
    clause: "A.6.2.4",
    title: {
      tr: "Yapay zekâ sistemi doğrulama ve geçerleme",
      en: "AI system verification and validation"
    },
    type: "control",
    summary: {
      tr: "Sistem için doğrulama (verification) ve geçerleme (validation) önlemlerinin ve kullanım kriterlerinin tanımlanması.",
      en: "Defining and documenting verification and validation measures and criteria."
    },
    description: {
      tr: "Yapay zekâ sistemi için doğrulama ve geçerleme önlemleri tanımlanmalı, belgelenmeli ve bunların kullanımı için kriterler belirtilmelidir. Test veri kümelerinin operasyonel ortamı temsil etme gücü, güvenilirlik ve hata payları bu kapsama girer.",
      en: "The organization shall define and document verification and validation measures for the AI system and specify criteria for their use, including error rates, fairness audits, and bias checks."
    },
    page: 18,
    relatedActivities: [
      { activitySlug: "performance-measurement-validation", relationType: "direct" }
    ]
  },
  "A.6.2.5": {
    clause: "A.6.2.5",
    title: {
      tr: "Yapay zekâ sistemi dağıtımı",
      en: "AI system deployment"
    },
    type: "control",
    summary: {
      tr: "Dağıtım planının belgelenmesi ve dağıtım öncesi gereksinimlerin karşılandığının doğrulanması.",
      en: "Documenting a deployment plan and ensuring pre-release requirements are met."
    },
    description: {
      tr: "Kuruluş, bir dağıtım planını belgelemeli ve dağıtım öncesinde uygun gereksinimlerin (sürüm kriterleri, test başarı durumları, yetkilendirmeler) karşılandığından emin olmalıdır. Model ve yazılım bileşenlerinin bağımsız dağıtılabilirliği göz önünde bulundurulur.",
      en: "The organization shall document a deployment plan and ensure that appropriate requirements (release criteria, sign-offs, shadow staging) are met prior to deployment."
    },
    page: 18,
    relatedActivities: [
      { activitySlug: "model-deployment-production", relationType: "direct" }
    ]
  },
  "A.6.2.6": {
    clause: "A.6.2.6",
    title: {
      tr: "Yapay zekâ sistemi işletimi ve izlenmesi",
      en: "AI system operation and monitoring"
    },
    type: "control",
    summary: {
      tr: "YZ sisteminin sürekli çalıştırılması, performans takibi ve izlenmesi için gerekli unsurların belirlenmesi.",
      en: "Defining elements for ongoing operation and system/performance monitoring of the AI system."
    },
    description: {
      tr: "Yapay zekâ sisteminin sürekli işletimi için gerekli unsurlar tanımlanmalı ve belgelenmelidir. Bu unsurlar en azından sistem ve performans izlemeyi, veri/kavram sapması (drift) kontrolünü, onarımları, güncellemeleri ve desteği içermelidir.",
      en: "The organization shall define and document the necessary elements for the ongoing operation of the AI system (performance monitoring, data/concept drift alerts, repairs, and support)."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "drift-detection-performance-monitoring", relationType: "direct" }
    ]
  },
  "A.6.2.7": {
    clause: "A.6.2.7",
    title: {
      tr: "Yapay zekâ sistemi teknik dokümantasyonu",
      en: "AI system technical documentation"
    },
    type: "control",
    summary: {
      tr: "Farklı paydaş kategorileri için uygun teknik dokümantasyon gereksinimlerinin karşılanması.",
      en: "Determining and providing necessary AI system technical documentation for stakeholders."
    },
    description: {
      tr: "Kullanıcılar, iş ortakları, denetim otoriteleri gibi ilgili her paydaş kategorisi için ne tür teknik dokümantasyonun gerekli olduğu belirlenmeli ve bu teknik dokümantasyon uygun biçimde sağlanmalıdır. Genel tanım, kullanım talimatları ve kısıtlar bu kapsamdadır.",
      en: "The organization shall determine what AI system technical documentation is needed for each relevant category of interested parties (users, partners, auditors) and provide it accordingly."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "technical-records-transparency", relationType: "direct" }
    ]
  },
  "A.6.2.8": {
    clause: "A.6.2.8",
    title: {
      tr: "Yapay zekâ sistemi olay loglarının kaydedilmesi",
      en: "AI system recording of event logs"
    },
    type: "control",
    summary: {
      tr: "Yaşam döngüsü boyunca, özellikle sistem kullanımdayken otomatik olay kaydının tutulması.",
      en: "Determining phases and enabling automated event log recording for the AI system."
    },
    description: {
      tr: "Yapay zekâ sisteminin hangi aşamalarında olay loglarının (event logs) etkinleştirilmesi gerektiği belirlenmeli, ancak en azından sistem kullanımdayken (canlı ortamda tahmin üretirken) olay günlüklerinin otomatik olarak tutulması sağlanmalıdır.",
      en: "The organization shall determine at which phases of the AI system life cycle event logging should be enabled, but at the minimum when the AI system is in operational use."
    },
    page: 19,
    relatedActivities: [
      { activitySlug: "technical-records-transparency", relationType: "direct" }
    ]
  },
  "10.1": {
    clause: "10.1",
    title: {
      tr: "Sürekli iyileştirme",
      en: "Continual improvement"
    },
    type: "clause",
    summary: {
      tr: "AIMS'in ve YZ sistemlerinin uygunluğunun, yeterliliğinin ve etkinliğinin sürekli iyileştirilmesi.",
      en: "Continually improving the suitability, adequacy, and effectiveness of the AIMS and AI systems."
    },
    description: {
      tr: "Kuruluş, yapay zekâ yönetim sisteminin ve bu kapsamda geliştirilen YZ sistemlerinin uygunluğunu, yeterliliğini ve etkinliğini sürekli olarak iyileştirmelidir. İyileştirmeler izleme sonuçlarına ve geri bildirimlere dayanır.",
      en: "The organization shall continually improve the suitability, adequacy, and effectiveness of the AI management system and deployed models, responding to monitoring outputs."
    },
    page: 15,
    relatedActivities: [
      { activitySlug: "model-update-retraining", relationType: "direct" }
    ]
  },
  "10.2": {
    clause: "10.2",
    title: {
      tr: "Uygunsuzluk ve düzeltici faaliyet",
      en: "Nonconformity and corrective action"
    },
    type: "clause",
    summary: {
      tr: "Ortaya çıkan uygunsuzlukların belirlenmesi, sebeplerinin analiz edilmesi ve düzeltici faaliyetlerin uygulanması.",
      en: "Reacting to nonconformities, determining causes, and implementing corrective actions."
    },
    description: {
      tr: "Bir uygunsuzluk ortaya çıktığında (ör. canlıda hatalı/etik dışı model davranışı veya kesinti), kuruluş buna tepki vermeli, kontrol altına almalı ve sonuçlarıyla ilgilenmelidir. Uygunsuzluğun kök nedenlerini analiz ederek düzeltici faaliyetleri devreye almalıdır.",
      en: "When a nonconformity occurs (e.g., failure, biased outputs, drift), the organization shall take action to control it, analyze root causes, and run corrective loops."
    },
    page: 16,
    relatedActivities: [
      { activitySlug: "model-update-retraining", relationType: "direct" }
    ]
  },
  "6.1.2": {
    clause: "6.1.2",
    title: {
      tr: "Yapay zekâ risk değerlendirmesi",
      en: "AI risk assessment"
    },
    type: "clause",
    summary: {
      tr: "YZ risk değerlendirme sürecinin kurulması, risk analizlerinin yapılması ve seviyelerinin belirlenmesi.",
      en: "Defining and establishing a consistent, repeatable AI risk assessment process."
    },
    description: {
      tr: "Kuruluş, AI politikası ve hedefleriyle uyumlu bir AI risk değerlendirme süreci tanımlamalı ve kurmalıdır. Süreç, tekrarlanabilir olmalı, risklerin organizasyon, bireyler ve toplum üzerindeki sonuçlarını ve olasılıklarını analiz etmelidir.",
      en: "The organization shall define and establish an AI risk assessment process that produces consistent, valid, and comparable results, analyzing impact and likelihood."
    },
    page: 9,
    relatedActivities: [
      { activitySlug: "risk-analysis-impact-assessment", relationType: "direct" }
    ]
  },
  "6.1.3": {
    clause: "6.1.3",
    title: {
      tr: "Yapay zekâ risk işleme",
      en: "AI risk treatment"
    },
    type: "clause",
    summary: {
      tr: "Risk değerlendirme sonuçlarına göre risk işleme seçeneklerinin belirlenmesi ve kontrol seçimi.",
      en: "Defining a treatment process, determining controls, and developing a SoA."
    },
    description: {
      tr: "Risk değerlendirme sonuçlarını dikkate alarak, kuruluş risk işleme seçeneklerini belirlemelidir. Gerekli tüm kontrollerin seçilmesini sağlamak için bu kontroller Annex A'daki referans kontrollerle karşılaştırılmalı ve bir Uygulanabilirlik Bildirgesi (SoA) hazırlanmalıdır.",
      en: "Taking risk assessment results into account, the organization shall define a risk treatment process to select options, compare with Annex A controls, and generate the SoA."
    },
    page: 9,
    relatedActivities: [
      { activitySlug: "risk-analysis-impact-assessment", relationType: "direct" }
    ]
  },
  "6.1.4": {
    clause: "6.1.4",
    title: {
      tr: "Yapay zekâ sistemi etki değerlendirmesi",
      en: "AI system impact assessment"
    },
    type: "clause",
    summary: {
      tr: "YZ sisteminin bireyler, gruplar ve toplum üzerindeki potansiyel etkilerini değerlendirmek için etki analizi yapılması.",
      en: "Defining a process to assess potential consequences to individuals and societies."
    },
    description: {
      tr: "Kuruluş, bir AI sisteminin geliştirilmesi, sağlanması veya kullanılması sonucunda bireyler, gruplar ve toplum üzerinde ortaya çıkabilecek potansiyel etkileri değerlendirmek için resmi ve belgelenmiş bir süreç tanımlamalıdır. Çevresel, yasal ve etik boyutlar bu kapsamda değerlendirilir.",
      en: "The organization shall define a process for assessing the potential consequences for individuals, groups, and societies resulting from the deployment, use, or misuse of AI."
    },
    page: 10,
    relatedActivities: [
      { activitySlug: "risk-analysis-impact-assessment", relationType: "direct" }
    ]
  },
  "8.2": {
    clause: "8.2",
    title: {
      tr: "Yapay zekâ risk değerlendirmesi (Operasyonel)",
      en: "AI risk assessment (Operational)"
    },
    type: "clause",
    summary: {
      tr: "Risk değerlendirmelerinin planlı aralıklarla veya önemli değişiklikler olduğunda tekrarlanması.",
      en: "Performing operational AI risk assessments at planned intervals or major changes."
    },
    description: {
      tr: "Kuruluş, planlanmış aralıklarla veya önemli değişiklikler önerildiğinde ya da meydana geldiğinde yapay zekâ risk değerlendirmelerini 6.1.2 ile uyumlu olarak gerçekleştirmeli ve sonuçlarını belgelemelidir.",
      en: "The organization shall perform AI risk assessments in accordance with 6.1.2 at planned intervals or when significant changes are proposed or occur."
    },
    page: 13,
    relatedActivities: [
      { activitySlug: "risk-analysis-impact-assessment", relationType: "direct" }
    ]
  },
  "8.4": {
    clause: "8.4",
    title: {
      tr: "Yapay zekâ sistemi etki değerlendirmesi (Operasyonel)",
      en: "AI system impact assessment (Operational)"
    },
    type: "clause",
    summary: {
      tr: "YZ sistemi etki değerlendirme sürecinin operasyonel olarak yürütülmesi ve sonuçların belgelenmesi.",
      en: "Performing operational AI system impact assessments at planned intervals."
    },
    description: {
      tr: "Kuruluş, planlanmış aralıklarla veya önemli değişiklikler önerildiğinde ya da meydana geldiğinde yapay zekâ sistemi etki değerlendirmelerini 6.1.4 ile uyumlu olarak gerçekleştirmeli ve etki analizlerinin sonuçlarını belgelemelidir.",
      en: "The organization shall perform AI system impact assessments in accordance with 6.1.4 at planned intervals or when significant changes occur, and retain documentation."
    },
    page: 14,
    relatedActivities: [
      { activitySlug: "risk-analysis-impact-assessment", relationType: "direct" }
    ]
  }
};
