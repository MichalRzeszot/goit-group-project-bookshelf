const t=document.querySelector(".bl-container"),e=document.querySelector("#book-modal"),o=document.querySelector("#book-modal-close-btn"),n=document.querySelector("#book-modal-image"),s=document.querySelector("#book-title"),i=document.querySelector("#book-author"),r=document.querySelector("#book-desc"),c=document.querySelector("#book-amazon-url");document.querySelector("#book-modal-btn");const a=()=>{e.classList.remove("fade-out"),e.classList.add("fade-in")},l=()=>{e.classList.remove("fade-in"),e.classList.add("fade-out")},d=document.querySelector("#book-modal-btn");let u=null;const m=async t=>{if(t.target.classList.contains("bl-container"))return;let e=t.target.closest("[id]").id;e&&(showLoader(),setTimeout(()=>{disableLoader()},400),S(e),a(),document.addEventListener("keydown",b))},b=t=>{("Escape"===t.key||"Esc"===t.key)&&l()},p=()=>{let t=localStorage.getItem("shoppingList");return null==JSON.parse(t)?[]:JSON.parse(t)};o.addEventListener("click",l),t.addEventListener("click",m),d.addEventListener("click",()=>{let t=p();if(t.some(t=>t._id===u._id)){let e=JSON.stringify(t.filter(t=>t._id!==u._id));localStorage.setItem("shoppingList",e),d.textContent="Add to Shopping List"}else{t.push(u);let e=JSON.stringify(t);localStorage.setItem("shoppingList",e),d.textContent="Remove from Shopping List"}});const S=async t=>{let e=`https://books-backend.p.goit.global/books/${t}`,o=await fetch(e),a=await o.json(),{author:l,title:m,description:b,book_image:S,amazon_product_url:g}=a;s.textContent=m,i.textContent=l,r.textContent=b,n.setAttribute("src",S),c.setAttribute("href",g),u=a,p().some(t=>t._id===u._id)?d.textContent="Remove from Shopping List":d.textContent="Add to Shopping List"};
//# sourceMappingURL=index.6f51ff68.js.map