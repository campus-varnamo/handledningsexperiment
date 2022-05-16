import React, { useState, useEffect, useContext, createContext } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// ErrorView.js ------------------------------------------------------------------

export class ErrorView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			errCode: null,
			errMess: null
		}
	}
	
	componentDidCatch(err) {
		if (err.code && err.message) {			
			this.setState({ errCode: err.code, errMess: err.message });
		}
		else {
			this.setState({ errCode: "unknown", errMess: err.toString()});
		}
	}
	
	render() {
		/* if (this.state.errCode == "lang") {
			return (
				<>
					<p>{this.state.errMess}</p>
					<button onClick={() => alert("ändra språk")}>Reset language</button>
				</>
			)
		} */
		if (this.state.errCode) {
			return (
				<>
					<p>"Unrecoverable error occured"</p>
					<button onClick={() => window.location.reload()}>Reload page</button>
				</>
			)
		}
		
		return (
			<>
				{this.props.children}
			</>
		);	
	}
}


// LanguageContext.js ------------------------------------------------------------------

export const LanguageContext = createContext({ lang: "unknown", changeLang: undefined });

// Text.jsx ------------------------------------------------------------------

export function Text(props) {
	const langContext = useContext(LanguageContext);
	
	if (langContext.lang == "sv") {
		return (
			<span>{props.sv}</span>
		)
	}
	else if (langContext.lang == "en") {
		return (
			<span>{props.en}</span>
		)
	}
	throw {code: "lang", message: "Unknown language selected"};
}

// LanguageProvider.jsx ------------------------------------------------------------

export function LanguageProvider(props) {
	const [lang, setLang] = useState("en");
	
	const changeLang = () => {
		if (lang == "sv") {
			setLang("de");
		}
		else if (lang == "en") {
			setLang("sv");
		}
		else {
			setLang("sv");
		}
	}
	return (
		<LanguageContext.Provider value={{ lang: lang, changeLang: changeLang }}>
			{props.children}
		</LanguageContext.Provider>
	)
}

// LoremIpsum.jsx ------------------------------------------------------------------

export function LoremIpsum(props) {
	return (
		<p><Text
			en="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
			sv="Lorem Ipsum är en utfyllnadstext från tryck- och förlagsindustrin. Lorem ipsum har varit standard ända sedan 1500-talet, när en okänd boksättare tog att antal bokstäver och blandade dem för att göra ett provexemplar av en bok. Lorem ipsum har inte bara överlevt fem århundraden, utan även övergången till elektronisk typografi utan större förändringar. Det blev allmänt känt på 1960-talet i samband med lanseringen av Letraset-ark med avsnitt av Lorem Ipsum, och senare med mjukvaror som Aldus PageMaker."
		/></p>
	)
}

// MainPage.jsx ------------------------------------------------------------------

export function MainPage(props) {
	const [loading, setLoading] = useState(true);
	const langContext = useContext(LanguageContext);
	
	
	useEffect(() => {
		console.log("component DID MOUNT");
		return () => {
			console.log("component DID UNMOUNT");
		}
	}, []);
	
	useEffect(() => {
			if (loading) {
			console.log("component is loading");
			} else {
				console.log("component is NOT loading");
			}
		}, [loading]);
	
	return (
		<>
			<h1><Text en="Hello World, Loading:" sv="Hej värden, laddar: "/>{String(loading)}, <Text en="Language: " sv="Språkval: "/>{langContext.lang}</h1>
			<LoremIpsum/>
			<button onClick={() => setLoading(!loading)}>Change loading</button>
			<button onClick={() => langContext.changeLang()}><Text lang={langContext.lang} sv="Ändra språkval" en="Change langugage"/></button>
			<ul>
				<li><Link to="/details/1">Die Hard</Link></li>
				<li><Link to="/details/2">Drive my car</Link></li>
				<li><Link to="/details/3">Star Trek</Link></li>
			</ul>
		</>
	);
}

// FilmDetailsPage.jsx ------------------------------------------------------------------

export function FilmDetailsPage(props) {
	const params = useParams();
	
	useEffect(() => {
		console.log("GOT NEW PARAMS");
		// const filmId = this.props.filmId
		// const film = await myBackendFunctionThatGetsAMovie(filmId);
	}, [params])
	
	return (
		<>
			<h1><Text sv="Detaljer om film med id:" en="Details for the movie with id:"/> {params.filmId}</h1>
			<Link to="/"><Text>Gå tillbaka</Text></Link>
		</>
	);
}

// App.jsx ------------------------------------------------------------

export function App(props) {
	return (
		<LanguageProvider>
			<ErrorView>
				<Router basename="" >
					<h1><Text sv="Omrenderingsnummer:" en="Re-rendering-number"/>: {Math.random()}</h1>
						<Routes>
							<Route path="/" element={<MainPage/>} />
							<Route path="/details/:filmId" element={<FilmDetailsPage />} />
						</Routes>
				</Router>
			</ErrorView>
		</LanguageProvider>
	);
}



const root = createRoot(document.getElementById("root"));
root.render(<App myProps="yes" />);