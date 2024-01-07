var e=globalThis,t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n),(0,n.register)("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,n=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)n.set(t[o],{baseUrl:e,path:t[o+1]})}}),n("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["ix1sq","index.18442033.js","GcmPC","icons.fe5062d9.svg"]'));var i={};i=new URL("icons.fe5062d9.svg",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",function(){let e=JSON.parse(localStorage.getItem("shoppingList"))||[],t=document.getElementById("shopping-list"),o=document.querySelectorAll(".navigation-button"),n=1;function a(o){t.innerHTML="";let n=(o-1)*3;e.slice(n,n+3).forEach(e=>{let o=function(e){var t;let o=document.createElement("div");return o.classList.add("book-card-container"),o.innerHTML=`
    <div>
    <img class="book-image" src="${e.book_image}" alt="${e.title} Cover"/>
   </div>

   <div class="text-container">
   <div class="card-book-data-container">
       <div class="book-card-header">
             <div class="card-title-container">
                    <p class="book-title">${e.title}</p>
                    <p class="book-category">${e.list_name}</p>
             </div>
             <div>
                   <button class="remove-button" onclick="removeFromShoppingList('${e._id}')">
                   <div class="remove-button-item">
                   <svg>
                   <use href="${(t=i)&&t.__esModule?t.default:t}"></use></svg></div>
                   <!--<use href="./images/icons.svg#icon-trash-03"></use></svg></div>-->
                   </button>
             </div>   
       </div> 
       <div class="book-description">${e.description}</div>
    </div>
 
   <div class="card-book-footer">
       <div class="book-author">${e.author}</div>
       <div class="purchase-links">
        <a class="amazon-icon" href="${e.amazon_product_url}">
           <svg>
           <use href="/src/images/icons.svg#icon-amazon"></use></svg></a>
        <a href="${e.buy_links[1].url}"><svg width="16" height="16">
        <use href="/src/images/icons.svg#icon-book-icon"></use></a>
       </div> 
   </div>
 </div>`,o}(e);t.appendChild(o)})}function r(e){o.forEach(t=>{t.style.display=e?"inline-block":"none"})}0===e.length?(t.innerHTML='<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p>',r(!1)):(r(!0),a(n),function(){let t=document.getElementById("pages");t.innerHTML="",totalPages=Math.ceil(e.length/3);for(let e=1;e<=totalPages;e++){let i=document.createElement("button");i.innerText=e,i.classList.add("page-button"),i.addEventListener("click",function(){a(n=e),o()}),t.appendChild(i)}function o(){document.querySelectorAll(".page-button").forEach((e,t)=>{t+1===n?(e.style.backgroundColor="var(--black)",e.style.color="var(--white)"):(e.style.backgroundColor="",e.style.color="")})}document.getElementById("first-page").addEventListener("click",function(){a(n=1),o()}),document.getElementById("last-page").addEventListener("click",function(){a(n=totalPages),o()}),document.getElementById("previous-page").addEventListener("click",function(){n>1&&(a(--n),o())}),document.getElementById("next-page").addEventListener("click",function(){n<totalPages&&(a(++n),o())}),o()}()),document.removeFromShoppingList=function(t){let o=e.filter(e=>e._id!==t);localStorage.setItem("shoppingList",JSON.stringify(o)),location.reload()}});
//# sourceMappingURL=index.18442033.js.map
