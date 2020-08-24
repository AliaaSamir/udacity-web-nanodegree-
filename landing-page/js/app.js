/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/*
document.addEventListener('click', function onClick(){
	console.log("Page Clicked");
});
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('.landing__container');
const nav_bar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function intersectViewport(entries) {
	for(let i=0; i<entries.length; i++) {
		// entries[i]['intersectionRatio']
		if (entries[i]['isIntersecting'] === true)
			entries[i]['target'].classList.add('your-active-class');
		else
			entries[i]['target'].classList.remove('your-active-class');
	}
}

function responedToSectionClick(event){
	const toSection = document.querySelector("#"+ event.target.textContent.toLowerCase().replace(" ", ""));
	window.scrollTo(0, toSection.offsetTop);
	//location.href = "#"+ event.target.textContent.toLowerCase().replace(" ", "");
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar(){

	const fragment = document.createDocumentFragment();

	for(let section=0; section< sections.length ; section++){
			const li  = document.createElement('li');
			li.textContent = sections.item(section).parentNode.getAttribute('data-nav');
			li.setAttribute('class', 'menu__link');
			fragment.appendChild(li);
	}

	nav_bar.appendChild(fragment);
}

// Add class 'active' to section when near top of h
function setActiveSection(){
	let observer = new IntersectionObserver( intersectViewport, { threshold: [0.75] });
	for (let section=0; section< sections.length ; section++) {
		observer.observe(sections.item(section).parentNode);
	}
}

// Scroll to anchor ID using scrollTO event

function scrollToSection(){
	const nav_items = nav_bar.childNodes;

	for (let i = 0; i < nav_items.length; i++) {
			nav_items[i].addEventListener('click', responedToSectionClick);
	}

}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavBar();
// Scroll to section on link click
scrollToSection();
// Set sections as active
setActiveSection();

