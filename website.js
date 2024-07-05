
window.addEventListener('load', function() {
    let preload = document.querySelector('.cont');
    if (preload) {
        preload.style.display = 'none';
    }
  });
  
  
 let scrollUpBtn = document.getElementById("scrollUpBtn");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollUpBtn.style.display = "block";
    } else {
      scrollUpBtn.style.display = "none";
    }
  };
    scrollUpBtn.onclick = function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
  
  
// Function to scroll slides right or left

function scrollSlidel(direction) {
  const slider = document.querySelector('.series-card');
  const scrollAmount = 300; // Adjust this value as needed

  if (direction === 'right') {
      slider.scrollLeft += scrollAmount;
      
  } else if (direction === 'left') {
      slider.scrollLeft -= scrollAmount;
  }
}
function scrollSlide(direction) {
  const slider = document.querySelector('.top-slider');
  const scrollAmount = 300; // Adjust this value as needed

  if (direction === 'right') {
      slider.scrollLeft += scrollAmount;
      
  } else if (direction === 'left') {
      slider.scrollLeft -= scrollAmount;
  }
}
  




  function filterSelection(category) {
    const elements = document.querySelectorAll('.selection img');
    if (category === 'all') {
        elements.forEach(el => el.style.display = '');
    } else {
        elements.forEach(el => {
            if (el.classList.contains(category)) {
                el.style.display = '';
            } else {
                el.style.display = 'none';
            }
        });
    }
  }
  
  

 // script.js
 document.querySelector('.menu-bar').addEventListener('click', function() {
  var linksSection = document.querySelector('.links-section');
  var linksSection2 = document.querySelector('.close-bar');
  var linksSection3 = document.querySelector('.menu-bar');

  if (linksSection.style.display === 'none') {
      
      linksSection.style.display = 'block';
      linksSection2.style.display = 'block';
      linksSection3.style.display = 'none';
    
  } else {
      linksSection.style.display = 'none';
      
  }
});
 document.querySelector('.close-bar').addEventListener('click', function() {
  var linksSection = document.querySelector('.links-section');
  var linksSection3 = document.querySelector('.menu-bar');
  var linksSection2 = document.querySelector('.close-bar');

  if (linksSection.style.display === 'block') {
    linksSection2.style.display = 'none';
      linksSection.style.display = 'none';
      linksSection3.style.display = 'block';
  } else {
      linksSection.style.display = 'none';
     
  }
});

