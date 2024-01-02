const o=document.querySelector(".bl-header"),l=document.querySelector(".all-category"),t=document.querySelector(".bl-container");async function e(o="top-books"){let l=o;"All Categories"===o&&(l="top-books"),"top-books"!==o&&(l=`category?category=${o}`);try{let e,a;let i=await fetch("https://books-backend.p.goit.global/books/"+l),c=await i.json();"top-books"===o?(e="",c.forEach(o=>{e+=`<p class="bl-book-category">${o.list_name}</p><ul class="bl-books-list">`,o.books.forEach(o=>{e+=`<li class="bl-book-card bl-all-books" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),e+=`</ul><button id="${o.list_name}"class="bl-see-more-btn">SEE MORE</button>`}),t.innerHTML=e,document.querySelectorAll(".bl-see-more-btn").forEach(o=>{o.addEventListener("click",s)})):(a='<ul class="bl-books-list">',c.forEach(o=>{a+=`<li class="bl-book-card" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),a+="</ul>",t.innerHTML=a)}catch(o){console.error("Error fetching books:",o)}}function s(){a(this.id),e(this.id),scroll(0,0)}function a(l){"All Categories"===l&&(l="Best Sellers Books");let t=l.split(" "),e=t.pop(),s=t.join(" ");o.innerHTML=`${s} <span class="bl-span">${e} </span>`}o.innerHTML='Best Sellers <span class="bl-span">Books</span>',e(),l.addEventListener("click",o=>{a(o.target.textContent),e(o.target.textContent)});
//# sourceMappingURL=index.cdae67a0.js.map
