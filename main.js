"use strict";
const searchInput = document.querySelector("#search");
const listElements = document.querySelectorAll("ul li");

// chooseDrink takes node list of ul elements 
const chooseDrink = e => {
	for (let beverage of listElements) {
		if (!beverage.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
			beverage.style.display = "none";
		} else {
			beverage.style.display = "block";
		}
	}
};

searchInput.addEventListener("keyup", chooseDrink);
