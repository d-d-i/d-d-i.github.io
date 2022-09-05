var a = document.getElementById("title");
var b = document.getElementById("altitude");
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showAltitude);
  } else { 
    a.innerHTML = "Geolocation is not supported by this browser.";
  }

function showAltitude(position) {
	var altitude = typeof(position.coords.altitude) == 'number' ? position.coords.altitude + " meters" : "Couldn't find out, some mistake occurred";
	console.log(altitude);
	a.innerHTML = "Your altitude is:";
    b.innerHTML =  altitude;
}

function showAuthor() {
	a.innerHTML = "";
	b.innerHTML = "This site was made by 'a dumb person'";
}

function showPaypal() {
	a.innerHTML = "";
	b.innerHTML = "You can donate through paypal to: dumbperson@evenmoredumb.mock";
}
