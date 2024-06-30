gsap.registerPlugin(ScrollTrigger)
const navbarOverlay = document.querySelector('.nav_sidebar_overlay');
const navSidebar = document.querySelector('.nav_sidebar');
const menuButton = document.querySelector('.menu')
const closeButton = document.querySelector('.close-btn')



const handleOpenMenu= () => {
    navbarOverlay.classList.add('show_sidebar')
    navSidebar.classList.add('show_sidebar')
}

const handleCloseMenu = () => {
    navbarOverlay.classList.remove('show_sidebar')
    navSidebar.classList.remove('show_sidebar')
}

const closeOnOutClick = () => {
    navbarOverlay.classList.remove('show_sidebar')
    navSidebar.classList.remove('show_sidebar')
}

menuButton.addEventListener('click', handleOpenMenu);
closeButton.addEventListener('click', handleCloseMenu);
navbarOverlay.addEventListener('click', closeOnOutClick);

gsap.utils.toArray('.product').forEach(product => {
    ScrollTrigger.create({
        trigger: product,
        start: 'top top' ,
        pin: true,
        pinSpacing: false   
    })
})

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const headerLinks = document.querySelectorAll('.header a');
    
  
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: self => {
        if (window.scrollY === 0) {
            gsap.to(header, { backgroundColor: "transparent",  color: "white", duration: 0.3, borderBottom: 'none' });
            gsap.to(headerLinks, { color: "white", duration: 0.3 });
          } else {
            gsap.to(header, { backgroundColor: "#000",  color: "white", duration: 0.3, borderBottom: "1px solid #555" });
            gsap.to(headerLinks, { color: "white", duration: 0.3 });
          }
      }
    });
  });


