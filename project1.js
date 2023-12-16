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
var timeout;
function circleSquizer(){
    var xscale = 1;
    var yscale = 1;

    var xpre = 0;
    var ypre = 0;
    window.addEventListener("mousemove", function(dets){
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8,1.2, dets.clientX - xpre);
        yscale = gsap.utils.clamp(.8,1.2, dets.clienty - ypre);

        xpre = dets.clientX;
        ypre = dets.clientY;
        
        circleMouseFollower(xscale, yscale);
        timeout = setTimeout(function(){
            document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        },100);
    });
}
circleSquizer();
function circleMouseFollower(xscale, yscale){
    window.addEventListener("mousemove",function(dets){
       document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    })
}

circleMouseFollower();

firstPageAnimation();

document.querySelectorAll(".elem").forEach(function(elem){

    var rotate = 0;
    var r_diff = 0;

    elem.addEventListener("mouseleave", function(){
        gsap.to(elem.querySelector("img"),{
            opacity: 0,
            ease: Power3,
        });
    });


   


    elem.addEventListener("mousemove", function(details){
        var diff = details.clientY - elem.getBoundingClientRect().top;
        r_diff = details.clientX - rotate;
        rotate = details.clientX;
        gsap.to(elem.querySelector("img"),{
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            rotate: gsap.utils.clamp(-20,20,r_diff)
        });
    });
});
