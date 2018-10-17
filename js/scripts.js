var age;

$(document).ready(function() {
  $(".menu").hide();
  $("form#age-check").submit(function(event) {
    event.preventDefault();
    age = $("#input-age").val();
    var result = "Cue link to Next Question: Colors!";
    $("#output").text(result);


     var consent;

     if (age >= 18) {
       $('[color]').show();
       $('#MENU').show();
     }
     else {
       $('#under-18').show();
       alert('Sorry, not 18.');
     }

  });


   $("h1#COLOR").click(function() {
     $("#MENU").toggle();
   });

   $(".clickable").click(function() {
     $(".menu2").toggle();
   });

   $(".clickable").click(function() {
     $(".radio-showing").toggle();
     $(".radio-hidden").toggle();
   });
});
