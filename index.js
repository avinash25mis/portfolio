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



// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.innerText = '↑';
backToTopButton.id = 'back-to-top';
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.padding = '10px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = '#007BFF';
backToTopButton.style.color = '#fff';
backToTopButton.style.border = 'none';
backToTopButton.style.cursor = 'pointer';
backToTopButton.style.zIndex = '1000';

document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



// parallex effect

window.addEventListener("scroll", function() {
    document.querySelectorAll(".parallex").forEach(img => {
        let scrollPosition = window.pageYOffset;
        img.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    });
});
