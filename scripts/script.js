
      // Mobile Menu Toggle
      const mobileMenuBtn = document.getElementById("mobile-menu-btn");
      const mobileMenu = document.getElementById("mobile-menu");
      const mobileMenuClose = document.getElementById("mobile-menu-close");
      const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");

      mobileMenuBtn.addEventListener("click", function () {
        mobileMenu.classList.add("active");
        mobileMenuOverlay.classList.add("active");
        document.body.style.overflow = "hidden";
      });

      function closeMenu() {
        mobileMenu.classList.remove("active");
        mobileMenuOverlay.classList.remove("active");
        document.body.style.overflow = "";
      }

      mobileMenuClose.addEventListener("click", closeMenu);
      mobileMenuOverlay.addEventListener("click", closeMenu);

      // Sticky Header
      const header = document.getElementById("header");
      let lastScrollTop = 0;

      window.addEventListener("scroll", function () {
        let scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > 100) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }

        lastScrollTop = scrollTop;
      });

      // Back to Top Button
      const backToTopBtn = document.getElementById("back-to-top");

      window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
          backToTopBtn.classList.add("show");
        } else {
          backToTopBtn.classList.remove("show");
        }
      });

      backToTopBtn.addEventListener("click", function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });

      // Search Tabs
      const searchTabs = document.querySelectorAll(".search-tab");

      searchTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          searchTabs.forEach((t) => t.classList.remove("active"));
          this.classList.add("active");
        });
      });

      // Telegram Button Click
      const telegramBtn = document.getElementById("telegram-btn");
      telegramBtn.addEventListener("click", function () {
        window.open("https://t.me/realestatecambodia", "_blank");
      });

      // Animation on Scroll
      function animateOnScroll() {
        const elements = document.querySelectorAll(
          ".property-card, .category-card, .testimonial-card"
        );

        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition < windowHeight - 100) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
          }
        });
      }

      // Initialize animations
      window.addEventListener("load", function () {
        document
          .querySelectorAll(".property-card, .category-card, .testimonial-card")
          .forEach((element) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(20px)";
            element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
          });

        animateOnScroll();
      });

      window.addEventListener("scroll", animateOnScroll);

      // Smooth Scrolling for Anchor Links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          if (this.getAttribute("href") === "#") return;

          const target = document.querySelector(this.getAttribute("href"));
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
            });

            // Close mobile menu if open
            if (mobileMenu.classList.contains("active")) {
              closeMenu();
            }
          }
        });
      });
