gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pinned-section",
  pin: true,                
  start: "top top",          
  end: "+=1000",            
  markers: true           
});

gsap.to(".fade-in-out", {
  scrollTrigger: {
    trigger: ".pinned-section", 
    start: "top top",          
    end: "bottom bottom",     
    scrub: true,               
  },
  opacity: 1,               
  y: -50,                  
  duration: 1           
});
