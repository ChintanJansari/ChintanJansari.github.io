// Small behaviour: year + theme toggle
(function(){
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();


const btn = document.getElementById('theme-toggle');
const root = document.documentElement;
const saved = localStorage.getItem('theme');
if(saved) root.setAttribute('data-theme', saved);
btn.addEventListener('click', ()=>{
const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
root.setAttribute('data-theme', next);
localStorage.setItem('theme', next);
});
})();
