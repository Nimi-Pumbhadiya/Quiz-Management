document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});
function initializeApp() {
    initMobileMenu();
}
const dropdownButtons = document.querySelectorAll("[data-dropdown-toggle]");

dropdownButtons.forEach((button) => {
    const menuId = button.getAttribute("data-dropdown-toggle");
    const menu = document.querySelector(`[data-dropdown-menu='${menuId}']`);

    if (menu) {
        button.addEventListener("click", function (event) {
            event.stopPropagation();

            // Hide all other dropdowns
            document.querySelectorAll("[data-dropdown-menu]").forEach((otherMenu) => {
                if (otherMenu !== menu) {
                    otherMenu.classList.add("hidden");
                }
            });

            // Toggle current dropdown
            menu.classList.toggle("hidden");
        });

        // Optional: close dropdown if clicking outside
        document.addEventListener("click", function (event) {
            if (!menu.contains(event.target) && !button.contains(event.target)) {
                menu.classList.add("hidden");
            }
        });
    }
});
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if (mobileMenuBtn && mobileMenu) {
      mobileMenuBtn.addEventListener("click", function () {
        mobileMenu.classList.toggle("hidden");

        // Toggle icon
        const icon = mobileMenuBtn.querySelector("i");
        if (icon.classList.contains("fa-bars")) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-times");
        } else {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });

      // Close menu when clicking outside
      document.addEventListener("click", function (e) {
        if (
          !mobileMenuBtn.contains(e.target) &&
          !mobileMenu.contains(e.target)
        ) {
          mobileMenu.classList.add("hidden");
          const icon = mobileMenuBtn.querySelector("i");
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      });
    }
  }

  const featureSlider = new Swiper('.featureslider', {
    slidesToScroll: 1,
    loop: true,
    speed: 1000,
    infinite: true,
    slidesPerView: 1,
    spaceBetween: 20,
    arrow:false,
    dots:true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1280: {
            slidesPerView: 4,
        },
    },
});