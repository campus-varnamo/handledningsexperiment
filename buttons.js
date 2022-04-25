//@ts-check

var nrOfButtons = 0;

export function createButton(title) {
	const button = {};
	button.title = title;
	button.id = "button" + (++nrOfButtons);
	
	button.onClick = () => {
		console.log("Knappen trycktes på", button);
	}
	
	return button;
}

export function renderButton(rootId, button) {
	
	const el = document.createElement("button");
	el.setAttribute("id", button.id);
	el.innerHTML = button.title;
	el.addEventListener("click", button.onClick);
	
	
	
	document.getElementById(rootId).appendChild(el);
}

export class DIV {
	
	constructor(title) {
		this.title = title;
		this.randomField = "123";
		
		this.el = document.createElement("div");
	}
	
	renderToRoot() {
		document.getElementById("body").appendChild(this.el);
	}
}

export class BTN {
	
	constructor(title) {
		this.title = title;
		this.randomField = "123";
		
		this.el = document.createElement("button");
		this.el.innerHTML = this.title;
		this.el.addEventListener("click", () => {
			var fakeThis = {
				title: "inte" + title,
				field: "123",
				el: this.el
			}
			console.log(fakeThis, this);
		});
	}
	
	renderTo(rootEl) {
		rootEl.el.appendChild(this.el);
	}
}










class Artwork {
	constructor(title, year, author) {
		this.title = title;
		this.year = year;
		this.author = author;
	}
}

class Room {
	constructor(roomData) {
		this.name = roomData.name;
		this.artworks = roomData.artworks;
		this.nrOfArtworksByKent = roomData.artworks.filter(artwork => (artwork.author == "kent"));
		// SKAPA EL här också
	}
	
	
}


