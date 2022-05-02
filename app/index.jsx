import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

function HelloWorldComponent() {
	return (
		<>
		<h1>Movies:</h1>
		<ul>
		<li><Link to="/details/1">Die Hard</Link></li>
		<li><Link to="/details/2">Drive my car</Link></li>
		<li><Link to="/details/3">Star Trek</Link></li>
		</ul>
		</>
	);
}

// ------------------------------------------------------------------
function FilmDetails() {
	const params = useParams();
	
	useEffect(() => {
		console.log("GOT NEW PARAMS");
	}, [params])
	
	return (
		<>
		<FilmDetails filmId={params.filmId} />
			<Link to="/details/2">Gå till film 2</Link>
		</>
	);
}

class App extends React.Component {
	render() {
		return (
			<Router basename="" >
				<h1>Min sida: seed {Math.random()}</h1>
				<Routes>
					<Route path="/" element={<HelloWorldComponent/>} />
					<Route path="/details/:filmId" element={<FilmDetails/>} />
				</Routes>
			</Router>
		);
	}
}



const root = createRoot(document.getElementById("root"));
root.render(<App/>);