const menu = document.querySelector('#header .menu');

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		menu.style.backgroundColor =  'rgb(14, 226, 156)';
	} else {
		menu.style.backgroundColor = 'black';
	}
});