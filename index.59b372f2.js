const o=document.querySelector(".bl-header"),t=document.querySelector(".all-category"),e=document.querySelector(".bl-container");async function l(o="top-books"){var t,l;if("All Categories"===o||"top-books"===o)try{let o;let l=await fetch("https://books-backend.p.goit.global/books/top-books");t=await l.json(),o="",t.forEach(t=>{o+=`<p class="bl-book-category">${t.list_name}</p><ul class="bl-books-list">`,t.books.forEach(t=>{o+=`<li class="bl-book-card bl-all-books" id="${t._id}">
      <div class="bl-book-image">
      <img src="${t.book_image}" alt="${t.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${t.title}</p>
      <p class="bl-book-author">${t.author}</p>
      </li>`}),o+=`</ul><button id="${t.list_name}"class="bl-see-more-btn">SEE MORE</button>`}),e.innerHTML=o}catch(o){console.error("Error fetching books:",o)}else try{let t;let a=await fetch(`https://books-backend.p.goit.global/books/category?category=${o}`);l=await a.json(),t='<ul class="bl-books-list">',l.forEach(o=>{t+=`<li class="bl-book-card" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),t+="</ul>",e.innerHTML=t}catch(o){console.error("Error fetching books:",o)}}function a(t){"All Categories"===t&&(t="Best Sellers Books");let e=t.split(" "),l=e.pop(),a=e.join(" ");o.innerHTML=`${a} <span class="bl-span">${l} </span>`}o.innerHTML='Best Sellers <span class="bl-span">Books</span>',l(),e.addEventListener("click",o=>{"BUTTON"===o.target.nodeName&&(a(o.target.id),l(o.target.id))}),t.addEventListener("click",o=>{"LI"===o.target.nodeName&&(a(o.target.textContent),l(o.target.textContent))});
//# sourceMappingURL=index.59b372f2.js.map
