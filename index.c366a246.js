(()=>{let e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-toggle-menu"),t=document.querySelector(".header-frame"),o=document.querySelector(".shopping-item"),n=document.querySelector(".sign-up-btn"),c=document.querySelector(".sign-up-form"),d=document.querySelector(".sign-up-form-btn"),r=document.querySelector(".sign-up-content"),i=document.querySelector(".user-menu"),l=()=>{console.log("toggleMenu");let o="true"===s.getAttribute("aria-expanded");s.setAttribute("aria-expanded",!o),e.classList.toggle("is-open"),e.classList.remove("bg-form"),o?(console.log("opened menu"),t.classList.remove("menu-opened"),s.classList.add("hamburger-button"),s.classList.remove("close-btn")):(console.log("closed menu"),t.classList.add("menu-opened"),e.classList.remove("bg-white"),e.classList.add("bg-books"),s.classList.remove("hamburger-button"),s.classList.add("close-btn"))};s.addEventListener("click",l),n.addEventListener("click",()=>{n.classList.add("hidden"),c.classList.remove("hidden"),e.classList.remove("bg-books")}),d.addEventListener("click",()=>{t.classList.remove("hidden"),c.classList.add("hidden"),e.classList.add("bg-books"),e.classList.remove("bg-form"),r.classList.add("hidden"),i.classList.remove("hidden")}),o.addEventListener("click",()=>{l(),console.log("showShoppingList...")})})();
//# sourceMappingURL=index.c366a246.js.map
