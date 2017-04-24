class Main extends Phaser.State {

	create() {


		this.game.physics.startSystem(Phaser.Physics.Arcade);

		this.game.add.image(0, 0, 'sky').scale.setTo(2, 2);

		this.game.add.sprite(90, 75, 'subrohunter').scale.setTo(.5, .5);

		this.platforms = this.game.add.group();
    	this.platforms.enableBody = true;

    	this.ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
    	this.ground.scale.setTo(3, 2);
    	this.ground.body.immovable = true;

    	let player = this.game.add.sprite(0, 540, 'ken');
    	player.scale.setTo(0.75, 0.75);

    	let black = this.game.add.sprite(0, 0, 'black');
    	black.alpha = 1;

		let text1 = this.game.add.text(315, 300, 'Wilber Group', { fontSize: '30px', fill: '#ffffff', align: 'center', font: 'Press Start 2P'});
    	text1.alpha = 0;

		let text2 = this.game.add.text(390, 300, 'Presents', { fontSize: '30px', fill: '#ffffff', align: 'center', font: 'Press Start 2P'});
	    text2.alpha = 0;

		let skip = this.game.add.text(810, 615, 'space bar to skip', { fontSize: '10px', fill: '#ffffff', font: 'Press Start 2P'});
	    skip.alpha = .2;

		let start = this.game.add.text(300, 390, 'press the space bar to start', { fontSize: '15px', fill: '#ffffff', font: 'Press Start 2P'});
	    start.alpha = 0;

		let board = this.game.add.text(275, 425, 'press L to check the leaderboard', { fontSize: '15px', fill: '#ffffff', font: 'Press Start 2P'});
	    board.alpha = 0;

	    function fadeOutBlack() {
        	this.game.add.tween(black).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 0, 0, false);
	    }

	    function fadeInWilberGroup() {
	        this.game.add.tween(text1).to({ alpha: 1}, 2500, Phaser.Easing.Linear.None, true, 0, 0, true);
	    }

	    function fadeInPresents() {
	        this.game.add.tween(text2).to({ alpha: 1}, 2500, Phaser.Easing.Linear.None, true, 0, 0, true);
	    }

	    function fadeOutSkip() {
	        this.game.add.tween(skip).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 0, 0, false); 
	    }

	    function fadeInStart() {
	        this.game.add.tween(start).to( { alpha: 1} , 0, Phaser.Easing.Linear.None, true, 0, -1, true);
	    }

	    function fadeInLeaderboard() {
	        this.game.add.tween(board).to({ alpha: 1}, 0, Phaser.Easing.Linear.None, true, 0, 0, false);
	    }
	    
	    // function toControls() {
	    //     window.location = 'controls.html';
	    // }   

	    // function spacebarToControls() {
	    //     spaceBar.onDown.add(toControls, this);
	    // }

	    setTimeout(fadeOutSkip, 11000);
    	setTimeout(fadeInStart, 13500);
    	setTimeout(fadeInLeaderboard, 13500);

    	var skipIntroCredits = [
	        setTimeout(fadeInWilberGroup, 500),
	        setTimeout(fadeInPresents, 5950),
	        setTimeout(fadeOutSkip, 11000),
	        setTimeout(fadeOutBlack, 12866),
	        // setTimeout(Movement, 13000),
	        // setTimeout(slimeMove, 13000),
	        // setTimeout(spacebarToControls, 13000)
    	];

    	let clearAllIntervals = function() {
    		skipIntroCredits.forEach(function(item) {
    			clearInterval(item);
    		});
    	}
	 
		let skipIntro = function() {
	        clearAllIntervals();
	        black.destroy();
	        text1.destroy();
	        text2.destroy();
	        skip.destroy();

	        fadeInStart();
	        fadeInLeaderboard();

	        // Movement();
	        // slimeMove();
	        // spacebarToControls();

	    }


	    let spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    spaceBar.onDown.add(skipIntro, this);
	    // let l = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
	    // l.onDown.add(checkScore, this);
	    let cursors = this.game.input.keyboard.createCursorKeys();

	}


	update() {

	}
}

export default Main;