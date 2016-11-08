/*
*app.js, code for Trumphouse game.
*Module pattern.
*MVC pattern.
*Fart in elevator pattern.
*NOTE: this object assumes that the 'animate' library has already been loaded!
*/



var game = ( function () {

	// MODEL STUFF
	var animate = null; //default is nothing.

	var trump = {}; // object

	var bricks = []; // array of objects

	var arena = {}; // object, entire game canvas 

	var whiteHouse = {}; // the right side of the arena, "win zone"

	function initModel () {

		console.log('in initModel');

		//init trump

		trump.dom = document.getElementById('trump');
		trump.name = trump.dom.id;
		trump.dx = 1; // speed of movement along x axis
		trump.dy = 1; // speed of movement along y axis

		//init arena

		arena.dom = document.getElementById('game-canvas');
		arena.name = arena.dom.id;

		//init bricks

		var list = document.getElementsByClassName('bricks');

		//make the brick objects
		// the DOM elements we got from getElementsByClassName()
		for ( var i = 0; i <list.length; i ++) {

			bricks.push( 

				{
					dom: list[i],

					name: list[i].id

				}

			); // end of push
		}
	};

	/**
	*see if trump has entered white house zone
	*if so stop game and eclare win for trump
	*otherwise keep going
	*/


	// VIEW STUFF

	//make local refertence to the animate library


	function initView () {

		console.log('in initView');

		if ( window.animate ) {

			animate = window.animate;

	} else {

		console.error('animate library not present. game cannot run');
	}

	}; //end of initView

	

	//CONTROLLER STUFF

	function checkForWin () {

		console.log('in checkForWin()');

		return false;
	};

	//stack overflow
	//figure out which key the user pressed

	function checkKey(e) {
			e = e || window.event;

			if (e.keyCode == '38') {
				//up arrorw
				console.log('up arrow pressed');
			}
			else if (e.keyCode == '40') {
				//down arrow 
				console.log('down arrow pressed');
			}
			else if (e.keyCode == '37') {
				//left arrow 
				console.log('left arrow pressed');
			}
			else if (e.keyCode == '39') {
				//right arrow 
				console.log('right arrow pressed');
			}
		} //end of checkKey


		/**
		*TODO check trump brick collision
		*TODO animate (move) trump onscreen
		*TODO destro brick on collision with trump
		*TODO detect if trump has broken through and wins
		*TODO bounce trump if trump runs into a wall or a brick
		*/


	function gameLoop () {

		//console.log('in gameLoop');

		//console.log ( 'game.animate.move:' + game.animate.move ) 

		//trump is gameObj

		game.animate.move( trump );

		if ( checkForWin() === true ) {

			stop();

			alert( 'Trump has won the White Hosue' );
		}

	

		if ( game.animate.checkForCollision( trump, arena ) === true) {

			game.animate.bounce( trump );

		}

		for ( var i = 0; i < bricks.length; i++ ) {


			if ( game.animate.checkForCollision( trump, bricks[i] ) === true ) {

				game.animate.destroy( bricks[i] );

				game.animate.bounce( trump );

		}

	}

	};  // end of gameLoop



		// save as a process id for starting and stopping setInterval ()
		var animateId = null; // starts without animating

	function initController () {

		console.log('in initController');


		document.onkeydown = checkKey;

		var startButton = document.getElementById( 'start-game' );

		startButton.addEventListener( 'click', function ( e ) {

			console.log('clicked start button');
			start();
			e.preventDefault(); // prevent default <button> behavior
			e.stopPropagation(); // dont send 'click' elements to other HTML elements

		}, false );


		var stopButton = document.getElementById( 'stop-game' );

		stopButton.addEventListener( 'click', function ( e ) {

			console.log('clicked stop button');
			stop();
			e.preventDefault();
			e.stopPropagation();


		}, false );


	}; // end of initi controller 


	// MAIN PROGRAM

	function start () {

		if ( animateId === null) {


		animateId = setInterval(

			function () { // a "closure"

				gameLoop (); // run 'gameLoop()' in this game

			}, 100 // every 1/10 of second (100 millisecond)
		
	); // end of set interval

		console.log('starting game...');

	}

	}; // end of start

	function stop () {

		clearInterval(animateId);

		animateId = null; //set to nothing

		console.log('stopping game');
	}; // end of stop


		function isStarted () {
			if ( animateId !== null ) {
				return true;
			} else {
				return false;
			}

		}; //end of isStarted

	/*
	* Initialize model with DOM elements'
	* Initialize Controller with keyboard commands.
	*/

	function init () {
		console.log('in init');
		initModel();
		initView();
		initController();
		//start(); //start game
		

	};

	//need to run init for the ui to work

	init();

	// Expose some properties (variable) and methods (functions)

	return {
		animate: animate,
		trump: trump,
		bricks: bricks,
		arena: arena, 
		whiteHouse: whiteHouse,
		init: init,
		start: start,
		stop: stop
	};

} ) (); //the '()' causes this function to execute instantly


console.log( 'in app.js' ); //debugging line

