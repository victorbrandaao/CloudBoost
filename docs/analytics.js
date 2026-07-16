(() => {
  const measurementId = window.CLOUDBOOST_ANALYTICS?.measurementId?.trim();
  if (!/^G-[A-Z0-9]+$/i.test(measurementId || "")) return;

  const consentKey = "cloudboost_site_analytics_consent";
  const storedConsent = window.localStorage.getItem(consentKey);

  function loadAnalytics() {
    if (window.__cloudBoostAnalyticsLoaded) return;
    window.__cloudBoostAnalyticsLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, {
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.appendChild(script);

    document.addEventListener("click", trackOutboundClick, true);
  }

  function eventNameFor(url) {
    if (url.hostname === "github.com" && /\/CloudBoost\/releases(?:\/latest)?/.test(url.pathname)) {
      return "download_clicked";
    }
    if (url.hostname === "payhip.com" && url.pathname === "/b/Jb0XO") {
      return "buy_pro_clicked";
    }
    if (url.hostname === "discord.gg" && url.pathname === "/kU5trxtRb") {
      return "discord_clicked";
    }
    if (url.hostname === "github.com" && /\/CloudBoost\/issues\/new/.test(url.pathname)) {
      return "review_clicked";
    }
    return null;
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

    const eventName = eventNameFor(url);
    if (!eventName || typeof window.gtag !== "function") return;

    window.gtag("event", eventName, {
      link_host: url.hostname,
      link_path: url.pathname,
      page_path: window.location.pathname
    });
  }

  function removeConsentPrompt() {
    document.getElementById("analytics-consent")?.remove();
  }

  function showConsentPrompt() {
    const prompt = document.createElement("aside");
    prompt.id = "analytics-consent";
    prompt.className = "analytics-consent";
    prompt.setAttribute("aria-label", "Anonymous site analytics preference");
    prompt.innerHTML = `
      <p>Help improve CloudBoost's website with anonymous usage analytics.</p>
      <div>
        <button type="button" data-analytics-choice="allow">Allow</button>
        <button type="button" class="analytics-decline" data-analytics-choice="deny">No thanks</button>
        <a href="${window.location.pathname.includes("/guides/") ? "../privacy.html" : "privacy.html"}">Privacy</a>
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
