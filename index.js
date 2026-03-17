import{a as d,S as p,i as n}from"./assets/vendor-DQvd0HNi.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="https://pixabay.com/api/",y="55061733-65c505187276814ecbed51f1a";async function h(i){return(await d.get(g,{params:{key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),b=new p(".gallery-link",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:m})=>`
      
      <li class="gallery-item">
  <a class="gallery-link" href="${a}">
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
      loading="lazy"
    />
  </a>

  <div class="info">
    <p class="info-item"><b>Likes</b> ${t}</p>
    <p class="info-item"><b>Views</b> ${s}</p>
    <p class="info-item"><b>Comments</b> ${f}</p>
    <p class="info-item"><b>Downloads</b> ${m}</p>
  </div>
</li>
      `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function w(){c.innerHTML=""}function v(){u.classList.add("is-visible")}function S(){u.classList.remove("is-visible")}const l=document.querySelector(".form");l.addEventListener("submit",async i=>{i.preventDefault();const r=i.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please fill in the search field!",position:"topRight"});return}try{w(),v();const o=await h(r);if(o.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}catch{n.error({message:"Something went wrong. Try again later.",position:"topRight"})}finally{S(),l.reset()}});
//# sourceMappingURL=index.js.map
