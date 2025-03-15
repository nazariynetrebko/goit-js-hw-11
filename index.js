import{a as f,i as u,S as d}from"./assets/vendor-D5mnuR-h.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const m="49351008-1bfee9cf32a9c846c40651839",p="https://pixabay.com/api/";function h(e){const i={key:m,q:e,image_type:"photo",orientation:"horizontal",per_page:20,safesearch:!0};return f.get(p,{params:i}).then(r=>(console.log("API Response:",r.data),r.data.hits.length?r.data.hits:(c("Sorry, there are no images matching your search query."),[]))).catch(r=>(c("Failed to fetch images. Please try again later."),[]))}function c(e){u.error({title:"Error",message:e,position:"topRight"})}let l;function g(e){e.style.display="block",e.classList.remove("hidden")}function y(e){e.classList.add("hidden")}function b(e){e.innerHTML=" "}function L(e,i){const r=e.map(S).join("");i.insertAdjacentHTML("beforeend",r),v()}function S({webformatURL:e,largeImageURL:i,tags:r,likes:s,views:t,comments:o,downloads:n}){return`
    <li class="gallery-item">
      <a href="${i}">
        <img src="${e}" alt="${r}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes</b>${s}</p>
        <p class="info-item"><b>Views</b>${t}</p>
        <p class="info-item"><b>Comments</b>${o}</p>
        <p class="info-item"><b>Downloads</b>${n}</p>
      </div>
    </li>
  `}function v(){l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}const a={form:document.querySelector(".form"),loader:document.querySelector(".loader"),gallery:document.querySelector(".gallery")};a.form.addEventListener("submit",P);function P(e){e.preventDefault();const i=e.target.elements["search-text"].value.trim();i&&(console.log(a.loader),g(a.loader),b(a.gallery),h(i).then(r=>L(r,a.gallery)).catch(r=>console.error(r)).finally(()=>setTimeout(()=>y(a.loader),1e3)),e.target.reset())}
//# sourceMappingURL=index.js.map
