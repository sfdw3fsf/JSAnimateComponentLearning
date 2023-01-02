'use strict';
const header = document.querySelector('.header')
const message = document.createElement('div');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sec1 = document.querySelector('#section--1');
///////////////////////////////////////
// Modal window


const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
const openModal = function (e) {
  e.preventDefault();
  btnCloseModal.classList.add('is-active');
  btnCloseModal.classList.remove('is-hidden');
  overlay.classList.add('is-active');
  overlay.classList.remove('is-hidden');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////

message.classList.add('cookie-message');
message.innerHTML = 'We use cookies to improve performance <button class="btn btn---close--cookie">Got It!</button>'
// header.prepend(message.cloneNode(true));
header.append(message);
//Delete
document.querySelector('.btn---close--cookie').addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
})
//STYLE
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
// console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

// message.style.height = '80px'

// document.documentElement.style.setProperty('--color-primary', 'orange')

// const logo = document.querySelector('.nav__logo')
// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link');
// console.log(link.href);
// console.log(link.getAttribute('href'));

//Scrolling
btnScrollTo.addEventListener('click', function () {
  //OLD WAY
  // const s1coords = sec1.getBoundingClientRect()
  // console.log(s1coords);
  // window.scrollTo({
  //   // s1coords.left + window.pageXOffset, 
  //   // s1coords.top + window.pageYOffset);
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth'
  // });

  //MODERN WAY
  sec1.scrollIntoView({ behavior: 'smooth' })
})
/////////
// const h1 = document.querySelector('h1');
// const alert1 = function () {
//   alert('Hello');
//   h1.removeEventListener('mouseenter', alert1);
// };
//////////////////////
// h1.addEventListener('mouseenter', alert1)

///BUBBLING CAPTURING PROPAGATION
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   // e.stopPropagation();
// })

// document.querySelector('.nav__links').addEventListener('click', function () {
//   this.style.backgroundColor = randomColor();
// })
// document.querySelector('.nav').addEventListener('click', function () {
//   this.style.backgroundColor = randomColor();
// })
//DELEGATION
//Determiine what element oriented the event
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  //Match the strategy

  if (e.target.classList.contains('nav__link')) {

    console.log(e.target);
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  }
})

