vards = "desa";
jauns_vards = "";

for (var i = 0; i < vards.length; i++) {
	console.log(vards);
	var min = 123;
  var poz = 0;
	for (var j = 0; j < vards.length; j++) {
  	if (vards[j].charCodeAt(0) < min) {
    	min = vards[j].charCodeAt(0);
      poz = j;
    }
  }
  jauns_vards += String.fromCharCode(min);
  vards = vards.replace(String.fromCharCode(min), "~")
}

console.log("jauns", jauns_vards)
