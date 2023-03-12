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
// range slider
const rangeValue = document.querySelector(
  '.products-section .nav-products .price form span span'
);
const rangeInput = document.querySelector(
  '.products-section .nav-products .price input'
);

const rangeSlider = function (value) {
  rangeValue.innerHTML = value;
};

rangeInput.addEventListener('mousemove', function () {
  rangeSlider(this.value);
});

// pagination
const products = document.querySelectorAll('.products .product');
const limit = 6;
let currentPage = 1;

function paginate() {
  const startIndex = (currentPage - 1) * limit;
  const endIndex = startIndex + limit;

  document.querySelector(
    '.products-content .showing span:first-child'
  ).textContent = startIndex + 1;

  document.querySelector(
    '.products-content .showing span:nth-child(2)'
  ).textContent = endIndex;

  document.querySelector(
    '.products-content .showing span:last-child'
  ).textContent = products.length;

  products.forEach((product, index) => {
    if (index >= startIndex && index < endIndex) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });

  renderPagination();
}

function renderPagination() {
  const totalPages = Math.ceil(products.length / limit);
  const pagination = document.querySelector('.pagination');

  pagination.innerHTML = '';

  if (totalPages <= 1) {
    return;
  }

  if (currentPage > 1) {
    pagination.appendChild(createPageLink('PREV', currentPage - 1));
  }

  for (let i = 1; i <= totalPages; i++) {
    pagination.appendChild(createPageLink(i, i));
  }

  if (currentPage < totalPages) {
    pagination.appendChild(createPageLink('NEXT', currentPage + 1));
  }
}

function createPageLink(text, pageNumber) {
  const link = document.createElement('span');
  link.innerText = text;

  if (pageNumber === currentPage) {
    link.classList.add('active');
  }

  link.addEventListener('click', () => {
    currentPage = pageNumber;
    paginate();
  });

  return link;
}

paginate();
