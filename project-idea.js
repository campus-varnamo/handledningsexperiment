
const pip = new Page({ title: "Min projektidé", text: "Min projektidé är att skapa en app med inventarier"  });



const gtap = new Page("Öppna min app", "Klicka <a href=\"app.html\">här </a> bah.");

class Page {
	constructor({ title, text }) {
		this.title = title;
		this.text = text;
	}
	
	renderLink(targetElement) {
		// appendChild
		// createElement
		// <a href="#">{this.title}</a> // onClick: this.renderPage()
	}
	renderPage() {
		// <div>{this.text}</div>
	}
}

class Header {
	render();
}