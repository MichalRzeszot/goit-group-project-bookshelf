var e=globalThis,t={},r={},i=e.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var i=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,i.call(n.exports,n,n.exports),n.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequired7c6=i);var n=i.register;n("4WER7",function(e,t){e.exports=new URL("01.63ada5f4.png",import.meta.url).toString()}),n("8prhm",function(e,t){e.exports=new URL("02.7b2e650d.png",import.meta.url).toString()}),n("jiYSM",function(e,t){e.exports=new URL("03.4f1d53bc.png",import.meta.url).toString()}),n("36OrR",function(e,t){e.exports=new URL("04.509e55d2.png",import.meta.url).toString()}),n("gAygi",function(e,t){e.exports=new URL("05.4ea6e1a0.png",import.meta.url).toString()}),n("8XK5Z",function(e,t){e.exports=new URL("06.4813e995.png",import.meta.url).toString()}),n("5Cvyo",function(e,t){e.exports=new URL("07.b4892c98.png",import.meta.url).toString()}),n("3Vaqm",function(e,t){e.exports=new URL("08.12fa6a58.png",import.meta.url).toString()}),n("hTSvo",function(e,t){e.exports=new URL("09.f96390b1.png",import.meta.url).toString()}),i("ifJdc").register(new URL("",import.meta.url).toString(),JSON.parse('["dgPKW","index.45008148.js","5IKPX","01.63ada5f4.png","B4yMC","02.7b2e650d.png","5BbZh","03.4f1d53bc.png","l0mGS","04.509e55d2.png","ebsln","05.4ea6e1a0.png","5LN8H","06.4813e995.png","4xq67","07.b4892c98.png","asdHp","08.12fa6a58.png","t5b0d","09.f96390b1.png"]'));const a=[`<p>01</p><img class="slider-img-01" src="${i("4WER7")}" />`,`<p>02</p><img class="slider-img-02" src="${i("8prhm")}" />`,`<p>03</p><img class="slider-img-03" src="${i("jiYSM")}" />`,`<p>04</p><img class="slider-img-04" src="${i("36OrR")}" />`,`<p>05</p><img class="slider-img-05" src="${i("gAygi")}" />`,`<p>06</p><img class="slider-img-06" src="${i("8XK5Z")}" />`,`<p>07</p><img class="slider-img-07" src="${i("5Cvyo")}" />`,`<p>08</p><img class="slider-img-08" src="${i("3Vaqm")}" />`,`<p>09</p><img class="slider-img-09" src="${i("hTSvo")}" />`],l=[{title:"Save the Children",url:"https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis",img:null},{title:"Project HOPE",url:"https://www.projecthope.org/country/ukraine/",img:null},{title:"UNITED24",url:"https://u24.gov.ua/uk",img:null},{title:"International Medical Corps",url:"https://internationalmedicalcorps.org/country/ukraine/",img:null},{title:"Medicins Sans Frontieres",url:"https://www.msf.org/ukraine",img:null},{title:"RAZOM",url:"https://www.razomforukraine.org/",img:null},{title:"Action against hunger",url:"https://www.actionagainsthunger.org/location/europe/ukraine/",img:null},{title:"World vision",url:"https://www.wvi.org/emergencies/ukraine",img:null},{title:"Serhiy Prytula Charity Foundation",url:"https://prytulafoundation.org/en",img:null}],o=document.querySelector(".slider-button"),s=document.querySelector("#charities");let c=1;function p(e){let t=[];s.innerHTML="",1===e?a.slice(0,6).forEach((e,r)=>{let i=document.createElement("li");i.innerHTML=`<a target="_blank" class="charity-container" href="${l[r].url}">${e}</a>`,i.classList.add("charity"),t.push(i)}):1!==e&&a.slice(3).forEach((e,r)=>{let i=document.createElement("li");i.innerHTML=`<a class="charity-container" href="${l[r].url}">${e}</a>`,i.classList.add("charity"),t.push(i)}),s.append(...t)}p(1),o.style.cursor="pointer",o.addEventListener("click",e=>{s.innerHTML="",1===c?(p(++c),o.style.transform="rotate(180deg)"):2===c&&(p(--c),o.style.transform="rotate(0deg)")});
//# sourceMappingURL=index.45008148.js.map
