/* assets/js/i18n.js */
/* 四国语言完整版本 · 默认韩语 */

const i18n = {

    /* ===================== 韩文（默认） ===================== */
    ko: {
        nav: { home: "홈", about: "회사소개", services: "서비스", contact: "문의하기" },

        home: {
            heroTitle: "기업 운영을 위한 IT 시스템",
            heroDesc: "VioniaSoft는 시스템 통합(SI), 서비스 관리(SM), Web·디지털 솔루션을 핵심으로 하는 IT 서비스 기업입니다. 우리는 비즈니스 구조와 실제 운영 요구를 기반으로 안정적이고 확장 가능하며 장기 유지가 가능한 IT 시스템을 설계·구축하여, 급변하는 시장 환경 속에서도 기술적 확실성을 제공합니다.",
            heroTrust: "Samsung Fire · Woori Bank · Lama 등 국내외 기업이 신뢰하는 파트너",

            clientsTitle: "신뢰하는 고객사",
            statSatisfaction: "고객 만족도",
            statSupport: "운영 지원",
            statSuffix: "개국",
            statCountries: "한국 · 중국 · 프랑스",

            ctaText: "시스템 통합, 서비스 관리, 웹 솔루션이 필요하신가요?",
            ctaBtn: "무료 상담 받기",

            valueTitle: "핵심 가치",
            value1Title: "비즈니스 중심의 시스템 설계",
            value1Desc: "단순한 기술 요구가 아닌, 실제 업무 흐름과 조직 구조를 출발점으로 시스템을 설계합니다.",
            value2Title: "안정성과 확장성의 균형",
            value2Desc: "초기 설계 단계부터 향후 확장과 유지 비용을 고려하여 장기적인 기술 부담을 최소화합니다.",
            value3Title: "장기 협업을 전제로 한 서비스 철학",
            value3Desc: "모든 프로젝트를 일회성 납품이 아닌, 지속적인 협력 관계의 시작으로 인식합니다.",

            footerDesc: "Enterprise IT & Smart Office Solutions<br>시스템 개발 • 운영 및 유지보수 • 디지털 전환<br>Powered by Korea, Designed for the World"
        },

        about: {
            title: "회사 개요",
            desc: "VioniaSoft는 시스템 통합 및 IT 서비스 관리 전문 기업입니다. 기술 기준·프로젝트 프로세스·서비스 방법론은 전문 IT 서비스 기업 수준으로 운영하고 있습니다. 중소기업 및 성장 단계의 조직을 대상으로, 구조적으로 명확하고 지속 가능한 IT 솔루션을 제공합니다.",

            statDepts: "핵심 부서",
            statSatisfaction: "고객 만족도",
            statSuffix: "개국",
            statCountries: "한국 · 중국 · 프랑스",

            orgStructure: "조직 구조",

            valueTitle: "창립자 겸 대표",
            valueDesc: "회사 전략적 비전 수립 및 경영 총괄",

            value1Title: "SI 사업부",
            value1Desc: "시스템 통합 및 맞춤형 솔루션 제공",

            value2Title: "개발팀",
            value2Desc: "시스템 아키텍처 설계 및 개발",
            
            value3Title: "디자인팀",
            value3Desc: "UI/UX 디자인 및 최적화",

            value4Title: "고객지원팀",
            value4Desc: "IT 서비스 관리 및 고객 피드백 대응"
        },

        services: {

            title: "비즈니스 성장을 위한 통합 IT 서비스",

            siTitle: "시스템 통합 (SI)",
            siDesc: "요구 분석부터 설계, 개발, 통합까지 전 과정을 아우르는 시스템 통합 서비스를 제공합니다. 부분 최적화로 인한 복잡도 증가를 방지하기 위해 전체 아키텍처의 일관성을 중시합니다.",
            siApply: "적용 분야:",
            siList: ["신규 시스템 구축", "기존 시스템 통합", "사업 확장 단계의 시스템 재구성"],

            smTitle: "서비스 관리 (SM)",
            smDesc: "서비스 관리는 단순 유지보수가 아닌, 시스템의 장기 안정성과 운영 품질을 보장하는 핵심 요소입니다.",
            smFocus: "중점 관리 요소:",
            smList: ["시스템 안정성", "운영 효율", "장기 운영 비용 관리"],

            webTitle: "웹 & 디지털 솔루션",
            webDesc1: "Web 시스템은 단순한 정보 제공을 넘어, 고객·파트너와의 주요 비즈니스 접점입니다.",
            webDesc2: "VioniaSoft는 브랜드 표현, 사용자 경험, 시스템 확장성을 동시에 고려합니다.",
            webFocus: "주요 고려 요소:",
            webList: ["명확한 브랜드 및 정보 구조","사용자 중심의 UX 설계","확장 및 유지가 가능한 기술 구조"],
            webDesc3: "디지털 채널이 장기적인 사업 성장에 지속적으로 기여하도록 설계합니다.",

            processTitle: "실제 업무 방식 / 프로젝트 프로세스",
            p1Title: "비즈니스 이해 및 요구 정리",
            p1Desc: "프로젝트 초기 단계에서 고객의 비즈니스 배경, 조직 구조, 기존 시스템을 종합적으로 분석합니다.",

            p2Title: "시스템 구조 및 기술 설계",
            p2Desc: "요구사항을 기반으로 전체 시스템 구조와 기술 방향을 설계합니다.",
            p2List: [
                "전체 시스템 아키텍처 설계",
                "데이터 흐름 및 시스템 간 연계 정리",
                "기술 스택 및 확장성 검토"
            ],
            p2Note: "모든 기술적 선택은 단기 속도가 아닌 장기 안정성과 유지 관점에서 결정됩니다.",

            p3Title: "구현 및 단계별 검증",
            p3List: [
                "기능 구현과 구조 검증 병행",
                "핵심 모듈 우선 구현 및 확인",
                "지속적인 커뮤니케이션과 조정"
            ],

            p4Title: "인수인계 및 운영 연계",
            p4Desc: "시스템 오픈 이후의 실제 운영 환경을 고려하여 인수인계 및 초기 안정화를 지원합니다.",
            p4List: [
                "운영 인수인계",
                "기본 관리 기준 수립",
                "초기 운영 안정화 지원"
            ],

            p5Title: "지속 관리 및 개선 (SM 연계)",
            p5Desc: "장기 운영이 필요한 경우, 서비스 관리 단계로 자연스럽게 연계하여 지속적인 개선을 지원합니다."
        },

        contact: {
            title: "문의하기",
            desc1: "장기적인 관점에서 신뢰할 수 있는 IT 파트너",
            desc2: "VioniaSoft는 명확한 커뮤니케이션과 합리적인 의사결정을 통해 지속 가능한 협업을 지향합니다.",

            form: {
                name: "성명 *",
                email: "이메일 *",
                company: "회사명 (선택)",

                type: "문의 유형 *",
                selectType: "문의 유형을 선택해주세요.",
                type1: "시스템 통합 / SI",
                type2: "서비스 관리 / SM",
                type3: "Web · 디지털 솔루션",
                type4: "기타 문의",

                message: "문의 내용 *",
                submit: "문의 제출",

                nameRequired: "이름을 입력해주세요.",
                emailRequired: "이메일을 입력해주세요.",
                emailInvalid: "이메일 형식이 올바르지 않습니다.",
                typeRequired: "문의 유형을 선택해주세요.",
                messageRequired: "문의 내용을 입력해주세요."
            },

            sendingTitle: "전송중...",

            successTitle: "전송 완료",
            successDesc: "문의가 정상적으로 접수되었습니다.",
          
            errorTitle: "전송 실패",
            errorDesc: "잠시 후 다시 시도해주세요."
        }
    },

    /* ===================== English ===================== */
    en: {
        nav: { home: "Home", about: "About", services: "Services", contact: "Contact" },

        home: {
            heroTitle: "IT Systems for Business Operations",
            heroDesc: "VioniaSoft is an IT service company specializing in System Integration (SI), Service Management (SM), and Web & Digital Solutions. We design and build stable, scalable, and maintainable IT systems based on real business structures and operational requirements, enabling organizations to maintain technical certainty in rapidly changing markets.",
            heroTrust: "Trusted by Samsung Fire, Woori Bank, Lama and global enterprises",

            clientsTitle: "Trusted Clients",
            statSatisfaction: "Client Satisfaction",
            statSupport: "Operations Support",
            statSuffix: "Countries",
            statCountries: "Korea · China · France",

            ctaText: "Need system integration, service management, or web solutions?",
            ctaBtn: "Get Free Consultation",

            valueTitle: "Core Values",
            value1Title: "Business-Oriented System Design",
            value1Desc: "We begin with business processes and organizational structures rather than isolated technical requirements.",
            value2Title: "Balance Between Stability and Scalability",
            value2Desc: "We consider future expansion and maintenance costs from the earliest design stage to avoid long-term technical debt.",
            value3Title: "Long-Term Partnership Philosophy",
            value3Desc: "We view every project as the starting point of a long-term partnership, not a one-time delivery.",

            footerDesc: "Enterprise IT & Smart Office Solutions<br>System Development • Operation & Maintenance • Digital Transformation<br>Powered by Korea, Designed for the World"
        },

        about: {
            title: "Company Overview",
            desc: "VioniaSoft is an IT service company specializing in system integration and IT service management. Our technical standards, project processes, and service methodologies are built to professional enterprise-level expectations. We provide clear, sustainable IT solutions for small and growing organizations.",

            statDepts: "Core Teams",
            statSatisfaction: "Client Satisfaction",
            statSuffix: "Countries",
            statCountries: "Korea · China · France",
            
            orgStructure: "Organization Structure",
            
            valueTitle: "Founder & Principal",
            valueDesc: "Overall management and establishment of strategic vision",

            value1Title: "SI Division",
            value1Desc: "System integration and customized solution delivery",

            value2Title: "Development Team",
            value2Desc: "System architecture design and software development",

            value3Title: "Design Team",
            value3Desc: "UI/UX design and experience optimization",

            value4Title: "Customer Support Team",
            value4Desc: "IT service management and customer feedback handling"

        },

        services: {
            title: "Integrated IT Services for Business Growth",

            siTitle: "System Integration (SI)",
            siDesc: "We provide end-to-end system integration services covering requirement analysis, system design, implementation, and integration, emphasizing architectural consistency across systems.",
            siApply: "Applicable to:",
            siList: ["New system development", "Integration of existing systems", "System restructuring during business expansion"],

            smTitle: "Service Management (SM)",
            smDesc: "Service management is not simple maintenance, but a critical function for long-term system stability and operational quality.",
            smFocus: "Key focus areas:",
            smList: ["System stability", "Operational efficiency", "Long-term cost control"],

            webTitle: "Web & Digital Solutions",
            webDesc1: "Web systems are not merely information platforms, but essential business touchpoints with customers and partners.",
            webDesc2: "We balance brand expression, user experience, and technical scalability.",
            webFocus: "Our focus:",
            webList: [
                "Clear brand and information architecture",
                "User-centered experience design",
                "Scalable and maintainable technical structures"
            ],
            webDesc3: "Ensuring digital channels continue to deliver value as businesses grow.",

            processTitle: "Work Methodology / Project Process",
            p1Title: "Business Understanding & Requirement Definition",
            p1Desc: "We begin by deeply understanding the client's business context, organizational structure, and existing systems.",

            p2Title: "System Architecture & Technical Design",
            p2Desc: "Business requirements are translated into system architecture and technical solutions.",
            p2List: [
                "Overall system architecture design",
                "Data flow and system interaction mapping",
                "Technology selection and scalability evaluation"
            ],
            p2Note: "All technical decisions prioritize long-term stability and maintainability over short-term speed.",

            p3Title: "Implementation & Phase Validation",
            p3List: [
                "Parallel functional development and structural validation",
                "Early delivery and confirmation of key modules",
                "Continuous communication and adjustment"
            ],

            p4Title: "Handover & Operational Integration",
            p4Desc: "System delivery includes preparation for real operational environments.",
            p4List: [
                "Operational handover",
                "Establishment of management standards",
                "Initial operational stabilization support"
            ],

            p5Title: "Continuous Management & Improvement (SM Integration)",
            p5Desc: "For long-term support needs, projects transition naturally into service management for ongoing optimization."
        },

        contact: {
            title: "Contact",
            desc1: "A long-term IT partner built on trust",
            desc2: "VioniaSoft values clear communication, sound decision-making, and sustainable collaboration.",

            form: {
                name: "Name *",
                email: "Email *",
                company: "Company (Optional)",

                type: "Inquiry Type *",
                selectType: "Please select a type",
                type1: "System Integration / SI",
                type2: "Service Management / SM",
                type3: "Web & Digital Solutions",
                type4: "Other inquiries",

                message: "Inquiry Details *",
                submit: "Submit Inquiry",

                nameRequired: "Please enter your name.",
                emailRequired: "Please enter your email.",
                emailInvalid: "Please enter a valid email address.",
                typeRequired: "Please select an inquiry type.",
                messageRequired: "Please enter your message."

            },

            sendingTitle: "Sending...",

            successTitle: "Message Sent",
            successDesc: "Your inquiry has been successfully submitted.",
          
            errorTitle: "Submission Failed",
            errorDesc: "Please try again later."
        }
    },

    /* ===================== 中文 ===================== */
    zh: {
        nav: { home: "首页", about: "关于我们", services: "服务", contact: "联系我们" },

        home: {
            heroTitle: "面向企业运营的 IT 系统",
            heroDesc: "VioniaSoft 是一家以系统集成（SI）、服务管理（SM）以及 Web·数字解决方案为核心的 IT 服务企业。我们从业务结构与实际运营需求出发，设计并构建稳定、可扩展、具备长期可维护性的 IT 系统，帮助企业在持续变化的市场环境中保持技术确定性。",
            heroTrust: "Samsung Fire · Woori Bank · Lama 等国内外企业信赖的合作伙伴",

            clientsTitle: "信赖的客户",
            statSatisfaction: "客户满意度",
            statSupport: "运维支持",
            statSuffix: "个国家",
            statCountries: "韩国 · 中国 · 法国",

            ctaText: "需要系统集成、服务管理或 Web 解决方案？",
            ctaBtn: "免费咨询",

            valueTitle: "核心价值",
            value1Title: "业务导向的系统设计",
            value1Desc: "我们以业务流程与组织结构为起点，而非单点技术需求，确保系统真正服务于企业运营。",
            value2Title: "稳定性与扩展性的平衡",
            value2Desc: "在系统初期设计阶段即考虑未来扩展与维护成本，避免因短期决策造成长期技术负担。",
            value3Title: "长期合作的服务理念",
            value3Desc: "我们将项目视为长期合作关系的起点，而非一次性交付。",

            footerDesc: "Enterprise IT & Smart Office Solutions<br>系统开发 • 运维管理 • 数字化转型<br>Powered by Korea, Designed for the World"
        },

        about: {
            title: "公司概述",
            desc: "VioniaSoft 是一家专注于系统集成与 IT 服务管理的技术服务企业。在技术标准、项目流程及服务方法论上，始终以专业 IT 服务企业的要求进行构建。致力于为中小型企业及成长型组织提供结构清晰、可持续运作的 IT 解决方案。",

            statDepts: "核心部门",
            statSatisfaction: "客户满意度",
            statSuffix: "个国家",
            statCountries: "韩国 · 中国 · 法国",
            
            orgStructure: "组织架构",

            valueTitle: "创始人兼负责人",
            valueDesc: "负责公司整体战略规划与经营管理",

            value1Title: "SI 事业部",
            value1Desc: "系统集成及定制化解决方案交付",

            value2Title: "开发团队",
            value2Desc: "系统架构设计与软件开发",

            value3Title: "设计团队",
            value3Desc: "UI/UX 设计与用户体验优化",

            value4Title: "客户支持团队",
            value4Desc: "IT 服务管理与客户反馈响应"
        },

        services: {
            title: "助力业务成长的综合 IT 服务",

            siTitle: "系统集成（SI）",
            siDesc: "VioniaSoft 提供覆盖需求分析、系统设计、开发实施与系统整合的系统集成服务。我们强调整体架构一致性与系统间协同，避免因局部优化导致整体复杂度上升。",
            siApply: "适用于：",
            siList: ["新系统建设", "既有系统整合", "业务扩展阶段的系统重构"],

            smTitle: "服务管理（SM）",
            smDesc: "服务管理并非单纯的维护工作，而是系统长期稳定运行的关键。VioniaSoft 通过监控、问题管理、持续改进等方式，确保 IT 系统在运营阶段保持可控状态。",
            smFocus: "核心关注点：",
            smList: ["系统稳定性", "运维效率", "长期运营成本控制"],

            webTitle: "Web 与数字化解决方案",
            webDesc1: "Web 系统不仅是信息展示平台，更是企业与客户、合作伙伴之间的重要业务接触点。",
            webDesc2: "VioniaSoft 在 Web 与数字解决方案中，同时关注品牌表达、用户体验与系统扩展能力。",
            webFocus: "我们的关注点：",
            webList: [
                "清晰的品牌与信息结构",
                "以用户为中心的体验设计",
                "可扩展、可维护的技术架构"
            ],
            webDesc3: "确保数字渠道能够在长期业务发展中持续发挥价值。",

            processTitle: "实际工作方式 / 项目流程",
            p1Title: "业务理解与需求整理",
            p1Desc: "项目开始阶段，我们首先对客户的业务背景、组织结构及现有系统进行充分理解，而不仅仅停留在功能需求层面。这一阶段的目标，是明确系统在整体业务中的角色与边界，为后续技术决策奠定基础。",

            p2Title: "系统结构与技术方案设计",
            p2Desc: "在明确业务目标后，我们将需求转化为系统结构与技术方案，包括：",
            p2List: [
                "系统整体架构设计",
                "数据流与系统间关系梳理",
                "技术选型与扩展性评估"
            ],
            p2Note: "所有技术决策都会基于稳定性、可维护性与长期扩展性进行权衡，而非短期实现速度。",

            p3Title: "实施与阶段性验证",
            p3List: [
                "功能实现与结构验证并行",
                "关键模块优先交付与确认",
                "持续沟通与调整"
            ],

            p4Title: "交付与运营 연계",
            p4Desc: "系统交付并非项目的终点。在交付阶段，我们同步考虑后续运营与维护需求，确保系统能够顺利进入实际使用环境。",
            p4List: [
                "系统运营交接",
                "基础运维管理标准制定",
                "初期运营稳定支持"
            ],

            p5Title: "持续管理及改善（SM 연계）",
            p5Desc: "对于需要长期运营支持的客户，我们将项目自然衔接至 서비스 관리(SM)阶段，通过持续监控与改进，确保系统长期稳定运行。"
        },

        contact: {
            title: "联系我们",
            desc1: "以长期合作为目标的 IT 技术伙伴",
            desc2: "VioniaSoft 注重清晰沟通、理性决策与可持续的协作方式。",

            form: {
                name: "姓名 *",
                email: "邮箱 *",
                company: "公司（可选）",

                type: "咨询类型 *",
                selectType: "请选择咨询类型",
                type1: "系统集成 / SI",
                type2: "服务管理 / SM",
                type3: "Web / 数字解决方案",
                type4: "其他问题咨询",

                message: "咨询内容 *",
                submit: "提交咨询",

                nameRequired: "请输入姓名。",
                emailRequired: "请输入邮箱。",
                emailInvalid: "请输入有效的邮箱地址。",
                typeRequired: "请选择咨询类型。",
                messageRequired: "请输入咨询内容。"

            },

            sendingTitle: "传送中...",

            successTitle: "提交成功",
            successDesc: "您的咨询已成功发送。",
          
            errorTitle: "提交失败",
            errorDesc: "请稍后再试。"
        }
    },

    /* ===================== Français ===================== */
    fr: {
        nav: { home: "Accueil", about: "À propos", services: "Services", contact: "Contact" },

        home: {
            heroTitle: "Systèmes IT pour les opérations de l'entreprise",
            heroDesc: "VioniaSoft est une société de services IT spécialisée en intégration de systèmes (SI), gestion des services (SM) et solutions Web & digitales. Nous concevons des systèmes stables, évolutifs et maintenables, fondés sur les structures métier réelles et les besoins opérationnels.",
            heroTrust: "Partenaire de confiance de Samsung Fire, Woori Bank, Lama et d'entreprises internationales",

            clientsTitle: "Clients de confiance",
            statSatisfaction: "Satisfaction Client",
            statSupport: "Support Opérationnel",
            statSuffix: "pays",
            statCountries: "Corée · Chine · France",

            ctaText: "Besoin d'intégration de systèmes, de gestion de services ou de solutions Web ?",
            ctaBtn: "Consultation gratuite",

            valueTitle: "Valeurs clés",
            value1Title: "Conception orientée métier",
            value1Desc: "Nous partons des processus métier et de l'organisation, et non de simples besoins techniques.",
            value2Title: "Équilibre entre stabilité et évolutivité",
            value2Desc: "Les coûts de maintenance et d'évolution sont pris en compte dès la phase de conception.",
            value3Title: "Philosophie de partenariat à long terme",
            value3Desc: "Chaque projet est considéré comme le début d'une collaboration durable.",

            footerDesc: "Enterprise IT & Smart Office Solutions<br>Développement • Exploitation • Transformation numérique<br>Powered by Korea, Designed for the World"
        },

        about: {
            title: "Présentation de l'entreprise",
            desc: "VioniaSoft est spécialisée en intégration de systèmes et gestion des services IT. L'entreprise applique des standards professionnels équivalents aux sociétés IT établies. Nous accompagnons les PME et organisations en croissance avec des solutions IT durables.",

            statDepts: "Équipes",
            statSatisfaction: "Satisfaction Client",
            statSuffix: "pays",
            statCountries: "Corée · Chine · France",
            
            orgStructure: "Structure organisationnelle",
            
            valueTitle: "Fondateur & Responsable",
            valueDesc: "Définition de la vision stratégique et gestion globale de l'entreprise",

            value1Title: "Division SI",
            value1Desc: "Intégration de systèmes et fourniture de solutions sur mesure",

            value2Title: "Équipe de Développement",
            value2Desc: "Conception de l'architecture système et développement logiciel",

            value3Title: "Équipe Design",
            value3Desc: "Conception UI/UX et optimisation de l'expérience utilisateur",

            value4Title: "Support Client",
            value4Desc: "Gestion des services IT et traitement des retours clients"

        },

        services: {
            title: "Des services IT intégrés au service de la croissance des entreprises",

            siTitle: "Intégration de systèmes (SI)",
            siDesc: "Nous assurons des services complets d'intégration, de l'analyse à l'implémentation, en garantissant la cohérence globale.",
            siApply: "Applicable à :",
            siList: ["Nouveaux systèmes", "Intégration de systèmes existants", "Refonte lors de phases de croissance"],

            smTitle: "Gestion des services (SM)",
            smDesc: "La gestion des services garantit la stabilité et la qualité opérationnelle sur le long terme.",
            smFocus: "Axes principaux :",
            smList: ["Stabilité du système", "Efficacité opérationnelle", "Maîtrise des coûts"],

            webTitle: "Solutions Web et Digitales",
            webDesc1: "Les systèmes Web constituent des points de contact stratégiques avec les clients et partenaires.",
            webDesc2: "Nous équilibrons image de marque, expérience utilisateur et évolutivité technique.",
            webFocus: "Nos priorités :",
            webList: [
                "Structure claire de l'information",
                "Conception centrée utilisateur",
                "Architecture technique évolutive"
            ],
            webDesc3: "Assurer une valeur durable des canaux digitaux.",

            processTitle: "Méthodologie & Processus projet",
            p1Title: "Compréhension métier & cadrage",
            p1Desc: "Analyse approfondie du contexte et des systèmes existants.",

            p2Title: "Architecture & conception technique",
            p2Desc: "Transformation des besoins en architecture système.",
            p2List: [
                "Architecture globale",
                "Flux de données",
                "Choix technologiques"
            ],
            p2Note: "Les décisions privilégient la durabilité plutôt que la rapidité.",

            p3Title: "Implémentation & validation",
            p3List: [
                "Développement et validation parallèles",
                "Livraison progressive",
                "Ajustements continus"
            ],

            p4Title: "Mise en service & exploitation",
            p4Desc: "Préparation complète à l'exploitation réelle.",
            p4List: [
                "Transfert opérationnel",
                "Standards de gestion",
                "Stabilisation initiale"
            ],

            p5Title: "Amélioration continue (SM)",
            p5Desc: "Suivi et optimisation continue via la gestion des services."
        },

        contact: {
            title: "Contact",
            desc1: "Un partenaire IT fiable sur le long terme",
            desc2: "VioniaSoft privilégie une communication claire, des décisions raisonnées et une collaboration durable.",

            form: {
                name: "Nom *",
                email: "E-mail *",
                company: "Entreprise (optionnel)",

                type: "Type de demande *",
                selectType: "Veuillez sélectionner un type",
                type1: "Intégration de systèmes / SI",
                type2: "Gestion des services / SM",
                type3: "Solutions Web et digitales",
                type4: "Autres demandes",

                message: "Détails de la demande *",
                submit: "Envoyer la demande",

                nameRequired: "Veuillez saisir votre nom.",
                emailRequired: "Veuillez saisir votre adresse e-mail.",
                emailInvalid: "Veuillez saisir une adresse e-mail valide.",
                typeRequired: "Veuillez sélectionner un type de demande.",
                messageRequired: "Veuillez saisir votre message."

            },

            sendingTitle: "Envoi en cours...",

            successTitle: "Envoi réussi",
            successDesc: "Votre demande a été envoyée avec succès.",
        
            errorTitle: "Échec de l'envoi",
            errorDesc: "Veuillez réessayer ultérieurement."

        }
    }
};

const savedLang = localStorage.getItem("lang") || "ko";

window.i18nMessages = i18n;
window.defaultLang = savedLang;