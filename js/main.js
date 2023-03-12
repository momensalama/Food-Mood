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
const moveImgBox = document.querySelector('.landing-content .big-burger');
const moveImg = moveImgBox.querySelector('img');
const moveScale = 10; // 10px
const scrollTo = document.querySelector('.scroll-to');

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

// mouse Moving Imgs
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

// Sticky navigation

const logoChange = document.querySelector('header .logo img');

const landingOb = document.querySelector('.landing');

const header = document.querySelector('header');

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
    logoChange.src = logoChange.dataset.src;
  } else {
    header.classList.remove('sticky');
    logoChange.src = './imgs/home/logo-dark.png';
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0.55,
});
headerObserver.observe(landingOb);

// Reavel sections
const allSections = document.querySelectorAll('.section');

const reavelSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('hidden--section');
  observer.unobserve(entry.target);

  if (entry.target.id === 'statistics') {
    // icreasing numbers
    const nums = document.querySelectorAll('.statistics .box h2');
    const counter = function (number) {
      const target = number.dataset.num;
      const count = setInterval(() => {
        number.textContent++;
        if (number.textContent == target) {
          clearInterval(count);
        }
      }, 1000 / target);
    };
    nums.forEach(num => counter(num));
  }
};

const sectionObserver = new IntersectionObserver(reavelSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  section.classList.add('hidden--section');
});

// burger slider

btnPrev = document.querySelector('.arrows i:first-child');
btnNext = document.querySelector('.arrows i:last-child');

let curSlide = 0;
let curS = 0;
let curT = 0;

const slides = document.querySelectorAll('.slide');

const goToSlide = function () {
  if (window.matchMedia('(min-width: 1016px)').matches) {
    for (const slide of slides) {
      if (curSlide === 0) slide.style.transform = `translateX(0%)`;
      if (curSlide === 1) slide.style.transform = `translateX(-100%)`;
      if (curSlide === 2) slide.style.transform = `translateX(-200%)`;
      if (curSlide === 3) slide.style.transform = `translateX(-300%)`;
      if (curSlide === 4) slide.style.transform = `translateX(-400%)`;
      if (curSlide === 5) slide.style.transform = `translateX(-500%)`;
      if (curSlide < 0) {
        curSlide = 0;
      }
      if (curSlide > 5) {
        curSlide = 5;
      }
    }
  }
  if (window.matchMedia('(max-width: 1015px)').matches) {
    for (const slide of slides) {
      if (curSlide === 0) slide.style.transform = `translateX(0%)`;
      if (curSlide === 1) slide.style.transform = `translateX(-100%)`;
      if (curSlide === 2) slide.style.transform = `translateX(-200%)`;
      if (curSlide === 3) slide.style.transform = `translateX(-300%)`;
      if (curSlide === 4) slide.style.transform = `translateX(-400%)`;
      if (curSlide === 5) slide.style.transform = `translateX(-500%)`;
      if (curSlide === 6) slide.style.transform = `translateX(-600%)`;
      if (curSlide < 0) {
        curSlide = 0;
      }
      if (curSlide > 6) {
        curSlide = 6;
      }
    }
  }
  if (window.matchMedia('(max-width: 740px)').matches) {
    for (const slide of slides) {
      if (curS === 0) slide.style.transform = `translateX(0%)`;
      if (curS === 1) slide.style.transform = `translateX(-100%)`;
      if (curS === 2) slide.style.transform = `translateX(-200%)`;
      if (curS === 3) slide.style.transform = `translateX(-300%)`;
      if (curS === 4) slide.style.transform = `translateX(-400%)`;
      if (curS === 5) slide.style.transform = `translateX(-500%)`;
      if (curS === 6) slide.style.transform = `translateX(-600%)`;
      if (curS === 7) slide.style.transform = `translateX(-700%)`;
      if (curS < 0) {
        curS = 0;
      }
      if (curS > 7) {
        curS = 7;
      }
    }
  }
  if (window.matchMedia('(max-width: 470px)').matches) {
    for (const slide of slides) {
      if (curT === 0) slide.style.transform = `translateX(0%)`;
      if (curT === 1) slide.style.transform = `translateX(-100%)`;
      if (curT === 2) slide.style.transform = `translateX(-200%)`;
      if (curT === 3) slide.style.transform = `translateX(-300%)`;
      if (curT === 4) slide.style.transform = `translateX(-400%)`;
      if (curT === 5) slide.style.transform = `translateX(-500%)`;
      if (curT === 6) slide.style.transform = `translateX(-600%)`;
      if (curT === 7) slide.style.transform = `translateX(-700%)`;
      if (curT === 8) slide.style.transform = `translateX(-800%)`;
      if (curT < 0) {
        curT = 0;
      }
      if (curT > 8) {
        curT = 8;
      }
    }
  }
};

const nextSlide = function () {
  curT++;
  curS++;
  curSlide++;
  goToSlide();
};

const prevSlide = function () {
  curT--;
  curS--;
  curSlide--;
  goToSlide();
};
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

// news slider

btnNewPrev = document.querySelector('.news .arrows i:first-child');
btnNewNext = document.querySelector('.news .arrows i:last-child');

let curNew = 0;
let curM = 0;

const news = document.querySelectorAll('.news .new');

const goToNew = function () {
  if (window.matchMedia('(max-width: 850px)').matches) {
    for (const newEl of news) {
      if (curNew === 0) newEl.style.transform = `translateX(0%)`;
      if (curNew === 1) newEl.style.transform = `translateX(-100%)`;
      if (curNew === 2) newEl.style.transform = `translateX(-200%)`;
      if (curNew === 3) newEl.style.transform = `translateX(-300%)`;
      if (curNew < 0) {
        curNew = 0;
      }
      if (curNew > 2) {
        curNew = 2;
      }
    }
  }
  if (window.matchMedia('(max-width: 550px)').matches) {
    for (const newEl of news) {
      if (curM === 0) newEl.style.transform = `translateX(0%)`;
      if (curM === 1) newEl.style.transform = `translateX(-100%)`;
      if (curM === 2) newEl.style.transform = `translateX(-200%)`;
      if (curM === 3) newEl.style.transform = `translateX(-300%)`;
      if (curM < 0) {
        curM = 0;
      }
      if (curM > 3) {
        curM = 3;
      }
    }
  }
  if (window.matchMedia('(min-width: 996px)').matches) {
    for (const newEl of news) {
      if (curNew === 0) newEl.style.transform = `translateX(0%)`;
      if (curNew === 1) newEl.style.transform = `translateX(-100%)`;
      if (curNew < 0) {
        curNew = 0;
      }
      if (curNew > 1) {
        curNew = 1;
      }
    }
  }
};

const nextNew = function () {
  curM++;
  curNew++;
  console.log(curNew);
  goToNew();
};

const prevNew = function () {
  curM--;
  curNew--;
  goToNew();
};

btnNewNext.addEventListener('click', nextNew);
btnNewPrev.addEventListener('click', prevNew);

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
