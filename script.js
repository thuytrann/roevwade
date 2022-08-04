

gsap.registerPlugin(ScrollTrigger);

function messagePopup() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


$(".section-landingpage").each(function (index) {
  let triggerElement = $(this);
  let targetElement = $(".nav-item-logo");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: triggerElement,
      // trigger element - viewport
      start: "top top",
      end: "bottom 50%",
      scrub: 1
    }
  });
  tl.fromTo(targetElement, {
      paddingRight: "1vw",
      fontSize: "5.75vw",
      borderBottom: "2px solid #2B3B00",
      duration: 1
    },
    {
      paddingRight: "36vw",
      fontSize: ".85vw",
      borderBottom: "none",
      duration: 1
    }
  );
});

//Color changing nav
const target_1 = $(".main-menu");

var position_target_1 = getElementPosition(target_1, true);

ScrollTrigger.addEventListener("refreshInit", function () {
  position_target_1 = getElementPosition(target_1, true);
});


    //Main Menu


gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-landingpage",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", 
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-statistics",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", 
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-blockquote",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00",
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-representatives",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-gallery",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none",
  immediateRender: false
});

gsap.to(".main-menu", {
  scrollTrigger: {
    trigger: ".section-resources",
    start: () => "top " + position_target_1,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});



//Vertical

const target_2 = $(".vertical-menu");

var position_target_2 = getElementPosition(target_2, true);

ScrollTrigger.addEventListener("refreshInit", function () {
  position_target_2 = getElementPosition(target_2, true);
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-landingpage",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "#A0DC00",
});
gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-statistics",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-blockquote",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none"
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-representatives",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-gallery",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_2.outerHeight() + " " + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#2B3B00", background: "none",
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-resources",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none",
  immediateRender: false
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-others",
    start: () => "top " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none", 
  immediateRender: false
});

gsap.to(".vertical-menu", {
  scrollTrigger: {
    trigger: ".section-others",
    start: () => "bottom " + position_target_2,
    end: () => "+=" + target_1.outerHeight() + " +=" + position_target_2,
    scrub: 1,
    markers: false,
  },
  color: "#A0DC00", background: "none", 
  immediateRender: false
});

function getElementPosition(element, bottom = false) {
  let position = element.offset().top - $(window).scrollTop();
  return !bottom ? position : position + element.outerHeight();
}

//Main Page Parallax




//special message



var popups = document.querySelectorAll(".popup");
var btns = document.querySelectorAll(".message-btn");
var message = document.getElementById('special-message-audio');
var closes = document.querySelectorAll(".close-message");
var containers = document.querySelectorAll(".message-btn-container");



for (var i = 0; i < btns.length; i++) {  
  addListeners( popups[i], btns[i], containers[i], closes[i]);
}

function addListeners(popup, btn, container, close) {
  
  container.addEventListener("click", function() {
    animateMessage(btn, popup);
    message.load();
    message.play();
  });
  
  close.addEventListener("click", function() {
    animateMessage(popup, btn);
    message.pause();
  });  
}

function animateMessage(fromHero, toHero) {
    
  var clone = fromHero.cloneNode(true);
      
  var from = calculatePosition(fromHero);
  var to = calculatePosition(toHero);
  
  TweenLite.set([fromHero, toHero], { visibility: "hidden" });
  TweenLite.set(clone, { position: "absolute", margin: 0 });
  
  body.appendChild(clone);  
      
  var style = {
    x: to.left - from.left,
    y: to.top - from.top,
    width: to.width,
    height: to.height,
    autoRound: false,
    ease: Power1,
    onComplete: onComplete
  };
   
  TweenLite.set(clone, from);  
  TweenLite.to(clone, 0, style)
    
  function onComplete() {
    
    TweenLite.set(toHero, { visibility: "visible" });
    body.removeChild(clone);
  }
}

function calculatePosition(element) {
    
  var rect = element.getBoundingClientRect();
  
  var scrollTop  = window.popupYOffset || root.scrollTop  || body.scrollTop  || 0;
  var scrollLeft = window.popupXOffset || root.scrollLeft || body.scrollLeft || 0;
  
  var clientTop  = root.clientTop  || body.clientTop  || 0;
  var clientLeft = root.clientLeft || body.clientLeft || 0;
    
  return {
    top: Math.round(rect.top + scrollTop - clientTop),
    left: Math.round(rect.left + scrollLeft - clientLeft),
    height: rect.height,
    width: rect.width,
  };
}
  





//Gallery

const delSections = document.querySelectorAll(".delayed-gallery");

delSections.forEach(section => {
  const containerAnim = gsap.to(section.querySelector(".innerContainer"), {
    y: "100vh",
    ease: "none"
  });
  
  const imageAnim = gsap.to(section.querySelector("img"), {
    y: "-100vh",
    ease: "none",
    paused: true
  });
  
  const scrub = gsap.to(imageAnim, {
    progress: 1,
    paused: true,
    ease: "power3",
    duration: parseFloat(section.dataset.scrub) || 0.1,
    overwrite: true
  });
  
  ScrollTrigger.create({
    animation: containerAnim,
    scrub: true,
    trigger: section,
    start: "top bottom",
    end: "bottom top",
    onUpdate: self => {
      scrub.vars.progress = self.progress;
      scrub.invalidate().restart();
    }
  });
});



//Resources

console.clear();

let root = document.documentElement;
let body = document.body;
let pages = document.querySelectorAll(".page");
let tiles = document.querySelectorAll(".tile");
let cancel = document.querySelectorAll(".close");

for (let i = 0; i < tiles.length; i++) {
  addListeners(tiles[i], pages[i], cancel[i]);
}


function addListeners(tile, page, cancel) {
let content = tile.querySelector('.inner-content');


tile.addEventListener("click", function() {
animateHero(tile, page);



let tlout = gsap.timeline();


                tlout.to(content, {
                    duration: 1.0,
                    opacity: 0

                });
                tlout.to('.page .inner-content ', {
                    delay: 1.0,
                    duration: .5,
                    opacity: 1,

                })


            });

            cancel.addEventListener("click", function() {
                animateHero(page, tile);

                let tlin = gsap.timeline();


                tlin.to('.page .inner-content ', {
                    duration: 1.0,
                    opacity: 0

                })

                tlin.to(content, {
                    delay: 1.0,
                    duration: 2.8,
                    opacity: 1

                })

            });
        }

        function animateHero(fromHero, toHero) {

            let animated = gsap.timeline();

            let clone = fromHero.cloneNode(true);

            let from = calculatePosition(fromHero);
            let to = calculatePosition(toHero);

            gsap.set([fromHero, toHero], {
                visibility: "hidden"
            });
            gsap.set(clone, {
                position: "absolute",
                margin: 0
            });

            body.appendChild(clone);

            let style = {
                duration: 2,
                x: to.left - from.left,
                y: to.top - from.top,
                width: to.width,
                height: to.height,
                autoRound: false,
                ease: Power1.easeOut,
                onComplete: onComplete
            };

            gsap.set(clone, from);
            gsap.to(clone, style);

         let cloneAnimation = clone.querySelector('.tile .inner-content');
            gsap.to(cloneAnimation, {
                duration: 1.0,
                opacity: 0
            })




            function onComplete() {

                gsap.set(toHero, {
                    visibility: "visible"
                });
                body.removeChild(clone);
            }
        }

        function calculatePosition(element) {

            var rect = element.getBoundingClientRect();

            var scrollTop = window.pageYOffset || root.scrollTop || body.scrollTop || 0;
            var scrollLeft = window.pageXOffset || root.scrollLeft || body.scrollLeft || 0;

            var clientTop = root.clientTop || body.clientTop || 0;
            var clientLeft = root.clientLeft || body.clientLeft || 0;

            return {
                top: Math.round(rect.top + scrollTop - clientTop),
                left: Math.round(rect.left + scrollLeft - clientLeft),
                height: rect.height,
                width: rect.width,
            };
        }


//flip card


var scene = document.getElementById('js-scene');
if (scene !== null){
  var parallax = new Parallax(scene);
}



var card = document.querySelector('.card');
card.addEventListener( 'mouseover', function() {
  card.classList.toggle('is-flipped');
});



