function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),(0,i.register)("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,n=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)n.set(t[o],{baseUrl:e,path:t[o+1]})}}),i("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["ix1sq","index.19051a36.js","di5jg","trash-icon.c0abf412.svg","GcmPC","icons.78a98b0b.svg","6JGpk","pileofbooks.58d35250.jpg","fquCy","pileofbooks2x.742f69f2.jpg"]'));var a={};a=new URL("trash-icon.c0abf412.svg",import.meta.url).toString();var r={};r=new URL("icons.78a98b0b.svg",import.meta.url).toString();var s={};s=new URL("pileofbooks.58d35250.jpg",import.meta.url).toString(),new URL("pileofbooks2x.742f69f2.jpg",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",function(){let t=JSON.parse(localStorage.getItem("shoppingList"))||[],o=document.getElementById("shopping-list"),n=document.querySelectorAll(".navigation-button"),i=1;function c(n){o.innerHTML="";let i=(n-1)*3;t.slice(i,i+3).forEach(t=>{let n=function(t){let o=document.createElement("div");return o.classList.add("book-card-container"),o.innerHTML=`
    <div>
    <img class="book-image" src="${t.book_image}" alt="${t.title} Cover"/>
   </div>

   <div class="text-container">
   <div class="card-book-data-container">
       <div class="book-card-header">
             <div class="card-title-container">
                    <p class="book-title">${t.title}</p>
                    <p class="book-category">${t.list_name}</p>
             </div>
             <div>
                   <button class="remove-button" onclick="removeFromShoppingList('${t._id}')">
                   <div class="remove-button-item">
                        <img src="${e(a)}"/> 
                   </div>
                   </button>
             </div>   
       </div> 
       <div class="book-description">${t.description}</div>
    </div>
 
   <div class="card-book-footer">     
       <div class="book-author">${t.author}</div>
       <div class="purchase-links">     
        <a class="amazon-icon" href="${t.amazon_product_url}">
        <svg><use href="${e(r)}#icon-amazon"></use></svg>  
        </a>
        <a href="${t.buy_links[1].url}">
        <svg class="book-link-icon">
        <use href="${e(r)}#icon-book-icon"></use>
        </svg>
        </a>
       </div> 
   </div>
 </div>`,o}(t);o.appendChild(n)})}function l(e){n.forEach(t=>{t.style.display=e?"inline-block":"none"})}0===t.length?(o.innerHTML=`<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p><img class="image-empty-list" src="${e(s)}" srcset="${e(s)} 2x" alt="pile of books"/>`,l(!1)):(l(!0),c(i),function(){let e=document.getElementById("pages");e.innerHTML="",totalPages=Math.ceil(t.length/3);for(let t=1;t<=totalPages;t++){let n=document.createElement("button");n.innerText=t,n.classList.add("page-button"),n.addEventListener("click",function(){c(i=t),o()}),e.appendChild(n)}function o(){document.querySelectorAll(".page-button").forEach((e,t)=>{t+1===i?(e.style.backgroundColor="var(--black)",e.style.color="var(--white)"):(e.style.backgroundColor="",e.style.color="")})}document.getElementById("first-page").addEventListener("click",function(){c(i=1),o()}),document.getElementById("last-page").addEventListener("click",function(){c(i=totalPages),o()}),document.getElementById("previous-page").addEventListener("click",function(){i>1&&(c(--i),o())}),document.getElementById("next-page").addEventListener("click",function(){i<totalPages&&(c(++i),o())}),o()}()),document.removeFromShoppingList=function(e){let o=t.filter(t=>t._id!==e);localStorage.setItem("shoppingList",JSON.stringify(o)),location.reload()}});
//# sourceMappingURL=index.19051a36.js.map
