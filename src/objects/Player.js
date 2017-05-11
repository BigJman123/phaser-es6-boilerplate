export default class Player extends Phaser.Sprite{

		constructor({ game, x, y, asset, frame }) {
		// The player and its settings
			super(game, x, y, asset);

			this.game = game;

			this.scale.setTo(0.75, 0.75);

			this.game.physics.arcade.enable(this);
		}
	    
    	// let player = game.add.sprite(475, 400, 'ken');
    	// player.body.gravity.y = 50;
	    // player.scale.setTo(0.75, 0.75);

	    //  Player physics properties. Give the little guy a slight bounce.
	    // game.physics.arcade.enable(player);
	    // player.body.bounce.y = 0.0;
	    // player.body.collideWorldBounds = true;

	    //  Player animations
	    player.animations.add('left', [4, 3, 2, 1], 10, true);
	    player.animations.add('right', [7, 8, 9, 10], 10, true);
	    player.animations.add('jumpleft', [0], 10, true);
	    player.animations.add('jumpright', [11], 10, true);
	    player.animations.add('standleft', [5], 10, true);
	    player.animations.add('standright', [6], 10, true);

	    // return player;
}