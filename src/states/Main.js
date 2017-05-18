// import Pretend from 'objects/Pretend';
// import Game from 'index.js';
import Player from 'objects/Player';
// import Bullet from 'objects/Bullet';

export default class Main extends Phaser.State {

	create() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.game.add.image(0, 0, 'sky').scale.setTo(2, 2);

		this.game.add.sprite(90, 75, 'subrohunter').scale.setTo(.5, .5);

		let platforms = this.game.add.group();
    	platforms.enableBody = true;

    	let ground = platforms.create(0, this.game.world.height - 64, 'ground');
    	ground.scale.setTo(3, 2);
    	ground.body.immovable = true;

    	this.player = new Player({
    		game: this.game,
    		x: 475,
    		y: 500,
    		asset: 'ken',
    		frame: 6
    	});
    	this.game.stage.addChild(this.player);

	}


	update() {
		// let hitPlatform = this.game.physics.arcade.collide(player, platforms);
	}
}

// console.log('Loaded Main...');