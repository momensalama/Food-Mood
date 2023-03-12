const hiddenLis = Array.from(
  document.querySelectorAll('.slide-content__nav > li')
);
const hiddenLiSecond = Array.from(
  document.querySelectorAll('.slide-content__nav > li:first-child')
);
const secondBtnNav = document.querySelector('.inner-links .second-nav__mobile');
const toggler = document.querySelector('.mobile-header .toggle');
const closeSlide = document.querySelector('.slide-content .close-slide');
const slideContent = document.querySelector('.slide-content');
const searchIcon = document.querySelector('.main-search .fa-magnifying-glass');
const hideSearch = document.querySelector('.main-search .close-search');
const popupSearch = document.querySelector('.main-search+.popup-search');
const popupSearchTwo = document.querySelector('.back+.popup-search');
const searchIconTwo = document.querySelector('.back .fa-magnifying-glass');
const hideSearchTwo = document.querySelector('.back .close-search');
const overlay = document.querySelector('.overlay');
const scrollTo = document.querySelector('.scroll-to');
const moveImgBox = document.querySelector('.heading .image');
const moveImg = document.querySelector('.heading .image img');
const moveScale = 15; // 15px

// move image
function mouseMoveImgs(e) {
  const { offsetWidth: width, offsetHeight: height } = moveImgBox;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const moveX = Math.round((x / width) * moveScale - moveScale / 2);
  const moveY = Math.round((y / height) * moveScale - moveScale / 2);

  moveImg.style.top = `${moveY}px`;
  moveImg.style.left = `${moveX}px`;
}

window.addEventListener('mousemove', mouseMoveImgs);

// main hidden navs
hiddenLis.forEach(li =>
  li.addEventListener('click', function () {
    li.classList.toggle('drop-down');
  })
);

// second hidden navs
secondBtnNav.addEventListener('click', function () {
  hiddenLiSecond.forEach(li => {
    if (li.classList.contains('drop-down__second')) {
      li.classList.remove('drop-down__second');
    } else {
      li.classList.add('drop-down__second');
    }
  });
});

// open and close slide navs
toggler.addEventListener('click', function () {
  slideContent.classList.add('show-slide');
  overlay.classList.add('show-overlay');
});

closeSlide.addEventListener('click', function () {
  slideContent.classList.remove('show-slide');
  overlay.classList.remove('show-overlay');
});

overlay.addEventListener('click', function () {
  slideContent.classList.remove('show-slide');
  overlay.classList.remove('show-overlay');
});

// search header one
searchIcon.addEventListener('click', function () {
  popupSearch.classList.add('show-search');
  searchIcon.classList.add('hide-search_icon');
  hideSearch.classList.add('show-search__close');
});

hideSearch.addEventListener('click', function () {
  popupSearch.classList.remove('show-search');
  hideSearch.classList.remove('show-search__close');
  searchIcon.classList.remove('hide-search_icon');
});

// search header two
searchIconTwo.addEventListener('click', function () {
  popupSearchTwo.classList.add('show-search');
  searchIconTwo.classList.add('hide-search_icon__second');
  hideSearchTwo.classList.add('show-search__close__second');
});

hideSearchTwo.addEventListener('click', function () {
  popupSearchTwo.classList.remove('show-search');
  hideSearchTwo.classList.remove('show-search__close__second');
  searchIconTwo.classList.remove('hide-search_icon__second');
});

// scroll to top
window.onscroll = function () {
  window.scrollY >= 650
    ? scrollTo.classList.add('popup')
    : scrollTo.classList.remove('popup');
};

scrollTo.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// incrase quantity

let count = 0;

const increase = document.querySelector(
  '.single-product .buy .quantity span:last-child'
);

const quantityNum = document.querySelector(
  '.single-product .buy .quantity span:nth-child(2)'
);
const decrease = document.querySelector(
  '.single-product .buy .quantity span:first-child'
);

increase.addEventListener('click', function () {
  count += 1;
  quantityNum.innerHTML = count;
});

decrease.addEventListener('click', function () {
  if (count > 0) {
    count -= 1;
  }
  quantityNum.innerHTML = count;
});

let tabs = Array.from(
  document.querySelectorAll('.single-product .about-product ul li')
);
let tabsContent = Array.from(
  document.querySelectorAll('.single-product .about-product .content .tab')
);

tabs.forEach(tab => {
  tab.addEventListener('click', function (e) {
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    tabsContent.forEach(content => {
      content.style.display = 'none';
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      'block';
  });
});

// const imgZoom = document.querySelector(
//   '.single-product .images .hover-img img'
// );
const imgsZoom = Array.from(
  document.querySelectorAll('.single-product .images .hover-img img')
);
// const zoomArea = document.querySelector('.single-product .hover-img');
const imgsList = Array.from(
  document.querySelectorAll('.single-product .images > img')
);

// zoomArea.addEventListener('mousemove', function (e) {
//   x = e.clientX - e.target.offsetLeft;
//   y = e.clientY - e.target.offsetTop;

//   imgZoom.style.transformOrigin = `${x}px ${y}px`;
//   imgZoom.style.transform = `scale(2)`;
// });

// zoomArea.addEventListener('mouseleave', function () {
//   imgZoom.style.transformOrigin = `center`;
//   imgZoom.style.transform = `scale(1)`;
// });

imgsList.forEach(img => {
  img.addEventListener('click', function (e) {
    imgsList.forEach(img => img.classList.remove('active'));
    e.currentTarget.classList.add('active');
  });
});

imgsList[1].addEventListener('click', function () {
  imgsZoom[1].style.display = 'block';
  imgsZoom[0].style.display = 'none';
});

imgsList[0].addEventListener('click', function () {
  imgsZoom[0].style.display = 'block';
  imgsZoom[1].style.display = 'none';
});
