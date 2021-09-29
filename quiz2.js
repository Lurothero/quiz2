$(document).ready(function(){


    $('.paragraph').hide();

    $("#readme").on('click',() => {
        $('.paragraph').show(); 
       });
       
       $("#less").on('click',() => {
        $('.paragraph').hide(); 
       });
      


  }); 