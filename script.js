/*var text = document.getElementById("text");

gsap.from("#text" , {
    scrollTrigger : {
        scrub: true
    },
    x: -600,
})*/




/******/
AOS.init();
/*****/

const text = document.querySelector(".lastTime");

text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

anime.timeline({
    loop: true
})

.add({
    targets: '.lastTime span',
    translateY: [-600, 0],
    scale: [10,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})

.add({
    targets: '.lastTime span',
    translateX: [0, -1000],
    scale: [1,1],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 2000,
    delay: anime.stagger(100),
})

.add({
    targets: '.lastTime span',
    translateX: [1000, 0],
    scale: [1,1],
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})

.add({
    targets: '.lastTime span',
    translateX: [0, 0],
    scale: [1,10],
    opacity: [1,0],
    easing: "easeOutExpo",
    duration: 1500,
    delay: anime.stagger(100),
})


/*let animation = anime.timeline({
    targets: descri,
    easing: 'easeInOutExpo',
    loop: true,
    delay: anime.stagger(100,{grid:[10,10], from:'center'})
})
animation
.add({
    rotateZ: 180,
    translateY: anime.stagger(-20,{grid:[10,10], from:'center'})
})*/

/*const text = document.querySelector(".lastTime");
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
const animation = anime.timeline({
  targets: ".lastTime span",
  easing: "easeInOutExpo",
  loop: true
});

setTimeout( function(){
  animation
  .add({
    rotate: function () {
      return anime.random(-360, 360);
    },
    translateX: function () {
      return anime.random(-500, 500);
    },
    translateY: function () {
      return anime.random(-500, 500);
    },
    duration: 5000,
    delay: anime.stagger(20)
  })

  .add({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    duration: 5000,
    delay: anime.stagger(20)
  });
}, 5500);*/