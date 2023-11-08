window.addEventListener('load', () => {
	const loader = document.querySelector('.loader');
	loader.addEventListener('animationend', () => {
		loader.classList.add('active');
	});
});
const images = document.querySelectorAll('img');

images.forEach((image) => {
	image.addEventListener('load', () => {
		image.classList.add('lazy');
	});
});

const buttonLanguage = document.querySelector('.header__end__language');
const containLanguages = document.querySelector('.language__toltips');
const arrowIcon = document.querySelector('.btn__language .icon');

buttonLanguage.addEventListener('click', () => {
	arrowIcon.classList.toggle('active');
	containLanguages.classList.toggle('active');
});

const langueFanscaise = document.querySelector('.francais');

const langueAnglaise = document.querySelector('.anglais');

const imageLangue = document.querySelector('.language__choise');

langueFanscaise.addEventListener('click', () => {
	document.querySelector('.french').style.display = 'block';
	document.querySelector('.inglish').style.display = 'none';
});
langueAnglaise.addEventListener('click', () => {
	document.querySelector('.french').style.display = 'none';
	document.querySelector('.inglish').style.display = 'block';
});

// slider

const sliders = document.querySelector('.expostion__sliders');
const containerCards = document.querySelector('.container__cards');

let currentSlide = 0;

const totalSliders = containerCards.children.length;

function changeSlide(slideIndex) {
	currentSlide = slideIndex;

	containerCards.scrollTo({
		left: currentSlide * sliders.clientWidth,
		behavior: 'smooth',
	});
}

document.querySelector('.next__btn').addEventListener('click', () => {
	changeSlide(currentSlide + 1.1);
});
document.querySelector('.prev__btn').addEventListener('click', () => {
	changeSlide(currentSlide - 1.1);
});

// btn toggle

// var btn = $('.btn');

// btn.on('click', function() {
//   $(this).toggleClass('active not-active');
// });

const buttonToogle = document.querySelector('.toogle');
const nav = document.querySelector('.header .header__nav');
buttonToogle.addEventListener('click', () => {
	nav.classList.toggle('active');
});

const barreDeRecherche = document.querySelector('.form__search');

window.addEventListener('scroll', () => {
	const scrollY = window.scrollY;
	if (scrollY > 36) {
		barreDeRecherche.style.display = 'none';
	} else {
		barreDeRecherche.style.display = 'block';
	}

	if (window.innerWidth > 768) {
		barreDeRecherche.style.display = 'block';
	}
});
