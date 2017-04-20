class Main extends Phaser.State {
	create() {
		game.physics.startSystem(Phaser.Physics.Arcade);

		sky = game.add.sprite(0, 0, 'sky');
		sky.scale.setTo(2, 2);
	}

	update() {

	}
}