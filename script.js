var a = document.getElementById("title");
var b = document.getElementById("altitude");
  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showAltitude, showError);
  } else { 
    a.innerHTML = "Geolocation is not supported by this browser.";
  }

function showAltitude(position) {
	var altitude = typeof(position.coords.altitude) == 'number' ? position.coords.altitude + " meters with an accuracy of " + position.coords.altitude.accuracy + " meters." : "Couldn't find out, some mistake occurred";
	console.log(altitude, position);
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

function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED: {
	  a.innerHTML = "";
      b.innerHTML = "User denied the request for Geolocation."
	}
      break;
    case error.POSITION_UNAVAILABLE: {
	  a.innerHTML = "";
      b.innerHTML = "Location information is unavailable."
	}
      break;
    case error.TIMEOUT: {
	  a.innerHTML = "";
      n.innerHTML = "The request to get user location timed out."
	}
      break;
    case error.UNKNOWN_ERROR: {
	  a.innerHTML = "";
      b.innerHTML = "An unknown error occurred trying to get user location."
	}
      break;
  }
}