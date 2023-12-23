let myImage = document.querySelector("img");

myImage.onclick = function () {
		let mySrc = myImage.getAttribute("src");
		if (mySrc === "images/firefox-icon.png") {
				myImage.setAttribute("src", "images/firefox2.png");
		} else {
				myImage.setAttribute("src", "images/firefox-icon.png");
		}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick = function setUserName() {
		let myName = prompt("请输入你的名字。");
		if (!myName) {
				setUserName();
		} else {
				let storedName = localStorage.getItem("name");
				myHeading.textContent = "Mozilla 酷毙了，" + myName;
		}
};