const o=document.querySelector(".bl-header"),l=document.querySelector(".bl-container");async function t(o="top-books"){let t=o;"All Categories"===o&&(t="top-books"),"top-books"!==o&&(t=`category?category=${o}`);try{let e,a;let i=await fetch("https://books-backend.p.goit.global/books/"+t),c=await i.json();"top-books"===o?(e="",c.forEach(o=>{e+=`<p class="bl-book-category">${o.list_name}</p><ul class="bl-books-list">`,o.books.forEach(o=>{e+=`<li class="bl-book-card bl-all-books" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),e+=`</ul><button id="${o.list_name}"class="bl-see-more-btn">SEE MORE</button>`}),l.innerHTML=e,document.querySelectorAll(".bl-see-more-btn").forEach(o=>{o.addEventListener("click",s)})):(a='<ul class="bl-books-list">',c.forEach(o=>{a+=`<li class="bl-book-card" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),a+="</ul>",l.innerHTML=a)}catch(o){console.error("Error fetching books:",o)}}function s(){e(this.id),t(this.id),scroll(0,0)}function e(l){"All Categories"===l&&(l="Best Sellers Books");let t=l.split(" "),s=t.pop(),e=t.join(" ");o.innerHTML=`${e} <span class="bl-span">${s} </span>`}o.innerHTML='Best Sellers <span class="bl-span">Books</span>',t(),placeForList.addEventListener("click",o=>{e(o.target.textContent),t(o.target.textContent)});
//# sourceMappingURL=index.47636516.js.map
