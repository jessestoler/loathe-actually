$(document).ready(function(){
    $("#alanRickman").click(function(){
        $("#you").attr("src", "assets/alanRickman.jpg");
        $(this).remove();
    });

    $("#hughGrant").click(function(){
        
        $("#hughGrant").remove();
        
            
        if (("#you").src.length > 0) {
            $("#opponent").attr("src", "assets/hughGrant.jpg");
        }
      
           
        
    });
});