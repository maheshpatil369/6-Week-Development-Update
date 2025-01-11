gsap.from("#page1 #circle", {
    scale: 0,
    delay: 1,
    duration: 2,
    roate:720
});
gsap.from("#page2 #circle", {
    scale: 0,
    delay: 1,
    duration: 2,
    roate:720,
    scrollTrigger:{
        trigger:"#page2 #circle",
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top 10%",
        scrub:2
    }
});
gsap.from("#page3 #circle", {
    scale: 0,
    delay: 1,
    duration: 2,
    roate:720
});


