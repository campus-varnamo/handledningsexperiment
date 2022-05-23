

export async function getListOfMovies() {
	try {
		// const results = await fetch("/api/movies");
		// const movieList = await results.json();
		const movieList= [ { id:1, name: "Die Hard" }, { id: 2, name: "Lejonkungen" } ];
		throw new Error("asddasd");
		return [movieList, null]
	}
	catch(err) {
		return [null, err]
	}
}

export function getMovieDetails(movieId) {
	try {
		throw new Error("Not implemented");
	}
	catch(err) {
		return [null, err]
	}
}