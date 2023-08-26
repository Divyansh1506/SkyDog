
gsap.from( "nav", { 
    top: "-100", 
    duration: 2,
    ease: "5"
});

gsap.from(".page2 .right h1 ",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "bottom 100%",
        scrub:2,
    },
    opacity:0,
})

gsap.from(".page2 .right p ",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "bottom 100%",
        scrub:2,
    },
    opacity:0,
    x:1500
})
gsap.from(".page2 .right .btn2 ",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "bottom 100%",
        scrub:2,
    },
    opacity:0,
    x:1500
})

gsap.from(".page2 .left img ",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "bottom 100%",
        scrub:2,
    },
    opacity:0,
    x:-500,
    rotate:-60
})

gsap.from(".page2 .left .shadow ",{
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end: "bottom 100%",
        scrub:2,
    },
    opacity:0.2,
    x:1000,
    rotate:180
})

gsap.from(".page3 .title h3",{
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end: "bottom 120%",
        scrub:1,
    },
    opacity:0.5,
    x:1000,
})

gsap.from(".page3 .title p",{
    scrollTrigger:{
        trigger:".page3",
        scroller:"body",
        // markers:true,
        start:"top 100%",
        end: "bottom 120%",
        scrub:1,
    },
    opacity:0.5,
    x:-1000,
})


gsap.from(".page4 .left h1",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end: "bottom 100%",
        scrub:1,
    },
    opacity:0.5,
    x:-300,
})

gsap.from(".page4 .left p",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers:true,
        start:"top 90%",
        end: "bottom 100%",
        scrub:1,
    },
    opacity:0.5,
    x:-1000,
})
gsap.from(".page4 .left .btn2",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end: "bottom 120%",
        scrub:1,
    },
    opacity:0.5,
    x:-200,
})
gsap.from(".page4 .right img",{
    scrollTrigger:{
        trigger:".page4",
        scroller:"body",
        // markers:true,
        start:"top 80%",
        end: "bottom 120%",
        scrub:1,
    },
    opacity:0.5,
    x:200,
})


gsap.from(".page7 .top",{
    scrollTrigger:{
        trigger:".page7",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end: "bottom 80%",
        scrub:1,
    },
    opacity:0.2,
})