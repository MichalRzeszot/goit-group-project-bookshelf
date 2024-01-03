const o=document.querySelector(".bl-header"),t=document.querySelector(".all-category"),l=document.querySelector(".bl-container");async function e(o="top-books"){var t,e;if("All Categories"===o||"top-books"===o)try{let o;let e=await fetch("https://books-backend.p.goit.global/books/top-books");t=await e.json(),o="",t.forEach(t=>{o+=`<p class="bl-book-category">${t.list_name}</p><ul class="bl-books-list">`,t.books.forEach(t=>{o+=`<li class="bl-book-card bl-all-books" id="${t._id}">
      <div class="bl-book-image">
      <img src="${t.book_image}" alt="${t.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${t.title}</p>
      <p class="bl-book-author">${t.author}</p>
      </li>`}),o+=`</ul><button id="${t.list_name}"class="bl-see-more-btn">SEE MORE</button>`}),l.innerHTML=o}catch(o){console.error("Error fetching books:",o)}else try{let t;let s=await fetch(`https://books-backend.p.goit.global/books/category?category=${o}`);e=await s.json(),t='<ul class="bl-books-list">',e.forEach(o=>{t+=`<li class="bl-book-card" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),t+="</ul>",l.innerHTML=t}catch(o){console.error("Error fetching books:",o)}}function s(t){"All Categories"===t&&(t="Best Sellers Books");let l=t.split(" "),e=l.pop(),s=l.join(" ");o.innerHTML=`${s} <span class="bl-span">${e} </span>`}o.innerHTML='Best Sellers <span class="bl-span">Books</span>',e(),l.addEventListener("click",o=>{"BUTTON"===o.target.nodeName&&(s(o.target.id),e(o.target.id))}),t.addEventListener("click",o=>{s(o.target.textContent),e(o.target.textContent)});
//# sourceMappingURL=index.47a4ef44.js.map
