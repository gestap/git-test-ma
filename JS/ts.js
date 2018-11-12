

	// // // // // // // // // // // // // // // // // // //  Пошук серднього між 3-ма числами // // // // // // // // // // // 

	var a = +prompt("Add number 1" , " ");																					// 
	var b = +prompt("Add number 2" , " ");																					// 
	var c = +prompt("Add number 3" , " ");																					// 
	var res;																												// 
																															// 
	while( ( isNaN(a) || isNaN(b) || isNaN(c) ) || ( a == b || a == c || b == c ) ){										// 
		if ( isNaN(a) || (a == b || a == c) ) { 																			// 
			a = +prompt("Incorect number 1" , " ");																			// 
		} else if ( isNaN(b) || (b == c) ) {																				// 
			b = +prompt("Incorect number 2" , " ");																			// 
		} else if ( isNaN(c) ) {																							// 
			c = +prompt("Incorect number 3" , " ");																			// 
		}																													// 
	}																														// 

	if ( (a < b) && (a > c) || (a > c) && (a < b) ){																		// 
		res = a;																											// 
		console.log(res);																									// 
	} else if ( (b < a) && (b > c) || (b > a) && (b < c) ){																	// 
		res = b;																											// 
		console.log (res);																									// 
	} else{																													// 
		res = c;																											// 
		console.log(res);																									// 
	}																														// 
	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //





	// // // // // // // // // // // // // // // // // // //  Математичний тренажер // // // // // // // // // // // // // //

	for (var i =0; i < 10; i++){																						  //

		var x = Math.floor(Math.random() * 11);																			  //
		var y = Math.floor(Math.random() * 11);																			  //
		var ans;																										  //
		var res = x * y;																								  //
		ans = +prompt( x + " * " + y + " = ?" );																		  //

		while( isNaN(res) || isNaN(res) ){																				  //
			ans = +prompt( x + " * " + y + " = ?" );																	  //
		}																												  //

		if (ans == res) {																								  //
			console.log(true);																							  //
		} else{																											  //
			console.log(false);																							  //
		}																												  //
																														  //
	}																													  //

	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //



