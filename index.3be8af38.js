function e(e){return e&&e.__esModule?e.default:e}var t=globalThis,o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),(0,i.register)("ifJdc",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>o,set:e=>o=e,enumerable:!0,configurable:!0});var o,n=new Map;o=function(e,t){for(var o=0;o<t.length-1;o+=2)n.set(t[o],{baseUrl:e,path:t[o+1]})}}),i("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["ix1sq","index.3be8af38.js","di5jg","trash-icon.c0abf412.svg","GcmPC","icons.78a98b0b.svg","7Vtou","pileofbooks.dff2ef34.png","8hHl7","pileofbooks2x.f78f17e6.png"]'));var r={};r=new URL("trash-icon.c0abf412.svg",import.meta.url).toString();var a={};a=new URL("icons.78a98b0b.svg",import.meta.url).toString();var c={};c=new URL("pileofbooks.dff2ef34.png",import.meta.url).toString(),new URL("pileofbooks2x.f78f17e6.png",import.meta.url).toString(),document.addEventListener("DOMContentLoaded",function(){let t;let o=JSON.parse(localStorage.getItem("shoppingList"))||[],n=document.getElementById("shopping-list"),i=document.querySelectorAll(".navigation-button"),s=1;function l(t){n.innerHTML="";let i=(t-1)*3;o.slice(i,i+3).forEach(t=>{let o=function(t){let o=document.createElement("div");return o.classList.add("book-card-container"),o.innerHTML=`
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
                        <img src="${e(r)}"/> 
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
        <svg><use href="${e(a)}#icon-amazon"></use></svg>  
        </a>
        <a href="${t.buy_links[1].url}">
        <svg class="book-link-icon">
        <use href="${e(a)}#icon-book-icon"></use>
        </svg>
        </a>
       </div> 
   </div>
 </div>`,o}(t);n.appendChild(o)})}function d(e){i.forEach(t=>{t.style.display=e?"inline-block":"none"})}0===o.length?(n.innerHTML=`<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p><img class="image-empty-list" src="${e(c)}" srcset="${e(c)} 2x" alt="pile of books"/>`,d(!1)):(d(!0),l(s),function(){let e=document.getElementById("pages");e.innerHTML="",t=Math.ceil(o.length/3);for(let o=1;o<=t;o++){let t=document.createElement("button");t.innerText=o,t.classList.add("page-button"),t.addEventListener("click",function(){l(s=o),n()}),e.appendChild(t)}function n(){document.querySelectorAll(".page-button").forEach((e,t)=>{t+1===s?(e.style.backgroundColor="var(--black)",e.style.color="var(--white)"):(e.style.backgroundColor="",e.style.color="")})}document.getElementById("first-page").addEventListener("click",function(){l(s=1),n()}),document.getElementById("last-page").addEventListener("click",function(){l(s=t),n()}),document.getElementById("previous-page").addEventListener("click",function(){s>1&&(l(--s),n())}),document.getElementById("next-page").addEventListener("click",function(){s<t&&(l(++s),n())}),n()}()),document.removeFromShoppingList=function(e){let t=o.filter(t=>t._id!==e);localStorage.setItem("shoppingList",JSON.stringify(t)),location.reload()}});
//# sourceMappingURL=index.3be8af38.js.map
