// import { gsap } from "gsap";
    
// import { ScrollTrigger } from "gsap/ScrollTrigger";


// gsap.registerPlugin(ScrollTrigger);


document.addEventListener("DOMContentLoaded", function(){

	let tl = gsap.timeline({scrollTrigger: {
		trigger: '.first-screen',
		scrubs: true
	}});

	tl.from('.first-screen', {y: 20, opacity: 0})
	//.from('.timer-section', {y: 20, opacity: 0})
	//.from('.text-section__one', {y: 20, opacity: 0})
	//.from('.calendar-section', {y: 20, opacity: 0})
	//.from('.text-section__two', {y: 20, opacity: 0})


	tl.to('.first-screen', {y: 0, opacity: 1})
	//.to('.timer-section', {y: 0, opacity: 1})
	//.to('.text-section__one', {y: 0, opacity: 1})
	//.to('.calendar-section', {y: 0, opacity: 1})
	//.to('.text-section__two', {y: 0, opacity: 1})
	

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
	sbmButton.classList.add('bg-indigo-600');
	sbmButton.classList.remove('bg-indigo-500') 
	} else {
		showValidMessage()
		sbmButton.setAttribute("disabled", '');
		sbmButton.classList.remove('bg-indigo-600');
		sbmButton.classList.add('bg-indigo-500') 
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
	sbmButton.classList.remove('bg-indigo-600');
	sbmButton.classList.add('bg-indigo-500') 
	console.log('3')
	}
 });

});