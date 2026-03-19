// ═══════════════════════════════════════════════════════════════
//   TMU Programmes — Premium Desktop Grid + Mobile Carousel v6
// ═══════════════════════════════════════════════════════════════

// ─── SVG icon helper ───
const _svg = (p) =>
    `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

// ─── College icon map (inline SVG, line-style) ───
const collegeIcons = {
    all: _svg(
        `<path d="M2 20h20"/><path d="M12 3L3 8h18L12 3z"/><line x1="5" y1="8" x2="5" y2="20"/><line x1="9" y1="8" x2="9" y2="20"/><line x1="15" y1="8" x2="15" y2="20"/><line x1="19" y1="8" x2="19" y2="20"/>`,
    ),
    agriculture: _svg(
        `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>`,
    ),
    "computer-science": _svg(
        `<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3"/>`,
    ),
    dental: _svg(
        `<path d="M12 4c-2.5 0-5 1.7-5 4.5 0 1.8.6 3.6 1.2 5.5.9 2.5 1.45 4.6 1.45 6 0 .55.4 1 .9 1h2.9c.5 0 .9-.45.9-1 0-1.4.55-3.5 1.45-6 .6-1.9 1.2-3.7 1.2-5.5C17 5.7 14.5 4 12 4z"/>`,
    ),
    education: _svg(
        `<path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3.33 1.33 6.67 1.33 10 0V12"/>`,
    ),
    "fine-arts": _svg(
        `<circle cx="13.5" cy="6.5" r="1.5"/><circle cx="17.5" cy="10.5" r="1.5"/><circle cx="8.5" cy="7.5" r="1.5"/><circle cx="6.5" cy="12.5" r="1.5"/><path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 4.5 10 10 10 .83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8z"/>`,
    ),
    law: _svg(
        `<line x1="12" y1="3" x2="12" y2="21"/><line x1="8" y1="21" x2="16" y2="21"/><path d="M3 7h18"/><path d="M5 7l2 6h4L5 7zM19 7l-2 6h-4l6-6z"/>`,
    ),
    engineering: _svg(
        `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>`,
    ),
    medical: _svg(`<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>`),
    nursing: _svg(
        `<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>`,
    ),
    paramedical: _svg(
        `<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/>`,
    ),
    pharmacy: _svg(
        `<path d="M10 2h4M10 2v7l-5 11h14L14 9V2"/><line x1="6.5" y1="15" x2="17.5" y2="15"/>`,
    ),
    management: _svg(
        `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>`,
    ),
    "physical-education": _svg(
        `<circle cx="12" cy="4" r="2"/><path d="M15.89 8.11A4 4 0 0 0 12 6a4 4 0 0 0-4 4l1 4 3 1v5"/><path d="M9 9l-4 3M15 9l4 3"/>`,
    ),
    physiotherapy: _svg(
        `<circle cx="12" cy="4" r="2"/><path d="M5 11l3-3 4 2 4-3 3 3"/><path d="M12 10v7"/><path d="M9 20l3-4 3 4"/>`,
    ),
};

// ─── DOM ───
const desktopDropdownTrigger = document.getElementById("dcd-trigger");
const desktopDropdownLabel = document.getElementById("dcd-label");
const desktopDropdownIcon = document.getElementById("dcd-icon");
const desktopDropdownPanel = document.getElementById("dcd-panel");
const desktopDropdownList = document.getElementById("dcd-list");
const desktopDropdown = document.querySelector(".desktop-college-dropdown");

const cardTrack = document.getElementById("card-track");
const progGrid = document.getElementById("programme-grid");
const gridSubtitle = document.getElementById("grid-subtitle");
const programmeCount = document.getElementById("programme-count");
const loadMoreBtn = document.getElementById("load-more-btn");

const searchInput = document.getElementById("search-input");

// Mobile
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const mobileDotNav = document.getElementById("mobile-dot-nav");
const swipeCue = document.getElementById("swipe-cue");
const mcdTrigger = document.getElementById("mcd-trigger");
const mcdLabel = document.getElementById("mcd-label");
const mcdSheet = document.getElementById("mobile-sheet");
const mcdBackdrop = document.getElementById("mcd-backdrop");
const mcdPanel = document.getElementById("mcd-panel");
const mcdList = document.getElementById("mcd-list");
const mcdSearch = document.getElementById("mcd-search");

// ─── State ───
let activeCategoryId = "all"; // "all" = All Colleges
let activeFilter = "All";
let searchQuery = "";
let visibleCount = 12; // Desktop Load More page size
const PAGE_SIZE = 999;

let currentIndex = 0;
let currentPrograms = []; // Mobile carousel programs
let isNativeScroller = false; // true when on mobile
let isTransitioning = false;
let hasScrolledOnce = false;

// ─── Init ───
function init() {
    checkMobile();
    renderDesktopDropdown();
    initDesktopDropdownBehavior();
    initMobileSheetList();

    // Select "All Colleges" by default
    selectCollege("all", true);

    // Level filter
    document.querySelectorAll(".level-filter-multi").forEach((levelFilter) => {
        levelFilter.addEventListener("click", (e) => {
            const pill = e.target.closest(".filter-pill");
            if (!pill) return;
            const level = pill.getAttribute("data-level");
            if (level === activeFilter) return;

            // Sync all instances
            document
                .querySelectorAll(".level-filter-multi .filter-pill")
                .forEach((p) => {
                    if (p.getAttribute("data-level") === level) {
                        p.classList.add("active");
                    } else {
                        p.classList.remove("active");
                    }
                });
            activeFilter = level;
            currentIndex = 0;
            visibleCount = PAGE_SIZE;
            applyFiltersAndRender();
        });
    });

    // Desktop search
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim();
            visibleCount = PAGE_SIZE;
            applyFiltersAndRender();
        });
    }

    // Load More
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener("click", () => {
            visibleCount += PAGE_SIZE;
            renderGrid(false); // no fade, just add more
        });
    }
    // Mobile nav buttons (kept for potential use)
    if (prevBtn) prevBtn.addEventListener("click", prevCard);
    if (nextBtn) nextBtn.addEventListener("click", nextCard);

    window.addEventListener("resize", () => {
        const wasMobile = isNativeScroller;
        checkMobile();
        if (!isNativeScroller) {
            applyFiltersAndRender();
        } else {
            updateCarousel();
            renderMobileDots();
        }
        if (
            wasMobile &&
            !isNativeScroller &&
            mcdPanel.classList.contains("open")
        ) {
            closeMobileSheet();
        }
    });

    // Mobile carousel scroll listener
    const carousel = document.querySelector(".card-carousel");
    if (carousel) {
        carousel.addEventListener(
            "scroll",
            () => {
                if (isNativeScroller) {
                    const cards = cardTrack.querySelectorAll(".programme-card");
                    if (!cards.length) return;
                    const gap =
                        parseFloat(getComputedStyle(cardTrack).gap) || 12;
                    const cardW = cards[0].offsetWidth + gap;
                    const idx = Math.round(carousel.scrollLeft / cardW);
                    updateMobileDots(idx);
                    if (!hasScrolledOnce && carousel.scrollLeft > 20) {
                        hasScrolledOnce = true;
                        if (swipeCue) swipeCue.classList.add("hidden");
                    }
                }
            },
            { passive: true },
        );
    }

    initDragScroll();
    initParticles();
    initMobileSheetBehavior();
}

function checkMobile() {
    isNativeScroller = window.innerWidth <= 600 || window.innerHeight <= 600;
}

// ═══════════════════════════════════════════════════════════════
//  DESKTOP: COLLEGE SELECTOR CARDS
// ═══════════════════════════════════════════════════════════════

function renderDesktopDropdown() {
    if (!desktopDropdownList) return;
    desktopDropdownList.innerHTML = "";

    // "All Colleges" item
    const allItem = buildDesktopDropdownItem({
        id: "all",
        name: "All Colleges",
        image: "",
        icon: collegeIcons["all"],
        count: categories.reduce((s, c) => s + c.programs.length, 0),
    });
    desktopDropdownList.appendChild(allItem);

    categories.forEach((cat) => {
        const item = buildDesktopDropdownItem({
            id: cat.id,
            name: cat.name,
            image: cat.image || "",
            icon: collegeIcons[cat.id] || collegeIcons["all"],
            count: cat.programs.length,
        });
        desktopDropdownList.appendChild(item);
    });
}

function buildDesktopDropdownItem({ id, name, image, icon, count }) {
    const btn = document.createElement("button");
    btn.className = `college-card ${id === activeCategoryId ? "active" : ""}`;
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-label", `${name} — ${count} programmes`);
    btn.dataset.id = id;

    const thumbHtml = image
        ? `<div class="college-card-thumb-wrap">
             <img class="college-card-thumb" src="${image}" alt="${name}" loading="lazy" />
           </div>`
        : `<div class="college-card-thumb-wrap" style="background:linear-gradient(135deg,#002147 0%,#1a4a8a 100%);display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,0.75);">
             ${icon}
           </div>`;

    btn.innerHTML = `
        ${thumbHtml}
        <div class="glass-badge-container">
            <div class="glass-badge">${name}</div>
            <div class="glass-badge-count">${count} Programme${count !== 1 ? "s" : ""}</div>
        </div>
    `;

    btn.addEventListener("click", () => {
        if (desktopDropdown) desktopDropdown.classList.remove("open");
        if (desktopDropdownTrigger)
            desktopDropdownTrigger.setAttribute("aria-expanded", "false");

        if (id !== activeCategoryId) {
            selectCollege(id);
        }
    });

    return btn;
}

function initDesktopDropdownBehavior() {
    if (!desktopDropdownTrigger || !desktopDropdown) return;
    
    const desktopBackdrop = document.getElementById("dcd-backdrop");

    if (desktopBackdrop) {
        desktopBackdrop.addEventListener("click", (e) => {
            e.stopPropagation();
            desktopDropdown.classList.remove("open");
            desktopDropdownTrigger.setAttribute("aria-expanded", "false");
        });
    }

    desktopDropdownTrigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = desktopDropdown.classList.contains("open");
        if (isOpen) {
            desktopDropdown.classList.remove("open");
            desktopDropdownTrigger.setAttribute("aria-expanded", "false");
        } else {
            desktopDropdown.classList.add("open");
            desktopDropdownTrigger.setAttribute("aria-expanded", "true");
        }
    });

    document.addEventListener("click", (e) => {
        if (!desktopDropdown.contains(e.target)) {
            desktopDropdown.classList.remove("open");
            desktopDropdownTrigger.setAttribute("aria-expanded", "false");
        }
    });
}

// ═══════════════════════════════════════════════════════════════
//  SELECTION LOGIC
// ═══════════════════════════════════════════════════════════════

function selectCollege(id, immediate = false) {
    activeCategoryId = id;
    activeFilter = "All";
    searchQuery = "";
    currentIndex = 0;
    visibleCount = PAGE_SIZE;
    hasScrolledOnce = false;

    // Reset filter pills
    document
        .querySelectorAll(".filter-pill")
        .forEach((p) =>
            p.classList.toggle("active", p.dataset.level === "All"),
        );

    // Reset search input
    if (searchInput) searchInput.value = "";

    // Update desktop dropdown menu selection
    if (desktopDropdownList) {
        desktopDropdownList
            .querySelectorAll(".college-card")
            .forEach((item) => {
                item.classList.toggle("active", item.dataset.id === id);
            });
    }

    // Update desktop dropdown trigger label and icon
    if (id === "all") {
        if (desktopDropdownLabel)
            desktopDropdownLabel.textContent = "All Colleges";
        if (desktopDropdownIcon)
            desktopDropdownIcon.innerHTML = collegeIcons["all"];
    } else {
        const cat = categories.find((c) => c.id === id);
        if (cat && desktopDropdownLabel)
            desktopDropdownLabel.textContent = cat.name;
        if (cat && desktopDropdownIcon)
            desktopDropdownIcon.innerHTML = collegeIcons[cat.id] || "🎓";
    }

    // Update mobile label and icon
    const triggerIcon = document.querySelector(".mcd-trigger-left .mcd-icon");
    if (id === "all") {
        if (mcdLabel) mcdLabel.textContent = "All Colleges";
        if (triggerIcon) triggerIcon.innerHTML = collegeIcons["all"];
    } else {
        const cat = categories.find((c) => c.id === id);
        if (cat && mcdLabel) mcdLabel.textContent = cat.name;
        if (cat && triggerIcon)
            triggerIcon.innerHTML = collegeIcons[cat.id] || "🎓";
    }

    // Update mobile bottom sheet selection
    updateMobileSheetSelection();

    // Set mobile carousel programs
    if (id === "all") {
        currentPrograms = categories.flatMap((c) => c.programs);
    } else {
        const cat = categories.find((c) => c.id === id);
        currentPrograms = cat ? cat.programs : [];
    }

    updateAvailablePills();

    if (immediate) {
        applyFiltersAndRender();
    } else {
        withFade(() => applyFiltersAndRender());
    }
}

// Legacy tab-based select (used by mobile sheet)
function selectTab(categoryId, immediate = false) {
    selectCollege(categoryId, immediate);
}

// ═══════════════════════════════════════════════════════════════
//  FILTER + SEARCH HELPERS
// ═══════════════════════════════════════════════════════════════

function getAllPrograms() {
    // Returns all programs across all categories, annotated with college name
    return categories.flatMap((cat) =>
        cat.programs.map((p) => ({
            ...p,
            collegeName: cat.name,
            collegeId: cat.id,
        })),
    );
}

function getFilteredPrograms() {
    let pool;

    if (activeCategoryId === "all") {
        pool = getAllPrograms();
    } else {
        const cat = categories.find((c) => c.id === activeCategoryId);
        pool = cat
            ? cat.programs.map((p) => ({
                  ...p,
                  collegeName: cat.name,
                  collegeId: cat.id,
              }))
            : [];
    }

    // Level filter
    if (activeFilter !== "All") {
        pool = pool.filter((p) => p.level === activeFilter);
    }

    // Search filter
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        pool = pool.filter(
            (p) =>
                p.title.toLowerCase().includes(q) ||
                (p.collegeName && p.collegeName.toLowerCase().includes(q)),
        );
    }

    return pool;
}

function updateAvailablePills() {
    const filterContainers = document.querySelectorAll(".level-filter-multi");
    if (!filterContainers.length) return;

    let available = {};
    if (activeCategoryId === "all") {
        categories.forEach((cat) =>
            cat.programs.forEach((p) => {
                available[p.level] = true;
            }),
        );
    } else {
        (currentPrograms || []).forEach((p) => {
            available[p.level] = true;
        });
    }

    let needsReset = false;
    filterContainers.forEach((filterContainer) => {
        filterContainer.querySelectorAll(".filter-pill").forEach((pill) => {
            const lvl = pill.dataset.level;
            if (lvl === "All") return;
            const has = !!available[lvl];
            pill.style.display = has ? "" : "none";
            if (!has && lvl === activeFilter) needsReset = true;
        });
    });

    if (needsReset) {
        activeFilter = "All";
        filterContainers.forEach((filterContainer) => {
            filterContainer
                .querySelectorAll(".filter-pill")
                .forEach((p) =>
                    p.classList.toggle("active", p.dataset.level === "All"),
                );
        });
    }
}

// ═══════════════════════════════════════════════════════════════
//  DESKTOP: GRID RENDERING
// ═══════════════════════════════════════════════════════════════

function withFade(fn) {
    if (typeof progGrid === "undefined" || !progGrid) {
        fn();
        return;
    }
    progGrid.classList.add("fading");
    isTransitioning = true;
    setTimeout(() => {
        fn();
        progGrid.classList.remove("fading");
        setTimeout(() => {
            isTransitioning = false;
        }, 350);
    }, 220);
}

function applyFiltersAndRender() {
    const filtered = getFilteredPrograms();

    // Update all count badges
    document.querySelectorAll(".programme-count").forEach((el) => {
        el.textContent = `${filtered.length} Programme${filtered.length !== 1 ? "s" : ""}`;
    });

    if (isNativeScroller) {
        // Mobile path: render carousel from currentPrograms filtered by activeFilter
        renderMobileCards();
    } else {
        renderGrid(true);
    }
}

function renderGrid(animated = true) {
    if (!progGrid) return;

    const filtered = getFilteredPrograms();

    // Subtitle
    if (gridSubtitle) {
        let where;
        if (searchQuery) {
            where = `matching "<strong>${escapeHtml(searchQuery)}</strong>"`;
        } else if (activeCategoryId === "all") {
            where = "across all colleges";
        } else {
            const cat = categories.find((c) => c.id === activeCategoryId);
            where = `in <strong>${cat ? cat.name : ""}</strong>`;
        }
        gridSubtitle.innerHTML = `Showing <strong>${filtered.length}</strong> programme${filtered.length !== 1 ? "s" : ""} ${where}`;
    }

    progGrid.innerHTML = "";

    if (filtered.length === 0) {
        progGrid.innerHTML = `
            <div class="empty-state">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <p>No programmes found</p>
                <span>Try adjusting your search or filters</span>
            </div>
        `;
        if (loadMoreBtn) loadMoreBtn.classList.add("hidden");
        return;
    }

    const slice = filtered.slice(0, visibleCount);
    slice.forEach((prog, i) => {
        const card = buildProgrammeCard(prog, animated ? i : -1);
        progGrid.appendChild(card);
    });

    if (loadMoreBtn) {
        if (filtered.length <= visibleCount) {
            loadMoreBtn.classList.add("hidden");
        } else {
            loadMoreBtn.classList.remove("hidden");
        }
    }
}

function buildProgrammeCard(prog, animIdx) {
    const card = document.createElement("article");
    card.className = "programme-card";

    if (animIdx >= 0) {
        card.style.animationDelay = `${Math.min(animIdx, 8) * 0.045}s`;
    } else {
        card.style.animation = "none";
    }

    const level = prog.level || "UG";
    const badgeClass =
        level === "PG"
            ? "badge-pg"
            : level === "Doctorate"
              ? "badge-doctorate"
              : "badge-ug";

    let duration = "3 Years";
    if (level === "PG") duration = "2 Years";
    if (level === "Doctorate") duration = "3–5 Years";
    if (prog.title.match(/Tech|BDS|Pharm|BPT/i)) duration = "4 Years";
    if (prog.title.includes("MBBS")) duration = "5.5 Years";

    card.innerHTML = `
        <div class="card-image-wrap">
            <div class="card-bg" style="background-image:url('${prog.image}')"></div>
            <span class="level-badge ${badgeClass}">${level}</span>
        </div>
        <div class="card-text-wrap">
            <div class="meta-tags">
                <span class="meta-tag">${duration}</span>
                <span class="meta-tag">Full Time</span>
            </div>
            <h3 class="card-title">${prog.title}</h3>
            <div class="card-footer">
                <span class="meta-info">Main Campus</span>
                <div class="explore-cta" aria-label="Explore ${prog.title}">
                    Explore
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                </div>
            </div>
        </div>
    `;

    return card;
}

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// ═══════════════════════════════════════════════════════════════
//  MOBILE: CAROUSEL RENDERING
// ═══════════════════════════════════════════════════════════════

function renderMobileCards() {
    if (!cardTrack) return;
    cardTrack.innerHTML = "";

    // Mobile uses currentPrograms (current category) filtered only by level
    let pool = currentPrograms;
    if (activeFilter !== "All") {
        pool = pool.filter((p) => p.level === activeFilter);
    }

    if (programmeCount) {
        programmeCount.textContent = `${pool.length} Programme${pool.length !== 1 ? "s" : ""}`;
    }

    if (swipeCue) {
        swipeCue.style.display = pool.length > 1 ? "flex" : "none";
        if (pool.length <= 1) hasScrolledOnce = true;
    }

    pool.forEach((prog, i) => {
        const level = prog.level || "UG";
        const badgeClass =
            level === "PG"
                ? "badge-pg"
                : level === "Doctorate"
                  ? "badge-doctorate"
                  : "badge-ug";

        let duration = "3 Years";
        if (level === "PG") duration = "2 Years";
        if (level === "Doctorate") duration = "3–5 Years";
        if (prog.title.match(/Tech|BDS|Pharm|BPT/i)) duration = "4 Years";
        if (prog.title.includes("MBBS")) duration = "5.5 Years";

        const card = document.createElement("article");
        card.className = "programme-card";
        card.innerHTML = `
            <div class="card-image-wrap">
                <div class="card-bg" style="background-image:url('${prog.image}')"></div>
                <span class="level-badge ${badgeClass}">${level}</span>
            </div>
            <div class="card-text-wrap">
                <div class="meta-tags">
                    <span class="meta-tag">${duration}</span>
                    <span class="meta-tag">Full Time</span>
                </div>
                <h3 class="card-title">${prog.title}</h3>
                <div class="card-footer">
                    <span class="meta-info">Main Campus</span>
                    <div class="explore-cta">
                        Explore
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </div>
                </div>
            </div>
        `;
        cardTrack.appendChild(card);
    });

    const carousel = document.querySelector(".card-carousel");
    if (carousel) carousel.scrollLeft = 0;

    renderMobileDots();
    updateCarousel();
}

// ─── Carousel Logic (Mobile) ───
function getVisibleCount() {
    const w = window.innerWidth;
    if (w <= 600) return 1;
    if (w <= 900) return 2;
    return 3;
}

function updateCarousel() {
    if (isNativeScroller) {
        if (cardTrack) cardTrack.style.transform = "none";
        return;
    }
}

function updateNavControls() {}

function nextCard() {
    const visible = getVisibleCount();
    const pool =
        activeFilter === "All"
            ? currentPrograms
            : currentPrograms.filter((p) => p.level === activeFilter);
    const maxIdx = Math.max(0, pool.length - visible);
    if (currentIndex < maxIdx) {
        currentIndex++;
        updateCarousel();
    }
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

// ─── Mobile Dots ───
function renderMobileDots() {
    if (!mobileDotNav) return;
    mobileDotNav.innerHTML = "";

    const pool =
        activeFilter === "All"
            ? currentPrograms
            : currentPrograms.filter((p) => p.level === activeFilter);
    pool.forEach((_, i) => {
        const dot = document.createElement("button");
        dot.className = `mobile-dot ${i === 0 ? "active" : ""}`;
        dot.setAttribute("aria-label", `Programme ${i + 1}`);
        dot.addEventListener("click", () => {
            const carousel = document.querySelector(".card-carousel");
            const cards = cardTrack.querySelectorAll(".programme-card");
            if (cards[i]) {
                const gap = parseFloat(getComputedStyle(cardTrack).gap) || 12;
                carousel.scrollTo({
                    left: i * (cards[i].offsetWidth + gap),
                    behavior: "smooth",
                });
            }
        });
        mobileDotNav.appendChild(dot);
    });
}

function updateMobileDots(idx) {
    document
        .querySelectorAll(".mobile-dot")
        .forEach((d, i) => d.classList.toggle("active", i === idx));
}

// ═══════════════════════════════════════════════════════════════
//  DESKTOP: DRAG SCROLL
// ═══════════════════════════════════════════════════════════════

function initDragScroll() {
    const carousel = document.querySelector(".card-carousel");
    if (!carousel) return;

    let isDragging = false,
        startX = 0,
        startOffset = 0,
        moved = false;

    carousel.addEventListener("mousedown", (e) => {
        if (e.button !== 0 || isNativeScroller) return;
        const cards = cardTrack.querySelectorAll(".programme-card");
        if (!cards.length) return;
        isDragging = true;
        moved = false;
        startX = e.clientX;
        const gap = parseFloat(getComputedStyle(cardTrack).gap) || 16;
        startOffset = currentIndex * (cards[0].offsetWidth + gap);
        document.body.style.userSelect = "none";
        e.preventDefault();
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        if (Math.abs(delta) > 5) moved = true;
        if (cardTrack)
            cardTrack.style.transform = `translateX(-${startOffset - delta}px)`;
    });

    const stopDrag = (e) => {
        if (!isDragging) return;
        isDragging = false;
        document.body.style.userSelect = "";
        if (!moved) {
            updateCarousel();
            return;
        }
        if (e.clientX) {
            const delta = e.clientX - startX;
            const cards = cardTrack
                ? cardTrack.querySelectorAll(".programme-card")
                : [];
            if (cards.length) {
                const gap = parseFloat(getComputedStyle(cardTrack).gap) || 16;
                const cardW = cards[0].offsetWidth + gap;
                const pool =
                    activeFilter === "All"
                        ? currentPrograms
                        : currentPrograms.filter(
                              (p) => p.level === activeFilter,
                          );
                const maxIdx = Math.max(0, pool.length - getVisibleCount());
                const steps = -Math.round(delta / (cardW * 0.3));
                currentIndex = Math.max(
                    0,
                    Math.min(currentIndex + steps, maxIdx),
                );
            }
        }
        requestAnimationFrame(() => updateCarousel());
    };
    document.addEventListener("mouseup", stopDrag);
    carousel.addEventListener("mouseleave", stopDrag);
}

// ═══════════════════════════════════════════════════════════════
//  MOBILE BOTTOM SHEET
// ═══════════════════════════════════════════════════════════════

function initMobileSheetList() {
    if (!mcdList) return;
    mcdList.innerHTML = "";

    // All Colleges item
    const allItem = document.createElement("div");
    allItem.className = `mcd-item ${activeCategoryId === "all" ? "active" : ""}`;
    allItem.dataset.id = "all";
    const checkSvg = `<svg class="mcd-item-check" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    allItem.innerHTML = `<div class="mcd-item-label">${collegeIcons["all"]} <span>All Colleges</span></div>${checkSvg}`;
    allItem.addEventListener("click", () => {
        selectCollege("all");
        closeMobileSheet();
        if (mcdSearch) {
            mcdSearch.value = "";
            filterSheetList("");
        }
    });
    mcdList.appendChild(allItem);

    categories.forEach((cat) => {
        const item = document.createElement("div");
        item.className = `mcd-item ${cat.id === activeCategoryId ? "active" : ""}`;
        item.dataset.id = cat.id;
        const icon = collegeIcons[cat.id] || "🎓";
        item.innerHTML = `<div class="mcd-item-label">${icon} <span>${cat.name}</span></div>${checkSvg}`;
        item.addEventListener("click", () => {
            selectCollege(cat.id);
            closeMobileSheet();
            if (mcdSearch) {
                mcdSearch.value = "";
                filterSheetList("");
            }
        });
        mcdList.appendChild(item);
    });
}

function updateMobileSheetSelection() {
    if (!mcdList) return;
    mcdList.querySelectorAll(".mcd-item").forEach((item) => {
        item.classList.toggle("active", item.dataset.id === activeCategoryId);
    });
}

function openMobileSheet() {
    if (!mcdSheet) return;
    mcdSheet.style.display = "block";
    void mcdSheet.offsetWidth;
    mcdPanel.classList.add("open");
    mcdBackdrop.classList.add("open");
    if (mcdTrigger) mcdTrigger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
}

function closeMobileSheet() {
    if (!mcdPanel) return;

    // Visually initiate close
    mcdPanel.classList.remove("open");
    mcdBackdrop.classList.remove("open");
    if (mcdTrigger) mcdTrigger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
    mcdPanel.style.transform = "";

    // Explicitly hide the root container instantly, but preserve animation visibility
    // The panel and backdrop will fade/slide away.
    // To prevent any ghost clicks or the sheet remaining, hide it after 400ms.
    setTimeout(() => {
        if (!mcdPanel.classList.contains("open") && mcdSheet) {
            mcdSheet.style.display = "none";
        }
    }, 400);
}

function filterSheetList(query) {
    const q = query.toLowerCase().trim();
    mcdList.querySelectorAll(".mcd-item").forEach((item) => {
        const text = item.querySelector("span").textContent.toLowerCase();
        item.classList.toggle("hidden", text.indexOf(q) === -1);
    });
}

function initMobileSheetBehavior() {
    if (!mcdTrigger) return;
    mcdTrigger.addEventListener("click", openMobileSheet);
    if (mcdBackdrop) mcdBackdrop.addEventListener("click", closeMobileSheet);
    if (mcdSearch)
        mcdSearch.addEventListener("input", (e) =>
            filterSheetList(e.target.value),
        );

    const closeBtn = document.getElementById("mcd-close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeMobileSheet);
    }
}

// ═══════════════════════════════════════════════════════════════
//  PARTICLES
// ═══════════════════════════════════════════════════════════════

function initParticles() {
    const canvas = document.getElementById("particle-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: 28 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.18,
        dy: -Math.random() * 0.28 - 0.04,
        o: Math.random() * 0.25 + 0.08,
    }));

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        pts.forEach((p) => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,33,71,${p.o})`;
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;
            if (p.y < -10) {
                p.y = canvas.height + 10;
                p.x = Math.random() * canvas.width;
            }
            if (p.x < -10) p.x = canvas.width + 10;
            if (p.x > canvas.width + 10) p.x = -10;
        });
        requestAnimationFrame(draw);
    }
    draw();
}

// ─── Boot ───
document.addEventListener("DOMContentLoaded", init);
