$(document).ready(function(){
	$('select').select2();
	
	$(".button1").click(function(){
		$("#imgFade2").fadeOut();
        $("#imgFade1").fadeIn();
		$("#imgFade1").fadeIn("slow");
		$("#imgFade1").fadeIn(3000);		
    });
	$(".button2").click(function(){
		$("#imgFade1").fadeOut();
        $("#imgFade2").fadeIn();
		$("#imgFade2").fadeIn("slow");
		$("#imgFade2").fadeIn(3000);
    });
});