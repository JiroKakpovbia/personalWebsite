// Change Animation Based on Window Size 
// const aboutContainer = document.getElementById('about-container'); // About Container
// const experience1Container = document.getElementById('experience1-container'); // Experience1 Container
// const experience2Container = document.getElementById('experience2-container'); // Experience2 Container
// const experience3Container = document.getElementById('experience3-container'); // Experience3 Container
// const experience4Container = document.getElementById('experience4-container'); // Experience4 Container
// const contactForm = document.getElementById('contact-form'); // Contact Container
// const contactContainer = document.getElementById('contact-container'); // Contact Container

// if (window.innerWidth < 1024) {
//     aboutContainer.setAttribute("data-aos", "fade-in");
//     experience1Container.setAttribute("data-aos", "fade-in");
//     experience2Container.setAttribute("data-aos", "fade-in");
//     experience3Container.setAttribute("data-aos", "fade-in");
//     experience4Container.setAttribute("data-aos", "fade-in");
//     contactForm.setAttribute("data-aos", "fade-in");
//     contactContainer.setAttribute("data-aos", "fade-in");
// }

// Fetch GitHub Projects
async function fetchGitHubProjects() {
    const apiUrl = `https://api.github.com/users/JiroKakpovbia/repos`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(`Failed to fetch repositories: ${response.status}`);
        }

        const repos = await response.json();

        // Select the container where projects will be displayed
        const projectsContainer = document.getElementById('projects-container');
        projectsContainer.innerHTML = ''; // Clear existing content

        var repoNum = 0;

        repos.forEach(repo => {
            // Ensure the README repo isn't shown
            if (repo.name != "JiroKakpovbia") {
                ++repoNum;
    
                // Create a new div for each repository
                const projectElement = document.createElement('div');
                projectElement.className = 'project';
                projectElement.id = 'project' + repoNum;
    
                // Determine which side the element will slide from
                if (repoNum % 2 == 0) { projectElement.setAttribute("data-aos", "fade-left"); }
                else { projectElement.setAttribute("data-aos", "fade-right"); }

                // Populate the project div with repository details
                projectElement.innerHTML = `
                    <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
                    <p>${'<b>Description:</b> ' + repo.description || 'No description available.'}</p>
                    <p><b>Language:</b> ${repo.language || 'N/A'}</p>
                `;

                // Append the project element to the container
                projectsContainer.appendChild(projectElement);
            }
        });
    } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
    }
}

// Fetch projects when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchGitHubProjects('JiroKakpovbia');
});

// Animate On Scroll
AOS.init({
    duration: 750,
    easing: 'ease-in-out',
});

// Hamburger Menu
function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuLinks = document.querySelector('.menu-links');
    hamburgerIcon.classList.toggle('open');
    menuLinks.classList.toggle('open');
}

// Change Colour of Nav on Scroll 
document.addEventListener('DOMContentLoaded', () => {
    const desktopNav = document.getElementById('desktop-nav');
    const hamburgerNav = document.getElementById('hamburger-nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { 
            desktopNav.classList.add('scrolled');
            hamburgerNav.classList.add('scrolled');
        } else {
            desktopNav.classList.remove('scrolled');
            hamburgerNav.classList.remove('scrolled');
        }
    });
});
