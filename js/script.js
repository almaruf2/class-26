$(document).ready(function(){
    
    
    //alert
    alert("hello SSB332");
    
    //message
    $('.c_alert').click(function(){
        alert("hello SSB332");
    });
    
    //hide
    $('#hide').click(function(){
        $('.message').hide(slow);
    });
    //show
    $('#show').click(function(){
        $('.message').show();
    });
    //toggle
    $('#show').click(function(){
        $('.message').toggle();
    });
    
});