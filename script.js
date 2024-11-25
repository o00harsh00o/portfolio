
// Select all elements with the class 'fade-in'
const fadeElements = document.querySelectorAll('.fade-in');

// Create an Intersection Observer to detect when elements enter the viewport
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // If the element is in the viewport
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class to trigger the animation
            observer.unobserve(entry.target); // Stop observing the element once it's in view
        }
    });
}, {
    threshold: 0.5  // 50% of the element must be in view to trigger the animation
});

// Observe each element
fadeElements.forEach(element => {
    observer.observe(element);
});

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }

  window.onload = function(){
    changeOpacity("#home",1,100);
    changeOpacity("#about",1,500);
    changeOpacity("#portfolio",1,1000);
    changeOpacity("#contact",1,1500);

  }
  function contentLoader(contentId){
    document.querySelector('#'+contentId).style.transition = "opacity 0s";;
    document.querySelector('#'+contentId).style.opacity = 0;
    setTimeout(() => {
        changeOpacity('#'+contentId,1,100);
    },80)
  
  }
  function changeOpacity(element, opacityValue, delay) {
    setTimeout(() => {
        document.querySelector(element).style.transition = "opacity 1s";  // Smooth transition
        document.querySelector(element).style.opacity = opacityValue;  // Change opacity
    }, delay);  // Delay in milliseconds
}
function startGiphy(element){
     
    let giphy = "./assets/images/frontend.webp";
    if(element==='#frontEnd'){
        giphy="./assets/images/frontend.webp";
    }
    else if (element === '#backEnd'){
        giphy="./assets/images/backend.webp";
    }
    else if(element === '#cloud'){
        giphy="./assets/images/cloud.webp";
    }
    document.querySelector(element+"Img").style.filter="blur(0px)";
    document.querySelector(element+"Img").setAttribute("src",giphy);
    document.querySelector(element+"Text").style.transition = "height 1s";
    document.querySelector(element+"Text").style.height = "100%";
    // Select the parent element
    let parent = document.querySelector(element+"List");
    parent.style.display = "block";
    
        
    // Use Array.from to get all <p> tags inside the parent element
    let paragraphs = Array.from(parent.getElementsByTagName('p'));

    // Iterate over each paragraph
    paragraphs.forEach((p, index) => {
        // Set a delay for each <p> tag (0.5s * index)
        setTimeout(() => {
           p.style.transition = "transform 1s";
            p.style.opacity = '1'; // Fade in
            p.style.transform = 'translateY(0px)'; // Move to original position
        }, 500 * index); // Delay increases by 0.5s per paragraph
    });
    
    
}
function pauseGiphy(element){
     // Select the parent element
     let parent = document.querySelector(element+"List");
     // Use Array.from to get all <p> tags inside the parent element
    let paragraphs = Array.from(parent.getElementsByTagName('p'));
    paragraphs.forEach((p, index) => {
        // Set a delay for each <p> tag (0.5s * index)
        
           p.style.transition = "transform 1s";
            p.style.opacity = '0'; // Fade in
            p.style.transform = 'translateY(-15px)'; // Move to original position
        });
        
     parent.style.display = "none";
          
    

    // Iterate over each paragraph
    
        // Set a delay for each <p> tag (0.5s * index)
     
        
        // Move to original position
         // Delay increases by 0.5s per paragraph
    
    let giphy = "./assets/images/frontEndStill.png";
    if(element==='#frontEnd'){
        giphy="./assets/images/frontEndStill.png";
    }
    else if (element === '#backEnd'){
        giphy="./assets/images/backEndStill.png";
    }
    else if(element === '#cloud'){
        giphy="./assets/images/cloudStill.png";
    }
    document.querySelector(element+"Img").style.filter="blur(3px)";
    document.querySelector(element+"Img").setAttribute("src",giphy);
    document.querySelector(element+"Text").style.transition = "height 1s";
    document.querySelector(element+"Text").style.height = "20%";
    
}

  
  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
      }
  }
  
  // Used to toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }
  document.querySelector("#readMoreBtn").addEventListener("click",function(){
    document.querySelector("#workExpCard").style.transition="height 1s";
    document.querySelector("#readMoreBtn").style.transition="1s";

    if(document.querySelector("#readMoreBtn").value === 'readMore'){
    document.querySelector("#workExpCard").style.height="60vh";
    document.querySelector("#readMoreBtn").style.marginTop="51vh";    
    document.querySelector("#workExpCard").style.overflowY = "scroll";
    document.querySelector("#readMoreBtn").innerHTML = "<i class='fa fa-angle-double-up' style='padding-right: 1vh;'> "+
    "</i> Read Less <i class='fa fa-angle-double-up' style='padding-left: 1vh;'></i>";
    document.querySelector("#readMoreBtn").value='readLess';
    }
    else{
        document.querySelector("#workExpCard").scrollTop=0;
    document.querySelector("#workExpCard").style.height="40vh";
    document.querySelector("#readMoreBtn").style.marginTop="31vh";
    document.querySelector("#workExpCard").style.overflowY = "hidden";
    document.querySelector("#readMoreBtn").innerHTML = "<i class='fa fa-angle-double-down' style='padding-right: 1vh;'> "+
    "</i> Read More <i class='fa fa-angle-double-down' style='padding-left: 1vh;'></i>";
    document.querySelector("#readMoreBtn").value='readMore';
    }

  })