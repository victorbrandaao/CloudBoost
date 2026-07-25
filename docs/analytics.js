(() => {
  const measurementId = window.CLOUDBOOST_ANALYTICS?.measurementId?.trim();
  if (!/^G-[A-Z0-9]+$/i.test(measurementId || "")) return;

  const consentKey = "cloudboost_site_analytics_consent";
  const storedConsent = window.localStorage.getItem(consentKey);

  function loadAnalytics() {
    if (window.__cloudBoostAnalyticsLoaded) return;
    window.__cloudBoostAnalyticsLoaded = true;

    function getPageCategory() {
      const path = window.location.pathname;
      if (path.includes("/guides/")) return "guides";
      if (path.includes("/results")) return "results";
      if (path.includes("/pt/")) return "pt_landing";
      if (path.includes("/es/")) return "es_landing";
      if (path.includes("privacy") || path.includes("privacidad") || path.includes("trust")) return "legal_trust";
      return "homepage";
    }

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      content_group: getPageCategory(),
      page_language: document.documentElement.lang || "en"
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    document.addEventListener("click", trackOutboundClick, true);
    document.addEventListener("click", trackHomebrewInstallExpanded, true);
    observeOfferImpressions();
    observeScrollDepth();
  }

  function trackHomebrewInstallExpanded(event) {
    const summary = event.target.closest(".install-command > summary");
    const installCmd = summary?.parentElement;
    if (!installCmd || installCmd.open || typeof window.gtag !== "function") return;
    window.gtag("event", "homebrew_install_expanded", {
      page_path: window.location.pathname
    });
  }

  function observeScrollDepth() {
    let scrolled50 = false;
    let scrolled90 = false;

    window.addEventListener("scroll", () => {
      if (typeof window.gtag !== "function") return;
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

      if (!scrolled50 && scrollPercent >= 50) {
        scrolled50 = true;
        window.gtag("event", "scroll_depth_50", { page_path: window.location.pathname });
      }
      if (!scrolled90 && scrollPercent >= 90) {
        scrolled90 = true;
        window.gtag("event", "scroll_depth_90", { page_path: window.location.pathname });
      }
    }, { passive: true });
  }

  function eventNamesFor(url, link) {
    const explicitEvent = link?.dataset.analyticsEvent;
    if (/^[a-z0-9_]+$/.test(explicitEvent || "")) {
      const names = [explicitEvent];
      if (url.hostname === "payhip.com") names.push("pro_checkout_opened");
      return names;
    }
    if (url.hostname === "github.com" && /\/CloudBoost\/releases(?:\/latest)?/.test(url.pathname)) {
      return ["download_clicked"];
    }
    if (url.hostname === "payhip.com" && url.pathname === "/b/Jb0XO") {
      return ["buy_pro_clicked", "pro_checkout_opened"];
    }
    if (url.hostname === "discord.gg" && url.pathname === "/kU5trxtRb") {
      return ["discord_clicked"];
    }
    if (url.hostname === "github.com" && /\/CloudBoost\/issues\/new/.test(url.pathname)) {
      return ["review_clicked"];
    }
    return [];
  }

  function observeOfferImpressions() {
    const offers = document.querySelectorAll("[data-analytics-impression]");
    if (offers.length === 0 || typeof window.IntersectionObserver !== "function") return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || typeof window.gtag !== "function") return;
        const eventName = entry.target.dataset.analyticsImpression;
        if (!/^[a-z0-9_]+$/.test(eventName || "")) return;
        window.gtag("event", eventName, {
          page_path: window.location.pathname,
          page_language: document.documentElement.lang || "en"
        });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    offers.forEach((offer) => observer.observe(offer));
  }

  function trackOutboundClick(event) {
    const link = event.target.closest("a[href]");
    if (!link) return;

    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    const eventNames = eventNamesFor(url, link);
    if (eventNames.length === 0 || typeof window.gtag !== "function") return;

    eventNames.forEach((eventName) => {
      window.gtag("event", eventName, {
        link_host: url.hostname,
        link_path: url.pathname,
        page_path: window.location.pathname,
        page_language: document.documentElement.lang || "en"
      });
    });
  }

  function removeConsentPrompt() {
    document.getElementById("analytics-consent")?.remove();
  }

  function showConsentPrompt() {
    const lang = (document.documentElement.lang || "en").toLowerCase();
    const isSpanish = lang.startsWith("es");
    const isPortuguese = lang.startsWith("pt");
    let privacyPath = "privacy.html";
    if (window.location.pathname.includes("/es/")) {
      privacyPath = "privacidad.html";
    } else if (window.location.pathname.includes("/pt/")) {
      privacyPath = "privacidade.html";
    } else if (window.location.pathname.includes("/guides/") || window.location.pathname.includes("/results/")) {
      privacyPath = "../privacy.html";
    }

    let message = "Help improve CloudBoost's website with anonymous usage analytics.";
    let allowText = "Allow";
    let denyText = "No thanks";
    let privacyText = "Privacy";

    if (isSpanish) {
      message = "Ayuda a mejorar el sitio de CloudBoost con estadísticas anónimas.";
      allowText = "Permitir";
      denyText = "No, gracias";
      privacyText = "Privacidad";
    } else if (isPortuguese) {
      message = "Ajude a melhorar o site do CloudBoost com estatísticas anônimas.";
      allowText = "Permitir";
      denyText = "Não, obrigado";
      privacyText = "Privacidade";
    }

    const prompt = document.createElement("aside");
    prompt.id = "analytics-consent";
    prompt.className = "analytics-consent";
    prompt.setAttribute("aria-label", "Anonymous site analytics preference");
    prompt.innerHTML = `
      <p>${message}</p>
      <div>
        <button type="button" data-analytics-choice="allow">${allowText}</button>
        <button type="button" class="analytics-decline" data-analytics-choice="deny">${denyText}</button>
        <a href="${privacyPath}">${privacyText}</a>
      </div>
    `;

    prompt.addEventListener("click", (event) => {
      const choice = event.target.closest("[data-analytics-choice]")?.dataset.analyticsChoice;
      if (!choice) return;
      window.localStorage.setItem(consentKey, choice);
      removeConsentPrompt();
      if (choice === "allow") loadAnalytics();
    });

    document.body.appendChild(prompt);
  }

  if (storedConsent === "allow") {
    loadAnalytics();
  } else if (storedConsent !== "deny") {
    window.addEventListener("DOMContentLoaded", showConsentPrompt, { once: true });
  }

})();
