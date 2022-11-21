// selecting elements
// navbar
const togBtn = document.querySelector('.toggle-btn');
const navLink = document.querySelector('.link');
// single product-box
const mainImg = document.querySelector('.main-img')
const imges = document.querySelectorAll('.small-img')

// add event listener
// navbar
togBtn.addEventListener('click',() =>{
    navLink.classList.toggle('active-nav');
});
imges.forEach((item) =>{
    item.addEventListener('click',(e) =>{
        const ItemSrc = e.target.src;
        mainImg.src = ItemSrc;
    });
});
