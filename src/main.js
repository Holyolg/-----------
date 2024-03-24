document.addEventListener("DOMContentLoaded", function(){

let scrollTransition = document.querySelector('#scroll-transition')
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
observer.observe(document.querySelector('#scroll-wrapper'))
    
  
});