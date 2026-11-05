/* ============================================================
   Tetiana Tkachova — portfolio behaviour
   language switching · theme · scroll state · reveals
   ============================================================ */

(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* If no frame is ever painted, drop the entrance animations so that
     the content is still readable (previews, background tabs, print). */
  let hasPainted = false;
  window.requestAnimationFrame(() => {
    hasPainted = true;
  });
  window.setTimeout(() => {
    if (!hasPainted) root.classList.add("is-static");
  }, 400);

  /* — content ————————————————————————————————— */

  const i18n = {
    de: {
      skip: "Zum Inhalt springen",
      theme_label: "Farbschema wechseln",
      nav_exp: "Erfahrung",
      nav_edu: "Ausbildung",
      nav_projects: "Projekte",
      nav_skills: "Kenntnisse",
      nav_langs: "Sprachen",
      nav_certs: "Zertifikate",
      nav_contact: "Kontakt",

      eyebrow: "Portfolio — 2026",
      role: "Junior Frontend-Entwicklerin",
      bio: "Ich habe Computer Engineering in Odesa studiert und baue moderne, interaktive Webanwendungen. Am liebsten mit JavaScript — und mit einem Blick für die Details, die eine Oberfläche ruhig und selbstverständlich wirken lassen. Zuletzt habe ich in einem Salesforce-Bootcamp praktische Erfahrung gesammelt und vertiefe jetzt meine Frontend-Kenntnisse.",
      contact_email: "E-Mail",
      contact_phone: "Telefon",
      availability: "Offen für Junior-Frontend-Rollen",
      scroll: "Scrollen",

      stat_certs: "Zertifikate",
      stat_langs: "Sprachen",
      stat_degrees: "Abschluss",

      exp_title: "Berufserfahrung",
      exp_note: "Stationen in Frontend, Backend und Salesforce — remote, vor Ort und im Team.",
      remote: "Remote",
      exp1_role: "Trainee Developer",
      exp1_type: "Salesforce Bootcamp",
      exp1_desc: "Salesforce-Development-Bootcamp im Engineering-Team: CRM-Automatisierung, Apex-Grundlagen und Arbeit mit der Plattform.",
      exp2_role: "Piscine Participant",
      exp2_type: "Piscine",
      exp2_desc: "Intensives Peer-to-Peer-Programm der Coding School: C, Shell, Algorithmen und Projektarbeit unter Zeitdruck.",
      exp3_role: "Back End Developer",
      exp3_desc: "Entwicklung und Wartung von RESTful APIs mit Node.js, Express und MongoDB als Grundlage für die Frontend-Funktionen.",
      exp4_role: "Frontend Trainee",
      exp4_type: "Stipendienprogramm",
      exp4_desc: "Stipendienbasiertes Trainingsprogramm mit Fokus auf Frontend: Webanwendungen mit JavaScript, HTML und CSS, Arbeit mit Git und Präsentation eigener Projekte.",

      edu_title: "Ausbildung",
      edu_note: "Computer Engineering in Odesa — Bachelor, Systeme und Netzwerke.",
      edu_place: "Odesa, Ukraine",
      edu1_role: "Bachelorabschluss in Computer Engineering",
      edu1_desc: "Computer Engineering, Computersysteme und Netzwerke.",

      projects_title: "Projekte",
      projects_note: "Ausgewählte Arbeiten — Code und Live-Demos.",
      proj1_desc: "React-19-Oberfläche für eine Nutzerverwaltung: Daten aus einer API laden, Einträge anlegen, bearbeiten und löschen.",
      proj2_desc: "Full-Stack-Anwendung zur Berechnung von Zulassungschancen — Node.js, Express, MySQL, JWT, Docker und automatisierte Tests.",
      proj3_desc: "Bibliotheksverwaltung im Browser: Bücher und Autor:innen anlegen, filtern und bearbeiten; die Daten bleiben via localStorage erhalten.",
      proj4_desc: "Salesforce-DX-Projekt mit Apex und Plattform-Metadaten — vom Datenmodell bis zur CRM-Logik.",

      skills_title: "Kenntnisse",
      skills_note: "Werkzeuge und Technologien, mit denen ich täglich arbeite.",
      skill_db: "Datenbankentwicklung",

      langs_title: "Sprachen",
      langs_note: "Deutsch für den Alltag, Englisch für die Arbeit, Ukrainisch für alles andere.",
      lang_de: "Deutsch",
      lang_en: "Englisch",
      lang_ua: "Ukrainisch",
      lang_native: "Muttersprache",

      certs_title: "Zertifikate",
      certs_note: "Ausgewählte Zertifikate aus Web, Cloud, Design und Kommunikation — als PDF, mit Prüf-Link oder auf Anfrage.",
      certs_gallery_note: "Acht PDFs — direkt im Browser ansehen oder verifizieren.",
      certs_gallery_label: "Zertifikatsgalerie",
      certs_more_title: "Weitere Nachweise",
      certs_more_note: "Ohne öffentlichen Prüf-Link — Nachweis auf Anfrage.",
      certs_modules_title: "Einzelkurse",
      certs_modules_note: "Kurszertifikate aus den Programmen und zusätzliche Einzelkurse — jeweils als PDF mit Prüf-Link.",
      certs_modules_unit: "Kurse",
      cert_pdf: "PDF ansehen",
      cert_verify: "Verifizieren ↗",
      cert_verify_short: "Prüfen ↗",
      cert_original: "Original ↗",
      cert_on_request: "Auf Anfrage",
      cert_viewer: "Zertifikat",
      cert_close: "Schließen",
      cert_new_tab: "In neuem Tab öffnen ↗",
      cert_download: "PDF herunterladen",
      cert_prev: "Vorheriges Zertifikat",
      cert_next: "Nächstes Zertifikat",
      cert_kind_prof: "Berufszertifikat",
      cert_kind_spec: "Spezialisierung",
      cert_kind_course: "Kurs",
      cert_kind_lang: "Sprachzertifikat",

      foot_kicker: "Kontakt — 07",
      foot_line1: "Lass uns",
      foot_line2: "sprechen.",
      foot_note: "Ich freue mich über Nachrichten zu Junior-Frontend-Rollen, Praktika — oder einfach auf einen Kaffee.",
      foot_loc_label: "Standort",
      foot_loc_value: "Baden-Württemberg, Deutschland",
      foot_avail_label: "Verfügbarkeit",
      foot_avail_value: "Offen für Junior-Rollen und Praktika",
      foot_links_label: "Links",
      clock_label: "Ortszeit",
      back_top: "Nach oben"
    },

    en: {
      skip: "Skip to content",
      theme_label: "Toggle color scheme",
      nav_exp: "Experience",
      nav_edu: "Education",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_langs: "Languages",
      nav_certs: "Certificates",
      nav_contact: "Contact",

      eyebrow: "Portfolio — 2026",
      role: "Junior Frontend Developer",
      bio: "I studied Computer Engineering in Odesa and build modern, interactive web applications. JavaScript is where I feel at home — along with the details that make an interface feel calm and inevitable. I recently gained hands-on experience in a Salesforce bootcamp and am now deepening my frontend skills.",
      contact_email: "Email",
      contact_phone: "Phone",
      availability: "Open to junior frontend roles",
      scroll: "Scroll",

      stat_certs: "Certificates",
      stat_langs: "Languages",
      stat_degrees: "Degree",

      exp_title: "Experience",
      exp_note: "Frontend, backend and Salesforce — remote, on site and in a team.",
      remote: "Remote",
      exp1_role: "Trainee Developer",
      exp1_type: "Salesforce Bootcamp",
      exp1_desc: "Salesforce development bootcamp inside the engineering team: CRM automation, Apex fundamentals and work on the platform.",
      exp2_role: "Piscine Participant",
      exp2_type: "Piscine",
      exp2_desc: "Intensive peer-to-peer coding school program: C, shell, algorithms and project work against the clock.",
      exp3_role: "Back End Developer",
      exp3_desc: "Built and maintained RESTful APIs with Node.js, Express and MongoDB to support frontend features.",
      exp4_role: "Frontend Trainee",
      exp4_type: "Scholarship Program",
      exp4_desc: "A scholarship-based training program focused on frontend: web applications with JavaScript, HTML and CSS, working with Git, and presenting my own projects.",

      edu_title: "Education",
      edu_note: "Computer Engineering in Odesa — bachelor’s degree, systems and networks.",
      edu_place: "Odesa, Ukraine",
      edu1_role: "Bachelor’s in Computer Engineering",
      edu1_desc: "Computer Engineering, computer systems and networks.",

      projects_title: "Projects",
      projects_note: "Selected work — code and live demos.",
      proj1_desc: "React 19 interface for user management: load data from an API, create, edit and delete records.",
      proj2_desc: "Full-stack app for calculating university admission chances — Node.js, Express, MySQL, JWT, Docker and automated tests.",
      proj3_desc: "Browser-based library manager: add, filter and edit books and authors, with data persisted in localStorage.",
      proj4_desc: "Salesforce DX project with Apex and platform metadata — from data model to CRM logic.",

      skills_title: "Skills",
      skills_note: "Tools and technologies I work with every day.",
      skill_db: "Database Development",

      langs_title: "Languages",
      langs_note: "German for everyday life, English for work, Ukrainian for everything else.",
      lang_de: "German",
      lang_en: "English",
      lang_ua: "Ukrainian",
      lang_native: "Native speaker",

      certs_title: "Certificates",
      certs_note: "Selected certificates across web, cloud, design and communication — as PDFs, with a verification link or on request.",
      certs_gallery_note: "Eight PDFs — view them in the browser or verify.",
      certs_gallery_label: "Certificate gallery",
      certs_more_title: "Further credentials",
      certs_more_note: "No public verification link — available on request.",
      certs_modules_title: "Individual courses",
      certs_modules_note: "Course certificates from the programs plus additional standalone courses — each as a PDF with a verification link.",
      certs_modules_unit: "courses",
      cert_pdf: "View PDF",
      cert_verify: "Verify ↗",
      cert_verify_short: "Verify ↗",
      cert_original: "Original ↗",
      cert_on_request: "On request",
      cert_viewer: "Certificate",
      cert_close: "Close",
      cert_new_tab: "Open in new tab ↗",
      cert_download: "Download PDF",
      cert_prev: "Previous certificate",
      cert_next: "Next certificate",
      cert_kind_prof: "Professional Certificate",
      cert_kind_spec: "Specialization",
      cert_kind_course: "Course",
      cert_kind_lang: "Language Certificate",

      foot_kicker: "Contact — 07",
      foot_line1: "Let’s",
      foot_line2: "talk.",
      foot_note: "I’d love to hear about junior frontend roles, internships — or simply a coffee.",
      foot_loc_label: "Location",
      foot_loc_value: "Baden-Württemberg, Germany",
      foot_avail_label: "Availability",
      foot_avail_value: "Open to junior roles and internships",
      foot_links_label: "Links",
      clock_label: "Local time",
      back_top: "Back to top"
    },

    ua: {
      skip: "Перейти до вмісту",
      theme_label: "Змінити тему",
      nav_exp: "Досвід",
      nav_edu: "Освіта",
      nav_projects: "Проєкти",
      nav_skills: "Навички",
      nav_langs: "Мови",
      nav_certs: "Сертифікати",
      nav_contact: "Контакти",

      eyebrow: "Портфоліо — 2026",
      role: "Junior Frontend-розробниця",
      bio: "Я вивчала Computer Engineering в Одесі й створюю сучасні, інтерактивні вебдодатки. Найбільше люблю JavaScript — і деталі, завдяки яким інтерфейс відчувається спокійним і природним. Нещодавно здобула практичний досвід у Salesforce-бооткемпі та зараз поглиблюю фронтенд-навички.",
      contact_email: "Пошта",
      contact_phone: "Телефон",
      availability: "Відкрита до junior frontend-ролей",
      scroll: "Гортайте",

      stat_certs: "Сертифікати",
      stat_langs: "Мови",
      stat_degrees: "Диплом",

      exp_title: "Досвід роботи",
      exp_note: "Досвід у фронтенді, бекенді та Salesforce — віддалено, на місці й у команді.",
      remote: "Віддалено",
      exp1_role: "Trainee Developer",
      exp1_type: "Salesforce Bootcamp",
      exp1_desc: "Bootcamp із Salesforce-розробки в інженерній команді: автоматизація CRM, основи Apex і робота з платформою.",
      exp2_role: "Piscine Participant",
      exp2_type: "Piscine",
      exp2_desc: "Інтенсивна peer-to-peer програма coding school: C, shell, алгоритми та проєктна робота в умовах дедлайнів.",
      exp3_role: "Back End Developer",
      exp3_desc: "Розробка та підтримка RESTful API на Node.js, Express і MongoDB для потреб фронтенду.",
      exp4_role: "Frontend Trainee",
      exp4_type: "Стипендіальна програма",
      exp4_desc: "Стипендіальна програма з фронтенд-розробки: вебдодатки на JavaScript, HTML і CSS, робота з Git і презентація власних проєктів.",

      edu_title: "Освіта",
      edu_note: "Computer Engineering в Одесі — бакалаврат, системи та мережі.",
      edu_place: "Одеса, Україна",
      edu1_role: "Бакалавр з Computer Engineering",
      edu1_desc: "Комп’ютерна інженерія, комп’ютерні системи та мережі.",

      projects_title: "Проєкти",
      projects_note: "Вибрані роботи — код і живі демо.",
      proj1_desc: "Інтерфейс керування користувачами на React 19: завантаження даних з API, створення, редагування та видалення записів.",
      proj2_desc: "Full-stack застосунок для розрахунку шансів на вступ — Node.js, Express, MySQL, JWT, Docker та автоматизовані тести.",
      proj3_desc: "Бібліотечний менеджер у браузері: додавання, фільтрація та редагування книжок і авторів; дані зберігаються в localStorage.",
      proj4_desc: "Проєкт Salesforce DX з Apex і метаданими платформи — від моделі даних до CRM-логіки.",

      skills_title: "Навички",
      skills_note: "Інструменти й технології, з якими я працюю щодня.",
      skill_db: "Бази даних",

      langs_title: "Мови",
      langs_note: "Німецька — для життя, англійська — для роботи, українська — для всього іншого.",
      lang_de: "Німецька",
      lang_en: "Англійська",
      lang_ua: "Українська",
      lang_native: "Рідна",

      certs_title: "Сертифікати",
      certs_note: "Вибрані сертифікати з вебу, хмари, дизайну й комунікації — як PDF, з посиланням для перевірки або на запит.",
      certs_gallery_note: "Вісім PDF — перегляньте в браузері або перевірте.",
      certs_gallery_label: "Галерея сертифікатів",
      certs_more_title: "Інші підтвердження",
      certs_more_note: "Без публічного посилання для перевірки — на запит.",
      certs_modules_title: "Окремі курси",
      certs_modules_note: "Сертифікати курсів із програм і додаткові окремі курси — кожен як PDF із посиланням для перевірки.",
      certs_modules_unit: "курсів",
      cert_pdf: "Переглянути PDF",
      cert_verify: "Перевірити ↗",
      cert_verify_short: "Перевірити ↗",
      cert_original: "Оригінал ↗",
      cert_on_request: "На запит",
      cert_viewer: "Сертифікат",
      cert_close: "Закрити",
      cert_new_tab: "Відкрити в новій вкладці ↗",
      cert_download: "Завантажити PDF",
      cert_prev: "Попередній сертифікат",
      cert_next: "Наступний сертифікат",
      cert_kind_prof: "Професійний сертифікат",
      cert_kind_spec: "Спеціалізація",
      cert_kind_course: "Курс",
      cert_kind_lang: "Мовний сертифікат",

      foot_kicker: "Контакти — 07",
      foot_line1: "Давайте",
      foot_line2: "поговоримо.",
      foot_note: "Буду рада повідомленню про junior-позиції, стажування або просто кави.",
      foot_loc_label: "Локація",
      foot_loc_value: "Баден-Вюртемберг, Німеччина",
      foot_avail_label: "Доступність",
      foot_avail_value: "Відкрита до junior-ролей і стажувань",
      foot_links_label: "Посилання",
      clock_label: "Місцевий час",
      back_top: "Догори"
    }
  };

  const meta = {
    de: {
      title: "Tetiana Tkachova — Junior Frontend Developer",
      description:
        "Portfolio von Tetiana Tkachova — Junior Frontend Developer mit Fokus auf JavaScript und Node.js. Baden-Württemberg, Deutschland."
    },
    en: {
      title: "Tetiana Tkachova — Junior Frontend Developer",
      description:
        "Portfolio of Tetiana Tkachova — junior frontend developer focused on JavaScript and Node.js. Based in Baden-Württemberg, Germany."
    },
    ua: {
      title: "Tetiana Tkachova — Junior Frontend Developer",
      description:
        "Портфоліо Тетяни Ткачової — junior frontend developer, фокус на JavaScript і Node.js. Баден-Вюртемберг, Німеччина."
    }
  };

  const langButtons = Array.from(document.querySelectorAll("[data-lang]"));
  const themeButton = document.getElementById("themeToggle");
  const metaDescription = document.querySelector('meta[name="description"]');
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  let currentLang = "de";
  let pendingLang = "";
  let switchTimer = 0;

  function applyLanguage(lang) {
    const dict = i18n[lang];
    if (!dict) return;

    currentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = dict[el.dataset.i18n];
      if (typeof value === "string") el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      const value = dict[el.dataset.i18nAria];
      if (typeof value === "string") el.setAttribute("aria-label", value);
    });

    document.querySelectorAll("[data-i18n-title]").forEach((el) => {
      const value = dict[el.dataset.i18nTitle];
      if (typeof value === "string") el.setAttribute("title", value);
    });

    formatCertDates();

    root.lang = lang === "ua" ? "uk" : lang;
    document.title = meta[lang].title;
    if (metaDescription) metaDescription.setAttribute("content", meta[lang].description);
    if (themeButton) themeButton.setAttribute("aria-label", dict.theme_label);

    langButtons.forEach((btn) => {
      const isActive = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (err) {
      /* storage can be unavailable — ignore */
    }
  }

  function setLanguage(lang, animate) {
    if (!i18n[lang]) return;

    if (!animate || reduceMotion.matches) {
      pendingLang = "";
      applyLanguage(lang);
      return;
    }

    pendingLang = lang;
    window.clearTimeout(switchTimer);
    body.classList.add("is-switching");
    switchTimer = window.setTimeout(() => {
      applyLanguage(lang);
      pendingLang = "";
      body.classList.remove("is-switching");
    }, 200);
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.dataset.lang === (pendingLang || currentLang)) return;
      setLanguage(btn.dataset.lang, true);
    });
  });

  let savedLang = "de";
  try {
    savedLang = localStorage.getItem("lang") || "de";
  } catch (err) {
    /* ignore */
  }
  applyLanguage(i18n[savedLang] ? savedLang : "de");

  /* — certificate dates, gallery and PDF viewer ————— */

  function formatCertDate(value, lang) {
    if (!value) return "";
    const parts = value.split("-").map(Number);
    if (parts.length < 3 || parts.some((part) => Number.isNaN(part))) return value;
    const [year, month, day] = parts;
    const locale = lang === "ua" ? "uk-UA" : lang === "de" ? "de-DE" : "en-GB";
    return new Intl.DateTimeFormat(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      timeZone: "UTC"
    }).format(new Date(Date.UTC(year, month - 1, day)));
  }

  function formatCertDates() {
    document.querySelectorAll(".cert-card__date[data-cert-date], .cert-course__date[data-cert-date]").forEach((el) => {
      el.textContent = formatCertDate(el.getAttribute("data-cert-date"), currentLang);
    });
  }

  const certCards = Array.from(document.querySelectorAll("[data-cert-card]"));
  const certItems = Array.from(document.querySelectorAll("[data-cert-item]"));
  const certTotal = certItems.length;

  certCards.forEach((card) => {
    const cover = card.querySelector(".cert-card__cover");
    const pdf = card.getAttribute("data-cert-pdf");
    if (!cover || !pdf) return;

    const preview = document.createElement("img");
    preview.className = "cert-card__preview";
    preview.src = `certificates/previews/${pdf.split("/").pop().replace(/\.pdf$/i, ".jpg")}`;
    preview.alt = "";
    preview.loading = "lazy";
    preview.decoding = "async";
    cover.prepend(preview);
  });

  document.querySelectorAll("[data-cert-total]").forEach((el) => {
    el.textContent = String(certTotal).padStart(2, "0");
  });

  document.querySelectorAll("[data-cert-total-cards]").forEach((el) => {
    el.textContent = String(certCards.length).padStart(2, "0");
  });

  document.querySelectorAll("[data-cert-modules-total]").forEach((el) => {
    el.textContent = String(document.querySelectorAll(".cert-course").length);
  });

  const certTrack = document.querySelector("[data-cert-track]");
  const certPrev = document.querySelector("[data-cert-prev]");
  const certNext = document.querySelector("[data-cert-next]");
  const certCurrent = document.querySelector("[data-cert-current]");

  if (certTrack && certPrev && certNext && certCards.length) {
    let certFrame = 0;

    const certStep = () => {
      const gap = parseFloat(getComputedStyle(certTrack).columnGap || getComputedStyle(certTrack).gap) || 0;
      const cardWidth = certCards[0].getBoundingClientRect().width || certTrack.clientWidth;
      return cardWidth + gap;
    };

    const updateCertCarousel = () => {
      const max = certTrack.scrollWidth - certTrack.clientWidth;
      const left = certTrack.scrollLeft;
      certPrev.disabled = left <= 2;
      certNext.disabled = left >= max - 2;
      const index = Math.min(certCards.length, Math.max(1, Math.round(left / certStep()) + 1));
      if (certCurrent) certCurrent.textContent = String(index).padStart(2, "0");
    };

    const moveCertCarousel = (direction) => {
      certTrack.scrollBy({
        left: direction * certStep(),
        behavior: reduceMotion.matches ? "auto" : "smooth"
      });
    };

    certPrev.addEventListener("click", () => moveCertCarousel(-1));
    certNext.addEventListener("click", () => moveCertCarousel(1));

    certTrack.addEventListener(
      "scroll",
      () => {
        if (certFrame) return;
        certFrame = window.requestAnimationFrame(() => {
          certFrame = 0;
          updateCertCarousel();
        });
      },
      { passive: true }
    );

    certTrack.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      if (event.target !== certTrack && event.target.closest("a, button")) return;
      event.preventDefault();
      moveCertCarousel(event.key === "ArrowRight" ? 1 : -1);
    });

    window.addEventListener("resize", updateCertCarousel);
    updateCertCarousel();
  }

  const certDialog = document.getElementById("certDialog");
  const certDialogTitle = document.getElementById("certDialogTitle");
  const certDialogMeta = document.getElementById("certDialogMeta");
  const certFrame = document.getElementById("certFrame");
  const certDialogOpen = document.getElementById("certDialogOpen");
  const certDialogDownload = document.getElementById("certDialogDownload");
  const certDialogVerify = document.getElementById("certDialogVerify");
  const certDialogClose = document.querySelector("[data-cert-close]");
  let lastCertFocus = null;

  const finalizeCertClose = () => {
    if (!certDialog || certDialog.open) return;
    if (certFrame) certFrame.src = "about:blank";
    body.classList.remove("is-dialog-open");
    const focusTarget = lastCertFocus;
    lastCertFocus = null;
    if (focusTarget && document.contains(focusTarget)) {
      setTimeout(() => {
        if (!certDialog.open && document.contains(focusTarget)) focusTarget.focus();
      }, 0);
    }
  };

  const closeCertDialog = () => {
    if (!certDialog) return;
    if (typeof certDialog.close === "function" && certDialog.open) {
      certDialog.close();
    } else {
      certDialog.removeAttribute("open");
    }
    finalizeCertClose();
  };

  const openCertDialog = (card, trigger) => {
    if (!certDialog || !certDialogTitle || !certFrame) return;

    const title = card.dataset.certTitle || "";
    const issuer = card.dataset.certIssuer || "";
    const date = card.dataset.certDate || "";
    const pdf = card.dataset.certPdf || "";
    const verify = card.dataset.certVerify || pdf;
    const verifyKey = card.dataset.certVerifyLabel || "cert_verify";

    lastCertFocus = trigger || document.activeElement;
    certDialogTitle.textContent = title;
    if (certDialogMeta) {
      certDialogMeta.textContent = [issuer, formatCertDate(date, currentLang)].filter(Boolean).join(" · ");
    }
    certFrame.src = `${pdf}#view=FitH`;
    if (certDialogOpen) certDialogOpen.href = pdf;
    if (certDialogDownload) certDialogDownload.href = pdf;
    if (certDialogVerify) {
      certDialogVerify.href = verify;
      certDialogVerify.dataset.i18n = verifyKey;
      certDialogVerify.textContent = i18n[currentLang][verifyKey] || i18n[currentLang].cert_verify;
    }

    body.classList.add("is-dialog-open");
    try {
      if (typeof certDialog.showModal === "function" && !certDialog.open) certDialog.showModal();
      else certDialog.setAttribute("open", "");
    } catch (err) {
      certDialog.setAttribute("open", "");
    }
  };

  document.addEventListener("click", (event) => {
    const target = event.target instanceof Element ? event.target : null;
    const trigger = target ? target.closest("[data-cert-open]") : null;
    if (!trigger) return;
    const card = trigger.closest("[data-cert-item]");
    if (!card || !card.dataset.certPdf) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    openCertDialog(card, trigger);
  });

  if (certDialogClose) certDialogClose.addEventListener("click", closeCertDialog);

  if (certDialog) {
    certDialog.addEventListener("click", (event) => {
      if (event.target === certDialog) closeCertDialog();
    });

    certDialog.addEventListener("close", finalizeCertClose);
    certDialog.addEventListener("cancel", finalizeCertClose);

    if (typeof MutationObserver === "function") {
      const dialogObserver = new MutationObserver(() => {
        if (!certDialog.hasAttribute("open")) finalizeCertClose();
      });
      dialogObserver.observe(certDialog, { attributes: true, attributeFilter: ["open"] });
    }
  }

  /* — theme ————————————————————————————————— */

  function labelTheme(theme) {
    const dict = i18n[currentLang];
    if (themeButton && dict) themeButton.setAttribute("aria-label", dict.theme_label);
    if (themeButton) themeButton.setAttribute("aria-pressed", String(theme === "ink"));
  }

  function paintTheme(theme) {
    root.dataset.theme = theme;
    labelTheme(theme);
    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", theme === "ink" ? "#0b0b0d" : "#f3f3ee");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (err) {
      /* ignore */
    }
  }

  let savedTheme = "";
  try {
    savedTheme = localStorage.getItem("theme") || "";
  } catch (err) {
    /* ignore */
  }

  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = savedTheme === "ink" || savedTheme === "paper" ? savedTheme : systemDark ? "ink" : "paper";

  root.dataset.theme = initialTheme;
  labelTheme(initialTheme);
  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", initialTheme === "ink" ? "#0b0b0d" : "#f3f3ee");
  }

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const next = root.dataset.theme === "ink" ? "paper" : "ink";
      const rect = themeButton.getBoundingClientRect();
      root.style.setProperty("--tx", `${rect.left + rect.width / 2}px`);
      root.style.setProperty("--ty", `${rect.top + rect.height / 2}px`);

      if (!document.startViewTransition || reduceMotion.matches) {
        paintTheme(next);
        return;
      }

      let applied = false;
      const apply = () => {
        if (applied) return;
        applied = true;
        paintTheme(next);
      };

      try {
        const transition = document.startViewTransition(apply);
        if (transition && transition.ready) transition.ready.catch(() => {});
        if (transition && transition.finished) transition.finished.catch(() => {});
      } catch (err) {
        apply();
        return;
      }

      /* Safety net for renderers that never produce a frame. */
      window.setTimeout(apply, 320);
    });
  }

  /* — header state + reading progress ————————— */

  const header = document.getElementById("siteHead");
  const progress = document.getElementById("progress");
  let scrollFrame = 0;

  function onScroll() {
    scrollFrame = 0;
    const y = window.scrollY || window.pageYOffset;
    if (header) header.classList.toggle("is-scrolled", y > 6);

    if (progress) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      progress.style.transform = `scaleX(${ratio.toFixed(4)})`;
    }
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(onScroll);
    },
    { passive: true }
  );
  onScroll();

  /* — reveal on scroll ————————————————————— */

  const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

  document.querySelectorAll("[data-reveal-group]").forEach((group) => {
    Array.from(group.querySelectorAll("[data-reveal]")).forEach((el, index) => {
      el.style.setProperty("--reveal-delay", `${Math.min(index, 6) * 60}ms`);
    });
  });

  if ("IntersectionObserver" in window && !reduceMotion.matches) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    revealItems.forEach((el) => revealObserver.observe(el));
  } else {
    revealItems.forEach((el) => el.classList.add("is-in"));
  }

  /* — active nav link ————————————————————————— */

  const navLinks = Array.from(document.querySelectorAll("[data-nav]"));
  const navSections = navLinks
    .map((link) => document.getElementById(link.dataset.nav))
    .filter(Boolean);

  if ("IntersectionObserver" in window && navSections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.dataset.nav === entry.target.id);
          });
        });
      },
      { rootMargin: "-38% 0px -52% 0px", threshold: 0 }
    );

    navSections.forEach((section) => spy.observe(section));
  }

  /* — local time in Baden-Württemberg ————————— */

  const clock = document.getElementById("clock");

  if (clock) {
    let timeFormat;
    try {
      timeFormat = new Intl.DateTimeFormat("de-DE", {
        timeZone: "Europe/Berlin",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      });
    } catch (err) {
      timeFormat = null;
    }

    const tick = () => {
      clock.textContent = timeFormat
        ? timeFormat.format(new Date())
        : new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };

    tick();
    window.setInterval(tick, 15000);
  }

  /* — portrait fallback ——————————————————————— */

  const portraitMedia = document.getElementById("portraitMedia");

  if (portraitMedia) {
    const portrait = portraitMedia.querySelector("img");
    if (portrait) {
      const fail = () => portraitMedia.classList.add("is-empty");
      portrait.addEventListener("error", fail);
      if (portrait.complete && portrait.naturalWidth === 0) fail();
    }
  }

  /* — keep the current language after theme change — */

  const themeObserver = new MutationObserver(() => labelTheme(root.dataset.theme));
  themeObserver.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
})();
