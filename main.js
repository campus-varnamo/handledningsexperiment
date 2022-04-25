import { global, testNumber, testObj } from './module2.js';
import { foobar } from './module1.js';

export function main() {
	try {
		testObj.num += 1;
		
	} catch(err) { console.error("var", err)}
	try {
		testObj = { num: 2 };
	} catch(err) { console.error("obj", err)}
}

// function access() {
// 		
// 		var myHeaders = new Headers();
// 		myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
// 
// 		var urlencoded = new URLSearchParams();
// 		urlencoded.append("grant_type", "client_credentials");
// 		urlencoded.append("client_id", "viktorhive6942");
// 		urlencoded.append("client_secret", "4f8c4d-77cd3d-240569-85e6a5-d79254");
// 
// 		var requestOptions = {
// 			method: 'POST',
// 			headers: myHeaders,
// 			body: urlencoded,
// 			redirect: 'follow'
// 		};
// 
// 		fetch("https://svenskahelgdagar.info/v2/access_token", requestOptions)
// 			.then(response => response.json())
// 			.then(result => next(result))
// 			.catch(error => console.log('error', error));
// 	}
// 
// function next(result) {
// 	var myHeaders = new Headers();
// 	//myHeaders.append("Authorization", "Bearer "+result.access_token);
// 	//myHeaders.append("Content-Type", "text/plain");
// 	//myHeaders.append("Accept", "*/*");
// 	//myHeaders.append("Referrer-Policy", "origin");
// 	var urlencoded = new URLSearchParams();
// 
// 	var requestOptions = {
// 		headers: myHeaders,
// 		redirect: 'follow'
// 	};
// 
// 	fetch("https://svenskahelgdagar.info/v2/year/2022?access_token="+result.access_token, requestOptions)
// 		.then(response => response.text())
// 		.then(result => console.log(result))
// 		.catch(error => console.log('error', error));
// }
// access();