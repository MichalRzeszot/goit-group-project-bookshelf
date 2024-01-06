document.addEventListener("DOMContentLoaded",function(){let e=JSON.parse(localStorage.getItem("shoppingList"))||[],t=document.getElementById("shopping-list"),n=document.querySelectorAll(".navigation-button"),o=1;function i(n){t.innerHTML="";let o=(n-1)*3;e.slice(o,o+3).forEach(e=>{let n=function(e){let t=document.createElement("div");return t.classList.add("book-card-container"),t.innerHTML=`
        <div class="image-container">
         <img class="book-image" src="${e.book_image}" alt="${e.title} Cover"/>
        </div>

      <div class="text-container">
          <div class="book-card-header">
              <div class="card-title-container">
                    <p class="book-title">${e.title}</p>
                    <p class="book-category">${e.list_name}</p>
              </div>
             <div>
                    <button class="remove-button" onclick="removeFromShoppingList('${e._id}')">
                    <svg class="remove-button-item"><use href="./images/icons.svg#icon-trash-03"></use></svg>
                    </button>
              </div>
          </div>

        <p class="book-description">${e.description}</p>

          <div class="book-author">${e.author}</div>
          
          <div class="purchase-links">
                <a href="${e.buy_links[0].url}">
                    LINK
                </a>
          </div> 
      </div>`,t}(e);t.appendChild(n)})}function a(e){n.forEach(t=>{t.style.display=e?"inline-block":"none"})}0===e.length?(t.innerHTML='<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p>',a(!1)):(a(!0),i(o),function(){let t=document.getElementById("pages");t.innerHTML="",totalPages=Math.ceil(e.length/3);for(let e=1;e<=totalPages;e++){let a=document.createElement("button");a.innerText=e,a.classList.add("page-button"),a.addEventListener("click",function(){i(o=e),n()}),t.appendChild(a)}function n(){document.querySelectorAll(".page-button").forEach((e,t)=>{t+1===o?(e.style.backgroundColor="var(--black)",e.style.color="var(--white)"):(e.style.backgroundColor="",e.style.color="")})}document.getElementById("first-page").addEventListener("click",function(){i(o=1),n()}),document.getElementById("last-page").addEventListener("click",function(){i(o=totalPages),n()}),document.getElementById("previous-page").addEventListener("click",function(){o>1&&(i(--o),n())}),document.getElementById("next-page").addEventListener("click",function(){o<totalPages&&(i(++o),n())}),n()}()),document.removeFromShoppingList=function(t){let n=e.filter(e=>e._id!==t);localStorage.setItem("shoppingList",JSON.stringify(n)),location.reload()}});
//# sourceMappingURL=index.6345fe25.js.map
