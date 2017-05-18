export default class Player extends Phaser.Sprite{

		constructor({ game, x, y, asset, frame }) {
		// The player and its settings
			super(game, x, y, asset, frame);

			this.game = game;

			this.scale.setTo(0.75, 0.75);

			this.game.physics.arcade.enable(this);

		    this.body.bounce.y = 0.0;
		    this.body.collideWorldBounds = true;

		    
		    // this.animations.add('left', [4, 3, 2, 1], 10, true);
		    // this.animations.add('right', [7, 8, 9, 10], 10, true);
		    // this.animations.add('jumpleft', [0], 10, true);
		    // this.animations.add('jumpright', [11], 10, true);
		    // this.animations.add('standleft', [5], 10, true);
		    // this.animations.add('standright', [6], 10, true);
		}

		

		update() {
		// 	if (this.cursors.left.isDown) {
		// 	direction = -1;
		// }
		// else if (this.cursors.right.isDown) {
		// 	direction = 1;
		// }
		}
	    
}