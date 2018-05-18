function init() {
	var icon = document.getElementById("icon");
	var number = Math.floor(Math.random()*4);

	if (number == 3) {icon.href = "icons/k.ico"} 
		else if (number == 2) {icon.href = "icons/l.ico"}
			else if (number == 1) {icon.href = "icons/m.ico"}
				else {icon.href = "icons/p.ico"}
}