import Player from '../objects/Player.js';
import Platform from '../objects/Platform.js';
import foo from '../objects/Platform.js';

export default class Level1 extends Phaser.State {

	create() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		this.game.add.image(0, 0, 'sky').scale.setTo(2, 2);

		// let platforms = this.game.add.group();
    	// platforms.enableBody = true;

        let platforms = new Platform(this.game);
        platforms.add(100, 100, 'ground', 2, 3);

    	// let ground = platforms.create(0, this.game.world.height - 64, 'ground');
    	// ground.scale.setTo(3, 2);
    	// ground.body.immovable = true;

    	this.player = new Player({
    		game: this.game,
    		x: 475,
    		y: 500,
    		asset: 'ken',
    		frame: 6
    	});
    	this.game.stage.addChild(this.player);

        // Platform.create();
	}


	update() {

	}
}

console.log('Loaded Level1...');