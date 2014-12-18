//This file will animate the two divs 

/*
var move = function() {
    $('#press').animate({left:'1000px'});
    console.log('fire!'); //function DOES fire onclick
};
*/

var $press = $('#press'),
    $clicked = $('.description').find('[clicked]'),
    $wolfHead = $('.wolf-head'),
    $wolfFace = $('.wolf-face'),
    $popText = $('.container .textbox'),
    wasClicked = $clicked.attr('clicked');

$press.click(function() { 
    if (wasClicked === false) {
    	$wolfHead.animate({top:'+=100px'});
   	$wolfFace.animate({top:'-=100px'});
	$('#popText').remove();
        console.log(wasClicked);
	wasClicked = true;
  	console.log('open'); //function DOES fire onclick
    } else {
    	$wolfHead.animate({top:'-=100px'});
	$wolfFace.animate({top:'+=100px'});
        $popText.html('<textarea id="popText"></textarea>').fadeIn('slow');
	$('#popText:hidden').fadeIn('slow');
        console.log(wasClicked);
	wasClicked = false;
        console.log('close'); //function DOES fire onclick
    }

});
    
