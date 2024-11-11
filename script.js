function loadingAnimation(){
    var tl = gsap.timeline();
tl.from(".line h1",{
    y:150,
    stagger:0.3,
    duration:0.6,
    delay:0.5
})

tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
    var h5timer = document.querySelector("#line1-part1 h5")
     var grow = 0
     setInterval(() => {
    if(grow<100){
        h5timer.innerHTML = grow++
    }
    else{
        h5timer.innerHTML = grow
    }
}, 32);
    }
})

tl.to(".line h2",{
    animationName:"anime",
    opacity:1
})

tl.to("#loader",{
    opacity:0,
    duration:0.4,
    delay:3
})

tl.from("#page1",{
    delay:0.3,
    y:1500,
    opacity:0
});

tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    opacity:0
})
tl.from(".page1-line1 h1,.page1-line2 h1,.page1-line3 h2,.page1-line4 h1",{
    y:120,
    stagger:0.2
})
}

loadingAnimation()

function cursorAnimation(){
    
document.addEventListener("mousemove",function(dets){
    gsap.to("#crsr",{
      left:dets.x,
      top:dets.y
    })
    
})

Shery.makeMagnet("#nav-part2 h4");
}

cursorAnimation();