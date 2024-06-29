gsap.registerPlugin(ScrollTrigger)

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
            gsap.to(header, { backgroundColor: "transparent", color: "white", duration: 0.3, borderBottom: 'none' });
            gsap.to(headerLinks, { color: "white", duration: 0.3 });
          } else {
            gsap.to(header, { backgroundColor: "rgba(0, 0, 0, 0.8)", color: "white", duration: 0.3, borderBottom: "1px solid #555" });
            gsap.to(headerLinks, { color: "white", duration: 0.3 });
          }
      }
    });
  });

