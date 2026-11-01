/**
 * ====================================================================
 * PERSONAL PORTFOLIO — SCRIPT.JS
 * Erfan • Informatics Student Universitas Ahmad Dahlan
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Initialize Lucide Icons
  if (typeof lucide !== "undefined" && lucide.createIcons) {
    lucide.createIcons();
  }

  // 2. Dynamic Copyright Year
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // 3. Navbar Sticky Effect on Scroll
  const navbar = document.getElementById("navbar");
  const backToTopBtn = document.getElementById("backToTopBtn");

  const handleScrollEffects = () => {
    const scrollY = window.scrollY;

    // Sticky Navbar shadow
    if (navbar) {
      if (scrollY > 30) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    // Back to top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add("visible");
      } else {
        backToTopBtn.classList.remove("visible");
      }
    }
  };

  window.addEventListener("scroll", handleScrollEffects, { passive: true });
  handleScrollEffects();

  // 4. Back To Top Action
  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // 5. Mobile Hamburger Navigation
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navMenu = document.getElementById("navMenu");

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      hamburgerBtn.classList.toggle("is-active", isOpen);
      hamburgerBtn.setAttribute("aria-expanded", isOpen.toString());
    });

    // Close mobile menu when clicking any nav link
    const navLinks = navMenu.querySelectorAll("a");
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        hamburgerBtn.classList.remove("is-active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 6. Active Navigation Link on Scroll (ScrollSpy via IntersectionObserver)
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -65% 0px",
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            if (link.getAttribute("href") === `#${activeId}`) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach((section) => sectionObserver.observe(section));
  }

  // 7. Copy Email to Clipboard with Toast Notification
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  const emailValueText = document.getElementById("emailValueText");
  const toastNotice = document.getElementById("toastNotice");
  const toastMessage = document.getElementById("toastMessage");
  let toastTimer = null;

  const showToast = (message) => {
    if (!toastNotice) return;
    if (toastMessage) toastMessage.textContent = message;
    toastNotice.classList.add("show");

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotice.classList.remove("show");
    }, 2800);
  };

  if (copyEmailBtn && emailValueText) {
    copyEmailBtn.addEventListener("click", async () => {
      const emailToCopy = emailValueText.textContent.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for non-https or older browser environments
          const textArea = document.createElement("textarea");
          textArea.value = emailToCopy;
          textArea.style.position = "fixed";
          textArea.style.left = "-999999px";
          textArea.style.top = "-999999px";
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand("copy");
          textArea.remove();
        }
        showToast(`Email copied: ${emailToCopy}`);
      } catch (err) {
        showToast("Failed to copy email automatically.");
      }
    });
  }
});

