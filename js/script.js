let start,
stopId,
progress,
toggle = false,
keyframes = [
{ transform : "rotate(0)"},
{ transform : "rotate(360deg)"}
];

let element = document.getElementById('smile');
element.setAttribute("style", 
              "position: absolute; width: 150px; height: 150px; top: 150px;");

function step(timestamp) {
  if (!start || progress > 900) {
	start = timestamp;
	}	
  progress = (timestamp - start)/5;
	element.style.left = progress + 'px';
	
	stopId = window.requestAnimationFrame(step);
}
document.body.addEventListener('click', event => {
	// if (event.target.className == "toggle") {
				if (!toggle) {
					toggle = true;
					window.requestAnimationFrame(step);
					element.animate(keyframes, 1000);
				} else {
    			toggle = false;
					cancelAnimationFrame(stopId);
				}
  // }
});

