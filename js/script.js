const offset = { offset: '80%' };
  const animateClass = 'animate__animated animate__fadeInUp';

  function addWaypoint(selector) {
    $(selector).waypoint(function () {
      $(selector).addClass(animateClass);
    }, offset);
  }

  addWaypoint('.part3');
  addWaypoint('.p4');
  addWaypoint('.part5');
  addWaypoint('.part6');
  addWaypoint('.part7');
  addWaypoint('.part8');
  addWaypoint('.part9');
  addWaypoint('.part10');
  addWaypoint('.part11');
  addWaypoint('.part12');



  document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.sticky-top');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navLinks = document.querySelectorAll('.navbar-nav a');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    function getNavbarHeight() {
        return (document.documentElement.clientWidth > 991) ? navbar.offsetHeight : 370;
    }

    let navbarHeight = getNavbarHeight();

    function handleNavLinkClick(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const elementRect = targetElement.getBoundingClientRect();
            const offsetPosition = window.scrollY + elementRect.top - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            // Collapse the navbar if it is expanded
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            }
        }
    }

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', handleNavLinkClick);
        anchor.addEventListener('touchstart', handleNavLinkClick);
    });

    window.addEventListener('resize', function () {
        // Update navbarHeight on window resize
        navbarHeight = getNavbarHeight();
    });
});



