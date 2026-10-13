"use strict";

/*
 * ANASDEV CONFIGURATION
 * Set your real email address before publishing.
 * Example: const CONTACT_EMAIL = "you@example.com";
 */
const CONTACT_EMAIL = "anasdavid71@gmail.com";

const translations = {
  en: {
    languageLabel: "Choose language",
    navHome: "Home", navServices: "Services", navWork: "Projects",
    navPricing: "Pricing", navContact: "Let's talk <span>↗</span>",
    eyebrow: "INDEPENDENT DIGITAL STUDIO",
    heroTitle: 'Ideas into <span class="gradient-text">digital experiences.</span>',
    heroDescription: "I build modern websites, useful digital tools and interactive experiences designed around real goals.",
    heroPrimary: "Explore my work", heroSecondary: "Start a project",
    heroNote: "Thoughtful design. Practical technology. Clear communication.",
    visualLabel: "DIGITAL / CRAFT", floatDesign: "Thoughtful design",
    floatPerformance: "Performance first", stripLabel: "BUILDING WITH",
    servicesKicker: "WHAT I DO",
    servicesTitle: 'Digital solutions, <span class="gradient-text">built to work.</span>',
    servicesIntro: "From a clear online presence to custom tools, each project starts with your needs and ends with something practical.",
    service1Title: "Web design & development",
    service1Text: "Responsive, accessible websites with thoughtful layouts, clear messaging and fast-loading pages.",
    service2Title: "Digital tools & web apps",
    service2Text: "Useful dashboards, automation concepts and browser-based tools built around specific workflows.",
    service3Title: "Website audits & SEO",
    service3Text: "Technical reviews that help identify broken links, metadata issues, performance opportunities and crawl problems.",
    service4Title: "Interactive web experiences",
    service4Text: "Experiments and interactive browser experiences, including real-time 3D scenes and game prototypes.",
    workService1Title: "Responsive websites",
    workService1Text: "Simple, clear websites for personal profiles, services and small businesses.",
    workService2Title: "Useful web tools",
    workService2Text: "Small browser-based tools and practical features planned around your needs.",
    workService3Title: "Website checks",
    workService3Text: "Basic website reviews covering links, page metadata and possible improvements.",
    workKicker: "WHAT I CAN HELP WITH",
    workTitle: 'Practical digital <span class="gradient-text">solutions.</span>',
    workIntro: "An overview of the digital services I aim to offer, with clear expectations for every project.",
    pricingKicker: "SIMPLE STARTING POINTS",
    pricingTitle: 'Clear scope. <span class="gradient-text">Fair estimates.</span>',
    pricingIntro: "The examples below are indicative starting points, not binding offers. Final pricing depends on requirements, content and delivery timeline.",
    price1Label: "STARTER", price1Title: "Landing page",
    price1Text: "A focused page for a service, product or personal brand.",
    from: "From", price1Feature1: "Responsive layout",
    price1Feature2: "Core SEO setup", price1Feature3: "Contact links",
    price2Label: "BUSINESS", price2Title: "Business website",
    price2Text: "A professional online presence for a growing business.",
    price2Feature1: "Multiple content sections",
    price2Feature2: "Custom visual direction",
    price2Feature3: "Responsive and SEO basics",
    price3Label: "CUSTOM", price3Title: "Web application",
    price3Text: "Custom functionality, dashboards or interactive experiences.",
    price3Feature1: "Scope-based planning",
    price3Feature2: "Custom functionality",
    price3Feature3: "Testing and refinement",
    recommended: "POPULAR CHOICE", priceCta: "Discuss a project",
    pricingNote: "Prices are illustrative estimates in Moroccan dirhams. Confirm scope, maintenance, hosting and any external service costs before agreeing to a quote.",
    contactKicker: "HAVE A PROJECT IN MIND?",
    contactTitle: "Let's make something <span class=\"gradient-text\">meaningful.</span>",
    contactIntro: "Tell me what you're planning, what you need and what success looks like. We'll start with a clear conversation.",
    contactAvailability: "Available for project enquiries",
    formNameLabel: "Your name", formNamePlaceholder: "How should I call you?",
    formEmailLabel: "Email address", formEmailPlaceholder: "you@example.com",
    formProjectLabel: "What do you need?", optionWebsite: "Website",
    optionWebapp: "Web application", optionAudit: "Website audit / SEO",
    optionOther: "Something else", formMessageLabel: "Project details",
    formMessagePlaceholder: "A few details about your idea...",
    formSubmit: "Prepare message",
    formPrivacy: "This form opens your email application. It does not send or store data on this website.",
    formMissingConfig: "Before using the form, add your real email to CONTACT_EMAIL in js/main.js.",
    formSuccess: "Your email application should open with the message prepared.",
    formError: "Please complete all fields with a valid email address.",
    footerText: "Independent digital work, built with care.", backTop: "Back to top"
  },

  fr: {
    languageLabel: "Choisir la langue",
    navHome: "Accueil", navServices: "Services", navWork: "Projets",
    navPricing: "Tarifs", navContact: "Parlons-en <span>↗</span>",
    eyebrow: "STUDIO NUMÉRIQUE INDÉPENDANT",
    heroTitle: 'Des idées aux <span class="gradient-text">expériences numériques.</span>',
    heroDescription: "Je crée des sites web modernes, des outils numériques utiles et des expériences interactives pensées pour des objectifs concrets.",
    heroPrimary: "Découvrir mes projets", heroSecondary: "Démarrer un projet",
    heroNote: "Design réfléchi. Technologie utile. Communication claire.",
    visualLabel: "NUMÉRIQUE / CRÉATION", floatDesign: "Design réfléchi",
    floatPerformance: "Performance avant tout", stripLabel: "TECHNOLOGIES",
    servicesKicker: "MES SERVICES",
    servicesTitle: 'Des solutions numériques <span class="gradient-text">qui fonctionnent.</span>',
    servicesIntro: "De votre présence en ligne aux outils sur mesure, chaque projet commence par vos besoins et vise un résultat concret.",
    service1Title: "Conception et développement web",
    service1Text: "Des sites adaptatifs et accessibles, avec une mise en page soignée, un message clair et un chargement rapide.",
    service2Title: "Outils numériques et applications web",
    service2Text: "Des tableaux de bord, des concepts d’automatisation et des outils web adaptés à des processus précis.",
    service3Title: "Audit de site et SEO",
    service3Text: "Des analyses techniques pour repérer les liens cassés, les problèmes de métadonnées et les pistes d’amélioration.",
    service4Title: "Expériences web interactives",
    service4Text: "Des expériences interactives dans le navigateur, notamment des scènes 3D et des prototypes de jeux.",
    workService1Title: "Sites web adaptatifs",
    workService1Text: "Des sites clairs pour les profils personnels, les services et les petites entreprises.",
    workService2Title: "Outils web utiles",
    workService2Text: "De petits outils web et des fonctionnalités pratiques adaptés à vos besoins.",
    workService3Title: "Vérification de sites",
    workService3Text: "Des vérifications de base des liens, des métadonnées et des améliorations possibles.",
    workKicker: "MES SERVICES",
    workTitle: 'Des solutions numériques <span class="gradient-text">pratiques.</span>',
    workIntro: "Un aperçu des services numériques que je souhaite proposer, avec des attentes claires pour chaque projet.",
    pricingKicker: "DES REPÈRES SIMPLES",
    pricingTitle: 'Un périmètre clair. <span class="gradient-text">Un budget estimé.</span>',
    pricingIntro: "Ces exemples sont indicatifs et ne constituent pas des offres fermes. Le tarif final dépend des besoins, du contenu et des délais.",
    price1Label: "ESSENTIEL", price1Title: "Page d’atterrissage",
    price1Text: "Une page dédiée à un service, un produit ou une marque personnelle.",
    from: "À partir de", price1Feature1: "Mise en page adaptative",
    price1Feature2: "Bases du référencement", price1Feature3: "Liens de contact",
    price2Label: "ENTREPRISE", price2Title: "Site professionnel",
    price2Text: "Une présence en ligne professionnelle pour une entreprise en développement.",
    price2Feature1: "Plusieurs sections de contenu",
    price2Feature2: "Direction visuelle personnalisée",
    price2Feature3: "Adaptation mobile et SEO de base",
    price3Label: "SUR MESURE", price3Title: "Application web",
    price3Text: "Fonctionnalités personnalisées, tableaux de bord ou expériences interactives.",
    price3Feature1: "Planification selon le besoin",
    price3Feature2: "Fonctionnalités personnalisées",
    price3Feature3: "Tests et améliorations",
    recommended: "CHOIX POPULAIRE", priceCta: "Parler du projet",
    pricingNote: "Les tarifs sont des estimations en dirhams marocains. Confirmez le périmètre, la maintenance, l’hébergement et les frais externes avant tout accord.",
    contactKicker: "UN PROJET EN TÊTE ?",
    contactTitle: 'Créons quelque chose de <span class="gradient-text">pertinent.</span>',
    contactIntro: "Présentez votre idée, vos besoins et votre objectif. Commençons par un échange clair.",
    contactAvailability: "Disponible pour les demandes de projet",
    formNameLabel: "Votre nom", formNamePlaceholder: "Comment vous appeler ?",
    formEmailLabel: "Adresse e-mail", formEmailPlaceholder: "vous@exemple.com",
    formProjectLabel: "Votre besoin", optionWebsite: "Site web",
    optionWebapp: "Application web", optionAudit: "Audit de site / SEO",
    optionOther: "Autre demande", formMessageLabel: "Détails du projet",
    formMessagePlaceholder: "Quelques détails sur votre idée...",
    formSubmit: "Préparer le message",
    formPrivacy: "Ce formulaire ouvre votre application e-mail. Aucune donnée n’est envoyée ou stockée sur ce site.",
    formMissingConfig: "Ajoutez votre véritable adresse e-mail à CONTACT_EMAIL dans js/main.js avant d’utiliser le formulaire.",
    formSuccess: "Votre application e-mail devrait s’ouvrir avec le message préparé.",
    formError: "Veuillez remplir tous les champs avec une adresse e-mail valide.",
    footerText: "Des projets numériques indépendants, réalisés avec soin.", backTop: "Haut de page"
  },

  ar: {
    languageLabel: "اختار اللغة",
    navHome: "الرئيسية", navServices: "الخدمات", navWork: "المشاريع",
    navPricing: "الأسعار", navContact: "تواصل معي <span>↗</span>",
    eyebrow: "استوديو رقمي مستقل",
    heroTitle: 'من الأفكار إلى <span class="gradient-text">تجارب رقمية مميزة.</span>',
    heroDescription: "كنصمم ونطوّر مواقع حديثة، وأدوات رقمية مفيدة، وتجارب تفاعلية مبنية على أهداف واضحة.",
    heroPrimary: "اكتشف مشاريعي", heroSecondary: "ابدأ مشروعك",
    heroNote: "تصميم مدروس. تقنية عملية. تواصل واضح.",
    visualLabel: "رقمي / إبداع", floatDesign: "تصميم مدروس",
    floatPerformance: "الأداء أولاً", stripLabel: "تقنيات العمل",
    servicesKicker: "شنو كنقدّم",
    servicesTitle: 'حلول رقمية <span class="gradient-text">مصممة باش تخدم.</span>',
    servicesIntro: "من الحضور الرقمي حتى الأدوات المخصصة، كل مشروع كيبدا باحتياجاتك والهدف هو نتيجة عملية.",
    service1Title: "تصميم وتطوير المواقع",
    service1Text: "مواقع كتتأقلم مع الهاتف والحاسوب، بتصميم واضح، ومحتوى منظم، وسرعة تحميل جيدة.",
    service2Title: "الأدوات الرقمية وتطبيقات الويب",
    service2Text: "لوحات تحكم وأفكار للأتمتة وأدوات كتخدم مباشرة فالمتصفح حسب الحاجة.",
    service3Title: "فحص المواقع وتحسين SEO",
    service3Text: "تحليل تقني للمساعدة في اكتشاف الروابط المعطلة ومشاكل البيانات الوصفية وفرص تحسين الأداء.",
    service4Title: "تجارب ويب تفاعلية",
    service4Text: "تجارب تفاعلية فالمتصفح، بما فيها مشاهد ثلاثية الأبعاد ونماذج أولية للألعاب.",
    workService1Title: "مواقع متجاوبة",
    workService1Text: "مواقع واضحة للتعريف بالأشخاص والخدمات والمشاريع الصغيرة.",
    workService2Title: "أدوات ويب مفيدة",
    workService2Text: "أدوات بسيطة كتخدم فالمتصفح وميزات عملية حسب احتياجاتك.",
    workService3Title: "فحص المواقع",
    workService3Text: "مراجعة أولية للروابط وبيانات الصفحات وفرص التحسين.",
    workKicker: "شنو نقدر نقدم ليك",
    workTitle: 'حلول رقمية <span class="gradient-text">عملية.</span>',
    workIntro: "نظرة على الخدمات الرقمية اللي كنطمح نقدم، مع توضيح المتطلبات ديال كل مشروع.",
    pricingKicker: "أثمنة استرشادية",
    pricingTitle: 'خدمة واضحة. <span class="gradient-text">وتقدير مناسب.</span>',
    pricingIntro: "الأثمنة التالية أمثلة تقريبية وماشي عروض ملزمة. الثمن النهائي كيتحدد حسب المتطلبات والمحتوى والمدة.",
    price1Label: "الباقة الأساسية", price1Title: "صفحة تعريفية",
    price1Text: "صفحة مركزة لخدمة أو منتج أو علامة شخصية.",
    from: "ابتداءً من", price1Feature1: "تصميم متجاوب",
    price1Feature2: "أساسيات SEO", price1Feature3: "روابط التواصل",
    price2Label: "للأعمال", price2Title: "موقع تجاري",
    price2Text: "حضور رقمي احترافي لمشروع أو شركة.",
    price2Feature1: "أقسام متعددة للمحتوى",
    price2Feature2: "تصميم بصري مخصص",
    price2Feature3: "التوافق مع الهاتف وأساسيات SEO",
    price3Label: "حسب الطلب", price3Title: "تطبيق ويب",
    price3Text: "وظائف مخصصة أو لوحات تحكم أو تجارب تفاعلية.",
    price3Feature1: "تخطيط حسب الاحتياجات",
    price3Feature2: "وظائف مخصصة",
    price3Feature3: "الاختبار والتحسين",
    recommended: "اختيار شائع", priceCta: "ناقش المشروع",
    pricingNote: "الأثمنة أمثلة تقديرية بالدرهم المغربي. خاص تحديد نطاق العمل والصيانة والاستضافة وأي تكاليف خارجية قبل الاتفاق.",
    contactKicker: "عندك مشروع فبالك؟",
    contactTitle: 'يلا نصايبو شي حاجة <span class="gradient-text">عندها قيمة.</span>',
    contactIntro: "شرح ليا الفكرة ديالك، وشنو محتاج، وشنو النتيجة اللي باغي توصل ليها. نبدأو بتواصل واضح.",
    contactAvailability: "متاح لاستقبال طلبات المشاريع",
    formNameLabel: "الاسم ديالك", formNamePlaceholder: "شنو الاسم اللي نستعمل؟",
    formEmailLabel: "البريد الإلكتروني", formEmailPlaceholder: "you@example.com",
    formProjectLabel: "شنو محتاج؟", optionWebsite: "موقع ويب",
    optionWebapp: "تطبيق ويب", optionAudit: "فحص الموقع / SEO",
    optionOther: "شي حاجة أخرى", formMessageLabel: "تفاصيل المشروع",
    formMessagePlaceholder: "عطيني تفاصيل بسيطة على الفكرة...",
    formSubmit: "وجد الرسالة",
    formPrivacy: "هاد الاستمارة كتفتح تطبيق البريد الإلكتروني. الموقع ما كيرسلش ولا كيخزن المعلومات.",
    formMissingConfig: "قبل استعمال الاستمارة، زيد الإيميل الحقيقي ديالك فـ CONTACT_EMAIL داخل js/main.js.",
    formSuccess: "المفروض يتفتح تطبيق البريد برسالة واجدة للإرسال.",
    formError: "عمّر الخانات كاملة وتأكد من صحة البريد الإلكتروني.",
    footerText: "مشاريع رقمية مستقلة بخدمة متقونة.", backTop: "الرجوع للفوق"
  }
};

function applyLanguage(language) {
  const lang = translations[language] ? language : "en";
  const dictionary = translations[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.dataset.language = lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      // Translation strings are defined locally in this file.
      element.innerHTML = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      element.placeholder = dictionary[key];
    }
  });

  const selector = document.getElementById("languageSelect");
  if (selector) selector.value = lang;

  document.title = {
    en: "AnasDev — Digital Studio",
    fr: "AnasDev — Studio numérique",
    ar: "AnasDev — استوديو رقمي"
  }[lang];

  try {
    localStorage.setItem("anasdev-language", lang);
  } catch (_) {
    // The site still works if browser storage is disabled.
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");
  const languageSelect = document.getElementById("languageSelect");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  let initialLanguage = "en";
  try {
    const savedLanguage = localStorage.getItem("anasdev-language");
    if (savedLanguage && translations[savedLanguage]) {
      initialLanguage = savedLanguage;
    }
  } catch (_) {
    // Default to English if browser storage is unavailable.
  }

  applyLanguage(initialLanguage);

  if (languageSelect) {
    languageSelect.addEventListener("change", () => {
      applyLanguage(languageSelect.value);
    });
  }

  function closeMenu() {
    if (!menuToggle || !siteNav) return;
    menuToggle.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  }

  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      siteNav.classList.toggle("is-open", !isOpen);
    });

    siteNav.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", (event) => {
      if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const lang = document.documentElement.lang || "en";
      const dictionary = translations[lang] || translations.en;
      const formData = new FormData(contactForm);
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const projectType = String(formData.get("projectType") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!contactForm.reportValidity() || !name || !email || !message) {
        formStatus.textContent = dictionary.formError;
        return;
      }

      if (!CONTACT_EMAIL || CONTACT_EMAIL.includes("example.com")) {
        formStatus.textContent = dictionary.formMissingConfig;
        return;
      }

      const subject = encodeURIComponent("AnasDev project enquiry — " + projectType);
      const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Project type: " + projectType + "\n\n" +
        message
      );

      formStatus.textContent = dictionary.formSuccess;
      window.location.href = "mailto:" + CONTACT_EMAIL +
        "?subject=" + subject + "&body=" + body;
    });
  }
});
