const mainPage = document.querySelector('.main-page');
const secondPage = document.querySelector('.second-page');
const liItems = document.querySelectorAll('li');
const btnSubmit = document.querySelector('button');
const spanChosen = document.querySelector('.chosen');

let stars;

const submit = () => {
	mainPage.classList.add('hidden');
	secondPage.classList.remove('hidden');
};

const rating = (e) => {
	liItems.forEach((item) => {
		item.classList.remove('active');
		e.target.classList.add('active');
	});

	stars = e.target.textContent;
	spanChosen.innerHTML = stars;
};

btnSubmit.addEventListener('click', submit);
liItems.forEach((item) => {
	item.addEventListener('click', rating);
});
