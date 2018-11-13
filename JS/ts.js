

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


	function randomInt(min, max){
		var length = max - min + 1;
		var rand = Math.floor(Math.random() * length) + min;
		return rand;
	}

	function mathOp(a, b, op){
		var res;

		if (op == "+") {
			res = a + b;
		} else if (op == "-"){
			res = a - b;
		} else if (op == "*"){
			res = a * b;
		}else if (op == "/") {
			if (b == "0"){
				res = false;
			} else{
				res = a / b;
			}
		} else{
			res = false;
		}

		return res;
	}

	function codeToOp(num){
		var res;

		if (num == 0){
			res = "+";
		} else if (num == 1) {
			res = "-";
		}else if (num == 2) {
			res = "*";
		}else if (num == 3) {
			res = "/";
		} else{
			res = " ";
		}
		return res;
	}

	var x, y, code, op, ans, res, ansStr;

	for (var i = 0; i < 10; i++){																						  

		x = randomInt(3, 15);																						  
		y = randomInt(3, 15);
		code = randomInt(0, 3);	
		op = codeToOp(code);																					 																										  //
		res = mathOp(x, y, op);																								  
																													  
		do{
			ansStr = prompt( x + '' + op + '' + y + " = ?" );
			ans = +ansStr;
		}
		while (ansStr == null || isNaN(ans));

		
		if (ans.toFixed(2) == res.toFixed(2)) {																								  
			console.log("Good");																							 
		} else{																											  
			console.log("Wrong, result = " + res.toFixed(2));																							  //
		}																												  
																														  
	}

	// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


