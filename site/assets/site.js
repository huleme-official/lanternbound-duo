// Local navigation only. No analytics, cookies, storage, requests, or form data.
document.querySelectorAll('[data-language]').forEach(select=>{
  select.addEventListener('change',()=>{
    const url=select.selectedOptions[0]?.dataset.href;
    if(url) window.location.assign(url);
  });
});
