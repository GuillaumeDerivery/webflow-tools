// Find all elements with data-images attribute
const images = Array.from(document.querySelectorAll('[data-image]')); 

// Utility function to check if element is in viewport
const isInViewport = function (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// If there are images on the page
if (images && images.length) { 
  // Bind scroll event
  window.addEventListener('scroll', () => { 
    // Loop through each image
    images.forEach((image) => { 
      // Check if the image is on the screen
      if (isInViewport(image)) {
        // replace src with contents of data-image
        image.src = image.getAttribute('data-image');
      } 
    }); 
  }); 
}

/*
<div class="buffer"></div>
<img src="https://via.placeholder.com/468x300?text=Do+that+funky+Wombat" alt="Wombat" data-image="https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555345303/shape/mentalfloss/w_34.png">
*/