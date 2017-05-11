class Boot extends Phaser.State {

	preload() {

	}

	create() {
		this.game.state.start('Preload');
	}
}

console.log('Booting...');

export default Boot;