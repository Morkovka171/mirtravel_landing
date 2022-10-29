//  const   swiper1 = document.querySelector('.slider-container'),
//         burger = document.querySelector('.burger'),
//         close = document.querySelector('.menu_close'),
//         menu = document.querySelector('.menu'),
//         swiper2 = document.querySelector('.swiper-container'),
//         playButtonsFirst = document.querySelectorAll('.main-slider_play');

// let swiperSlider1 = new Swiper(swiper1,{
// centeredSides:true,
// slidesPerView:'auto',
// loop:true,
// spaceBetween:105,
// });

// let swiperSlider2 = new Swiper(swiper2,{
//     centeredSlides:true,
//     slidesPerView: 1,
//     loop:true,
//     spaceBetween:10,
//     effect: 'fade',
//     fadeEffect: {
//         crossFade: true
//       },
//       navigation: {
//         nextEl: '.btn-left',
//         prevEl: '.btn-right',
//       },
//     });

//     swiperSlider2.on('transitionEnd', function () {
//         let videos = document.querySelectorAll('.first_slider video');
//         videos.forEach((el) => {
//             el.pause();
//             el.currentTime = 0;
//         });
//         playButtonsFirst.forEach((el) => {
//             el.style.display = 'block';
//         });
//     });

// burger.addEventListener('click', () => {
// menu.classList.add('menu--visible')
// });

// close.addEventListener('click', () => {
//     menu.classList.remove('menu--visible')
//     });

// playButtonsFirst.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let video = e.currentTarget.closest('.main-slider_media').querySelector('video');
// 		video.play();
// 		e.currentTarget.style.display = 'none';
// 		setTimeout(() => {
// 			video.volume = 0.5;
// 		}, 1000);
// 	});
// }); 

const swiper1 = document.querySelector('.slider-container'),
			swiper2 = document.querySelector('.swiper-container'),
			burger = document.querySelector('.burger'),
			close = document.querySelector('.menu_close'),
			menu = document.querySelector('.menu'),
			playButtonsFirst = document.querySelectorAll('.main-slider_play ');

let swiperSlider1 = new Swiper(swiper1, {
	centeredSlides: true,
	slidesPerView: 'auto',
	loop: true,
	spaceBetween: 105,
});

let swiperSlider2 = new Swiper(swiper2, {
	centeredSlides: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
	fadeEffect: {
		crossFade: true
	},
	effect: 'fade',
	navigation: {
		nextEl: '.btn-right',
		prevEl: '.btn-left',
	},
});


swiperSlider2.on('transitionEnd', function () {
	let videos = document.querySelectorAll('.first_slider video');
	videos.forEach((el) => {
		el.pause();
		el.currentTime = 0;
	});
	playButtonsFirst.forEach((el) => {
		el.style.display = 'block';
	});
});

burger.addEventListener('click', () => {
	menu.classList.add('menu--visible');
});

close.addEventListener('click', () => {
	menu.classList.remove('menu--visible');
});

playButtonsFirst.forEach((el) => {
	el.addEventListener('click', (e) => {
		let video = e.currentTarget.closest('.main-slider_media').querySelector('video');
		video.play();
		e.currentTarget.style.display = 'none';
		setTimeout(() => {
			video.volume = 0.5;
		}, 1000);
	});
});

// inputMask
let selector = document.querySelectorAll('input[type=tel]');

let im = new Inputmask('+7 (999) 999-99-99');

im.mask(selector);


// validate forms
let validateForms = function(selector, rules) {

	new window.JustValidate(selector, {
		rules: rules,
		submitHandler: function (form, values, ajax) {
			var formData = new FormData(form);

			var xhr = new XMLHttpRequest();


			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {

					if (xhr.status === 200) {
						console.log('Отправлено!')
					} else {

					}
				}
			}

			// Add any event handlers here...
			xhr.open('POST', "mail.php", true);
            xhr.send(formData);

            form.reset();
		},
	});
}

// validateForms('.mailing__form', { email: { required: true, email: true } }, 'mailing-window', 'materialy s proshloj konferencii');
validateForms('.newsletter_form', { email: { required: true, email: true }, tel: { required: true } });
validateForms('.subs-form', { email: { required: true, email: true } });