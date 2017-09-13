	selecionar(0);
	var fundo = document.getElementById("fundo");
	var sobre = document.getElementById("sobre");
	fundo.style.height = window.innerHeight;
	sobre.style.top = window.innerHeight;
window.onresize = function(){
	var fundo = document.getElementById("fundo");
	fundo.style.height = window.innerHeight;
}

var last_known_scroll_position = 0;
var ticking = false;

document.getElementById('bthome').addEventListener('click', function(){window.scrollTo(0, 0)});
document.getElementById('btsobre').addEventListener('click', function(){window.scrollTo(0, window.innerHeight / 2.000000000000000001)});

function selecionar(x){
	var selected;
	var vetor = ['bthome', 'btsobre'];
	vetor.forEach( function(element, index) {
		selected = document.getElementById(vetor[index]);
		selected.style.color = 'white';
		selected.style.fontSize = '1em';
	});
	selected = document.getElementById(vetor[x]);
	selected.style.color = 'red';
	selected.style.fontSize = '1.3em';
}

function doSomething(scroll_pos) {
	if(window.innerHeight - window.scrollY < 0) sobre.style.top = 0;
	else sobre.style.top = window.innerHeight - window.scrollY;
	fundo.style.filter = 'blur('+10*window.scrollY/window.innerHeight+'px)';
	if(window.scrollY < window.innerHeight * 0.49) selecionar(0);
	else if(window.scrollY < window.innerHeight * 1.5) selecionar(1);
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});