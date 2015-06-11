//Option A: show() and hide()
//Opion B: toggleClass(), addClass(), removeClass()

//Show All
$('.All').click(function() {
  $('.pho').show();
  $('.ill').show();
  
})

//Click Illustration
//Hide Photos
//Show Illustrations
$('.Ill').click(function() {
  $('.pho').hide();
  $('.ill').show();
  
})

//Click Photos
//Hide Illustrations
//Show Photos
$('.Pho').click(function() {
  $('.ill').hide(); 
  $('.pho').show(); 
  
})







var checkClass = function() {
  
  // Remove Existing Hide 
  if ( $('img').hasClass('hide') ) {
    $('img').removeClass('hide'); 
  }
  
};

// Click Photography
$('#photos').click( function() {
  
  // Check Class
  checkClass();
  
  // Hide Other Stuff
  $('img:not(.photos)').toggleClass('hide');

});

// Click Logos
$('#logos').click( function() {
 
    checkClass();
    $('img:not(.logos)').toggleClass('hide');
  
});

// Click Layouts & Branding
$('#layouts').click( function() {
  
    checkClass();
    $('img:not(.layouts)').toggleClass('hide');
  
});

// Click Artwork
$('#artwork').click( function() {
  
    checkClass();
    $('img:not(.artwork)').toggleClass('hide');
  
});




// Show All 
$('#all').click( function() {
  
  checkClass();
  
});