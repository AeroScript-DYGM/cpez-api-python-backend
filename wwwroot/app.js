(function () {
  "use strict";

  var pages = Array.prototype.slice.call(document.querySelectorAll(".spread"));
  var toc = Array.prototype.slice.call(document.querySelectorAll(".toc__item"));
  var pagination = document.getElementById("pagination");
  var page = Number(localStorage.getItem("pyApiBookPage")) || 0;

  var labels = [
    "PORTADA · ÍNDICE",
    "CAPÍTULO I · ¿QUÉ ES UNA API?",
    "CAPÍTULO II · LA LIBRERÍA REQUESTS",
    "CAPÍTULO III · EL RETO (COLAB)"
  ];

  // ---------- Navegación entre páginas ----------

  function closeMenu() {
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("sidebar-scrim").classList.remove("is-open");
    document.getElementById("menu-button").setAttribute("aria-expanded", "false");
  }

  function renderDots() {
    pagination.innerHTML = "";
    pages.forEach(function (_, i) {
      var dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Ir al capítulo " + (i + 1));
      dot.className = i === page ? "is-active" : "";
      dot.addEventListener("click", function () { go(i); });
      pagination.appendChild(dot);
    });
  }

  function go(next) {
    page = Math.max(0, Math.min(pages.length - 1, next));

    pages.forEach(function (el, i) {
      el.hidden = i !== page;
      el.classList.toggle("is-visible", i === page);
    });
    toc.forEach(function (el) {
      el.classList.toggle("is-active", Number(el.dataset.page) === page);
    });

    document.getElementById("previous-page").disabled = page === 0;
    var nextBtn = document.getElementById("next-page");
    nextBtn.disabled = page === pages.length - 1;
    nextBtn.innerHTML = page === pages.length - 1 ? "Fin <span>✓</span>" : "Siguiente <span>›</span>";

    document.body.dataset.chapter = String(page);
    document.getElementById("chapter-kicker").textContent = labels[page];
    document.getElementById("progress-label").textContent = (page + 1) + " de " + pages.length;
    document.getElementById("progress-bar").style.width = ((page + 1) / pages.length * 100) + "%";

    localStorage.setItem("pyApiBookPage", page);
    renderDots();
    window.scrollTo({ top: 0, behavior: "smooth" });
    closeMenu();
  }

  toc.forEach(function (el) {
    el.addEventListener("click", function () { go(Number(el.dataset.page)); });
  });
  document.getElementById("previous-page").addEventListener("click", function () { go(page - 1); });
  document.getElementById("next-page").addEventListener("click", function () { go(page + 1); });
  document.querySelectorAll("[data-next]").forEach(function (el) {
    el.addEventListener("click", function () { go(page + 1); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.target.tagName === "INPUT") return;
    if (e.key === "ArrowRight") go(page + 1);
    if (e.key === "ArrowLeft") go(page - 1);
  });

  // ---------- Menú lateral / modo de lectura ----------

  var menuButton = document.getElementById("menu-button");
  var sidebar = document.getElementById("sidebar");
  var scrim = document.getElementById("sidebar-scrim");

  menuButton.addEventListener("click", function () {
    var open = sidebar.classList.toggle("is-open");
    scrim.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
  });
  scrim.addEventListener("click", closeMenu);

  document.getElementById("contrast-button").addEventListener("click", function () {
    var dark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("pyApiBookDark", dark ? "1" : "0");
  });
  if (localStorage.getItem("pyApiBookDark") === "1") {
    document.body.classList.add("dark-mode");
  }

  document.getElementById("reset-button").addEventListener("click", function () {
    localStorage.removeItem("pyApiBookPage");
    go(0);
  });
  document.getElementById("restart-book").addEventListener("click", function () {
    go(0);
  });

  // ---------- Capítulo I: simulador GET / POST ----------

  var methodLine = document.getElementById("method-line");
  var methodStatus = document.getElementById("method-status");
  var methodButtons = document.querySelectorAll("[data-method]");

  function setMethod(method) {
    methodButtons.forEach(function (b) {
      b.classList.toggle("is-selected", b.dataset.method === method);
    });
    if (method === "get") {
      methodLine.textContent = 'requests.get("https://httpbin.org/get")';
      methodStatus.textContent = "Status: 200 → sin cuerpo enviado, solo pides datos.";
    } else {
      methodLine.textContent = 'requests.post("https://httpbin.org/post", json={"led": "on"})';
      methodStatus.textContent = 'Status: 200 → httpbin regresa {"json": {"led": "on"}}';
    }
  }

  methodButtons.forEach(function (button) {
    button.addEventListener("click", function () { setMethod(button.dataset.method); });
  });

  // ---------- Capítulo II: constructor de payload ----------

  var payloadSlots = document.getElementById("payload-slots");
  var payloadStatus = document.getElementById("payload-status");
  var payload = []; // { key, value }

  var fields = {
    "add-led": { key: "led", value: "on" },
    "add-msg": { key: "mensaje", value: "hola" }
  };

  function renderPayload() {
    payloadSlots.innerHTML = "";
    payload.forEach(function (field) {
      var chip = document.createElement("span");
      chip.className = "borrow-chip";
      chip.textContent = '"' + field.key + '": "' + field.value + '"';
      payloadSlots.appendChild(chip);
    });
  }

  function renderPayloadStatus() {
    if (payload.length === 0) {
      payloadStatus.textContent = "Sin campos todavía: agrega uno para armar el POST.";
      payloadStatus.className = "console-status";
      return;
    }
    var json = payload.map(function (f) {
      return '"' + f.key + '": "' + f.value + '"';
    }).join(", ");
    payloadStatus.textContent = "httpbin respondió: {'json': {" + json + "}}";
    payloadStatus.className = "console-status is-ok";
  }

  Object.keys(fields).forEach(function (id) {
    document.getElementById(id).addEventListener("click", function () {
      var field = fields[id];
      var exists = payload.some(function (f) { return f.key === field.key; });
      if (!exists) payload.push(field);
      renderPayload();
      renderPayloadStatus();
    });
  });

  document.getElementById("clear-payload").addEventListener("click", function () {
    payload = [];
    renderPayload();
    renderPayloadStatus();
  });

  // ---------- Capítulo III: LED controlado por postMessage ----------

  var led = document.getElementById("led");
  var ledTxt = document.getElementById("led-txt");
  var simulateBtn = document.getElementById("btn-simulate");

  function setLed(estado) {
    var on = estado === "on";
    led.classList.toggle("on", on);
    ledTxt.textContent = on ? "encendido" : "apagado";
  }

  window.addEventListener("message", function (event) {
    var estado = event.data;
    if (estado === "on" || estado === "off") setLed(estado);
  });

  if (simulateBtn) {
    simulateBtn.addEventListener("click", function () { setLed("on"); });
  }

  // ---------- Arranque ----------
  go(page);
}());