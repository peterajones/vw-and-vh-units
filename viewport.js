function init() {
	var els = document.querySelectorAll('div.test');
	for (var i=0;i<els.length;i+=1) {
		els[i].original = els[i].innerHTML;
	}

	writeWidths();
}

function writeWidths() {
	var els = document.querySelectorAll('div.test');
	for (var i=0;i<els.length;i+=1) {
		els[i].innerHTML = els[i].original + ' Width is ' + els[i].offsetWidth;
	}
	document.getElementById('layout').innerHTML = 'Layout viewport divided by 2 is ' + document.documentElement.clientWidth/2 +' / ' + document.documentElement.clientHeight/2;
	document.getElementById('visual').innerHTML  = 'Visual viewport divided by 2 is ' + window.innerWidth/2 +' / ' + window.innerHeight/2;
}

if (!window.onload)
	window.onload = init;

window.onscroll = window.onresize = writeWidths;