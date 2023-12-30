const o=document.querySelector(".bl-header"),l=document.querySelector(".bl-container");async function t(o="top-books"){let t,e;"All Categories"===o&&(o="top-books",console.log("wszystkie kategorie")),"top-books"!=o&&(o=`category?category=${o}`);let a=await fetch("https://books-backend.p.goit.global/books/"+o),i=await a.json();"top-books"===o?(t="",i.forEach(o=>{t+=`<p class="bl-book-category">${o.list_name}</p><ul class="bl-books-list">`,o.books.forEach(o=>{t+=`<li class="bl-book-card bl-all-books" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),t+=`</ul><button id="${o.list_name}"class="bl-see-more-btn">SEE MORE</button>`}),l.innerHTML=t,document.querySelectorAll(".bl-see-more-btn").forEach(o=>{o.addEventListener("click",s)})):(e='<ul class="bl-books-list">',i.forEach(o=>{e+=`<li class="bl-book-card" id="${o._id}">
      <div class="bl-book-image">
      <img src="${o.book_image}" alt="${o.title}"/>
      <div class="bl-book-card-overlay">
      <p>QUICK VIEW</p>
      </div>
      </div>
      <p class="bl-book-title">${o.title}</p>
      <p class="bl-book-author">${o.author}</p>
      </li>`}),e+="</ul>",l.innerHTML=e)}function s(){e(category=`${this.id}`),t(category),scroll(0,0)}function e(l){"All Categories"===l&&(l="Best Sellers Books");let t=l.split(" "),s=t.pop(),e=t.join(" ");o.innerHTML=`${e} <span class="bl-span">${s} </span>`}o.innerHTML='Best Sellers <span class="bl-span">Books</span>',t(),placeForList.addEventListener("click",o=>{e(category=`${o.target.textContent}`),t(category)});
//# sourceMappingURL=index.ec6b550d.js.map
