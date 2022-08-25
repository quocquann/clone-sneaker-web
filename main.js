
let navItems = document.querySelectorAll('.nav-item');
let sliderWrapper = document.querySelector('.slider-wrapper');
let product = document.querySelector('.product');

let ssBtn = document.querySelector('.ssbtn');

let btns = document.querySelectorAll('.btn');

let sneakers = [
    {
        name: 'Air Force',
        price: '$99',
        colors: ['black', 'darkblue'],
        img: ['./img/air.png', './img/air2.png']
    },
    {
        name: 'Air Jordan',
        price: '$99',
        colors: ['lightgray', 'green'],
        img: ['./img/jordan.png', './img/jordan2.png']
    },
    {
        name: 'Blazer',
        price: '$99',
        colors: ['lightgray', 'green'],
        img: ['./img/blazer.png', './img/blazer2.png']
    },
    {
        name: 'Crater',
        price: '$99',
        colors: ['black', 'lightgray'],
        img: ['./img/crater.png', './img/crater2.png']
    },
    {
        name: 'Hippie',
        price: '$99',
        colors: ['gray', 'black'],
        img: ['./img/hippie.png', './img/hippie2.png']
    }
]

var sneaker = sneakers[0];
// let currentIndex = 0;


navItems.forEach(function (navItem, index) {
    navItem.onclick = () => {
        sliderWrapper.style.transform = `translateX(${-index * 100}vw)`;

        sneaker = sneakers[index];
        let html = `
        <img src="${sneaker.img[0]}" alt="" class="product-img" />
        <div class="product-detail">
          <h1 class="product-name">${sneaker.name}</h1>
          <p class="product-price">${sneaker.price}</p>
          <p class="product-des">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Praesentium reiciendis at illum eveniet officia culpa.
          </p>
          <div class="colors">
            <div class="color color1" style = "background-color: ${sneaker.colors[0]}"></div>
            <div class="color color2" style = "background-color: ${sneaker.colors[1]}"></div>
          </div>
          <div class="sizes">
            <p class="size">1</p>
            <p class="size">2</p>
            <p class="size">3</p>
          </div>
          <button class="product-btn">Buy now</button>
        `;
        product.innerHTML = html;
    }
});


btns.forEach(function (btn) {
    btn.onclick = function (e) {
        window.scrollTo({ top: product.offsetTop, behavior: 'smooth' });
    }
})

product.onclick = (e) => {
    let img = document.querySelector('.product-img');
    if (e.target.closest('.color1')) {
        img.src = `${sneaker.img[0]}`;
    }
    else if (e.target.closest('.color2')) {
        img.src = `${sneaker.img[1]}`;
    }
}


ssBtn.onclick = function (e) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

