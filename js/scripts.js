$(document).ready(function() {
  $("form#age-check").submit(function(event) {
    event.preventDefault();
    var number1 = $("#input-age").val();
    var result = "DEBUG";
    $("#output").text(result);
  });
  
  $(".menu").hide();

   var consent;
   var age = 18;

   if (age >= 18) {
     $('[color]').show();
     $('#MENU').show();
   } else {
     $('#under-18').show();
     alert('Sorry, not 18.');
   }



   $("h1#START").click(function() {
     $("#MENU").toggle();
   });
   $(".clickable").click(function() {
     $(".menu2").toggle();
   });
   $(".clickable").click(function() {
     $(".menu3").toggle();
   });
   $(".clickable").click(function() {
     $(".radio-showing").toggle();
     $(".radio-hidden").toggle();
   });
});
