const hamburger = document.getElementById('hamburger-icon');
const navList = document.getElementById('nav-list');

// Add event listener to the hamburger icon
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});



// Select all anchor links (i.e., links that go to a section)
const links = document.querySelectorAll('nav ul li a');

// Add click event to each link
links.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default anchor behavior (jumping instantly)
        e.preventDefault();
        
        // Get the target section id from the link's href
        const targetId = this.getAttribute('href').substring(1); // Remove the "#" from href
        const targetElement = document.getElementById(targetId);

        // Scroll to the target element with a custom speed
        smoothScrollTo(targetElement);
    });
});

function smoothScrollTo(targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1300; //
    let startTime = null;

    // animate the scroll
    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1); // Ensure progress is between 0 and 1
        const scrollTo = startPosition + distance * progress;
        window.scrollTo(0, scrollTo);
        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }
    requestAnimationFrame(scrollAnimation);
}



function easeInOut(time, startValue, changeInValue, duration) {
    time /= duration / 2;
    if (time < 1) return (changeInValue / 2) * time * time + startValue;
    time--;
    return (-changeInValue / 2) * (time * (time - 2) - 1) + startValue;
}




// Return to Top button
const returnToTopButton = document.getElementById('return-to-top');

// If the page is scrolled down more than 100px, show the button
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        returnToTopButton.style.display = 'block';
    } else {
        returnToTopButton.style.display = 'none';
    }
});


returnToTopButton.addEventListener('click', () => {
    smoothScrollToTop();
});

// Smooth scroll to the top of the page with custom speed
function smoothScrollToTop() {
    const startPosition = window.scrollY;
    const targetPosition = 0; // Scroll to the very top
    const distance = startPosition - targetPosition;
    const duration = 800; 
    let startTime = null;

    // Animation function to scroll the page
    function scrollAnimation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);

        const scrollTo = startPosition - distance * progress;
        window.scrollTo(0, scrollTo);

        if (timeElapsed < duration) {
            requestAnimationFrame(scrollAnimation);
        }
    }

    requestAnimationFrame(scrollAnimation);
}



// parallex effect

window.addEventListener("scroll", function() {
    document.querySelectorAll(".parallex").forEach(img => {
        let scrollPosition = window.pageYOffset;
        img.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
});









