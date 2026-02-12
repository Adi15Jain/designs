/* ==========================================================================
   TMU Programmes Section — Carousel Controller v2
   3-Card Visible Carousel · Animated Transitions
   Vanilla JS — Zero Dependencies
   ========================================================================== */

// ─── DOM ───
var collegeGrid = document.getElementById("college-grid");
var cardTrack = document.getElementById("card-track");
var collegeName = document.getElementById("college-name");
var programmeCount = document.getElementById("programme-count");
var cardCurrent = document.getElementById("card-current");
var cardTotal = document.getElementById("card-total");
var progressFill = document.getElementById("progress-fill");
var prevBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");

// ─── State ───
var activeCategoryId = categories[0].id;
var currentIndex = 0;
var currentPrograms = [];
var isTransitioning = false;
var wheelCooldown = false;

// ─── Init ───
function init() {
    renderCollegeGrid();
    selectCollege(activeCategoryId, true);

    prevBtn.addEventListener("click", prevCard);
    nextBtn.addEventListener("click", nextCard);

    document.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowDown") nextCard();
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") prevCard();
    });

    // Wheel — debounced
    var carousel = document.querySelector(".card-carousel");
    if (carousel) {
        carousel.addEventListener(
            "wheel",
            function (e) {
                if (wheelCooldown || Math.abs(e.deltaY) < 15) return;
                e.preventDefault();
                wheelCooldown = true;
                if (e.deltaY > 0) nextCard();
                else prevCard();
                setTimeout(function () {
                    wheelCooldown = false;
                }, 450);
            },
            { passive: false },
        );
    }

    // Touch swipe
    var touchX = 0;
    if (carousel) {
        carousel.addEventListener(
            "touchstart",
            function (e) {
                touchX = e.touches[0].clientX;
            },
            { passive: true },
        );
        carousel.addEventListener(
            "touchend",
            function (e) {
                var diff = touchX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) {
                    diff > 0 ? nextCard() : prevCard();
                }
            },
            { passive: true },
        );
    }

    initParticles();

    // Recalc on resize
    window.addEventListener("resize", function () {
        updateCarousel();
    });
}

// ─── College Grid ───
function renderCollegeGrid() {
    collegeGrid.innerHTML = "";

    categories.forEach(function (cat, i) {
        var card = document.createElement("div");
        card.className =
            "college-card" + (cat.id === activeCategoryId ? " active" : "");
        card.setAttribute("data-category", cat.id);
        card.style.animation =
            "collegeCardEntrance 0.45s var(--ease-out) " + i * 0.035 + "s both";

        var bg = document.createElement("div");
        bg.className = "college-card-bg";
        bg.style.backgroundImage = "url(" + cat.image + ")";

        var info = document.createElement("div");
        info.className = "college-card-info";

        var name = document.createElement("div");
        name.className = "college-card-name";
        name.textContent = cat.name;

        var count = document.createElement("div");
        count.className = "college-card-count";
        count.textContent =
            cat.programs.length +
            " programme" +
            (cat.programs.length !== 1 ? "s" : "");

        info.appendChild(name);
        info.appendChild(count);
        card.appendChild(bg);
        card.appendChild(info);

        card.addEventListener("click", function () {
            if (activeCategoryId === cat.id || isTransitioning) return;
            selectCollege(cat.id, false);
        });

        // Hover parallax
        card.addEventListener("mousemove", function (e) {
            var r = card.getBoundingClientRect();
            var x = ((e.clientX - r.left) / r.width - 0.5) * 6;
            var y = ((e.clientY - r.top) / r.height - 0.5) * 6;
            bg.style.transform =
                "scale(1.1) translate(" + x + "px," + y + "px)";
        });
        card.addEventListener("mouseleave", function () {
            bg.style.transform = card.classList.contains("active")
                ? "scale(1.06)"
                : "";
        });

        collegeGrid.appendChild(card);
    });
}

// ─── Select College ───
function selectCollege(categoryId, immediate) {
    var cat = categories.find(function (c) {
        return c.id === categoryId;
    });
    if (!cat) return;

    // Update sidebar
    var prev = collegeGrid.querySelector(".college-card.active");
    if (prev) prev.classList.remove("active");
    var next = collegeGrid.querySelector(
        '[data-category="' + categoryId + '"]',
    );
    if (next) next.classList.add("active");

    activeCategoryId = categoryId;
    currentIndex = 0;
    currentPrograms = cat.programs;

    collegeName.textContent = cat.name;
    programmeCount.textContent =
        currentPrograms.length +
        " Programme" +
        (currentPrograms.length !== 1 ? "s" : "");

    if (immediate) {
        renderCards();
        updateCarousel();
        return;
    }

    // Animated transition
    isTransitioning = true;
    cardTrack.classList.add("exit");

    setTimeout(function () {
        renderCards();
        cardTrack.classList.remove("exit");
        cardTrack.classList.add("enter");
        updateCarousel();

        setTimeout(function () {
            cardTrack.classList.remove("enter");
            isTransitioning = false;
        }, 500);
    }, 250);
}

// ─── Render Cards ───
function renderCards() {
    cardTrack.innerHTML = "";
    cardTrack.style.transform = "";

    currentPrograms.forEach(function (prog) {
        var card = document.createElement("article");
        card.className = "programme-card";

        card.innerHTML =
            '<div class="level-badge">' +
            (prog.level || "UG") +
            "</div>" +
            '<div class="card-image-wrap">' +
            '<img src="' +
            prog.image +
            '" alt="' +
            prog.title +
            '" class="card-image" loading="lazy" ' +
            "onerror=\"this.style.display='none'\">" +
            "</div>" +
            '<div class="card-body">' +
            '<h3 class="card-title">' +
            prog.title +
            "</h3>" +
            '<button class="explore-btn">Explore Programme</button>' +
            "</div>";

        cardTrack.appendChild(card);
    });
}

// ─── Carousel Sliding ───
function updateCarousel() {
    var cards = cardTrack.querySelectorAll(".programme-card");
    if (cards.length === 0) return;

    var card = cards[0];
    var gap = parseFloat(getComputedStyle(cardTrack).gap) || 18;
    var cardW = card.offsetWidth;
    var offset = currentIndex * (cardW + gap);

    cardTrack.style.transform = "translateX(-" + offset + "px)";
    updateCounter();
    updateNavState();
}

// ─── Navigation ───
function nextCard() {
    if (isTransitioning) return;
    var visible = getVisibleCount();
    var maxIdx = Math.max(0, currentPrograms.length - visible);
    if (currentIndex < maxIdx) {
        currentIndex++;
        updateCarousel();
    }
}

function prevCard() {
    if (isTransitioning) return;
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function getVisibleCount() {
    var w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 1100) return 2;
    return 3;
}

// ─── Counter & Progress ───
function updateCounter() {
    var visible = getVisibleCount();
    var total = currentPrograms.length;
    var endIdx = Math.min(currentIndex + visible, total);

    cardCurrent.textContent = endIdx;
    cardTotal.textContent = total;

    var maxIdx = Math.max(1, total - visible);
    var pct = total <= visible ? 100 : (currentIndex / maxIdx) * 100;
    progressFill.style.width = pct + "%";
}

function updateNavState() {
    var visible = getVisibleCount();
    var maxIdx = Math.max(0, currentPrograms.length - visible);

    prevBtn.classList.toggle("disabled", currentIndex === 0);
    nextBtn.classList.toggle("disabled", currentIndex >= maxIdx);
}

// ─── Particles ───
function initParticles() {
    var canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    var section = canvas.closest(".programmes-section");

    function resize() {
        canvas.width = section.offsetWidth;
        canvas.height = section.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    var pts = [];
    for (var i = 0; i < 30; i++) {
        pts.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.5 + 0.3,
            dx: (Math.random() - 0.5) * 0.2,
            dy: -Math.random() * 0.25 - 0.03,
            o: Math.random() * 0.15 + 0.04,
        });
    }

    (function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < pts.length; i++) {
            var p = pts[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 6.283);
            ctx.fillStyle = "rgba(0,33,71," + p.o + ")";
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;
            if (p.y < -10) {
                p.y = canvas.height + 10;
                p.x = Math.random() * canvas.width;
            }
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
        }
        requestAnimationFrame(loop);
    })();
}

// ─── Boot ───
document.addEventListener("DOMContentLoaded", init);
