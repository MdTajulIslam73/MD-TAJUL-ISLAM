document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor =  'rgb(14, 13, 13)';
	} else {
		header.style.backgroundColor = 'black';
	}
});