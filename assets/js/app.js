gsap.registerPlugin(ScrollTrigger, Draggable)
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

//   let slideDelay = 1.4;
// let slideDuration = 0.8;
// let wrap = true;

// let slides = document.querySelectorAll(".slide");
// let prevButton = document.querySelector("#prevButton");
// let nextButton = document.querySelector("#nextButton");
// let progressWrap = gsap.utils.wrap(0, 1);

// let numSlides = slides.length;

// // pp

// let wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);
// let timer = gsap.delayedCall(slideDelay, autoPlay);

// let animation = gsap.to(slides, {
//   xPercent: "+=" + (numSlides * 100),
//   duration: 1,
//   ease: "none",
//   paused: true,
//   repeat: -1,
//   modifiers: {
//     xPercent: wrapX
//   }
// });

// let proxy = document.createElement("div");
// let slideAnimation = gsap.to({}, {});
// let slideWidth = 0;
// let wrapWidth = 0;

// let draggable = new Draggable(proxy, {
//   trigger: ".slides-container",
//   inertia: true,
//   onPress: updateDraggable,
//   onDrag: updateProgress,
//   onThrowUpdate: updateProgress,
//   snap: {     
//     x: snapX
//   }
// });

// resize();

// window.addEventListener("resize", resize);

// prevButton.addEventListener("click", function() {
//   animateSlides(1);
// });

// nextButton.addEventListener("click", function() {
//   animateSlides(-1);
// });

// function updateDraggable() {
//   timer.restart(true);
//   slideAnimation.kill();
//   this.update();
// }

// function animateSlides(direction) {
    
//   timer.restart(true);
//   slideAnimation.kill();
//   let x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);
  
//   slideAnimation = gsap.to(proxy, {
//     x: x,
//     duration: slideDuration,
//     onUpdate: updateProgress
//   });  
// }

// function autoPlay() {  
// //   if (draggable.isPressed || draggable.isDragging || draggable.isThrowing) {
// //     timer.restart(true);
// //   } else {
//     animateSlides(1);

// }

// function updateProgress() { 
//   animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
// }

// function snapX(value) {
//   let snapped = gsap.utils.snap(slideWidth, value);
//   return wrap ? snapped : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
// }

// function resize() {
  
//   let norm = (gsap.getProperty(proxy, "x") / wrapWidth) || 0;
  
//   slideWidth = slides[0].offsetWidth;
//   wrapWidth = slideWidth * numSlides;
  
//   wrap || draggable.applyBounds({minX: -slideWidth * (numSlides - 1), maxX: 0});
  
//   gsap.set(proxy, {
//     x: norm * wrapWidth
//   });
  
//   animateSlides(0);
//   slideAnimation.progress(1);
// }


