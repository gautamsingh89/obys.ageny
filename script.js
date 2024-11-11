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
})

tl.to("#loader",{
    display:"none"
})