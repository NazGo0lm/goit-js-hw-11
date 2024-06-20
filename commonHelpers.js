import{i as l,S as m}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const u={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list")};function d(o){const t=o.hits.map(i=>`<li class="images-list-item">
  <a class="img-link" href=${i.largeImageURL} onclick="event.preventDefault()"><img class="img" src=${i.webformatURL} alt=${i.tags}></img></a>
   <ul class="img-dscr">
      <li class="img-data">
        <p class="img-data-title">Likes</p>
        <p class="img-data-numbers">${i.likes}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Views</p>
        <p class="img-data-numbers">${i.views}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Comments</p>
        <p class="img-data-numbers">${i.comments}</p>
      </li>
      <li class="img-data">
        <p class="img-data-title">Downloads</p>
        <p class="img-data-numbers">${i.downloads}</p>
      </li>
    </ul>
</li>`).join("");u.imageList.innerHTML=t}function p(o){const t="https://pixabay.com",i="/api/",n=new URLSearchParams({key:"44477511-7934322deb574a4a64d25451d",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:1,per_page:30}),e=`${t}${i}?${n}`;return console.log(e),fetch(e,{options:{headers:{"Content-Type":"application/json","X-RateLimit-Limit":"100","X-RateLimit-Remaining":"99","X-RateLimit-Reset":"0.6"}}}).then(r=>{if(r.ok)return r.json();throw new Error(r.status)})}const a={imageSearchForm:document.querySelector(".search-form"),imageSearchInput:document.querySelector(".search-input"),submitButton:document.querySelector(".search-btn"),imageList:document.querySelector(".images-list"),loader:document.querySelector(".loader")};a.loader.style.display="none";let c;a.imageSearchForm.addEventListener("submit",o=>{if(o.preventDefault(),c=o.target.elements.userData.value,c.trim()==="")return a.imageList.innerHTML="",l.info({message:"You need to enter search request!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});a.loader.style.display="block",p(c).then(t=>{if(t.hits.length===0)return a.imageList.innerHTML="",l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",transitionIn:"bounceInDown",transitionOut:"fadeOutDown"});d(t),new m(".images-list-item a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,animationSpeed:300,widthRatio:1,heightRatio:.95,disableRightClick:!0}).refresh()}).then(()=>a.loader.style.display="none").catch(t=>{console.log(t),a.loader.style.display="none"}),o.target.reset()});
//# sourceMappingURL=commonHelpers.js.map
