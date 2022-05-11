import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

// LocalizedText.jsx ------------------------------------------------------------------

function Text(props) {
	const lang = props.lang;
	return (
		<span>{props[lang]}</span>
	)
}

// MainPage.jsx ------------------------------------------------------------------

function MainPage(props) {
	const [loading, setLoading] = useState(true);
	const lang = props.lang;
	const setLang = props.setLang;
	
	
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
			<h1><Text lang={lang} en="Hello World, Loading:" sv="Hej värden, laddar: "/>{String(loading)}, <Text lang={lang} en="Language: " sv="Språkval: "/>{lang}</h1>	
			<button onClick={() => setLoading(!loading)}>Change loading</button>
			<button onClick={() => setLang("sv")}><Text lang={lang} sv="Ändra språkval" en="Change langugage"/></button>
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
	const lang = props.lang;
	
	useEffect(() => {
		console.log("GOT NEW PARAMS");
		// const filmId = this.props.filmId
		// const film = await myBackendFunctionThatGetsAMovie(filmId);
	}, [params])
	
	return (
		<>
			<h1><Text lang={lang} sv="Detaljer om film med id:" en="Details for the movie with id:"/> {params.filmId}</h1>
			<Link to="/"><Text>Gå tillbaka</Text></Link>
		</>
	);
}

// App.jsx ------------------------------------------------------------

function App(props) {
	const [lang, setLang] = useState("en");
	
	return (
		<Router basename="" >
			<h1>Min sida: seed {Math.random()}</h1>
			<Routes>
				<Route path="/" element={<MainPage lang={lang} setLang={setLang} />} />
				<Route path="/details/:filmId" element={<FilmDetailsPage lang={lang}/>} />
			</Routes>
		</Router>
	);
}



const root = createRoot(document.getElementById("root"));
root.render(<App/>);