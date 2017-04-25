export default extends Phaser.sprite {

	playerCreate (gravity, height) {
		// The player and its settings
	    player = game.add.sprite(475, height, 'ken');
	    player.scale.setTo(0.75, 0.75);

	    //  Player physics properties. Give the little guy a slight bounce.
	    game.physics.arcade.enable(player);
	    player.body.bounce.y = 0.0;
	    player.body.gravity.y = gravity;
	    player.body.collideWorldBounds = true;

	    //  Player animations
	    player.animations.add('left', [4, 3, 2, 1], 10, true);
	    player.animations.add('right', [7, 8, 9, 10], 10, true);
	    player.animations.add('jumpleft', [0], 10, true);
	    player.animations.add('jumpright', [11], 10, true);
	    player.animations.add('standleft', [5], 10, true);
	    player.animations.add('standright', [6], 10, true);
	}
}