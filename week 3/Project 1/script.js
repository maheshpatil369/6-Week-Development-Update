gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pinned-section", 
  pin: true,                
  start: "top top",        
  end: "+=500",       
  markers: true           
});
