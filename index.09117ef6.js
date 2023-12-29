const e=document.querySelector(".bl-header"),o=document.querySelector(".bl-container");async function t(t="top-books"){let l=await fetch("https://books-backend.p.goit.global/books/"+t),r=await l.json();"top-books"===t?(e.innerHTML='Best Sellers <span class="bl-span">Books</span>',o.innerHTML="",r.forEach(e=>{let t=`<p class="bl-book-category">${e.list_name}</p>`;o.insertAdjacentHTML("beforeend",t),e.books.forEach(e=>{let t=`<li class="bl-book-card" id="${e._id}">
      <div class="bl-book-image">
      <img src="${e.book_image}" alt="${e.title}" cover/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${e.title}</p>
      <p class="bl-book-author">${e.author}</p>
      </li>`;o.insertAdjacentHTML("beforeend",t)}),o.insertAdjacentHTML("beforeend",`<button id="${e.list_name}"class="bl-see-more-btn">SEE MORE</button>`)}),document.querySelectorAll(".bl-see-more-btn").forEach(e=>{e.addEventListener("click",a)})):(e.innerHTML=r[0].list_name,o.innerHTML="",r.forEach(e=>{let t=`<li class="bl-book-card" id="${e._id}">
      <div class="bl-book-image">
      <img src="${e.book_image}" alt="${e.title}" cover/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${e.title}</p>
      <p class="bl-book-author">${e.author}</p>
      </li>`;o.insertAdjacentHTML("beforeend",t)}))}function a(){t(category=`category?category=${this.id}`),scroll(0,0)}t(),placeForList.addEventListener("click",e=>{if(category=`category?category=${e.target.textContent}`,"All Categories"===e.target.textContent){t();return}t(category)});
//# sourceMappingURL=index.09117ef6.js.map
