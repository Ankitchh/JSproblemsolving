const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAnimation(){
    var tl = gsap.timeline();


    tl.from("nav",{
        y: '-10%',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundelem",{
        y: 0,
        duration: 2,
        delay:-1,
        ease: Expo.easeInOut,
        stagger:.2
    })
    .from("#herofooter",{
        y: '-10%',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function circleSquizer(){
    var xScale = 1;
    var yScale = 1;

    var xpre = 0;
    var ypre = 0;
    window.addEventListener("mousemove", function(dets){

        xScale = gsap.utils.clamp(.8,1.2, dets.clientX - xpre);
        yScale = gsap.utils.clamp(.8,1.2, dets.clienty - ypre);

        xpre = dets.clientX;
        ypre = dets.clientY;
        
        circleMouseFollower(xScale,yScale);
    })
}
function circleMouseFollower(xScale,yScale){
    window.addEventListener("mousemove",function(dets){
        this.document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${details.clientY}px) scale(${xScale}, ${yScale})`;
    })
}

circleMouseFollower();
circleSquizer();
firstPageAnimation();