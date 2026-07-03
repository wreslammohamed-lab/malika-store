const storeLinks = {
  whatsapp: "https://wa.me/201069070271",
  phone: "+201069070271",
  email: "shahodmahmoud47@gmail.com"
};

const collectionLabels = {
  featured: "مميز",
  new: "جديد",
  bestseller: "الأكثر طلبًا",
  offer: "عرض خاص"
};

const products = [
  {
    id: "shahd-set",
    name: "سوت الشهد",
    category: "سوتات چيب",
    collections: ["featured", "new", "bestseller"],
    price: 800,
    comparePrice: null,
    badge: "المنتج الحقيقي",
    image: "assets/images/products/shahd-main.jpeg",
    gallery: [
      "assets/images/products/shahd-main.jpeg",
      "assets/images/products/shahd-look-1.jpeg",
      "assets/images/products/shahd-look-2.jpeg",
      "assets/images/products/shahd-look-3.jpeg",
      "assets/images/products/shahd-look-6.jpeg",
      "assets/images/products/shahd-look-8.jpeg"
    ],
    teaser:
      "سوت كاملة عملية جدًا بطرق لبس متعددة: كاردي، دريس، أو سوت كاملة بإحساس أنيق ومريح.",
    material: "كتان لوريس",
    color: "اللون المعروض فقط",
    tags: ["عملي", "متعدد الاستخدام", "كتان", "أزرق", "يومي"],
    details: [
      "الخامة: كتان لوريس، ميكس بين الكتان الفرنساوي والاسباني.",
      "الخامة مبتوبرش ولا بتنسل، ومناسبة للاستخدام المتكرر.",
      "المحتوى: چيب نصف كلوش + قطعة ثانية تُلبس كاردي أو دريس أو لونج شميز.",
      "القطعة متاحة باللون المعروض فقط."
    ],
    description:
      "هذه القطعة هي قلب الافتتاح الحقيقي للبراند: سوت عملية بخامة مريحة ولمعة هادئة جدًا، مصممة لتمنحك أكثر من لوك من نفس المجموعة بدون أن تفقد أناقتها. مناسبة للجامعة، المشاوير، الزيارات، وحتى اللوك الهادئ في يوم طويل."
  },
  {
    id: "julnar-royal",
    name: "سوت جلنار الملكي",
    category: "سوتات چيب",
    collections: ["featured", "bestseller"],
    price: 920,
    comparePrice: 990,
    badge: "إطلالة Boutique",
    image: "assets/images/products/generated-burgundy-set.png",
    gallery: ["assets/images/products/generated-burgundy-set.png"],
    teaser:
      "لون برغندي راقٍ مع انسياب أنثوي واضح، مثالي للمرأة التي تريد حضورًا فخمًا بهدوء.",
    material: "كتان ناعم ممزوج بكريب خفيف",
    color: "برغندي ملكي",
    tags: ["فاخر", "برغندي", "سهرة هادئة", "محتشم"],
    details: [
      "يتكون من طبقة داخلية انسيابية مع قطعة خارجية مفتوحة.",
      "قماش خفيف ذو سقوط ناعم مناسب للزيارات والمناسبات الهادئة.",
      "لون غني مستوحى من هوية الملكة البصرية."
    ],
    description:
      "صُمم هذا السوت ليعطيك حضورًا راقيًا من أول لحظة. اللون البرغندي هنا هو العنصر البطولي، لكن بدون حدة بصرية، لذلك يبقى مناسبًا لإطلالات المساء أو الخروجات الأنيقة الخفيفة."
  },
  {
    id: "nour-alrimal",
    name: "دريس نور الرمال",
    category: "دريسات",
    collections: ["featured", "new", "offer"],
    price: 790,
    comparePrice: 870,
    badge: "هدوء راقٍ",
    image: "assets/images/products/generated-beige-set.png",
    gallery: ["assets/images/products/generated-beige-set.png"],
    teaser:
      "لون رملي هادئ بخطوط ناعمة وسقوط مريح جدًا، مناسب للمرأة التي تحب الفخامة الهادئة.",
    material: "كتان ممزوج بملمس مطفي",
    color: "بيج رملي",
    tags: ["محايد", "يومي", "بيج", "عملي"],
    details: [
      "إطلالة مناسبة لنهار كامل بفضل خفة القماش وهدوء اللون.",
      "التنسيق سهل جدًا مع الطرح البيج والموكا.",
      "ستايل ناعم يلائم اليومي والزيارات واللقاءات الخفيفة."
    ],
    description:
      "قطعة ناعمة ومريحة بصريًا وعمليًا، تمنحك إحساسًا مترفًا لكن غير متكلف. دريس نور الرمال مثالي لمن تحب الألوان المحايدة والنظيفة مع حضور أنيق في كل وقت."
  },
  {
    id: "layal-abaya",
    name: "عباية ليال الملكية",
    category: "عبايات",
    collections: ["featured", "bestseller", "offer"],
    price: 930,
    comparePrice: 1020,
    badge: "الأكثر طلبًا",
    image: "assets/images/products/generated-black-abaya.png",
    gallery: ["assets/images/products/generated-black-abaya.png"],
    teaser:
      "عباية سوداء راقية بتطريز هادئ جدًا يضيف قيمة بصرية بدون مبالغة.",
    material: "كريب انسيابي بتفاصيل تطريز ناعمة",
    color: "أسود كلاسيكي",
    tags: ["عباية", "أسود", "مناسبات", "وقار"],
    details: [
      "تطريز تون على تون عند الحواف والأكمام.",
      "إطلالة مثالية للمناسبات الخفيفة والزيارات الراقية.",
      "تعطي طولًا بصريًا أنيقًا مع تنسيق طرح بيج أو عاجي."
    ],
    description:
      "هذه العباية مصممة للمرأة التي تحب الأساسيات لكن ترفض العادية. الأسود هنا فخم، نظيف، ويكتسب عمقه من التطريز الهادئ والحضور العام للقطعة."
  },
  {
    id: "rose-hijab",
    name: "طرحة روز ناعمة",
    category: "طرح",
    collections: ["new", "offer"],
    price: 160,
    comparePrice: 185,
    badge: "لون الموسم",
    image: "assets/images/products/generated-hijabs.png",
    gallery: ["assets/images/products/generated-hijabs.png"],
    teaser:
      "وردي هادئ يرفع الإطلالة ويعطيها لمسة ناعمة من غير أن يسرق التركيز من القطعة الأساسية.",
    material: "قماش خفيف بملمس ناعم",
    color: "Dusty Rose",
    tags: ["طرح", "وردي", "ناعم", "تكميل لوك"],
    details: [
      "مناسبة للدريسات واللوك المحايد.",
      "خفيفة وسهلة اللف وتناسب الاستخدام اليومي.",
      "درجتها الهادئة تجعلها مناسبة للتصوير والإطلالات الأنثوية."
    ],
    description:
      "طرحة تكمل الإطلالة بدل أن تنافسها. اختيار ذكي عندما تريدين لمسة لونية ناعمة ترفع اللوك وتبقيه متوازنًا."
  },
  {
    id: "moka-hijab",
    name: "طرحة موكا هادئة",
    category: "طرح",
    collections: ["bestseller"],
    price: 180,
    comparePrice: null,
    badge: "تناسق يومي",
    image: "assets/images/products/generated-hijabs.png",
    gallery: ["assets/images/products/generated-hijabs.png"],
    teaser:
      "درجة موكا مريحة ومرنة في التنسيق، خاصة مع السوتات البيج والعبايات الداكنة.",
    material: "نسيج خفيف بانسياب هادئ",
    color: "Taupe Mocha",
    tags: ["طرح", "موكا", "محايد", "عملي"],
    details: [
      "خيار آمن لتنسيق يومي أنيق.",
      "تلائم أغلب الدرجات المحايدة والبرغندي والأسود.",
      "مريحة في اللف ومناسبة للدوام والمشاوير."
    ],
    description:
      "طرحة موكا هادئة صممت لتبقى اختيارك المتكرر، لأنها تخدم أكثر من قطعة وتعطي الإطلالة لمسة منظمة ونظيفة."
  },
  {
    id: "burgundy-hijab",
    name: "طرحة برغندي ملكية",
    category: "طرح",
    collections: ["featured"],
    price: 195,
    comparePrice: null,
    badge: "مطابقة للهوية",
    image: "assets/images/products/generated-hijabs.png",
    gallery: ["assets/images/products/generated-hijabs.png"],
    teaser:
      "درجتها البرغندية الغنية مثالية مع الإطلالات المحايدة أو كقطعة ملفتة أنيقة بمفردها.",
    material: "قماش مطفي بخفة فاخرة",
    color: "Burgundy",
    tags: ["طرح", "برغندي", "فاخر", "مميز"],
    details: [
      "تعطي قوة لونية أنيقة بدون قسوة.",
      "مثالية مع البيج والعاجي والأسود.",
      "قطعة مكمّلة لستايل الملكة البصري."
    ],
    description:
      "إذا كنتِ تحبين التفاصيل اللونية القوية والراقية، فهذه الطرحة تعطي اللوك لمسة محسوبة جدًا وتربطه مباشرة بهوية البراند."
  }
];

const sectionConfigs = {
  featured: { limit: 3, emptyTitle: "لا توجد منتجات مميزة مطابقة الآن." },
  new: { limit: 3, emptyTitle: "لا توجد قطع جديدة مطابقة للبحث الحالي." },
  bestseller: { limit: 3, emptyTitle: "لا توجد منتجات من الأكثر مبيعًا مطابقة الآن." },
  offer: { limit: 3, emptyTitle: "لا توجد عروض مطابقة للفلاتر الحالية." }
};

const state = {
  category: "الكل",
  query: "",
  sort: "featured"
};

const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");
const productModalClose = document.getElementById("productModalClose");
const productModalOverlay = document.getElementById("productModalOverlay");
const mobileDrawer = document.getElementById("mobileDrawer");
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const mobileDrawerClose = document.getElementById("mobileDrawerClose");
const mobileDrawerOverlay = document.getElementById("mobileDrawerOverlay");
const splashScreen = document.getElementById("splashScreen");
const enterExperience = document.getElementById("enterExperience");
const backToTop = document.getElementById("backToTop");
const catalogStatus = document.getElementById("catalogStatus");
const catalogSearch = document.getElementById("catalogSearch");
const sortSelect = document.getElementById("sortSelect");
const contactForm = document.getElementById("contactForm");
const headerSearchButton = document.getElementById("headerSearchButton");
const megaTrigger = document.getElementById("megaTrigger");

function formatPrice(value) {
  return `${new Intl.NumberFormat("ar-EG").format(value)} ج.م`;
}

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

function getFilteredProducts() {
  const normalizedQuery = state.query.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const matchesCategory =
      state.category === "الكل" || product.category === state.category;

    const haystack = [
      product.name,
      product.category,
      product.teaser,
      product.material,
      product.color,
      ...product.tags
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery =
      !normalizedQuery || haystack.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });

  const sorters = {
    featured: (a, b) => products.indexOf(a) - products.indexOf(b),
    "price-asc": (a, b) => a.price - b.price,
    "price-desc": (a, b) => b.price - a.price,
    name: (a, b) => a.name.localeCompare(b.name, "ar")
  };

  return [...filtered].sort(sorters[state.sort] || sorters.featured);
}

function buildWhatsappUrl(message) {
  return `${storeLinks.whatsapp}?text=${encodeURIComponent(message)}`;
}

function buildProductCard(product, collectionKey) {
  const compareMarkup = product.comparePrice
    ? `<span class="product-price__compare">${formatPrice(product.comparePrice)}</span>`
    : "";

  const pointsMarkup = product.details
    .slice(0, 3)
    .map((detail) => `<li>${detail}</li>`)
    .join("");

  return `
    <article class="product-card" data-product-id="${product.id}">
      <div class="product-card__media">
        <img src="${product.image}" alt="${product.name}" loading="lazy" />
        <span class="product-card__badge">${product.badge}</span>
        <span class="product-card__collection">${collectionLabels[collectionKey]}</span>
      </div>
      <div class="product-card__body">
        <div class="product-card__meta">
          <span>${product.category}</span>
          <span>${product.material}</span>
        </div>
        <div class="product-card__title-wrap">
          <h3 class="product-card__title">${product.name}</h3>
          <div class="product-card__teaser">${product.teaser}</div>
        </div>
        <ul class="product-card__points">
          ${pointsMarkup}
        </ul>
        <div class="product-card__footer">
          <div class="product-price">
            <strong>${formatPrice(product.price)}</strong>
            <span>${product.color}</span>
            ${compareMarkup}
          </div>
          <div class="product-card__actions">
            <button type="button" class="product-card__secondary" data-open-modal="${product.id}">
              تفاصيل القطعة
            </button>
            <a
              class="product-card__action"
              href="${buildWhatsappUrl(`مرحبًا، أريد طلب ${product.name}. هل هي متاحة الآن؟`)}"
              target="_blank"
              rel="noreferrer"
            >
              اطلبي الآن
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function buildEmptyState(message) {
  return `
    <div class="empty-state">
      <strong>${message}</strong>
      <span>جرّبي تغيير كلمة البحث أو اختاري فئة مختلفة لعرض قطع أخرى.</span>
      <div style="margin-top: 1rem;">
        <button type="button" class="product-card__secondary" data-reset-filters="true">
          إعادة ضبط الفلاتر
        </button>
      </div>
    </div>
  `;
}

function renderSections() {
  const filteredProducts = getFilteredProducts();
  document.querySelectorAll(".js-product-grid").forEach((grid) => {
    const collectionKey = grid.dataset.collection;
    const sectionProducts = filteredProducts
      .filter((product) => product.collections.includes(collectionKey))
      .slice(0, sectionConfigs[collectionKey].limit);

    if (!sectionProducts.length) {
      grid.innerHTML = buildEmptyState(sectionConfigs[collectionKey].emptyTitle);
      return;
    }

    grid.innerHTML = sectionProducts
      .map((product) => buildProductCard(product, collectionKey))
      .join("");
  });

  updateCatalogStatus(filteredProducts);
}

function updateCatalogStatus(filteredProducts) {
  const categoryText =
    state.category === "الكل" ? "كل الفئات" : `فئة ${state.category}`;
  const queryText = state.query
    ? ` وكلمة البحث "${state.query.trim()}"`
    : "";
  catalogStatus.textContent = `يعرض الموقع الآن ${new Intl.NumberFormat("ar-EG").format(
    filteredProducts.length
  )} قطعة مطابقة ضمن ${categoryText}${queryText}.`;
}

function setActiveFilterButton() {
  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.classList.toggle(
      "is-active",
      button.dataset.filter === state.category
    );
  });
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const galleryMarkup = product.gallery
    .map((image, index) => `<img src="${image}" alt="${product.name} - صورة ${index + 1}" loading="lazy" />`)
    .join("");

  const detailsMarkup = product.details
    .map((detail) => `<li>${detail}</li>`)
    .join("");

  productModalContent.innerHTML = `
    <div class="product-modal__layout">
      <div class="product-modal__gallery">
        <div class="product-modal__hero">
          <img src="${product.gallery[0]}" alt="${product.name}" />
        </div>
        <div class="product-modal__thumbs">
          ${galleryMarkup}
        </div>
      </div>
      <div class="product-modal__copy">
        <span class="product-modal__eyebrow">${product.category} • ${product.material}</span>
        <h3 id="productModalTitle">${product.name}</h3>
        <span class="product-modal__submeta">${product.badge} • ${product.color}</span>
        <div class="product-price">
          <strong>${formatPrice(product.price)}</strong>
          ${
            product.comparePrice
              ? `<span class="product-price__compare">${formatPrice(product.comparePrice)}</span>`
              : `<span>سعر حالي</span>`
          }
        </div>
        <p class="product-modal__description">${product.description}</p>
        <ul class="product-modal__details">
          ${detailsMarkup}
        </ul>
        <div class="product-modal__cta">
          <a
            class="btn btn--primary"
            href="${buildWhatsappUrl(`مرحبًا، أريد طلب ${product.name}. أرجو إرسال التفاصيل المتاحة.`)}"
            target="_blank"
            rel="noreferrer"
          >
            اطلبي ${product.name} عبر واتساب
          </a>
          <a
            class="btn btn--ghost"
            href="tel:${storeLinks.phone}"
          >
            اتصال مباشر
          </a>
        </div>
      </div>
    </div>
  `;

  productModal.classList.add("is-open");
  productModal.setAttribute("aria-hidden", "false");
  syncBodyLock();
}

function closeProductModal() {
  productModal.classList.remove("is-open");
  productModal.setAttribute("aria-hidden", "true");
  syncBodyLock();
}

function openMobileDrawer() {
  mobileDrawer.classList.add("is-open");
  mobileDrawer.setAttribute("aria-hidden", "false");
  mobileMenuToggle.setAttribute("aria-expanded", "true");
  syncBodyLock();
}

function closeMobileDrawer() {
  mobileDrawer.classList.remove("is-open");
  mobileDrawer.setAttribute("aria-hidden", "true");
  mobileMenuToggle.setAttribute("aria-expanded", "false");
  syncBodyLock();
}

function syncBodyLock() {
  const splashVisible = !splashScreen.classList.contains("is-hidden");
  const shouldLock =
    splashVisible ||
    productModal.classList.contains("is-open") ||
    mobileDrawer.classList.contains("is-open");

  document.body.classList.toggle("is-locked", shouldLock);
}

function dismissSplash() {
  splashScreen.classList.add("is-hidden");
  splashScreen.setAttribute("aria-hidden", "true");
  sessionStorage.setItem("elmalika-splash-dismissed", "true");
  syncBodyLock();
}

function maybeSkipSplash() {
  if (sessionStorage.getItem("elmalika-splash-dismissed") === "true") {
    splashScreen.classList.add("is-hidden");
    splashScreen.setAttribute("aria-hidden", "true");
  }
  syncBodyLock();
}

function handleFaqToggle(trigger) {
  const item = trigger.closest(".faq-item");
  const answer = item?.querySelector(".faq-answer");
  if (!item || !answer) return;

  const willOpen = !item.classList.contains("is-open");

  document.querySelectorAll(".faq-item").forEach((faqItem) => {
    faqItem.classList.remove("is-open");
    faqItem.querySelector(".faq-trigger")?.setAttribute("aria-expanded", "false");
    const faqAnswer = faqItem.querySelector(".faq-answer");
    if (faqAnswer) faqAnswer.style.maxHeight = "0px";
  });

  if (willOpen) {
    item.classList.add("is-open");
    trigger.setAttribute("aria-expanded", "true");
    answer.style.maxHeight = `${answer.scrollHeight}px`;
  }
}

function resetFilters() {
  state.category = "الكل";
  state.query = "";
  state.sort = "featured";

  catalogSearch.value = "";
  sortSelect.value = "featured";
  setActiveFilterButton();
  renderSections();
}

function setupRevealAnimations() {
  const revealItems = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  revealItems.forEach((item) => observer.observe(item));
}

function setupEventListeners() {
  enterExperience?.addEventListener("click", dismissSplash);

  headerSearchButton?.addEventListener("click", () => {
    document.getElementById("catalogControl")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => catalogSearch?.focus(), 350);
  });

  catalogSearch?.addEventListener("input", (event) => {
    state.query = event.target.value;
    renderSections();
  });

  sortSelect?.addEventListener("change", (event) => {
    state.sort = event.target.value;
    renderSections();
  });

  document.getElementById("categoryFilters")?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;

    state.category = button.dataset.filter;
    setActiveFilterButton();
    renderSections();
  });

  document.addEventListener("click", (event) => {
    const modalButton = event.target.closest("[data-open-modal]");
    if (modalButton) {
      openProductModal(modalButton.dataset.openModal);
      return;
    }

    const jumpButton = event.target.closest("[data-category-jump]");
    if (jumpButton) {
      const targetCategory = jumpButton.dataset.categoryJump;
      state.category = targetCategory;
      setActiveFilterButton();
      renderSections();
      document.getElementById("catalogControl")?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    if (event.target.closest("[data-reset-filters]")) {
      resetFilters();
    }

    const faqTrigger = event.target.closest(".faq-trigger");
    if (faqTrigger) {
      handleFaqToggle(faqTrigger);
    }
  });

  productModalClose?.addEventListener("click", closeProductModal);
  productModalOverlay?.addEventListener("click", closeProductModal);

  mobileMenuToggle?.addEventListener("click", openMobileDrawer);
  mobileDrawerClose?.addEventListener("click", closeMobileDrawer);
  mobileDrawerOverlay?.addEventListener("click", closeMobileDrawer);

  mobileDrawer?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileDrawer);
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeProductModal();
      closeMobileDrawer();
      if (!splashScreen.classList.contains("is-hidden")) {
        dismissSplash();
      }
    }
  });

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contactName").value.trim() || "عميلة";
    const phone = document.getElementById("contactPhone").value.trim();
    const product = document.getElementById("contactProduct").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    const contactMessage = [
      `مرحبًا، أنا ${name}.`,
      phone ? `رقم التواصل: ${phone}.` : "",
      product ? `أرغب في الاستفسار أو طلب: ${product}.` : "أرغب في الاستفسار عن إحدى القطع.",
      message ? `تفاصيل إضافية: ${message}` : ""
    ]
      .filter(Boolean)
      .join(" ");

    window.open(buildWhatsappUrl(contactMessage), "_blank", "noopener");
  });

  window.addEventListener("scroll", () => {
    const shouldShow = window.scrollY > 700;
    backToTop.classList.toggle("is-visible", shouldShow);
  });

  megaTrigger?.querySelector(".desktop-nav__button")?.addEventListener("click", () => {
    megaTrigger.classList.toggle("is-open");
  });

  document.addEventListener("click", (event) => {
    if (!megaTrigger?.contains(event.target)) {
      megaTrigger?.classList.remove("is-open");
    }
  });
}

function init() {
  maybeSkipSplash();
  setActiveFilterButton();
  renderSections();
  setupRevealAnimations();
  setupEventListeners();
}

init();
