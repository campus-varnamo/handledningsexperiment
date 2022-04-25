import { testNumber, testObj } from './module2.js';

export function foobar() {
	console.log("in foobar");
}

export function log2console() {
	console.log("main", testNumber, testObj.num);
}



// index.html -> main.js -> module1.js -> module2.js

// index.html -> main.js -> module1.js -> main.js
//                       -> module2.js


// page.js
// pages/home.js  <- ../page.js
// pages/about.js <- ../page.js
// pages/app.js   <- ../page.js
// pagesOrchestrator.js <- pages/home.js
//                      <- pages/about.js
//                      <- pages/app.js
// index.js <- pagesOrchestrator.js 


// using MyApp.Models.Repositories;

// startup.cs <- ...all repos
// startup.cs <- ...dbcontext
// startup.cs <- ...controllers