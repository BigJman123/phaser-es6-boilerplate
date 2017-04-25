import Pretend from 'objects/Pretend';
import Player from 'objects/Player';
import Bullet from 'objects/Bullet';

class Main extends Phaser.State {

	create() {

		this.game.physics.startSystem(Phaser.Physics.Arcade);

		this.game.add.image(0, 0, 'sky').scale.setTo(2, 2);

		this.game.add.sprite(90, 75, 'subrohunter').scale.setTo(.5, .5);

		let platforms = this.game.add.group();
    	platforms.enableBody = true;

    	let ground = platforms.create(0, this.game.world.height - 64, 'ground');
    	ground.scale.setTo(3, 2);
    	ground.body.immovable = true;

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

	    let fadeOutBlack = () => {
        	this.game.add.tween(black).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 0, 0, false);
	    }

	    let fadeInWilberGroup = () => {
	        this.game.add.tween(text1).to({ alpha: 1}, 2500, Phaser.Easing.Linear.None, true, 0, 0, true);
	    }

	    let fadeInPresents = () => {
	        this.game.add.tween(text2).to({ alpha: 1}, 2500, Phaser.Easing.Linear.None, true, 0, 0, true);
	    }

	    let fadeOutSkip = () => {
	        this.game.add.tween(skip).to( { alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 0, 0, false); 
	    }

	    let fadeInStart = () => {
	        this.game.add.tween(start).to( { alpha: 1} , 0, Phaser.Easing.Linear.None, true, 0, -1, true);
	    }

	    let fadeInLeaderboard = () => {
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

    	Pretend.move('right', 1000, 1000);

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

	    // Player physics properties
	    this.game.physics.arcade.enable(player);
	    player.body.bounce.y = 0.0;
	    player.body.gravity.y = 775;
	    player.body.collideWorldBounds = true;

	    // Player animations
	    player.animations.add('left', [4, 3, 2, 1], 10, true);
	    player.animations.add('right', [7, 8, 9, 10], 10, true);
	    player.animations.add('jumpleft', [0], 10, true);
	    player.animations.add('jumpright', [11], 10, true);
	    player.animations.add('standleft', [5], 10, true);
	    player.animations.add('standright', [6], 10, true);

	    let bullets = this.game.add.group();
	    bullets.enableBody = true;

	    let slimes = this.game.add.group();
	    slimes.enableBody = true;

	    let slime1 = slimes.create(-100, 574, 'slime1');
	    slime1.anchor.set(.5, .5);
	    slime1.scale.x *= -1;

	    let Movement = function() {
	        Pretend.move('right', 0, 2100);
	        Pretend.move('up', 2100, 500);
	        Pretend.fire(3000);
	        Pretend.move('up', 4500, 21000);
	        Pretend.move('right', 5400, 2250);
	        Pretend.move('left', 7600, 4300);
	        Pretend.move('right', 10000, 6500);
	        Pretend.move('left', 16200, 4250);
	        Pretend.move('right', 19000, 3575);
    	}

    	let slimeMove = function() {
    		if(animationRunning === false) {
    			animationRunning = true;
    			tweenRight = game.add.tween(slimes).to({x: 1000}, 4300, Phaser.Easing.Linear.None, true);
    		}
    	}

    	// let startGame = function(game) {
    	// 	setTimeout(() => {window.location = 'controls.html'}, 500);
    	// }

    	// let checkScore = function() {
    	// 	setTimeout(() => {window.location = 'scoreboard.html'}, 500);
    	// }



	    let spaceBar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	    spaceBar.onDown.add(skipIntro, this);
	    // let l = this.game.input.keyboard.addKey(Phaser.Keyboard.L);
	    // l.onDown.add(checkScore, this);
	    let cursors = this.game.input.keyboard.createCursorKeys();
	}


	update() {
		let hitPlatform = this.game.physics.arcade.collide(player, platforms);
	}
}

export default Main;