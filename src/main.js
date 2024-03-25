document.addEventListener("DOMContentLoaded", function(){

let scrollTransition = document.querySelector('.scroll-transition')
console.log(scrollTransition)

scrollTransition.classList.remove('animate-opacity')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollTransition.classList.add('animate-opacity');
            return;
        }
        scrollTransition.classList.remove('animate-opacity');
    })
})
observer.observe(document.querySelector('.scroll-wrapper'))
    
function timer(id, deadline) {

	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		const t = Date.parse(endtime) - Date.parse(new Date(dateString.replace()));

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
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}

	}

	setClock(id, deadline);
}

timer(".timer", "2024-08-18");

});