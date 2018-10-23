var age;

$(document).ready(function() {
  $(".menu").hide();
  $("form#age-check").submit(function(event) {
    event.preventDefault();
    age = $("#input-age").val();
    var result = "Go ahead and click your most preferred color!";
    $("#output").text(result);


     var consent;

     if (age >= 18) {
       $('#color').show(); 
       $('.menu').show();
     }
     else {
       $('#under-18').show();
       alert('Sorry, not 18.');
     }

  });

    var favoriteColor = $("#color").val();



});
