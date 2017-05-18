class Preload extends Phaser.State {

	preload() {
		this.game.load.image('black', 'assets/black 1000x650.png', 1000, 650);
	    this.game.load.image('sky', 'assets/sky.png');
	    this.game.load.image('shield', 'assets/wilber.png');
	    this.game.load.image('subrohunter', 'assets/Subro Hunter black 1680x585.png');
	    this.game.load.spritesheet('ken', 'assets/ken.png', 64, 64);
	    this.game.load.spritesheet('joe', 'assets/JoeBoss.png', 64, 64);
	    this.game.load.spritesheet('gavel', 'assets/gavel 18x27.png', 18, 27);
	    this.game.load.image('ground', 'assets/platform.png');
	    this.game.load.image('ground2', 'assets/platform2.png');
	    this.game.load.image('ground3', 'assets/platform3.png');
	    this.game.load.image('ground4', 'assets/platform4.png');
	    this.game.load.image('ground5', 'assets/platform5.png');
	    this.game.load.image('ground6', 'assets/platform6.png');
	    this.game.load.spritesheet('slime1', 'assets/car1 66x24.png', 66, 24);
	    this.game.load.spritesheet('slime2', 'assets/car2 68x21.png', 68, 21);
	    this.game.load.spritesheet('slime3', 'assets/car3 69x27.png', 69, 27);
	    this.game.load.spritesheet('slime4', 'assets/car4 67x21.png', 67, 21);
	    this.game.load.spritesheet('slime5', 'assets/car5 64x20.png', 64, 20);
	    this.game.load.spritesheet('money1', 'assets/money1 30x36.png');
	    this.game.load.spritesheet('money2', 'assets/money2 48x54.png');
	    this.game.load.spritesheet('health', 'assets/hearts.png', 152, 44);
	    this.game.load.spritesheet('bgimage1', 'assets/bgimage1.png', 300, 75);
	    this.game.load.spritesheet('bgimage2', 'assets/bgimage2.png', 250, 125);
	    this.game.load.spritesheet('bgimage3', 'assets/bgimage3.png', 280, 385);
	    this.game.load.image('space', 'assets/space.png', 230, 60);
	    this.game.load.image('arrows', 'assets/arrows.png', 135, 90);
	    this.game.load.audio('jump', 'assets/audio/Jump_03.ogg');
	    this.game.load.audio('shoot', 'assets/audio/Shoot_01.ogg');
	    this.game.load.audio('collect', 'assets/audio/Collect_Point_01.ogg');
	    this.game.load.audio('hitPlayer', 'assets/audio/Hit_03.ogg');
	    this.game.load.audio('hitCar', 'assets/audio/Hit_01.ogg');
	    this.game.load.audio('win', 'assets/audio/Jingle_Achievement_00.ogg');
	    this.game.load.audio('lose', 'assets/audio/Jingle_Lose_00.ogg');
	    this.game.load.audio('levelbgm', 'assets/audio/SubroHunterLevels.mp3');
	    this.game.load.audio('bossbgm', 'assets/audio/SubroHunterBoss.mp3');
	    this.game.load.audio('splashbgm', 'assets/audio/SubroHunterMain.mp3');
	    this.game.load.audio('credits', 'assets/audio/Credits.mp3');
	}


	create() {
		this.game.state.start("Level1");
	}
	
}

console.log('Assets loaded...');


export default Preload;