import Preload from 'states/Preload';
import Main from 'states/Main';
import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		// super(500, 500, Phaser.AUTO, 'content', null);
		super(1000, 650, Phaser.AUTO, 'game', null);
		this.state.add('Preload', Preload, false);
		this.state.add('Main', Main, false);
		this.state.start('Preload');
	}

}

new Game();
