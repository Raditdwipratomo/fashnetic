const navbar = document.getElementById("navbar");
const home = document.getElementById("home");
const a = document.querySelectorAll(".text");

const homeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        // home keluar dari viewport
        navbar.classList.add("navbar-colored");
        navbar.classList.remove("navbar-transparent");

        a.forEach((link) => {
          link.style.color = "black";
          link.style.textShadow = "none";
        });
      } else {
        // home masuk viewport
        navbar.classList.remove("navbar-colored");
        navbar.classList.add("navbar-transparent");

        a.forEach((link) => {
          link.style.color = "white";
          link.style.textShadow = "0.5px 0.5px 0 rgba(0, 0, 0, 1)";
        });
      }
    });
  },
  {
    threshold: 0.4,
  }
);

homeObserver.observe(home);

const about = document.getElementById("about");
const scrollElements = document.querySelectorAll(
  ".scroll-1, .scroll-2, .scroll-3"
);
const textContainer = document.querySelector("#textContainer");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollElements.forEach((el) => el.classList.add("active"));
        textContainer.classList.add("active");
      } else {
        scrollElements.forEach((el) => el.classList.remove("active"));
        textContainer.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

aboutObserver.observe(about);

const contact = document.getElementById("contact");
const contactText = contact.querySelector(".text-container");

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contactText.classList.add("active");
      } else {
        contactText.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.4,
  }
);

contactObserver.observe(contact);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("filter").addEventListener("change", function () {
    const value = this.value;
    const cards = document.querySelectorAll(".product-card");

    cards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (value === "all" || category === value) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});


