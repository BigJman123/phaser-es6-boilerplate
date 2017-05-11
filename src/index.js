import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Main from 'states/Main';
import GameState from 'states/GameState';

class Game extends Phaser.Game {

	constructor() {
		super(1000, 650, Phaser.AUTO, 'game', null);
		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Main', Main, false);
		this.state.add('GameState', GameState, false);
		this.state.start('Boot');
	}

}

const game = new Game();