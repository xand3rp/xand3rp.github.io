/**
 * Hero type effect
 */

function typed_js(str)  {
  let typed_strings = str || [];

  new Typed('#typed', {
    strings: typed_strings,
    // loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });

  // let typed = $('#typed')
  
  // if (typed) {
  //   let typed_strings = typed.data('typed-items')
  //   typed_strings = typed_strings.split(';')
  //   new Typed('#typed', {
  //     strings: typed_strings,
  //     // loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 50,
  //     backDelay: 2000
  //   });
  // }
}

// // Fetch username in browser
// {
// 	// IE
// 	var WinNetwork = new ActiveXObject("WScript.Network");
// 	document.getElementById("username").innerHTML = WinNetwork.UserName;
// }
// // Smooth scrolling
// {
// 	$(document).ready(function(){
// 		// Add smooth scrolling to all links
// 		$("a").on('click', function(event) {

// 			// Make sure this.hash has a value before overriding default behavior
// 			if (this.hash !== "") {
// 				// Prevent default anchor click behavior
// 				event.preventDefault();

// 				// Store hash
// 				var hash = this.hash;

// 				// Using jQuery's animate() method to add smooth page scroll
// 				// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
// 				$('html, body').animate({
// 					scrollTop: $(hash).offset().top
// 				}, 0, function(){

// 					// Add hash (#) to URL when done scrolling (default click behavior)
// 					window.location.hash = hash;
// 				});
// 			} // End if
// 		});
// 	});
// }
// // Bootstrap
// {
// 	$(function () {
// 		$('[data-toggle="tooltip"]').tooltip()
// 	})
// }