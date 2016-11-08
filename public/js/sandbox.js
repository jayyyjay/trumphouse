/*
*sandbox.js, code for Trumphouse game.
*/

console.log( 'game ready' );

function counter ( amount ) {

	if ( isNaN( amount ) == true ) {

		console.log("please type a number!" );

		return;
	}

	if ( amount < 1 ) {

		console.log("please type in a number greater thzan zero");

		return;

	} // end of negative number test

	console.log("you have a number (" + amount + "), counting..." );

	for ( var i = 0; i < amount; i++ ) {

		console.log( 'counted to:' + i );

	} // end of for loop

}
