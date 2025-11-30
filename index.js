import{a as L,S as v,i as a}from"./assets/vendor-DeKi_rfE.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&m(u)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();async function f(s,e){return(await L.get("https://pixabay.com/api/",{params:{key:"53395315-8c17e52e5e4d7b2c0ffc17b33",q:s,image_type:"photo",safesearch:!0,orientation:"horizontal",page:e,per_page:15}})).data}const n={gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".js-loadbtn")};let w=new v(".gallery a",{captionDelay:250,captionsData:"alt"});function g(s){const e=s.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img
            class="gallery-image"
            src="${r.webformatURL}"
            alt="${r.tags}"
          />
        </a>
        <div class="info">
          <p><b>Likes</b> ${r.likes}</p>
          <p><b>Views</b> ${r.views}</p>
          <p><b>Comments</b> ${r.comments}</p>
          <p><b>Downloads</b> ${r.downloads}</p>
        </div>
      </li>
    `).join("");n.gallery.insertAdjacentHTML("beforeend",e),w.refresh()}function q(){n.gallery.innerHTML=""}function y(){n.loader.classList.remove("hidden")}function l(){n.loader.classList.add("hidden")}function h(){n.loadMoreBtn.classList.remove("hidden")}function d(){n.loadMoreBtn.classList.add("hidden")}const b={form:document.querySelector(".form"),loadMoreBtn:document.querySelector(".js-loadbtn")};let i,c,p;b.form.addEventListener("submit",async s=>{if(s.preventDefault(),d(),q(),y(),i=1,c=s.target.elements.searchText.value,c.trim()==="")return l(),a.error({message:"Please enter query!",position:"topRight"});try{const e=await f(c,i);if(p=Math.ceil(e.totalHits/15),e.totalHits==0)return a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});i<p?h():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),g(e.hits),l()}catch(e){l(),d(),a.error({message:e.message,position:"topRight"})}s.target.reset()});b.loadMoreBtn.addEventListener("click",async()=>{i+=1,d();let e=document.querySelector(".gallery-item").getBoundingClientRect();try{y();const r=await f(c,i);g(r.hits),l(),window.scrollBy({top:e.height*2,behavior:"smooth"})}catch(r){l(),d(),a.error({message:r,position:"topRight"})}i<p?h():a.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})});
//# sourceMappingURL=index.js.map
