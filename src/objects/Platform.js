export default class Platform {
	
	constructor(game) {
		this.game = game;
		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;
	}

	add(x, y, asset, w, h) {
		let platform = this.platforms.create(x, y, asset);
		platform.scale.setTo(w, h);
		platform.body.immovable = true;
	}

}