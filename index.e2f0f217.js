document.addEventListener("DOMContentLoaded",function(){let o=JSON.parse(localStorage.getItem("shoppingList"))||[],t=document.getElementById("shopping-list");0===o.length?t.innerHTML="<p>This page is empty, add some books and proceed to order.</p>":o.forEach(o=>{let e=function(o){let t=document.createElement("div");return t.classList.add("book-card"),t.innerHTML=`
            <img src="${o.book_image}" alt="${o.title} Cover">
            <div class="book-title">${o.title}</div>
            <div class="book-category">${o.list_name}</div>
            <div class="book-description">${o.description}</div>
            <div class="book-author">${o.author}</div>
            // dopracowa\u{107} - poni\u{17C}ej ma by\u{107} lista link\xf3w
            <div class="purchase-links">
                ${o.buy_links}
            </div> 
            // dopracowa\u{107} - obrazek kosza powinien tutaj by\u{107}
            <button onclick="removeFromShoppingList('${o._id}')">TRASH</button>
        `,t}(o);t.appendChild(e)}),document.removeFromShoppingList=function(t){let e=o.filter(o=>o._id!==t);localStorage.setItem("shoppingList",JSON.stringify(e)),location.reload()}});
//# sourceMappingURL=index.e2f0f217.js.map
