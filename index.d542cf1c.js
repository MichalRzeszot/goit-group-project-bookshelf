const o=document.querySelector(".bl-header");async function l(o="top-books"){let l=o;"All Categories"===o&&(l="top-books"),"top-books"!==o&&(l=`category?category=${o}`);try{let s,e;let a=await fetch("https://books-backend.p.goit.global/books/"+l),i=await a.json();"top-books"===o?(s="",i.forEach(o=>{s+=`<p class="bl-book-category">${o.list_name}</p><ul class="bl-books-list">`,o.books.forEach(o=>{s+=`<li class="bl-book-card bl-all-books" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),s+=`</ul><button id="${o.list_name}"class="bl-see-more-btn">SEE MORE</button>`}),bookList.innerHTML=s,document.querySelectorAll(".bl-see-more-btn").forEach(o=>{o.addEventListener("click",t)})):(e='<ul class="bl-books-list">',i.forEach(o=>{e+=`<li class="bl-book-card" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),e+="</ul>",bookList.innerHTML=e)}catch(o){console.error("Error fetching books:",o)}}function t(){s(this.id),l(this.id),scroll(0,0)}function s(l){"All Categories"===l&&(l="Best Sellers Books");let t=l.split(" "),s=t.pop(),e=t.join(" ");o.innerHTML=`${e} <span class="bl-span">${s} </span>`}o.innerHTML='Best Sellers <span class="bl-span">Books</span>',l(),placeForList.addEventListener("click",o=>{s(o.target.textContent),l(o.target.textContent)});
//# sourceMappingURL=index.d542cf1c.js.map
