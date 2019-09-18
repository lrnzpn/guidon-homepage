const menuToggle = () => {
	let m = document.getElementById("toggle");
	if (m.style.display === "none") {
		m.style.display = "flex";
	} else {
		m.style.display = "none";
	}
};
