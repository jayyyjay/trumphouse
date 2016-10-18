/*
*app.js, code for Trumphouse game.
*Module pattern.
*MVC pattern.
*Fart in elevator pattern.
*/


console.log( 'in app.js' ); //debugging line

var game = ( function () {

	var trump = {}; // object

	var bricks = []; // array of objects

	var arena = {}; //object, entire game canvas 

	return {
		trump: trump,
		bricks: bricks,
		arena: arena
	};

} ) (); //the '()' causes this function to execute instantly
