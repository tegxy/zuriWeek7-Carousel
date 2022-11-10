let slider = document.querySelector(".pic");

let images = [
	"apic.jpg",
	"bpic.jpg",
	"cpic.jpg",
	"dpic.jpg",
	"epic.jpg",
	"fpic.jpg",
];

let x = 0; // current image

document.getElementById("prev-btn").onclick = function prev() {
	if (x <= 0) x = images.length;
	x--;
	return addImg();
};

document.getElementById("next-btn").onclick = function next() {
	if (x >= images.length - 1) x = -1;
	x++;
	return addImg();
};

function addImg() {
	return slider.setAttribute("src", "images/" + images[x]);
}
