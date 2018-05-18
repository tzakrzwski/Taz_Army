function init() {
	document.getElementById("sideNav").style.width = "0px";

	// Media Query //
	var mq = window.matchMedia("(max-width: 800px)");
	mediaQ(mq);
	mq.addListener(mediaQ);

	// Random Icon //

	var icon = document.getElementById("icon");
	var number = Math.floor(Math.random()*4);

	if (number == 3) {icon.href = "../icons/k.ico"} 
		else if (number == 2) {icon.href = "../icons/l.ico"}
			else if (number == 1) {icon.href = "../icons/m.ico"}
				else {icon.href = "../icons/p.ico"}
}

function mediaQ(x) {
	if (x.matches) {dim = "100vw"}
		else {dim = "33vw"}
}

function openNav() {
	var x = document.getElementById("sideNav").style.width;
	if (x == '0px') {
		document.getElementById("sideNav").style.width = dim;
	} else {
		document.getElementById("sideNav").style.width = "0px";
	}
}

function search(index, id, other_id) {
	var input = document.getElementById(id);
	var filter = input.value.toUpperCase();
	var table = document.getElementById("gametable");
	var tr = table.getElementsByTagName("tr");

	document.getElementById(other_id).value = "";

	for (var i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[index];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		}
	}
}