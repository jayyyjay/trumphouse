/*
*app.js, code for Trumphouse game.
*Module pattern.
*MVC pattern.
*Fart in elevator pattern.
*/


var game = ( function () {

	// MODEL STUFF

	var trump = {}; // object

	var bricks = []; // array of objects

	var arena = {}; // object, entire game canvas 

	var whiteHouse = {}; // the right side of the arena, "win zone"

	function initModel () {

		console.log('in initModel');

		//init trump

		trump.dom = document.getElementById('trump');
		trump.name = 'Donald Trump';

		//init arena

		arena.dom = document.getElementById('game-canvas');
		arena.name = 'game-canvas';

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

	// VIEW STUFF

	function initView () {
		console.log('in initView');
	};

	

	//CONTROLLER STUFF

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

		function gameLoop () {

		console.log('in gameLoop');

	};  // end of gameLoop

		// save as a process id for starting and stopping setInterval ()
		var animateId = null; // starts without animating

	function initController () {

		console.log('in initController');


		document.onkeydown = checkKey;
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
		start(); //start game
		

	};

	// Expose some properties (variable) and methods (functions)

	return {
		trump: trump,
		bricks: bricks,
		arena: arena, 
		whiteHouse: whiteHouse,
		init: init,
		start: start,
		stop: stop,
	};

} ) (); //the '()' causes this function to execute instantly


console.log( 'in app.js' ); //debugging line

