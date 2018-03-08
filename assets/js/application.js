$( document ).ready(function() {
	inView.offset(50)

	inView('.gemlok').once('enter', el => {
		el.classList.add('fadeIn');
	});

	inView('.fibermop').once('enter', el => {
		el.classList.add('fadeIn');
	});

	inView('.bramour').once('enter', el => {
		el.classList.add('fadeIn');
	});

});