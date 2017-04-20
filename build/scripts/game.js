(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Preload = require('states/Preload');

var _Preload2 = _interopRequireDefault(_Preload);

var _Main = require('states/Main');

var _Main2 = _interopRequireDefault(_Main);

var _GameState = require('states/GameState');

var _GameState2 = _interopRequireDefault(_GameState);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Game = function (_Phaser$Game) {
	_inherits(Game, _Phaser$Game);

	function Game() {
		_classCallCheck(this, Game);

		var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 1000, 650, Phaser.AUTO, 'game', null));
		// super(500, 500, Phaser.AUTO, 'content', null);


		_this.state.add('Preload', _Preload2.default, false);
		_this.state.add('Main', _Main2.default, false);
		_this.state.start('Preload');
		return _this;
	}

	return Game;
}(Phaser.Game);

new Game();

},{"states/GameState":3,"states/Main":4,"states/Preload":5}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var RainbowText = function (_Phaser$Text) {
	_inherits(RainbowText, _Phaser$Text);

	function RainbowText(game, x, y, text) {
		_classCallCheck(this, RainbowText);

		var _this = _possibleConstructorReturn(this, (RainbowText.__proto__ || Object.getPrototypeOf(RainbowText)).call(this, game, x, y, text, { font: "45px Arial", fill: "#ff0044", align: "center" }));

		_this._speed = 125; //ms
		_this._colorIndex = 0;
		_this._colors = ['#ee4035', '#f37736', '#fdf498', '#7bc043', '#0392cf'];

		_this.colorize();
		_this.startTimer();

		_this.game.stage.addChild(_this);

		return _this;
	}

	_createClass(RainbowText, [{
		key: "startTimer",
		value: function startTimer() {
			this.game.time.events.loop(this._speed, this.colorize, this).timer.start();
		}
	}, {
		key: "colorize",
		value: function colorize() {

			for (var i = 0; i < this.text.length; i++) {

				if (this._colorIndex === this._colors.length) {
					this._colorIndex = 0;
				}

				this.addColor(this._colors[this._colorIndex], i);
				this._colorIndex++;
			}
		}
	}]);

	return RainbowText;
}(Phaser.Text);

exports.default = RainbowText;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

var _RainbowText = require("objects/RainbowText");

var _RainbowText2 = _interopRequireDefault(_RainbowText);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var GameState = function (_Phaser$State) {
	_inherits(GameState, _Phaser$State);

	function GameState() {
		_classCallCheck(this, GameState);

		return _possibleConstructorReturn(this, (GameState.__proto__ || Object.getPrototypeOf(GameState)).apply(this, arguments));
	}

	_createClass(GameState, [{
		key: "create",
		value: function create() {
			var center = { x: this.game.world.centerX, y: this.game.world.centerY };
			var text = new _RainbowText2.default(this.game, center.x, center.y, "- phaser -\nwith a sprinkle of\nES6 dust!");
			text.anchor.set(0.5);
		}
	}]);

	return GameState;
}(Phaser.State);

exports.default = GameState;

},{"objects/RainbowText":2}],4:[function(require,module,exports){
'use strict';

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
        }
    }return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Main = function (_Phaser$State) {
    _inherits(Main, _Phaser$State);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'create',
        value: function create() {
            //  We're going to be using physics, so enable the Arcade Physics system
            game.physics.startSystem(Phaser.Physics.ARCADE);

            //  A simple background for our game
            sky = game.add.sprite(0, 0, 'sky');
            sky.scale.setTo(2, 2);

            hunter = game.add.sprite(90, 75, 'subrohunter');
            hunter.scale.setTo(.5, .5);

            //  The platforms group contains the ground and ledges then we enable physics on platforms
            platforms = game.add.group();
            platforms.enableBody = true;

            // Here we create the ground and scale it to fit the width of the game
            var ground = platforms.create(0, game.world.height - 64, 'ground');
            ground.scale.setTo(3, 2);

            //  This stops it from falling away when you jump on it
            ground.body.immovable = true;

            // The player and its settings
            player = game.add.sprite(0, 540, 'ken');
            player.scale.setTo(0.75, 0.75);

            black = game.add.sprite(0, 0, 'black');
            black.alpha = 1;

            text1 = game.add.text(315, 300, 'Wilber Group', { fontSize: '30px', fill: '#ffffff', align: 'center', font: 'Press Start 2P' });
            text1.alpha = 0;

            text2 = game.add.text(390, 300, 'Presents', { fontSize: '30px', fill: '#ffffff', align: 'center', font: 'Press Start 2P' });
            text2.alpha = 0;

            skip = game.add.text(810, 615, 'space bar to skip', { fontSize: '10px', fill: '#ffffff', font: 'Press Start 2P' });
            skip.alpha = .2;

            start = game.add.text(300, 390, 'press the space bar to start', { fontSize: '15px', fill: '#ffffff', font: 'Press Start 2P' });
            start.alpha = 0;

            board = game.add.text(275, 425, 'press L to check the leaderboard', { fontSize: '15px', fill: '#ffffff', font: 'Press Start 2P' });
            board.alpha = 0;

            function fadeOutBlack() {
                game.add.tween(black).to({ alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 0, 0, false);
            }

            function fadeInWilberGroup() {
                game.add.tween(text1).to({ alpha: 1 }, 2500, Phaser.Easing.Linear.None, true, 0, 0, true);
            }

            function fadeInPresents() {
                game.add.tween(text2).to({ alpha: 1 }, 2500, Phaser.Easing.Linear.None, true, 0, 0, true);
            }

            function fadeOutSkip() {
                game.add.tween(skip).to({ alpha: 0 }, 0, Phaser.Easing.Linear.None, true, 0, 0, false);
            }

            function fadeInStart() {
                game.add.tween(start).to({ alpha: 1 }, 0, Phaser.Easing.Linear.None, true, 0, -1, true);
            }

            function fadeInLeaderboard() {
                game.add.tween(board).to({ alpha: 1 }, 0, Phaser.Easing.Linear.None, true, 0, 0, false);
            }

            function toControls() {
                window.location = 'controls.html';
            }

            function spacebarToControls() {
                spaceBar.onDown.add(toControls, this);
            }

            setTimeout(fadeOutSkip, 11000);
            setTimeout(fadeInStart, 13500);
            setTimeout(fadeInLeaderboard, 13500);

            var skipIntroCredits = [setTimeout(fadeInWilberGroup, 500), setTimeout(fadeInPresents, 5950), setTimeout(fadeOutSkip, 11000), setTimeout(fadeOutBlack, 12866), setTimeout(Movement, 13000), setTimeout(slimeMove, 13000), setTimeout(spacebarToControls, 13000)];

            var clearAllIntervals = function clearAllIntervals() {
                skipIntroCredits.forEach(function (item) {
                    clearInterval(item);
                });
            };

            // when they skip the intro (with spacebar)
            var skipIntro = function skipIntro() {
                clearAllIntervals();
                black.destroy();
                text1.destroy();
                text2.destroy();
                skip.destroy();

                fadeInStart();
                fadeInLeaderboard();

                Movement();
                slimeMove();
                spacebarToControls();

                // sky = game.add.sprite(0, 0, 'sky');
                // sky.scale.setTo(2, 2);

                // hunter = game.add.sprite(90, 75, 'subrohunter');
                // hunter.scale.setTo(.5, .5);

                // platforms = game.add.group();
                // platforms.enableBody = true;

                // // Here we create the ground and scale it to fit the width of the game
                // var ground = platforms.create(0, game.world.height - 64, 'ground');
                // ground.scale.setTo(3, 2);

                // //  This stops it from falling away when you jump on it
                // ground.body.immovable = true;

                // // The player and its settings
                // // player = game.add.sprite(0, 540, 'ken');
                // // player.scale.setTo(0.75, 0.75);

                // start = game.add.text(300, 390, 'press the space bar to start', { fontSize: '15px', fill: '#ffffff', font: 'Press Start 2P'});
                // start.alpha = 0;

                // board = game.add.text(275, 425, 'press L to check the leaderboard', { fontSize: '15px', fill: '#ffffff', font: 'Press Start 2P'});
                // board.alpha = 0;

                // function fadeInStart() {
                // game.add.tween(start).to( { alpha: 1} , 0, Phaser.Easing.Linear.None, true, 0, -1, true);
                // }

                // function fadeInLeaderboard() {
                // game.add.tween(board).to({ alpha: 1}, 0, Phaser.Easing.Linear.None, true, 0, 0, false);
                // }

                // setTimeout(fadeInStart, 1);
                // setTimeout(fadeInLeaderboard, 1);

                // spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
                // spaceBar.onDown.add(toControls, this);

                // set up view to be what you want here
                // change action of spacebar to go  to level 1
                // Movement();
            };

            //  Player physics properties. Give the little guy a slight bounce.
            game.physics.arcade.enable(player);
            player.body.bounce.y = 0.0;
            player.body.gravity.y = 775;
            player.body.collideWorldBounds = true;

            //  Our three animations, walking left ,right and jumping.
            player.animations.add('left', [4, 3, 2, 1], 10, true);
            player.animations.add('right', [7, 8, 9, 10], 10, true);
            player.animations.add('jumpleft', [0], 10, true);
            player.animations.add('jumpright', [11], 10, true);
            player.animations.add('standleft', [5], 10, true);
            player.animations.add('standright', [6], 10, true);

            // makes a stars group and enables physics
            stars = game.add.group();
            stars.enableBody = true;

            // the bullet group contains all bullets and enables physics on them.
            bullets = game.add.group();
            bullets.enableBody = true;

            // the slime group contains all slimes and enables physics on them. The for loop adds slimes to the game.
            slimes = game.add.group();
            slimes.enableBody = true;

            slime1 = slimes.create(-100, 574, 'slime1');
            slime1.anchor.setTo(.5, .5);
            slime1.scale.x *= -1;

            // controls the movement of the player and is being called on line 226 in a setTimeout
            function Movement() {
                pretend.move('right', 0, 2100);
                pretend.move('up', 2100, 500);
                pretend.fire(3000);
                pretend.move('up', 4500, 21000);
                pretend.move('right', 5400, 2250);
                pretend.move('left', 7600, 4300);
                pretend.move('right', 10000, 6500);
                pretend.move('left', 16200, 4250);
                pretend.move('right', 19000, 3575);
            }

            // controls the movement of the car and is being called on line 227 in a setTimeout
            function slimeMove() {
                if (animationRunning === false) {
                    animationRunning = true;
                    tweenRight = game.add.tween(slimes).to({ x: 1000 }, 4300, Phaser.Easing.Linear.None, true);
                }
            }

            function startGame(game) {
                setTimeout(function () {
                    window.location = 'controls.html';
                }, 500);
            }

            function checkScore() {
                setTimeout(function () {
                    window.location = 'scoreboard.html';
                }, 500);
            }

            // this makes the spacebar the key that shoots bullets
            spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
            spaceBar.onDown.add(skipIntro, this);
            l = game.input.keyboard.addKey(Phaser.Keyboard.L);
            l.onDown.add(checkScore, this);
            cursors = game.input.keyboard.createCursorKeys();

            SoundFX.bindAudio();
            SoundFX.splashBG();
        }
    }, {
        key: 'update',
        value: function update() {}
    }]);

    return Main;
}(Phaser.State);

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
}();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Preload = function (_Phaser$State) {
	_inherits(Preload, _Phaser$State);

	function Preload() {
		_classCallCheck(this, Preload);

		return _possibleConstructorReturn(this, (Preload.__proto__ || Object.getPrototypeOf(Preload)).apply(this, arguments));
	}

	_createClass(Preload, [{
		key: 'create',
		value: function create() {
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
	}]);

	return Preload;
}(Phaser.State);

function update() {
	this.game.state.start("Main");
}

exports.default = Preload;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
