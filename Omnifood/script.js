"use strict";
// When click button in the header of mobile app
const btnMobileNav = document.querySelector(".btn-mobile-nav");
const mainHeader = document.querySelector(".main-header");

// Toggle: When class is not contained, it will add, if it is containted, it will remove
btnMobileNav.addEventListener("click", function () {
  mainHeader.classList.toggle("nav-open");
});

// Smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Turn off the default behaviour when we scroll the website
    e.preventDefault();

    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behaviour: "smooth",
      });
    }

    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

  // When we click the item in the nav of header, we should close the nav
    if(link.classList.contains("main-nav-link") || link.classList.contains("btn-nav")){
      mainHeader.classList.toggle("nav-open");
    }

  });
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function(entries){
    const ent = entries[0];
    console.log(ent);

    if(ent.isIntersecting === false){
      document.body.classList.add("sticky");
    }
    
    if(ent.isIntersecting){
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
  obs.observe(sectionHeroEl);

