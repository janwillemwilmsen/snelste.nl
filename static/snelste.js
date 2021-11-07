(function() {
  // Create a new H3 element
  var h3 = document.createElement('h3');
  
  // Add the text content
  h3.innerText = "It's really cool - I promise!";
  
  // Get the reference to the current heading
  var title = document.querySelector('p.speedlify-subhed');
  
  // Inject the new element right after the H1
  if (title) {
    title.parentElement.insertBefore(h3, title.nextSibling);
  }
})();
