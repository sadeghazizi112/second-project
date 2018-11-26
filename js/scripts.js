var age;
var result;
var favoritesoda;

$(document).ready(function() {
  $('#colormenu').hide();
  $('#sodaQ').hide();
  $('#nosoda').hide();
  $('#sodamenu').hide();
  $('#canmenu').hide();

  $("form#age-check").submit(function(event) {
    event.preventDefault();
    age = $("#input-age").val();
    // result = "Go ahead and click your most preferred color!";
    // $("#output").text(result);

    if (age >= 18) {
      $('#colormenu').show();
    }

    else {
      $('#under-18').show();
      alert('Sorry, not 18.');
    }
    event.preventDefault();
  });

  $('form#colormenu').submit(function(event) {
    var colormenu = $("input#colormenu").val();
    // result = "Okay, next question!";
    // $("#output").text(result);
    event.preventDefault();
    $('#sodaQ').show();
  });

  $('form#sodaQ').submit(function(event) {
    var sodaquestion = $("input#sodaQ").val();
    console.log(sodaquestion);
    // result = "Okay, next question!";
    // $("#output").text(result);
    event.preventDefault();


   if (sodaquestion == 'no') {
     $('#nosoda').show();
     alert('Sorry, you must like soda to continue.');
   }

   else {
     $('#sodamenu').show();
   }
 });


   $('form#sodamenu').submit(function(event) {
     var sodamenu = $("input#sodamenu").val();
     console.log();
     // result = "Okay, next question!";
     $("#output").text(result);
     event.preventDefault();
     $('#canmenu').show();
   });

   $('form#canmenu').submit(function(event) {
     var canmenu = $("input#canmenu").val();
     console.log(can);
     result = "Okay, final question!";
     $("#output").text(result);
     event.preventDefault();
   });


// $("#yourfavoritesoda").show();
//
// if (parseInt(age) =< 30 && (color === 'red') && (sodaquestion === 'yes')) {
// $('#coke').show();
// }
// if (parseInt(age) =< 20 && (color === 'blue') && (sodaquestion === 'yes')) {
// $('#pepsi').show();
// }
// if (parseInt(age) >= 20 && (color === 'green') && (sodaquestion === 'yes')) {
// $('#sprite').show();
// }
// event.preventDefault();
// });

});
