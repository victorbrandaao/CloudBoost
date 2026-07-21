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
    document.addEventListener("click", trackHomebrewCopy, true);
    observeOfferImpressions();
    observeScrollDepth();
  }

  function trackHomebrewCopy(event) {
    const installCmd = event.target.closest(".install-command");
    if (!installCmd || typeof window.gtag !== "function") return;
    window.gtag("event", "homebrew_command_clicked", {
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
    const privacyPath = window.location.pathname.includes("/es/") || window.location.pathname.includes("/pt/") || window.location.pathname.includes("/guides/")
      ? "../privacy.html"
      : "privacy.html";

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

  function initInteractiveDemo() {
    const demo = document.getElementById("demo");
    if (!demo) return;

    const lang = (document.documentElement.lang || "en").toLowerCase();

    const scenarios = {
      cloud: {
        jitter: "18 ms",
        loss: "1.2%",
        awdl: "Active (Spike)",
        cpu: "Nominal",
        status: lang.startsWith("pt") ? "Ruído Detectado" : (lang.startsWith("es") ? "Ruido Detectado" : "Noise Detected"),
        badgeClass: "critical",
        bars: [25, 30, 95, 85, 55, 30, 25, 90, 50, 28],
        doctorText: lang.startsWith("pt")
          ? "<strong>Alerta AWDL/AirDrop:</strong> Foram detectadas varreduras de busca Wi-Fi/AWDL em segundo plano causando picos de jitter de 18ms no stream de jogos em nuvem."
          : (lang.startsWith("es")
            ? "<strong>Alerta AWDL/AirDrop:</strong> Se detectaron escaneos Wi-Fi/AWDL en segundo plano causando picos de jitter de 18ms en tu transmisión."
            : "<strong>AWDL/AirDrop Warning:</strong> Background Wi-Fi/AWDL discovery scans were detected causing jitter spikes up to 18ms on your cloud gaming stream.")
      },
      native: {
        jitter: "2 ms",
        loss: "0.0%",
        awdl: "Quiet",
        cpu: "92% (Thermal)",
        status: lang.startsWith("pt") ? "Pressão Térmica" : (lang.startsWith("es") ? "Presión Térmica" : "Thermal Pressure"),
        badgeClass: "warning",
        bars: [60, 65, 70, 85, 90, 92, 88, 85, 90, 92],
        doctorText: lang.startsWith("pt")
          ? "<strong>Alerta Térmico:</strong> Carga de CPU e temperatura elevadas detectadas. O sistema está reduzindo o clock para proteger o Mac."
          : (lang.startsWith("es")
            ? "<strong>Alerta Térmica:</strong> Alta carga de CPU y temperatura detectadas. El sistema está reduciendo la frecuencia para proteger el Mac."
            : "<strong>Thermal Warning:</strong> High CPU load and thermal pressure detected. System throttling is active to protect thermal limits.")
      },
      vpn: {
        jitter: "32 ms",
        loss: "4.5%",
        awdl: "Quiet",
        cpu: "Nominal",
        status: lang.startsWith("pt") ? "Perda na Rota VPN" : (lang.startsWith("es") ? "Pérdida en Ruta VPN" : "VPN Route Loss"),
        badgeClass: "critical",
        bars: [40, 85, 90, 95, 80, 85, 90, 95, 85, 90],
        doctorText: lang.startsWith("pt")
          ? "<strong>Alerta VPN Route Doctor:</strong> A rota da VPN está sofrendo perda de pacotes UDP e latência excessiva. Recomenda-se desativar a VPN ou usar split tunneling."
          : (lang.startsWith("es")
            ? "<strong>Alerta VPN Route Doctor:</strong> La ruta VPN presenta pérdida de paquetes UDP y latencia alta. Se recomienda desactivar la VPN o usar split tunneling."
            : "<strong>VPN Route Doctor Warning:</strong> The VPN tunnel route is experiencing UDP packet loss and route latency. Consider testing with VPN off or split tunneling.")
      }
    };

    let activeScenarioKey = "cloud";

    function updateUI(sc, tuned = false) {
      const jitterEl = document.getElementById("demo-jitter-val");
      const lossEl = document.getElementById("demo-loss-val");
      const awdlEl = document.getElementById("demo-awdl-val");
      const cpuEl = document.getElementById("demo-cpu-val");
      const statusBadge = document.getElementById("demo-status-badge");
      const doctorText = document.getElementById("demo-doctor-text");
      const sparkline = document.getElementById("demo-sparkline-bars");

      if (!jitterEl) return;

      if (tuned) {
        jitterEl.textContent = "3 ms";
        lossEl.textContent = "0.0%";
        awdlEl.textContent = "Pausado (Sessão)";
        cpuEl.textContent = "Equilibrado";
        statusBadge.textContent = lang.startsWith("pt") ? "Sessão Estável" : (lang.startsWith("es") ? "Sesión Estable" : "Session Stable");
        statusBadge.className = "demo-badge";
        doctorText.className = "demo-doctor-message";
        doctorText.innerHTML = lang.startsWith("pt")
          ? "<strong>Sessão Otimizada:</strong> Otimização temporária aplicada. Ruídos e picos de jitter foram neutralizados para a sessão atual."
          : (lang.startsWith("es")
            ? "<strong>Sesión Optimizada:</strong> Optimización temporaria aplicada. Ruido y picos de jitter neutralizados para la sesión actual."
            : "<strong>Session Tuned:</strong> Temporary session actions applied. Wi-Fi noise and jitter spikes neutralized for active play.");
        
        sparkline.innerHTML = [15, 12, 18, 14, 15, 12, 15, 14, 12, 15]
          .map(h => `<div class="demo-bar" style="height: ${h}%"></div>`).join("");
      } else {
        jitterEl.textContent = sc.jitter;
        lossEl.textContent = sc.loss;
        awdlEl.textContent = sc.awdl;
        cpuEl.textContent = sc.cpu;
        statusBadge.textContent = sc.status;
        statusBadge.className = `demo-badge ${sc.badgeClass}`;
        doctorText.className = "demo-doctor-message spike-detected";
        doctorText.innerHTML = sc.doctorText;

        sparkline.innerHTML = sc.bars.map(h => {
          const barClass = h > 80 ? "demo-bar spike" : (h > 50 ? "demo-bar warn" : "demo-bar");
          return `<div class="${barClass}" style="height: ${h}%"></div>`;
        }).join("");
      }
    }

    demo.addEventListener("click", (e) => {
      const tab = e.target.closest(".demo-tab");
      if (tab) {
        demo.querySelectorAll(".demo-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        activeScenarioKey = tab.dataset.scenario || "cloud";
        updateUI(scenarios[activeScenarioKey]);
        if (typeof window.gtag === "function") {
          window.gtag("event", "demo_scenario_changed", { scenario: activeScenarioKey });
        }
        return;
      }

      if (e.target.id === "demo-act-btn") {
        updateUI(scenarios[activeScenarioKey], true);
        if (typeof window.gtag === "function") {
          window.gtag("event", "demo_tune_applied", { scenario: activeScenarioKey });
        }
        return;
      }

      if (e.target.id === "demo-reset-btn") {
        updateUI(scenarios[activeScenarioKey], false);
        if (typeof window.gtag === "function") {
          window.gtag("event", "demo_reset", { scenario: activeScenarioKey });
        }
        return;
      }
    });
  }

  if (storedConsent === "allow") {
    loadAnalytics();
  } else if (storedConsent !== "deny") {
    window.addEventListener("DOMContentLoaded", showConsentPrompt, { once: true });
  }

  window.addEventListener("DOMContentLoaded", initInteractiveDemo);
})();

