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
