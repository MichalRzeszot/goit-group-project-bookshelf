const e=document.querySelector(".bl-container"),t=document.querySelector("#book-modal"),o=document.querySelector("#book-modal-close-btn"),s=document.querySelector("#book-modal-image"),n=document.querySelector("#book-title"),i=document.querySelector("#book-author"),a=document.querySelector("#book-desc"),c=document.querySelector("#book-amazon-url"),r=document.querySelector("#loader-container"),d=()=>{r.classList.remove("fade-out"),r.classList.add("fade-in")},l=()=>{r.classList.remove("fade-in"),r.classList.add("fade-out")},u=()=>{t.classList.remove("fade-out"),t.classList.add("fade-in")},m=()=>{t.classList.remove("fade-in"),t.classList.add("fade-out")},p=document.querySelector("#book-modal-btn");let S=null;const L=async e=>{if(e.target.classList.contains("bl-container"))return;let t=e.target.closest("[id]").id;t&&(d(),setTimeout(()=>{l()},400),k(t),u(),document.addEventListener("keydown",b))},b=e=>{("Escape"===e.key||"Esc"===e.key)&&m()},g=()=>{let e=localStorage.getItem("shoppingList");return null==JSON.parse(e)?[]:JSON.parse(e)};o.addEventListener("click",m),e.addEventListener("click",L),p.addEventListener("click",()=>{let e=g();if(e.some(e=>e._id===S._id)){let t=JSON.stringify(e.filter(e=>e._id!==S._id));localStorage.setItem("shoppingList",t),p.textContent="Add to Shopping List"}else{e.push(S);let t=JSON.stringify(e);localStorage.setItem("shoppingList",t),p.textContent="Remove from Shopping List"}});const k=async e=>{let t=`https://books-backend.p.goit.global/books/${e}`,o=await fetch(t),r=await o.json(),{author:d,title:l,description:u,book_image:m,amazon_product_url:L}=r;n.textContent=l,i.textContent=d,a.textContent=u,s.setAttribute("src",m),c.setAttribute("href",L),S=r,g().some(e=>e._id===S._id)?p.textContent="Remove from Shopping List":p.textContent="Add to Shopping List"};
//# sourceMappingURL=index.6cfd83c5.js.map