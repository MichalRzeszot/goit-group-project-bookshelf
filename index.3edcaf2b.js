document.addEventListener("DOMContentLoaded",function(){let e=JSON.parse(localStorage.getItem("shoppingList"))||[],t=document.getElementById("shopping-list");0===e.length?t.innerHTML='<p class="sl-paragraph">This page is empty, add some books and proceed to order.</p>':e.forEach(e=>{let o=function(e){let t=document.createElement("div");return t.classList.add("book-card-container"),t.innerHTML=`
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
      </div>`,t}(e);t.appendChild(o)}),document.removeFromShoppingList=function(t){let o=e.filter(e=>e._id!==t);localStorage.setItem("shoppingList",JSON.stringify(o)),location.reload()}});
//# sourceMappingURL=index.3edcaf2b.js.map
