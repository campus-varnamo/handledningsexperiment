import React from 'react';
import { createRoot } from 'react-dom/client';



class App extends React.Component {
	constructor(props) {
		super(props)
		const storedState = localStorage.getItem("state");
		
		if (storedState) {
			this.state = JSON.parse(storedState);
		}
		else {
			this.state = { value: 0 }
		}
	}
	
	onAddPresses = (placement, activated) => {
		if (activated) {
			this.updateState({
				value: this.state.value + placement
			})
		}
		else {
			this.updateState({
				value: this.state.value - placement
			})
		}
	}
	
	cleanState = () => {
		this.setState({ value: 0 }, () => localStorage.removeItem("state"));
	}
	
	updateState = (newState) => {
		this.setState(newState, () => localStorage.setItem("state", JSON.stringify(this.state)));
	}
	
	renderFacts() {
		if (this.state.value >= 15) {
			return (<Fact>15 är det största talet med 4:a bits</Fact>);
		}
		if (this.state.value >= 1) {
			return (<Fact>1 är den första siffran</Fact>);
		}
		return null;
	}
	
	render() {
		const myArray = [
			{ name: "Viktor", id: "1" },
			{ name: "Isac", id: "2" },
			{ name: "Thomas", id: "3" }
		]
		
		return (
			<>
				<h1>BYTE-ish</h1>
				<h2>Value: {this.state.value}</h2>
				<button onClick={this.cleanState}>Återställ</button>
				<BitButton placement={1} onClick={this.onAddPresses}/>
				<BitButton placement={2} onClick={this.onAddPresses}/>
				<BitButton placement={4} onClick={this.onAddPresses}/>
				<BitButton placement={8} onClick={this.onAddPresses}/>
				<BitButton placement={16} onClick={this.onAddPresses}/>
				<BitButton placement={32} onClick={this.onAddPresses}/>
				<BitButton placement={64} onClick={this.onAddPresses}/>
				<BitButton placement={128} onClick={this.onAddPresses}/>
				<hr/>
				{myArray.map(person => (
					<Fact key={person.id}>{person.name} är i Zoom</Fact>
				))}
				<hr/>
				<h2>Fakta om {this.state.value}:</h2>
				{this.renderFacts()}
			</>
		);
	}
}

function Fact(props) {
	return (
		<>
		<b>{props.children}</b>
		<br/>
		</>
	)
} 

class BitButton extends React.Component {
	state = { activated: false };
	
	constructor(props) {
		super(props)
		console.log("skapade placement "+props.placement);
	}
	
	componentDidMount() {
		console.log("har mountas");
	}
	
	componentDidUpdate() {
		console.log("har uppdaterat");
	}
	
	onClick() {
		this.setState({
			activated: !this.state.activated
		}, () => {
			this.props.onClick(this.props.placement, this.state.activated);
		});
	}
	
	render() {
		return (
			<button
				onClick={this.onClick.bind(this)}
			>
				Bit {this.props.placement}: {(this.state.activated) ? <span>På</span> : <span>Av</span>}
			</button>
		);
	}
}



const root = createRoot(document.getElementById("root"));
root.render(<App/>);