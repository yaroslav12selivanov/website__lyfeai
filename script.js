function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
        };
      },

      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
}
locomotiveAnimation();

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loadinganimation() {
    gsap.from(".main__text__title h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.5,
        stagger:0.2
    });

    gsap.from(".main__text__subtitle", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
    })

    gsap.from(".button__ios", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
    })

    gsap.from(".button__googleplay", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
    })
}
loadinganimation()
