// import { gsap } from "gsap";
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function(){

	let tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.time-section',
			start: 'top center',
			scrubs: true
	}});
	
	tl.from('.time-section_wrapper', { 
		opacity: 0,
	})
	.from('.time-section_first', {
		y: 20, 
		opacity: 0
	})
	.from('.time-section_second', {
		y: 20, 
		opacity: 0
	})
	.from('.time-section_third', {
		y: 20, 
		opacity: 0
	})
	.from('.time-section_fourth', {
		y: 20, 
		opacity: 0
	})
	.from('.time-section_six', {
		y: 20, 
		opacity: 0
	})
	
	let heroTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.hero-section',
			scrubs: true
	}});

	heroTl.from('.first-screen', { 
		opacity: 0,
		y: 40,
	})
	heroTl.from('.timer__block', { 
		opacity: 0,
		y: 40,
	})
	heroTl.from('.nav-arrow', { 
		opacity: 0,
	})
	
	let mapTl = gsap.timeline({
		scrollTrigger: {
			trigger: '.text-section__two',
			start: 'top center',
			scrubs: true
	}});
	mapTl.from('.map', {
		opacity: 0,
		y: 40,
	})

	mapTl.from('.map__btn', {
		opacity: 0,
		y: 40,
	})

let colorsTl = gsap.timeline({
	scrollTrigger: {
		trigger: '.colors-section',
		start: 'top center',
		scrubs: true,
		}, 
	});
colorsTl
.from('.color-first', {
	opacity: 0,
	duration: 0.3

})
.from('.color-second', {
	opacity: 0,
	duration: 0.3

})
.from('.color-third', {
	opacity: 0,
	duration: 0.3

})
.from('.color-fourth', {
	opacity: 0,
	duration: 0.3

})
.from('.color-fives', {
	opacity: 0,
	duration: 0.3

})
// let scrollWrapper = document.querySelectorAll('.scroll-wrapper')	
// let scrollTransition = document.querySelectorAll('.scroll-transition')
// console.log(scrollTransition)

// const observer = new IntersectionObserver(entries => {
//     entries.forEach(entry => {
// 		console.log(entry)
//         if (entry.isIntersecting) {
// 			console.log('1')
//             entry.target.classList.add('animate-opacity');
//             return;
//         }
//         entry.target.classList.remove('animate-opacity');
//     })
// })
// 	scrollTransition.forEach(elem => observer.observe(elem))


function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
      return five;
    }
    n %= 10;
    if (n === 1) {
      return one;
    }
    if (n >= 2 && n <= 4) {
      return two;
    }
    return five;
  }


function timer(id, deadline) {

	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date());

		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds =0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
			hours = Math.floor(t / (1000 * 60 * 60) % 24),
			minutes = Math.floor((t / 1000 / 60) % 60),
			seconds = Math.floor(t / 1000 % 60);
		}
		return {
			'total': t,
			days,
			hours,
			minutes,
			seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			textDays = timer.querySelector('#text_days'),
			textHours = timer.querySelector('#text_hours'),
			textMinutes = timer.querySelector('#text_minutes'),
			textSeconds = timer.querySelector('#text_seconds');

			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			let daysUpdate = days.innerHTML = getZero(t.days);
			let hoursUpdate = hours.innerHTML = getZero(t.hours);
			let minutesUpdate = minutes.innerHTML = getZero(t.minutes);
			let secondsUpdate = seconds.innerHTML = getZero(t.seconds);

			textDays.innerHTML = getNoun (daysUpdate, "день", "дня", "дней");
			textHours.innerHTML = getNoun (hoursUpdate, "час", "часа", "часов");
			textMinutes.innerHTML = getNoun (minutesUpdate, "минута", "минуты", "минут");
			textSeconds.innerHTML = getNoun (secondsUpdate, "секунда", "секунды", "секунд");
			
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}

	}

	

	setClock(id, deadline);
}

timer(".timer", "2024-08-18");


let tel = document.querySelector("#tel")
const sbmButton = document.querySelector("#sbmButton");
const validMessage = document.createElement("p");
validMessage.innerHTML = 'Некоректный номер';
validMessage.className = 'text-sm text-red-900'

function showValidMessage() {
	tel.after(validMessage)
}

function hideValidMessage() {
	validMessage.remove()
}


function validTel () {
	const re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
	valid = re.test(tel.value);
	if (valid) {
	hideValidMessage();
	sbmButton.removeAttribute('disabled', '');
	sbmButton.classList.add('bg-[#5b4f47]');
	sbmButton.classList.remove('bg-[#89807a]') 
	} else {
		showValidMessage()
		sbmButton.setAttribute("disabled", '');
		sbmButton.classList.remove('bg-[#5b4f47]');
		sbmButton.classList.add('bg-[#89807a]') 
	}
	}

 tel.addEventListener('keyup', function(e) {
	if (tel.value.length >= 10) {
		validTel();
		console.log('1')
	} else if (tel.value == +tel.value) {
		hideValidMessage()
		console.log('2');
		tel.addEventListener('focusout', (e) => validTel());
	} else {
	showValidMessage() 
	sbmButton.classList.remove('bg-[#5b4f47]');
	sbmButton.classList.add('bg-[#89807a]') 
	console.log('3')
	}
 });

 const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,
	effect: 'cards',
	centeredSlides: true,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},

  });

  let noSelect = document.querySelector('#no')
  let yesSelect = document.querySelector('#yes');
  let hoveredInput = document.querySelector('.hovered-input');
  console.log(hoveredInput)


  function isSelected () {
	if (noSelect.checked == true) {
		hoveredInput.innerHTML = '',
		hoveredInput.classList.remove('')
		hoveredInput.classList.add('')
		} else if (yesSelect.checked == true) {
		hoveredInput.innerHTML = '<div><label for="text" class="block text-xl leading-6">На чем будете добираться?</label><div class="mt-10"><input type="radio" class="text-[#413329] focus:ring-[#413329]" id="transfer" name="road" value="transfer"/><label class="ml-1">На трансфере</label></div><div class="mt-10"><input type="radio" class="text-[#413329] focus:ring-[#413329]" id="transfer" name="road" value="own"/><label class="ml-1">Своим ходом</label></div><label for="text" class="block text-xl leading-6 mt-10">Что предпочитаете из напитков?</label><div class="mt-10"><input type="checkbox" class="rounded text-[#413329] focus:ring-[#413329]" name="drinks[whiteVine]" id="whiteVine"/><label htmlFor="whiteVine" class="ml-1">Белое вино</label></div><div class="mt-10"><input type="checkbox" class="rounded text-[#413329] focus:ring-[#413329]" name="drinks[redVine]" id="redVine"/><label htmlFor="redVine" class="ml-1">Красное вино</label></div><div class="mt-10"><input type="checkbox" class="rounded text-[#413329] focus:ring-[#413329]"  name="drinks[vodka]" id="vodka"/><label htmlFor="vodka" class="ml-1">Водка</label></div><div class="mt-10"><input type="checkbox" class="rounded text-[#413329] focus:ring-[#413329]"  name="drinks[shampane]" id="shampane"/><label htmlFor="shampane" class="ml-1">Шампанское</label></div><div class="mt-10"><input type="checkbox" class="rounded text-[#413329] focus:ring-[#413329]" name="drinks[notDrinks]" id="notDrinks" checked/><label htmlFor="notDrinks" class="ml-1">Не пью</label></div>';
		hoveredInput.classList.remove('')
		hoveredInput.classList.add('')
	}
  }

  noSelect.addEventListener('click', () => isSelected())
  yesSelect.addEventListener('click', () => isSelected())


let arrow = document.querySelector('.nav-arrow')
let calendar = document.querySelector('.calendar-section__nav ');

arrow.addEventListener('click', () => calendar.scrollIntoView({behavior: 'smooth'}))

});