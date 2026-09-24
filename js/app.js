/* ==========================================================================
   AARADHYA • LUXURY FASHION BOUTIQUE
   Interactive Experience & Application Logic
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    lucide.createIcons();
  }

  // State Management
  const state = {
    cart: [
      {
        id: 'p4',
        title: 'Beige Embroidered Kurti',
        size: 'M',
        color: 'Champagne Beige',
        price: 1399,
        quantity: 1,
        image: 'assets/model-beige.jpg'
      }
    ],
    wishlist: [],
    discountCode: 'AURA2026',
    discountRate: 0.15,
    freeShippingThreshold: 5000,
    currentLook: 'beige',
    selectedSize: 'M'
  };

  // ==========================================================================
  // COMPREHENSIVE VIRTUAL FITTING CATALOG BY CATEGORY
  // ==========================================================================
  const lookbookCatalog = {
    'hijabs-shawls': [
      {
        id: 'hs1',
        title: 'Pure Silk Luxury Hijab',
        categoryName: 'Hijabs & Shawls',
        categoryKey: 'hijabs-shawls',
        price: 1299,
        origPrice: 1750,
        discount: '25% OFF',
        colorName: 'Desert Gold Silk',
        swatchColor: '#D4AF37',
        image: 'assets/luxury_hijab.png',
        modelImage: 'assets/luxury_hijab.png',
        desc: 'Pure mulberry silk drape with handcrafted micro-zardozi borders and featherlight head veil, styled on our muse for sublime modesty and luxury.',
        craftHours: '65 Craft Hours • Pure Mulberry Silk',
        objectPosition: 'center 12%'
      },
      {
        id: 'hs2',
        title: 'Heritage Pashmina Gold Shawl',
        categoryName: 'Hijabs & Shawls',
        categoryKey: 'hijabs-shawls',
        price: 1899,
        origPrice: 2450,
        discount: '22% OFF',
        colorName: 'Antique Amber',
        swatchColor: '#C59A45',
        image: 'assets/luxury_shawl.png',
        modelImage: 'assets/luxury_shawl.png',
        desc: 'Woven royal Kashmiri pashmina with intricate gold zari jaal and antique Mughal medallion borders, draped over bespoke atelier wear.',
        craftHours: '120 Craft Hours • Hand-loomed Pashmina',
        objectPosition: 'center 10%'
      }
    ],
    'kurti': [
      {
        id: 'k1',
        title: 'Emerald Green Embroidered Kurti',
        categoryName: 'Kurti',
        categoryKey: 'kurti',
        price: 1499,
        origPrice: 1999,
        discount: '25% OFF',
        colorName: 'Royal Emerald',
        swatchColor: '#1A4D3E',
        image: 'assets/emerald_green.png',
        modelImage: 'assets/emerald_green.png',
        desc: 'Handcrafted raw silk kurti adorned with intricate dabka necklines, hand-cut scallop hem, and regal zardozi embellishments.',
        craftHours: '180 Craft Hours • Raw Silk & Zardozi',
        objectPosition: 'center 8%'
      },
      {
        id: 'k2',
        title: 'Terracotta Raw Silk Kurti',
        categoryName: 'Kurti',
        categoryKey: 'kurti',
        price: 1599,
        origPrice: 2199,
        discount: '27% OFF',
        colorName: 'Imperial Terracotta',
        swatchColor: '#A85138',
        image: 'assets/category-kurtis.jpg',
        modelImage: 'assets/category-kurtis.jpg',
        desc: 'Terracotta raw silk with handcrafted gold zardozi neckline and sheer dupatta, inspired by the cinematic fashion atelier film.',
        craftHours: '140 Craft Hours • Botanical Dye Silk',
        objectPosition: 'center 15%'
      },
      {
        id: 'k3',
        title: 'Chanderi Gold Leaf Kurti',
        categoryName: 'Kurti',
        categoryKey: 'kurti',
        price: 1449,
        origPrice: 1950,
        discount: '26% OFF',
        colorName: 'Forest Green',
        swatchColor: '#2D5A46',
        image: 'assets/product-emerald.jpg',
        modelImage: 'assets/product-emerald.jpg',
        desc: 'Breathable pure chanderi with hand-block printed botanical accents and delicate antique gota highlights.',
        craftHours: '95 Craft Hours • Chanderi Weave',
        objectPosition: 'center 12%'
      }
    ],
    'festival-wear-kurti': [
      {
        id: 'fw1',
        title: 'Maroon Velvet Festival Kurti',
        categoryName: 'Festival Wear Kurti',
        categoryKey: 'festival-wear-kurti',
        price: 1899,
        origPrice: 2499,
        discount: '24% OFF',
        colorName: 'Royal Velvet Maroon',
        swatchColor: '#5A1E28',
        image: 'assets/maroon_velvet.png',
        modelImage: 'assets/maroon_velvet.png',
        desc: 'Opulent silk velvet festival ensemble enriched with royal dabka, tilla, sequins, and heritage gota needlework.',
        craftHours: '210 Craft Hours • Silk Velvet & Dabka',
        objectPosition: 'center 10%'
      },
      {
        id: 'fw2',
        title: 'Noorani Ivory Royal Anarkali',
        categoryName: 'Festival Wear Kurti',
        categoryKey: 'festival-wear-kurti',
        price: 2499,
        origPrice: 3200,
        discount: '22% OFF',
        colorName: 'Ivory Gold Zari',
        swatchColor: '#E6DCB8',
        image: 'assets/model-anarkali-full.jpg',
        modelImage: 'assets/model-anarkali-full.jpg',
        desc: 'Heirloom champagne ivory floor-sweeping festive kurti with 32 hand-pleated kalis and Banarasi brocade border.',
        craftHours: '280 Craft Hours • 32-Kali Banarasi',
        objectPosition: 'center 15%'
      },
      {
        id: 'fw3',
        title: 'Champagne Gold Festive Gown',
        categoryName: 'Festival Wear Kurti',
        categoryKey: 'festival-wear-kurti',
        price: 2299,
        origPrice: 2999,
        discount: '23% OFF',
        colorName: 'Gilded Champagne',
        swatchColor: '#D8B982',
        image: 'assets/category-single.jpg',
        modelImage: 'assets/category-single.jpg',
        desc: 'Tissue organza flared festive kurti styled with antique brocade and a celestial gold zardozi veil.',
        craftHours: '230 Craft Hours • Tissue Organza',
        objectPosition: 'center 12%'
      }
    ],
    'casual-coords': [
      {
        id: 'cc1',
        title: 'Tailored Navy Casual Co-ords',
        categoryName: 'Casual Co-ords',
        categoryKey: 'casual-coords',
        price: 1699,
        origPrice: 2200,
        discount: '23% OFF',
        colorName: 'Midnight Navy',
        swatchColor: '#1A2E40',
        image: 'assets/navy_coord.png',
        modelImage: 'assets/navy_coord.png',
        desc: 'Tailored royal navy two-piece coordinated set with structured tunic lapel and tapered trousers for modern elegance.',
        craftHours: '85 Craft Hours • Structured Weave',
        objectPosition: 'center 12%'
      },
      {
        id: 'cc2',
        title: 'Espresso Velvet Tailored Co-ord',
        categoryName: 'Casual Co-ords',
        categoryKey: 'casual-coords',
        price: 1999,
        origPrice: 2600,
        discount: '23% OFF',
        colorName: 'Espresso Bronze',
        swatchColor: '#3A2418',
        image: 'assets/category-coord.jpg',
        modelImage: 'assets/category-coord.jpg',
        desc: 'Bespoke espresso brown velvet jacket and fluid palazzo set with royal Mughal botanical embroidery.',
        craftHours: '160 Craft Hours • Velvet Tailoring',
        objectPosition: 'center 15%'
      },
      {
        id: 'cc3',
        title: 'Sapphire Linen Everyday Co-ord',
        categoryName: 'Casual Co-ords',
        categoryKey: 'casual-coords',
        price: 1599,
        origPrice: 2100,
        discount: '24% OFF',
        colorName: 'Sapphire Blue',
        swatchColor: '#243A5E',
        image: 'assets/product-navy.jpg',
        modelImage: 'assets/product-navy.jpg',
        desc: 'Pure breathable linen blend relaxed co-ord suit with contrast thread detailing and brass button accents.',
        craftHours: '70 Craft Hours • Organic Linen',
        objectPosition: 'center 10%'
      }
    ],
    'daily-wear-kurtis': [
      {
        id: 'dw1',
        title: 'Champagne Beige Daily Kurti',
        categoryName: 'Daily Wear Kurtis',
        categoryKey: 'daily-wear-kurtis',
        price: 1399,
        origPrice: 1899,
        discount: '26% OFF',
        colorName: 'Champagne Beige',
        swatchColor: '#D9C3A5',
        image: 'assets/beige_kurti.png',
        modelImage: 'assets/beige_kurti.png',
        desc: 'Understated ivory & sand silhouettes crafted in breathable weaves for everyday grace, comfort, and effortless poise.',
        craftHours: '90 Craft Hours • Breathable Mulberry Silk',
        objectPosition: 'center 10%'
      },
      {
        id: 'dw2',
        title: 'Sand Cotton Embroidered Kurti',
        categoryName: 'Daily Wear Kurtis',
        categoryKey: 'daily-wear-kurtis',
        price: 1299,
        origPrice: 1750,
        discount: '26% OFF',
        colorName: 'Warm Sand',
        swatchColor: '#C2B29A',
        image: 'assets/model-beige.jpg',
        modelImage: 'assets/model-beige.jpg',
        desc: 'Soft organic cotton mulmul tunic with delicate floral thread embroidery on the neckline and cuff slits.',
        craftHours: '75 Craft Hours • Hand-spun Mulmul',
        objectPosition: 'center 12%'
      }
    ]
  };

  // Build 'all' Outfits Collection
  lookbookCatalog['all'] = [
    lookbookCatalog['hijabs-shawls'][0],
    lookbookCatalog['kurti'][0],
    lookbookCatalog['festival-wear-kurti'][0],
    lookbookCatalog['casual-coords'][0],
    lookbookCatalog['daily-wear-kurtis'][0],
    lookbookCatalog['hijabs-shawls'][1]
  ];

  // Flat lookup dictionary for modal, cart, and compatibility
  const products = {};
  Object.values(lookbookCatalog).flat().forEach((item) => {
    products[item.id] = item;
  });
  // Maintain backward-compatible keys
  products.beige = products.dw1;
  products.maroon = products.fw1;
  products.emerald = products.k1;
  products.navy = products.cc1;

  // ==========================================================================
  // 1. CUSTOM LUXURY CURSOR
  // ==========================================================================
  const cursorFollower = document.getElementById('cursor-follower');
  const cursorDot = document.getElementById('cursor-dot');
  const cursorText = document.getElementById('cursor-text');

  if (cursorFollower && cursorDot && window.matchMedia('(pointer: fine)').matches) {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    });

    const animateCursor = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      cursorFollower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);

    // Interactive Hover States
    const interactiveElements = document.querySelectorAll(
      'a, button, .category-card, .product-card, .satellite-card, .story-chapter-card, .gallery-item'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursorFollower.classList.add('hover-interactive');
        if (el.classList.contains('category-card') || el.classList.contains('product-card')) {
          cursorText.textContent = 'VIEW';
        } else if (el.classList.contains('story-chapter-card')) {
          cursorText.textContent = 'EXPLORE';
        } else {
          cursorText.textContent = '';
        }
      });
      el.addEventListener('mouseleave', () => {
        cursorFollower.classList.remove('hover-interactive');
        cursorText.textContent = '';
      });
    });
  }

  // ==========================================================================
  // 2. STICKY HEADER TRANSFORMATION
  // ==========================================================================
  const siteHeader = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close-btn');

  if (mobileToggle && mobileDrawer && drawerCloseBtn) {
    mobileToggle.addEventListener('click', () => mobileDrawer.classList.add('open'));
    drawerCloseBtn.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    mobileDrawer.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => mobileDrawer.classList.remove('open'));
    });
  }

  // ==========================================================================
  // 3. TOP HERO CINEMATIC VIDEO PLAYER CONTROLS
  // ==========================================================================
  const heroVideo = document.getElementById('hero-video');
  const videoPlayToggle = document.getElementById('video-play-toggle');
  const playPauseIcon = document.getElementById('play-pause-icon');
  const videoCurrentTime = document.getElementById('video-current-time');
  const videoDuration = document.getElementById('video-duration');
  const videoScrubberTrack = document.getElementById('video-scrubber-track');
  const videoScrubberFill = document.getElementById('video-scrubber-fill');
  const videoScrubberThumb = document.getElementById('video-scrubber-thumb');
  const videoMuteToggle = document.getElementById('video-mute-toggle');
  const volumeIcon = document.getElementById('volume-icon');
  const videoFullscreenBtn = document.getElementById('video-fullscreen-btn');
  const heroWatchBtn = document.getElementById('hero-watch-btn');
  const videoTheaterModal = document.getElementById('video-theater-modal');
  const theaterVideo = document.getElementById('theater-video');
  const theaterCloseBtn = document.getElementById('theater-close-btn');
  const theaterBackdrop = document.getElementById('theater-backdrop');

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (heroVideo) {
    // Ensure video runs continuously on loop without timer
    heroVideo.play().catch(() => {});

    heroVideo.addEventListener('loadedmetadata', () => {
      if (videoDuration && !isNaN(heroVideo.duration)) {
        videoDuration.textContent = formatTime(heroVideo.duration);
      }
    });

    heroVideo.addEventListener('timeupdate', () => {
      if (!isNaN(heroVideo.duration)) {
        const percent = (heroVideo.currentTime / heroVideo.duration) * 100;
        if (videoScrubberFill) videoScrubberFill.style.width = `${percent}%`;
        if (videoScrubberThumb) videoScrubberThumb.style.left = `${percent}%`;
        if (videoCurrentTime) videoCurrentTime.textContent = formatTime(heroVideo.currentTime);
      }
    });

    // Play / Pause Toggle
    if (videoPlayToggle) {
      videoPlayToggle.addEventListener('click', () => {
        if (heroVideo.paused) {
          heroVideo.play();
          videoPlayToggle.innerHTML = '<i data-lucide="pause"></i>';
        } else {
          heroVideo.pause();
          videoPlayToggle.innerHTML = '<i data-lucide="play"></i>';
        }
        if (window.lucide) lucide.createIcons();
      });
    }

    // Interactive Scrubber Drag / Click
    if (videoScrubberTrack) {
      let isDragging = false;

      const seek = (e) => {
        const rect = videoScrubberTrack.getBoundingClientRect();
        const clickX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const fraction = clickX / rect.width;
        if (!isNaN(heroVideo.duration)) {
          heroVideo.currentTime = fraction * heroVideo.duration;
        }
      };

      videoScrubberTrack.addEventListener('mousedown', (e) => {
        isDragging = true;
        seek(e);
      });

      window.addEventListener('mousemove', (e) => {
        if (isDragging) seek(e);
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });
    }

    // Mute / Unmute
    if (videoMuteToggle) {
      videoMuteToggle.addEventListener('click', () => {
        heroVideo.muted = !heroVideo.muted;
        if (heroVideo.muted) {
          videoMuteToggle.innerHTML = '<i data-lucide="volume-x"></i>';
          showToast('Video muted');
        } else {
          videoMuteToggle.innerHTML = '<i data-lucide="volume-2"></i>';
          showToast('Sound enabled');
        }
        if (window.lucide) lucide.createIcons();
      });
    }

    // Fullscreen / Theater
    if (videoFullscreenBtn) {
      videoFullscreenBtn.addEventListener('click', () => {
        if (videoTheaterModal && theaterVideo) {
          videoTheaterModal.classList.add('open');
          theaterVideo.currentTime = heroVideo.currentTime;
          theaterVideo.play();
        }
      });
    }

    // "Watch Our Story" CTA opens theater
    if (heroWatchBtn) {
      heroWatchBtn.addEventListener('click', () => {
        if (videoTheaterModal && theaterVideo) {
          videoTheaterModal.classList.add('open');
          theaterVideo.play();
        }
      });
    }

    // Close theater
    const closeTheater = () => {
      if (videoTheaterModal && theaterVideo) {
        videoTheaterModal.classList.remove('open');
        theaterVideo.pause();
      }
    };

    if (theaterCloseBtn) theaterCloseBtn.addEventListener('click', closeTheater);
    if (theaterBackdrop) theaterBackdrop.addEventListener('click', closeTheater);

    const openProcessVideoBtn = document.getElementById('open-process-video-btn');
    if (openProcessVideoBtn) {
      openProcessVideoBtn.addEventListener('click', () => {
        if (videoTheaterModal && theaterVideo) {
          videoTheaterModal.classList.add('open');
          theaterVideo.play();
        }
      });
    }
  }

  // ==========================================================================
  // 4. INNOVATIVE VIRTUAL FITTING ROOM ("ONE GIRL, MANY STYLES")
  // ==========================================================================
  const centralModelImg = document.getElementById('central-model-img');
  const modelImgWrapper = document.getElementById('model-img-wrapper');
  const silkShimmerSweep = document.getElementById('silk-shimmer-sweep');
  const modelWornTitle = document.getElementById('model-worn-title');
  const hudCategoryTag = document.getElementById('hud-category-tag');
  const satellitesLeft = document.getElementById('satellites-left');
  const satellitesRight = document.getElementById('satellites-right');
  const categoryPills = document.querySelectorAll('.fitting-category-btn');
  const modelPrevBtn = document.getElementById('model-prev-btn');
  const modelNextBtn = document.getElementById('model-next-btn');

  // Configurator details elements
  const lbTitle = document.getElementById('lb-title');
  const lbPrice = document.getElementById('lb-price');
  const lbOrigPrice = document.getElementById('lb-orig-price');
  const lbDiscount = document.getElementById('lb-discount');
  const lbDesc = document.getElementById('lb-desc');
  const lbCraftHours = document.getElementById('lb-craft-hours');
  const lbCategoryTag = document.getElementById('lb-category-tag');
  const selectedColorName = document.getElementById('selected-color-name');
  const lbSwatchesList = document.getElementById('lb-swatches-list');
  const sizePills = document.querySelectorAll('.size-pill');
  const lbAddCartBtn = document.getElementById('lb-add-cart-btn');
  const lbViewDetailsBtn = document.getElementById('lb-view-details-btn');
  const tracerPaths = document.querySelectorAll('.tracer-path');

  let activeCategoryKey = 'all';
  let activeCategoryOutfits = lookbookCatalog['all'];
  state.currentLook = activeCategoryOutfits[0].id;

  // Try-On Outfit Function
  const tryOnOutfit = (outfitId, isSmooth = true) => {
    const outfit = products[outfitId] || activeCategoryOutfits[0];
    if (!outfit) return;

    state.currentLook = outfit.id;

    // Trigger Silk Shimmer Light Beam Effect
    if (silkShimmerSweep) {
      silkShimmerSweep.classList.remove('active');
      void silkShimmerSweep.offsetWidth; // Trigger reflow
      silkShimmerSweep.classList.add('active');
    }

    if (modelImgWrapper) {
      modelImgWrapper.classList.add('trying-on');
      setTimeout(() => modelImgWrapper.classList.remove('trying-on'), 400);
    }

    // Crossfade Central Model Image to Newly Worn Outfit
    if (centralModelImg) {
      centralModelImg.style.opacity = '0.35';
      centralModelImg.style.transform = 'scale(0.97)';
      setTimeout(() => {
        centralModelImg.src = outfit.modelImage;
        centralModelImg.alt = `Muse wearing ${outfit.title}`;
        if (outfit.objectPosition) {
          centralModelImg.style.objectPosition = outfit.objectPosition;
        }
        centralModelImg.style.opacity = '1';
        centralModelImg.style.transform = 'scale(1.0)';
      }, 200);
    }

    // Update Floating Muse Badge
    if (modelWornTitle) {
      modelWornTitle.textContent = outfit.title;
    }

    // Update Configurator Card Details
    if (lbTitle) lbTitle.textContent = outfit.title;
    if (lbPrice) lbPrice.textContent = `₹${outfit.price.toLocaleString()}`;
    if (lbOrigPrice) lbOrigPrice.textContent = `₹${outfit.origPrice.toLocaleString()}`;
    if (lbDiscount) lbDiscount.textContent = outfit.discount;
    if (lbDesc) lbDesc.textContent = outfit.desc;
    if (lbCraftHours && outfit.craftHours) lbCraftHours.textContent = outfit.craftHours;
    if (lbCategoryTag) lbCategoryTag.textContent = outfit.categoryName;
    if (selectedColorName) selectedColorName.textContent = outfit.colorName;

    // Update Dynamic Color Swatches in Configurator
    if (lbSwatchesList) {
      lbSwatchesList.innerHTML = `
        <button class="swatch-btn active" style="--swatch-color: ${outfit.swatchColor || '#D4AF37'};" title="${outfit.colorName}"></button>
        <button class="swatch-btn" style="--swatch-color: #5A1E28;" title="Royal Maroon Velvet"></button>
        <button class="swatch-btn" style="--swatch-color: #1A4D3E;" title="Emerald Silk"></button>
        <button class="swatch-btn" style="--swatch-color: #1A2E40;" title="Midnight Navy"></button>
      `;
    }

    // Highlight Satellite Cards across racks
    document.querySelectorAll('.satellite-card').forEach((card) => {
      if (card.dataset.id === outfit.id) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    // Tracer curve pulse
    tracerPaths.forEach((path, idx) => {
      path.classList.toggle('active', idx === 0);
    });

    if (isSmooth) {
      showToast(`✦ Muse is now trying on: ${outfit.title}`);
    }
  };

  // Render Outfits on Left & Right Satellite Racks
  const renderLookbookCategory = (categoryKey, autoTryFirst = true) => {
    activeCategoryKey = categoryKey;
    const outfits = lookbookCatalog[categoryKey] || lookbookCatalog['all'];
    activeCategoryOutfits = outfits;

    // Update HUD Category Tag
    if (hudCategoryTag) {
      const activeBtn = document.querySelector(`.fitting-category-btn[data-category="${categoryKey}"]`);
      hudCategoryTag.textContent = activeBtn ? activeBtn.querySelector('.btn-cat-text').textContent : 'All Outfits';
    }

    // Distribute outfits between Left and Right racks
    let leftOutfits = [];
    let rightOutfits = [];

    if (outfits.length === 2) {
      leftOutfits = [outfits[0]];
      rightOutfits = [outfits[1]];
    } else {
      const half = Math.ceil(outfits.length / 2);
      leftOutfits = outfits.slice(0, half);
      rightOutfits = outfits.slice(half);
    }

    const createCardHtml = (item) => `
      <button class="satellite-card ${item.id === state.currentLook ? 'active' : ''}" data-id="${item.id}" aria-label="Try on ${item.title}">
        <div class="satellite-thumb">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
        </div>
        <div class="satellite-info">
          <span class="sat-category">${item.categoryName}</span>
          <span class="sat-name" title="${item.title}">${item.title}</span>
          <span class="sat-price">₹${item.price.toLocaleString()}</span>
        </div>
        <span class="sat-tryon-label"><i data-lucide="sparkles"></i> Try On</span>
        <span class="sat-dot"></span>
      </button>
    `;

    if (satellitesLeft) satellitesLeft.innerHTML = leftOutfits.map(createCardHtml).join('');
    if (satellitesRight) satellitesRight.innerHTML = rightOutfits.map(createCardHtml).join('');

    // Attach click listeners to satellite cards
    document.querySelectorAll('.satellite-card').forEach((card) => {
      card.addEventListener('click', () => {
        tryOnOutfit(card.dataset.id, true);
      });
    });

    if (window.lucide) {
      window.lucide.createIcons();
    }

    // Try on first outfit of the selected category if current look is not in this category
    const isCurrentInActive = outfits.some(o => o.id === state.currentLook);
    if (autoTryFirst || !isCurrentInActive) {
      tryOnOutfit(outfits[0].id, false);
    }
  };

  // Category Selector Button Events
  categoryPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      categoryPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const catKey = btn.dataset.category;
      renderLookbookCategory(catKey, true);
    });
  });

  // Model Navigation Controls (Previous / Next Dress)
  if (modelPrevBtn) {
    modelPrevBtn.addEventListener('click', () => {
      const currentIndex = activeCategoryOutfits.findIndex(o => o.id === state.currentLook);
      const nextIndex = (currentIndex - 1 + activeCategoryOutfits.length) % activeCategoryOutfits.length;
      tryOnOutfit(activeCategoryOutfits[nextIndex].id, true);
    });
  }

  if (modelNextBtn) {
    modelNextBtn.addEventListener('click', () => {
      const currentIndex = activeCategoryOutfits.findIndex(o => o.id === state.currentLook);
      const nextIndex = (currentIndex + 1) % activeCategoryOutfits.length;
      tryOnOutfit(activeCategoryOutfits[nextIndex].id, true);
    });
  }

  // Size Selector Pills
  sizePills.forEach((pill) => {
    pill.addEventListener('click', () => {
      sizePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.selectedSize = pill.dataset.size;
      const sizeDisplay = document.getElementById('selected-size-name');
      if (sizeDisplay) sizeDisplay.textContent = state.selectedSize;
    });
  });

  // Add To Cart from Lookbook
  if (lbAddCartBtn) {
    lbAddCartBtn.addEventListener('click', () => {
      const prod = products[state.currentLook] || activeCategoryOutfits[0];
      addToCart({
        id: prod.id,
        title: prod.title,
        size: state.selectedSize,
        color: prod.colorName,
        price: prod.price,
        image: prod.image,
        quantity: 1
      });
      openCartDrawer();
    });
  }

  if (lbViewDetailsBtn) {
    lbViewDetailsBtn.addEventListener('click', () => {
      openQuickView(state.currentLook);
    });
  }

  // Initialize the Virtual Fitting Room with 'all' Outfits
  renderLookbookCategory('all', false);

  // ==========================================================================
  // 5. SHOP BY CATEGORY (EXPANDABLE ACCORDION) & SYNERGY WITH TRY-ON ROOM
  // ==========================================================================
  const categoryCards = document.querySelectorAll('.category-card');
  categoryCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      categoryCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });

    card.addEventListener('click', () => {
      categoryCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const catKey = card.dataset.category;
      const catName = card.querySelector('.category-name').textContent;
      showToast(`Selected Category: ${catName}`);

      // Smoothly navigate and sync with the Virtual Fitting Room!
      const targetPill = document.querySelector(`.fitting-category-btn[data-category="${catKey}"]`);
      if (targetPill) {
        targetPill.click();
        const lookbookSection = document.getElementById('lookbook');
        if (lookbookSection) {
          lookbookSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // ==========================================================================
  // 6. FEATURED COLLECTION FILTERING & ACTIONS
  // ==========================================================================
  const filterTabs = document.querySelectorAll('.filter-tab');
  const productCards = document.querySelectorAll('.product-card');

  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.dataset.filter;

      productCards.forEach((card) => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = 'flex';
          card.style.opacity = '1';
          card.style.transform = 'none';
        } else {
          card.style.opacity = '0';
          setTimeout(() => { card.style.display = 'none'; }, 200);
        }
      });
    });
  });

  // Quick View Buttons on Product Cards
  document.querySelectorAll('.quick-view-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      openQuickView(btn.dataset.prod);
    });
  });

  // Quick Add Buttons on Product Cards
  document.querySelectorAll('.quick-add-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.dataset.prod;
      const prodObj = Object.values(products).find(p => p.id === prodId) || products.beige;
      addToCart({
        id: prodObj.id,
        title: prodObj.title,
        size: 'M',
        color: prodObj.colorName,
        price: prodObj.price,
        image: prodObj.image,
        quantity: 1
      });
      openCartDrawer();
    });
  });

  // Wishlist Toggle Buttons
  document.querySelectorAll('.product-wishlist-toggle, #lookbook-wishlist-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      btn.classList.toggle('active');
      const isWishlisted = btn.classList.contains('active');
      updateWishlistCount(isWishlisted ? 1 : -1);
      showToast(isWishlisted ? 'Added to your Wishlist ♥' : 'Removed from Wishlist');
    });
  });

  // ==========================================================================
  // 7. SHOPPING CART SYSTEM
  // ==========================================================================
  const cartDrawer = document.getElementById('cart-drawer');
  const cartBtn = document.getElementById('cart-btn');
  const cartClose = document.getElementById('cart-close');
  const cartScrim = document.getElementById('cart-scrim');
  const cartCountEl = document.getElementById('cart-count');
  const cartItemCountText = document.getElementById('cart-item-count-text');
  const cartItemsList = document.getElementById('cart-items-list');
  const cartSubtotalEl = document.getElementById('cart-subtotal');
  const cartDiscountEl = document.getElementById('cart-discount');
  const cartTotalEl = document.getElementById('cart-total');
  const shippingProgressText = document.getElementById('shipping-progress-text');
  const shippingProgressFill = document.getElementById('shipping-progress-fill');
  const promoCodeInput = document.getElementById('promo-code-input');
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const checkoutBtn = document.getElementById('checkout-btn');

  const openCartDrawer = () => {
    if (cartDrawer) {
      cartDrawer.classList.add('open');
      renderCart();
    }
  };

  const closeCartDrawer = () => {
    if (cartDrawer) cartDrawer.classList.remove('open');
  };

  if (cartBtn) cartBtn.addEventListener('click', openCartDrawer);
  if (cartClose) cartClose.addEventListener('click', closeCartDrawer);
  if (cartScrim) cartScrim.addEventListener('click', closeCartDrawer);

  const addToCart = (item) => {
    const existing = state.cart.find(i => i.id === item.id && i.size === item.size);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      state.cart.push(item);
    }
    renderCart();
    showToast(`Added ${item.title} to your bag`);
  };

  const renderCart = () => {
    if (!cartItemsList) return;

    if (state.cart.length === 0) {
      cartItemsList.innerHTML = `
        <div class="empty-drawer-state">
          <i data-lucide="shopping-bag" class="empty-icon"></i>
          <p>Your shopping bag is currently empty.</p>
          <button class="btn-chocolate" id="cart-continue-btn">Continue Shopping</button>
        </div>
      `;
      document.getElementById('cart-continue-btn')?.addEventListener('click', closeCartDrawer);
    } else {
      cartItemsList.innerHTML = state.cart.map((item, index) => `
        <div class="cart-item-row" data-index="${index}">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-info">
            <div>
              <h4 class="cart-item-title">${item.title}</h4>
              <span class="cart-item-variant">${item.color} • Size ${item.size}</span>
            </div>
            <div class="qty-control-row">
              <button class="qty-btn" onclick="window.updateCartQty(${index}, -1)">-</button>
              <span class="qty-num">${item.quantity}</span>
              <button class="qty-btn" onclick="window.updateCartQty(${index}, 1)">+</button>
              <button class="item-delete-btn" onclick="window.removeCartItem(${index})">Remove</button>
            </div>
          </div>
          <span class="cart-item-price">₹${(item.price * item.quantity).toLocaleString()}</span>
        </div>
      `).join('');
    }

    // Totals Calculation
    const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = Math.round(subtotal * state.discountRate);
    const total = subtotal - discount;
    const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountEl) cartCountEl.textContent = totalItems;
    if (cartItemCountText) cartItemCountText.textContent = `${totalItems} ${totalItems === 1 ? 'Item' : 'Items'}`;
    if (cartSubtotalEl) cartSubtotalEl.textContent = `₹${subtotal.toLocaleString()}`;
    if (cartDiscountEl) cartDiscountEl.textContent = `- ₹${discount.toLocaleString()}`;
    if (cartTotalEl) cartTotalEl.textContent = `₹${total.toLocaleString()}`;

    // Free Shipping Progress
    if (shippingProgressFill && shippingProgressText) {
      const needed = Math.max(0, state.freeShippingThreshold - subtotal);
      const percent = Math.min(100, Math.round((subtotal / state.freeShippingThreshold) * 100));
      shippingProgressFill.style.width = `${percent}%`;

      if (needed === 0) {
        shippingProgressText.innerHTML = `🎉 Congratulations! You have unlocked <strong>Free Express Worldwide Shipping</strong>!`;
      } else {
        shippingProgressText.innerHTML = `Add ₹${needed.toLocaleString()} more for <strong>Free Express Worldwide Shipping</strong>`;
      }
    }

    if (window.lucide) lucide.createIcons();
  };

  window.updateCartQty = (index, delta) => {
    if (state.cart[index]) {
      state.cart[index].quantity += delta;
      if (state.cart[index].quantity <= 0) {
        state.cart.splice(index, 1);
      }
      renderCart();
    }
  };

  window.removeCartItem = (index) => {
    if (state.cart[index]) {
      const removed = state.cart.splice(index, 1);
      renderCart();
      showToast(`Removed ${removed[0].title} from bag`);
    }
  };

  // Promo Code
  if (applyPromoBtn) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoCodeInput.value.trim().toUpperCase();
      if (code === 'AURA2026') {
        state.discountRate = 0.15;
        showToast('Promo code AURA2026 applied: 15% VIP discount!');
      } else if (code === '') {
        state.discountRate = 0;
      } else {
        showToast('Invalid promo code');
      }
      renderCart();
    });
  }

  // Checkout Button
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast('Your bag is empty');
        return;
      }
      showToast('Proceeding to encrypted secure checkout...');
      setTimeout(() => {
        alert('Thank you for choosing Aaradhya Haute Couture! Your bespoke order checkout window is being prepared.');
      }, 600);
    });
  }

  // ==========================================================================
  // 8. WISHLIST DRAWER
  // ==========================================================================
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  const wishlistBtn = document.getElementById('wishlist-btn');
  const wishlistClose = document.getElementById('wishlist-close');
  const wishlistScrim = document.getElementById('wishlist-scrim');
  const wishlistCountEl = document.getElementById('wishlist-count');
  let currentWishlistCount = 0;

  const updateWishlistCount = (delta) => {
    currentWishlistCount = Math.max(0, currentWishlistCount + delta);
    if (wishlistCountEl) wishlistCountEl.textContent = currentWishlistCount;
  };

  if (wishlistBtn && wishlistDrawer && wishlistClose) {
    wishlistBtn.addEventListener('click', () => wishlistDrawer.classList.add('open'));
    wishlistClose.addEventListener('click', () => wishlistDrawer.classList.remove('open'));
    wishlistScrim?.addEventListener('click', () => wishlistDrawer.classList.remove('open'));
  }

  // ==========================================================================
  // 9. QUICK VIEW MODAL
  // ==========================================================================
  const quickViewModal = document.getElementById('quick-view-modal');
  const quickViewClose = document.getElementById('quick-view-close');
  const quickViewBackdrop = document.getElementById('quick-view-backdrop');
  const qvMainImg = document.getElementById('qv-main-img');
  const qvTitle = document.getElementById('qv-title');
  const qvPrice = document.getElementById('qv-price');
  const qvOrig = document.getElementById('qv-orig');
  const qvDesc = document.getElementById('qv-desc');
  const qvAddCartBtn = document.getElementById('qv-add-cart-btn');
  let activeQuickViewItem = null;

  const openQuickView = (prodId) => {
    const prod = Object.values(products).find(p => p.id === prodId) || products.beige;
    activeQuickViewItem = prod;

    if (qvMainImg) qvMainImg.src = prod.image;
    if (qvTitle) qvTitle.textContent = prod.title;
    if (qvPrice) qvPrice.textContent = `₹${prod.price.toLocaleString()}`;
    if (qvOrig) qvOrig.textContent = `₹${prod.origPrice.toLocaleString()}`;
    if (qvDesc) qvDesc.textContent = prod.desc;

    if (quickViewModal) quickViewModal.classList.add('open');
  };

  const closeQuickView = () => {
    if (quickViewModal) quickViewModal.classList.remove('open');
  };

  if (quickViewClose) quickViewClose.addEventListener('click', closeQuickView);
  if (quickViewBackdrop) quickViewBackdrop.addEventListener('click', closeQuickView);

  if (qvAddCartBtn) {
    qvAddCartBtn.addEventListener('click', () => {
      if (activeQuickViewItem) {
        addToCart({
          id: activeQuickViewItem.id,
          title: activeQuickViewItem.title,
          size: 'M',
          color: activeQuickViewItem.colorName,
          price: activeQuickViewItem.price,
          image: activeQuickViewItem.image,
          quantity: 1
        });
        closeQuickView();
        openCartDrawer();
      }
    });
  }

  // ==========================================================================
  // 10. SIZE GUIDE MODAL
  // ==========================================================================
  const sizeGuideModal = document.getElementById('size-guide-modal');
  const openSizeGuideBtn = document.getElementById('open-size-guide-btn');
  const footerSizeGuideBtn = document.getElementById('footer-size-guide-btn');
  const sizeGuideClose = document.getElementById('size-guide-close');
  const sizeGuideBackdrop = document.getElementById('size-guide-backdrop');

  const openSizeGuide = (e) => {
    e?.preventDefault();
    if (sizeGuideModal) sizeGuideModal.classList.add('open');
  };

  const closeSizeGuide = () => {
    if (sizeGuideModal) sizeGuideModal.classList.remove('open');
  };

  if (openSizeGuideBtn) openSizeGuideBtn.addEventListener('click', openSizeGuide);
  if (footerSizeGuideBtn) footerSizeGuideBtn.addEventListener('click', openSizeGuide);
  if (sizeGuideClose) sizeGuideClose.addEventListener('click', closeSizeGuide);
  if (sizeGuideBackdrop) sizeGuideBackdrop.addEventListener('click', closeSizeGuide);

  // ==========================================================================
  // 11. LIVE SEARCH MODAL
  // ==========================================================================
  const searchBtn = document.getElementById('search-btn');
  const searchModal = document.getElementById('search-modal');
  const searchClose = document.getElementById('search-close');
  const searchBackdrop = document.getElementById('search-backdrop');
  const liveSearchInput = document.getElementById('live-search-input');
  const searchResultsList = document.getElementById('search-results-list');
  const searchTags = document.querySelectorAll('.search-tag');

  const openSearch = () => {
    if (searchModal) {
      searchModal.classList.add('open');
      setTimeout(() => liveSearchInput?.focus(), 100);
      renderSearchResults('');
    }
  };

  const closeSearch = () => {
    if (searchModal) searchModal.classList.remove('open');
  };

  if (searchBtn) searchBtn.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);
  if (searchBackdrop) searchBackdrop.addEventListener('click', closeSearch);

  // Keyboard shortcut Ctrl+K or Cmd+K
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      openSearch();
    }
    if (e.key === 'Escape') {
      closeSearch();
      closeQuickView();
      closeSizeGuide();
      closeCartDrawer();
    }
  });

  const renderSearchResults = (query) => {
    if (!searchResultsList) return;
    const q = query.toLowerCase().trim();
    const items = Object.values(products).filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.colorName.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q)
    );

    if (items.length === 0) {
      searchResultsList.innerHTML = `<p style="padding:1rem; color:var(--text-muted); font-size:0.85rem;">No exact styles found for "${query}". Try "Kurti", "Beige", or "Maroon".</p>`;
    } else {
      searchResultsList.innerHTML = items.map(item => `
        <div class="search-result-item" onclick="window.selectSearchResult('${item.id}')">
          <img src="${item.image}" alt="${item.title}" class="search-result-thumb">
          <div>
            <h5 style="font-family:var(--font-serif); font-size:1.1rem; color:var(--chocolate);">${item.title}</h5>
            <span style="font-size:0.8rem; color:var(--gold); font-weight:600;">₹${item.price.toLocaleString()}</span>
          </div>
        </div>
      `).join('');
    }
  };

  if (liveSearchInput) {
    liveSearchInput.addEventListener('input', (e) => renderSearchResults(e.target.value));
  }

  searchTags.forEach((tag) => {
    tag.addEventListener('click', () => {
      const term = tag.dataset.tag;
      if (liveSearchInput) liveSearchInput.value = term;
      renderSearchResults(term);
    });
  });

  window.selectSearchResult = (prodId) => {
    closeSearch();
    openQuickView(prodId);
  };

  // ==========================================================================
  // 12. HORIZONTAL STORYTELLING SLIDER
  // ==========================================================================
  const storySlider = document.getElementById('story-slider');
  const storyPrev = document.getElementById('story-prev');
  const storyNext = document.getElementById('story-next');

  if (storySlider && storyPrev && storyNext) {
    storyPrev.addEventListener('click', () => {
      storySlider.scrollBy({ left: -360, behavior: 'smooth' });
    });
    storyNext.addEventListener('click', () => {
      storySlider.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  // ==========================================================================
  // 13. NEWSLETTER & CONSULTATION FORMS
  // ==========================================================================
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('newsletter-email').value;
      showToast(`Welcome to the Atelier Circle, ${email}! Your 15% VIP invitation code is AURA2026`);
      newsletterForm.reset();
    });
  }

  const bookConsultBtn = document.getElementById('book-consult-btn');
  if (bookConsultBtn) {
    bookConsultBtn.addEventListener('click', () => {
      showToast('A private styling concierge will contact you within 2 hours.');
    });
  }

  // ==========================================================================
  // 14. TOAST NOTIFICATION UTILITY
  // ==========================================================================
  function showToast(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i data-lucide="sparkles"></i> <span>${message}</span>`;
    container.appendChild(toast);

    if (window.lucide) lucide.createIcons();

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }

  // Initial cart render
  renderCart();
  document.body.classList.remove('loading');
});
