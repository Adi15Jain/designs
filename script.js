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
var activeFilter = "All"; // level filter: All | UG | PG | Doctorate
var isTransitioning = false;
var wheelCooldown = false;

// ─── Helpers ───
function isMobile() { return window.innerWidth <= 768; }

function getFilteredPrograms() {
    return activeFilter === "All"
        ? currentPrograms
        : currentPrograms.filter(function (p) { return p.level === activeFilter; });
}

// ─── Init ───
function init() {
    renderCollegeGrid();
    selectCollege(activeCategoryId, true);

    prevBtn.addEventListener("click", prevCard);
    nextBtn.addEventListener("click", nextCard);

    // Level filter pills — JS opacity crossfade (no CSS animation conflict)
    var levelFilter = document.getElementById("level-filter");
    if (levelFilter) {
        levelFilter.addEventListener("click", function (e) {
            var pill = e.target.closest(".filter-pill");
            if (!pill || isTransitioning) return;
            var level = pill.getAttribute("data-level");
            if (level === activeFilter) return;

            // Update pill UI immediately
            levelFilter.querySelectorAll(".filter-pill").forEach(function (p) {
                p.classList.toggle("active", p === pill);
            });

            // Fade out → swap content → fade back in
            cardTrack.style.transition = "opacity 0.18s ease";
            cardTrack.style.opacity = "0";

            setTimeout(function () {
                activeFilter = level;
                currentIndex = 0;
                renderCards();
                updateCarousel();

                requestAnimationFrame(function () {
                    cardTrack.style.transition = "opacity 0.28s ease";
                    cardTrack.style.opacity = "1";
                    setTimeout(function () {
                        cardTrack.style.transition = ""; // restore transform transition
                        cardTrack.style.opacity = "";
                    }, 300);
                });
            }, 180);
        });
    }

    // Desktop: drag-to-scroll (replaces wheel handler)
    initDragScroll();

    // Mobile: dropdown + dot nav
    initMobileDropdown();


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
        // No background image — card uses CSS gradient instead
        // bg.style.backgroundImage kept blank intentionally

        var info = document.createElement("div");
        info.className = "college-card-info";

        var name = document.createElement("div");
        name.className = "college-card-name";
        name.textContent = cat.name;

        info.appendChild(name);
        // count element removed — subheading not shown per design update
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

    // Reset filter to All on college change
    activeFilter = "All";
    var levelFilter = document.getElementById("level-filter");
    if (levelFilter) {
        levelFilter.querySelectorAll(".filter-pill").forEach(function (p) {
            p.classList.toggle(
                "active",
                p.getAttribute("data-level") === "All",
            );
        });
    }

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

    if (isMobile()) {
        // Mobile: native scroll — just reset scrollLeft, no transform
        cardTrack.scrollLeft = 0;
    } else {
        // Desktop: reset transform (disable transition briefly so it's instant)
        cardTrack.style.transition = "none";
        cardTrack.style.transform = "translateX(0)";
        requestAnimationFrame(function () { cardTrack.style.transition = ""; });
    }

    // Apply level filter
    var filtered =
        activeFilter === "All"
            ? currentPrograms
            : currentPrograms.filter(function (p) {
                  return p.level === activeFilter;
              });

    // Update programme count to reflect filtered result
    var totalCount = currentPrograms.length;
    var filteredCount = filtered.length;
    var labelSuffix =
        activeFilter === "All"
            ? ""
            : " (" + filteredCount + " " + activeFilter + ")";
    programmeCount.textContent =
        totalCount + " Programme" + (totalCount !== 1 ? "s" : "") + labelSuffix;

    if (filtered.length === 0) {
        var msg = document.createElement("div");
        msg.className = "no-results-msg";
        msg.textContent = "No " + activeFilter + " programmes in this college.";
        cardTrack.appendChild(msg);
        updateCounter();
        updateNavState();
        return;
    }

    // Each card gets staggered .card-in entrance (class-based, not baked into base CSS)
    var cardIndex = 0;
    filtered.forEach(function (prog) {
        var card = document.createElement("article");
        card.className = "programme-card";
        var delay = cardIndex * 65; // ms stagger
        card.style.animationDelay = (cardIndex * 0.065) + "s";
        card.classList.add("card-in");
        cardIndex++;

        // Remove .card-in after animation so hover transform is never blocked
        var removeDelay = 500 + delay;
        setTimeout(function (c) {
            return function () { c.classList.remove("card-in"); };
        }(card), removeDelay);

        // Full-image background card
        card.innerHTML =
            '<div class="card-bg" style="background-image:url(' +
            prog.image +
            ')"></div>' +
            '<div class="card-overlay"></div>' +
            '<div class="card-content">' +
            '<span class="level-badge">' +
            (prog.level || "UG") +
            "</span>" +
            '<div class="card-bottom">' +
            '<h3 class="card-title">' +
            prog.title +
            "</h3>" +
            '<button class="explore-btn">Explore Programme</button>' +
            "</div>" +
            "</div>";

        cardTrack.appendChild(card);
    });

    // Show/hide filter pills based on what programmes exist in this college
    updateAvailablePills();

    // Mobile: render dots after cards are in DOM
    if (isMobile()) renderMobileDots();
}

// Shows only pills that have at least one matching programme in the current college
function updateAvailablePills() {
    var levelFilter = document.getElementById("level-filter");
    if (!levelFilter) return;

    // Collect which levels exist in the current college
    var available = {};
    currentPrograms.forEach(function (p) { available[p.level] = true; });

    var needReset = false;
    levelFilter.querySelectorAll(".filter-pill").forEach(function (pill) {
        var level = pill.getAttribute("data-level");
        if (level === "All") return; // always visible
        var show = !!available[level];
        pill.style.display = show ? "" : "none";
        // If the currently active filter is now hidden, we'll need to reset
        if (!show && level === activeFilter) needReset = true;
    });

    // Reset to All if active filter has no programmes here
    if (needReset) {
        activeFilter = "All";
        levelFilter.querySelectorAll(".filter-pill").forEach(function (p) {
            p.classList.toggle("active", p.getAttribute("data-level") === "All");
        });
    }
}

// ─── Carousel Sliding ───
function updateCarousel() {
    if (isMobile()) {
        // Mobile uses native scroll-snap — just sync the dots
        var idx = Math.round(cardTrack.scrollLeft / (cardTrack.offsetWidth || 1));
        updateActiveDot(idx);
        return;
    }

    // Desktop: transform-based slide
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
    var filtered =
        activeFilter === "All"
            ? currentPrograms
            : currentPrograms.filter(function (p) {
                  return p.level === activeFilter;
              });
    var maxIdx = Math.max(0, filtered.length - visible);
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
    if (isMobile()) return; // dots replace counter on mobile
    var visible = getVisibleCount();
    var filtered = getFilteredPrograms();
    var total = filtered.length;
    var endIdx = Math.min(currentIndex + visible, total);
    cardCurrent.textContent = endIdx;
    cardTotal.textContent = total;
    var maxIdx = Math.max(1, total - visible);
    var pct = total <= visible ? 100 : (currentIndex / maxIdx) * 100;
    progressFill.style.width = pct + "%";
}

function updateNavState() {
    if (isMobile()) return; // no desktop nav on mobile
    var visible = getVisibleCount();
    var filtered = getFilteredPrograms();
    var maxIdx = Math.max(0, filtered.length - visible);
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

// ─── Desktop: click-hold-drag scroll with snap ───
function initDragScroll() {
    var carousel = document.querySelector(".card-carousel");
    if (!carousel) return;

    var isDragging = false;
    var startX = 0;
    var startOffset = 0;
    var movedDuringDrag = false;

    carousel.addEventListener("mousedown", function (e) {
        if (e.button !== 0 || isMobile()) return;
        var cards = cardTrack.querySelectorAll(".programme-card");
        if (!cards.length) return;

        isDragging = true;
        movedDuringDrag = false;
        startX = e.clientX;

        var gap = parseFloat(getComputedStyle(cardTrack).gap) || 18;
        startOffset = currentIndex * (cards[0].offsetWidth + gap);

        cardTrack.style.transition = "none";
        carousel.classList.add("dragging");
        document.body.style.userSelect = "none";
        e.preventDefault();
    });

    document.addEventListener("mousemove", function (e) {
        if (!isDragging) return;
        var delta = e.clientX - startX;
        if (Math.abs(delta) > 4) movedDuringDrag = true;
        cardTrack.style.transform = "translateX(-" + (startOffset - delta) + "px)";
    });

    document.addEventListener("mouseup", function (e) {
        if (!isDragging) return;
        isDragging = false;
        carousel.classList.remove("dragging");
        document.body.style.userSelect = "";
        cardTrack.style.transition = "";

        if (!movedDuringDrag) { updateCarousel(); return; }

        var delta = e.clientX - startX;
        var cards = cardTrack.querySelectorAll(".programme-card");
        if (!cards.length) { updateCarousel(); return; }

        var gap = parseFloat(getComputedStyle(cardTrack).gap) || 18;
        var cardW = cards[0].offsetWidth + gap;
        var filtered = getFilteredPrograms();
        var maxIdx = Math.max(0, filtered.length - getVisibleCount());

        // Snap by how many card-widths were dragged (threshold: 25% of card)
        var steps = -Math.round(delta / (cardW * 0.25));
        steps = Math.max(-1, Math.min(1, steps));
        currentIndex = Math.max(0, Math.min(currentIndex + steps, maxIdx));

        // Double-RAF: ensures CSS transition is applied before the transform change
        requestAnimationFrame(function () {
            cardTrack.style.transition = "";
            requestAnimationFrame(function () {
                updateCarousel();
            });
        });
    });
}

// ─── Mobile: dot pagination ───
function renderMobileDots() {
    var dotNav = document.getElementById("mobile-dot-nav");
    if (!dotNav) return;
    var filtered = getFilteredPrograms();
    dotNav.innerHTML = "";

    filtered.forEach(function (_, i) {
        var dot = document.createElement("button");
        dot.className = "mobile-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("role", "tab");
        dot.setAttribute("aria-label", "Card " + (i + 1));
        dot.addEventListener("click", function () {
            var cards = cardTrack.querySelectorAll(".programme-card");
            if (!cards[i]) return;
            cards[i].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        });
        dotNav.appendChild(dot);
    });
}

function updateActiveDot(index) {
    var dots = document.querySelectorAll(".mobile-dot");
    dots.forEach(function (d, i) { d.classList.toggle("active", i === index); });
}

// ─── Mobile: bottom-sheet college dropdown ───
function initMobileDropdown() {
    var trigger  = document.getElementById("mcd-trigger");
    var panel    = document.getElementById("mcd-panel");
    var backdrop = document.getElementById("mcd-backdrop");
    var list     = document.getElementById("mcd-list");
    var label    = document.getElementById("mcd-label");
    if (!trigger || !panel) return;

    // Populate list with all colleges
    categories.forEach(function (cat) {
        var item = document.createElement("div");
        item.className = "mcd-item" + (cat.id === activeCategoryId ? " active" : "");
        item.textContent = cat.name;
        item.setAttribute("role", "option");
        item.setAttribute("aria-selected", cat.id === activeCategoryId ? "true" : "false");

        item.addEventListener("click", function () {
            // Update active state in list
            list.querySelectorAll(".mcd-item").forEach(function (el) {
                el.classList.remove("active");
                el.setAttribute("aria-selected", "false");
            });
            item.classList.add("active");
            item.setAttribute("aria-selected", "true");
            // Update trigger label
            label.textContent = cat.name;
            closeDropdown();
            if (activeCategoryId !== cat.id) selectCollege(cat.id, false);
        });

        list.appendChild(item);
    });

    // Set initial label
    var initCat = categories.find(function (c) { return c.id === activeCategoryId; });
    if (initCat) label.textContent = initCat.name;

    function openDropdown() {
        panel.classList.add("open");
        backdrop.classList.add("open");
        trigger.setAttribute("aria-expanded", "true");
    }
    function closeDropdown() {
        panel.classList.remove("open");
        backdrop.classList.remove("open");
        trigger.setAttribute("aria-expanded", "false");
    }

    trigger.addEventListener("click", function () {
        panel.classList.contains("open") ? closeDropdown() : openDropdown();
    });
    backdrop.addEventListener("click", closeDropdown);
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && panel.classList.contains("open")) closeDropdown();
    });

    // When selectCollege is called externally, sync the trigger label
    var _origSelectCollege = selectCollege;
    selectCollege = function (categoryId, immediate) {
        var cat = categories.find(function (c) { return c.id === categoryId; });
        if (cat && label) label.textContent = cat.name;
        // Sync active state in list
        if (list) {
            list.querySelectorAll(".mcd-item").forEach(function (el, i) {
                var active = categories[i] && categories[i].id === categoryId;
                el.classList.toggle("active", active);
                el.setAttribute("aria-selected", active ? "true" : "false");
            });
        }
        _origSelectCollege(categoryId, immediate);
    };

    // Mobile scroll → sync dots
    cardTrack.addEventListener("scroll", function () {
        if (!isMobile()) return;
        var cards = cardTrack.querySelectorAll(".programme-card");
        if (!cards.length) return;
        var cardW = cards[0].offsetWidth + (parseFloat(getComputedStyle(cardTrack).gap) || 18);
        var idx = Math.round(cardTrack.scrollLeft / cardW);
        updateActiveDot(idx);
    }, { passive: true });
}
