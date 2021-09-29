$(document).ready(() => 
{ 
    $('.paragraph').hide();

    $("#readme").on('click',() => {
        $('.paragraph').show(); 
       });
       
       $("#less").on('click',() => {
        $('.paragraph').hide(); 
       });
      

       $('.paragraph').on('mouseenter',() => {

        $('.paragraph').css("background-color", "green");
        


       })



});



