
const menuButton=document.getElementById('menuButton');
const mobileMenu=document.getElementById('mobileMenu');
if(menuButton && mobileMenu){
    menuButton.addEventListener('click',()=>mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(link=>{
        link.addEventListener('click',()=>mobileMenu.classList.add('hidden'));
    });
}
