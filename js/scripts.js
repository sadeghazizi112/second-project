var age;
var colormenu;
var sodaquestion;
var sodamenu;
var canmenu;


$(document).ready(function() {
  $('#colormenu').hide();
  $('#sodaQ').hide();
  $('#nosoda').hide();
  $('#sodamenu').hide();
  $('#canmenu').hide();
  $(".suggestion").hide();
  $('#CNET').hide();
  $('#RR').hide();
  $('#CSS').hide();
  $('#sorry').hide();


  $("form#age-check").submit(function(event) {
    event.preventDefault();
    age = $("#input-age").val();

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
    colormenu = $('select[name="colormenu"]').val();
    event.preventDefault();
    $('#sodaQ').show();
  });

  $('form#sodaQ').submit(function(event) {
    sodaquestion = $("form#sodaQ select").val();
    console.log(sodaquestion);
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
     sodamenu = $('select[name="sodamenu"]').val();
     console.log(sodamenu);
     event.preventDefault();
     $('#canmenu').show();
   });

   $('form#canmenu').submit(function(event) {
     canmenu = $('select[name="canmenu"]').val();
     console.log();
     event.preventDefault();
     $(".suggestion").show();


    console.log(age);
    console.log(colormenu);
    console.log(sodaquestion);
    console.log(canmenu);
    if ((parseInt(age) >= 18) && (colormenu === 'red') && (sodamenu === 'coke') && (sodaquestion === 'yes')
    && (canmenu === 'can')) {
    $('#CNET').show();
    }

    else if ((parseInt(age) >= 30) && (colormenu === 'blue') && (sodamenu === 'pepsi') && (sodaquestion === 'yes')
    && (canmenu === 'bottle')) {
    $('#RR').show();
    }

    else if ((parseInt(age) >= 20) && (colormenu === 'green') && (sodamenu === 'sprite') && (sodaquestion === 'yes')
    && (canmenu === 'fountain')) {
    $('#CSS').show();
    }

    else {
      $('#sorry').show();
    }

   });
});
