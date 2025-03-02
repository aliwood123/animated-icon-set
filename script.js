// RAIN CLOUD ANIMATION

// Get all rain paths and rain cloud
const rainPaths = document.querySelectorAll(".rain");
const rainCloud = document.querySelector(".rain-cloud");

// Function for rain animation effect
    function rainFall() {
        gsap.to(rainPaths, {
          y: 12,
          duration: 0.75,
          stagger: 0.1,
          ease: "power1.inOut",
          onStart: () => {
             gsap.to(rainPaths, {
              stroke: "blue"   
            });
            gsap.to(rainCloud, {
              stroke: "gray"
            });
          }
      });
    }

// Triggering start with "hover"
 document.querySelector(".svg-1").addEventListener("mouseover", rainFall);

// Put everything back to original
document.querySelector(".svg-1").addEventListener("mouseout", () => {
        gsap.to(rainPaths, {
            y: 0,                   
            duration: 0.3,           
            ease: "power1.inOut", 
            stroke: "black"
        });
        gsap.to(rainCloud, {
            stroke: "black" 
          });
      });


// LIGHTNING CLOUD ANIMATION

// Get the bolt path
const bolt = document.querySelector('.bolt');
const cloud = document.querySelector('.cloud');

// Pulse effect for the lightning bolt
    function lightningPulse() {
        gsap.to(bolt, {
            scale: 1.3,              
            stroke: "#fff49b",       
            duration: 0.5,           
            repeat: 2,               
            yoyo: true,              
            ease: "power1.inOut", 
            onStart: () => {
              gsap.to(cloud, {
                stroke: "gray"
              });
            },
            onComplete: () => {
                gsap.to(bolt, {
                    scale: 1,           
                    stroke: "black",
                    duration: 0.2, 
                    ease: "power1.inOut"
                });
            }
        });
    }

   document.querySelector(".svg-2").addEventListener("mouseover", lightningPulse);

// Put everything back to original
document.querySelector(".svg-2").addEventListener("mouseout", () => {
        gsap.to(cloud, {
           stroke: "black" 
          });
        gsap.to(bolt, {
           scale: 1,           
           stroke: "black",
           duration: 0.2, 
           ease: "power1.inOut"
          });
      });

// PARTIALLY SUNNY ANIMATION (attempt at a different approach)

const sunrays = document.querySelectorAll(".ray");
const sun = document.querySelector(".sun");
const sunCloud = document.querySelector(".sun-cloud");

function sunPulseAnimation() {
  const tl = gsap.timeline ({
    onComplete: resetAnimation
  });
  
tl.to(sunrays, {
  scale: 1.2,
  stroke: "orange",
  transformOrigin: "center center",
  duration: 0.3,
  repeat: 2,
  yoyo: true,
  ease: "power1.inOut",
  stagger: 0.3
}, 0);
  
tl.to(sun, {
  stroke: "orange",
  duration: 0.5,
  ease: "power1.inOut"
}, 0);
  
tl.to(sunCloud, {
  stroke: "gray",
  duration: 0.5,
  ease: "power1.inOut"
}, 0);

return tl;
}

function resetAnimation() {
  gsap.set([sunrays, sun, sunCloud], {
    clearProps:"all"
  });
}

document.querySelector(".svg-3").addEventListener("mouseover", sunPulseAnimation);

