(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _Boot = require('states/Boot');

var _Boot2 = _interopRequireDefault(_Boot);

var _Preload = require('states/Preload');

var _Preload2 = _interopRequireDefault(_Preload);

var _Main = require('states/Main');

var _Main2 = _interopRequireDefault(_Main);

var _Level = require('states/Level1');

var _Level2 = _interopRequireDefault(_Level);

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

		_this.state.add('Boot', _Boot2.default, false);
		_this.state.add('Preload', _Preload2.default, false);
		_this.state.add('Main', _Main2.default, false);
		_this.state.add('Level1', _Level2.default, false);
		_this.state.add('GameState', _GameState2.default, false);
		_this.state.start('Boot');
		return _this;
	}

	return Game;
}(Phaser.Game);

var game = new Game();

},{"states/Boot":5,"states/GameState":6,"states/Level1":7,"states/Main":8,"states/Preload":9}],2:[function(require,module,exports){
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

var Platform = function () {
	function Platform(game) {
		_classCallCheck(this, Platform);

		this.game = game;
		this.platforms = this.game.add.group();
		this.platforms.enableBody = true;
	}

	_createClass(Platform, [{
		key: "add",
		value: function add(x, y, asset, w, h) {
			var platform = this.platforms.create(x, y, asset);
			platform.scale.setTo(w, h);
			platform.body.immovable = true;
		}
	}]);

	return Platform;
}();

exports.default = Platform;

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

var Player = function (_Phaser$Sprite) {
	_inherits(Player, _Phaser$Sprite);

	function Player(_ref) {
		var game = _ref.game,
		    x = _ref.x,
		    y = _ref.y,
		    asset = _ref.asset,
		    frame = _ref.frame;

		_classCallCheck(this, Player);

		var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, game, x, y, asset, frame));
		// The player and its settings


		_this.game = game;

		_this.scale.setTo(0.75, 0.75);

		_this.game.physics.arcade.enable(_this);

		_this.body.bounce.y = 0.0;
		_this.body.collideWorldBounds = true;

		// this.animations.add('left', [4, 3, 2, 1], 10, true);
		// this.animations.add('right', [7, 8, 9, 10], 10, true);
		// this.animations.add('jumpleft', [0], 10, true);
		// this.animations.add('jumpright', [11], 10, true);
		// this.animations.add('standleft', [5], 10, true);
		// this.animations.add('standright', [6], 10, true);
		return _this;
	}

	_createClass(Player, [{
		key: "update",
		value: function update() {
			// 	if (this.cursors.left.isDown) {
			// 	direction = -1;
			// }
			// else if (this.cursors.right.isDown) {
			// 	direction = 1;
			// }
		}
	}]);

	return Player;
}(Phaser.Sprite);

exports.default = Player;

},{}],4:[function(require,module,exports){
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

var Boot = function (_Phaser$State) {
	_inherits(Boot, _Phaser$State);

	function Boot() {
		_classCallCheck(this, Boot);

		return _possibleConstructorReturn(this, (Boot.__proto__ || Object.getPrototypeOf(Boot)).apply(this, arguments));
	}

	_createClass(Boot, [{
		key: 'preload',
		value: function preload() {}
	}, {
		key: 'create',
		value: function create() {
			this.game.state.start('Preload');
		}
	}]);

	return Boot;
}(Phaser.State);

console.log('Booting...');

exports.default = Boot;

},{}],6:[function(require,module,exports){
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

},{"objects/RainbowText":4}],7:[function(require,module,exports){
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

var _Player = require('../objects/Player.js');

var _Player2 = _interopRequireDefault(_Player);

var _Platform = require('../objects/Platform.js');

var _Platform2 = _interopRequireDefault(_Platform);

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

var Level1 = function (_Phaser$State) {
  _inherits(Level1, _Phaser$State);

  function Level1() {
    _classCallCheck(this, Level1);

    return _possibleConstructorReturn(this, (Level1.__proto__ || Object.getPrototypeOf(Level1)).apply(this, arguments));
  }

  _createClass(Level1, [{
    key: 'create',
    value: function create() {

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.image(0, 0, 'sky').scale.setTo(2, 2);

      // let platforms = this.game.add.group();
      // platforms.enableBody = true;

      var platforms = new _Platform2.default(this.game);
      platforms.add(100, 100, 'ground', 2, 3);

      // let ground = platforms.create(0, this.game.world.height - 64, 'ground');
      // ground.scale.setTo(3, 2);
      // ground.body.immovable = true;

      this.player = new _Player2.default({
        game: this.game,
        x: 475,
        y: 500,
        asset: 'ken',
        frame: 6
      });
      this.game.stage.addChild(this.player);

      // Platform.create();
    }
  }, {
    key: 'update',
    value: function update() {}
  }]);

  return Level1;
}(Phaser.State);

exports.default = Level1;

console.log('Loaded Level1...');

},{"../objects/Platform.js":2,"../objects/Player.js":3}],8:[function(require,module,exports){
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

var _Player = require('objects/Player');

var _Player2 = _interopRequireDefault(_Player);

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
} // import Pretend from 'objects/Pretend';
// import Game from 'index.js';


// import Bullet from 'objects/Bullet';

var Main = function (_Phaser$State) {
  _inherits(Main, _Phaser$State);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'create',
    value: function create() {

      this.game.physics.startSystem(Phaser.Physics.ARCADE);

      this.game.add.image(0, 0, 'sky').scale.setTo(2, 2);

      this.game.add.sprite(90, 75, 'subrohunter').scale.setTo(.5, .5);

      var platforms = this.game.add.group();
      platforms.enableBody = true;

      var ground = platforms.create(0, this.game.world.height - 64, 'ground');
      ground.scale.setTo(3, 2);
      ground.body.immovable = true;

      this.player = new _Player2.default({
        game: this.game,
        x: 475,
        y: 500,
        asset: 'ken',
        frame: 6
      });
      this.game.stage.addChild(this.player);
    }
  }, {
    key: 'update',
    value: function update() {
      // let hitPlatform = this.game.physics.arcade.collide(player, platforms);
    }
  }]);

  return Main;
}(Phaser.State);

// console.log('Loaded Main...');


exports.default = Main;

},{"objects/Player":3}],9:[function(require,module,exports){
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
		key: 'preload',
		value: function preload() {
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
	}, {
		key: 'create',
		value: function create() {
			this.game.state.start("Level1");
		}
	}]);

	return Preload;
}(Phaser.State);

console.log('Assets loaded...');

exports.default = Preload;

},{}]},{},[1])
//# sourceMappingURL=game.js.map
