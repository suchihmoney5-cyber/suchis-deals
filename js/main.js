(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var dropdowns = document.querySelectorAll(".nav-dropdown");
  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector("button");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var wasOpen = dd.classList.contains("open");
      dropdowns.forEach(function (d) {
        d.classList.remove("open");
      });
      if (!wasOpen) dd.classList.add("open");
    });
  });

  document.addEventListener("click", function () {
    dropdowns.forEach(function (d) {
      d.classList.remove("open");
    });
  });

  // Contact form: open mailto with field values (front-end only)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (document.getElementById("name") || {}).value || "";
      var email = (document.getElementById("email") || {}).value || "";
      var subject = (document.getElementById("subject") || {}).value || "Suchi's Deals inquiry";
      var message = (document.getElementById("message") || {}).value || "";
      var body =
        "Name: " +
        name +
        "\nEmail: " +
        email +
        "\n\n" +
        message;
      var mailto =
        "mailto:hello@suchisdeals.example?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);
      window.location.href = mailto;
    });
  }

  // Year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();

  // Ensure any [data-asin] CTAs use the config tag (fallback if HTML tag drifts)
  if (window.SUCHIS_DEALS && window.SUCHIS_DEALS.amazonUrl) {
    document.querySelectorAll("a[data-asin]").forEach(function (el) {
      var asin = el.getAttribute("data-asin");
      if (asin) {
        el.setAttribute("href", window.SUCHIS_DEALS.amazonUrl(asin));
        el.setAttribute("rel", "nofollow sponsored noopener noreferrer");
        el.setAttribute("target", "_blank");
      }
    });
  }
