var animate = (function () {

	/*
	*animation library for trumphouse
	*/

	function init () {

		console.log( 'in animate.init()' );

	};

	/**
	* move a Dom object
	*/

	function move ( gameObj ) {

		console.log( 'moving:' + gameObj.name );

	};

	/**
	* check for collisions between Dom objects
	*/

	function checkForCollision ( gameObj1, gameObj2 ) {

		console.log( 'checking for collision:' + gameObj1.name + ' with ' + gameObj2.name );

		return false;

	};

	/**
	* change direction of the movement of a Dom object
	*/

	function bounce ( gameObj ) {

		console.log( ' bouncing:' + gameObj.name );

	};

	/**
	* when a destroyer object hits a regular object
	*/

	function destroy ( gameObj1 ) {

		console.log( 'destroying with:' + gameObj1.name + ' with ' + gameObj2.name );

	};

	return {

		init: init,
		move: move,
		checkForCollision: checkForCollision,
		bounce: bounce,
		destroy: destroy

	};
	
} ) ();