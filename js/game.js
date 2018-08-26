let playerFactory = function playerFactory() {
	//TODO: Make this factory parameterized to make multiple players
	let pf = {
		xPos: 50,
		yPos: 750,
		createSprite: function() {
			this.sprite.imageCanvas = document.createElement('canvas');
			this.sprite.imageCanvas.width = 64;
			this.sprite.imageCanvas.height = 64;
			this.sprite.imageCtx = this.sprite.imageCanvas.getContext("2d");
		},
		sprite: {
			//TODO: Make a Sprite object
			imageCanvas: null,
			imageCtx: null
		},
		render: function() {
			this.sprite.imageCtx.beginPath();
			this.sprite.imageCtx.fillStyle = 0xFF0000;
			this.sprite.imageCts.strokeStyle = 0xFF0000;
			this.sprite.imageCtx.arc(32, 32, 32, 0, Math.PI*2);
			this.sprite.imageCtx.fill();
		}
	};
	return pf;
};

let gameFactory = function gameFactory() {
	let gf = {
		gameCanvas: null,
		gameCtx: null,
		width: 0,
		height: 0,
		player: playerFactory(),
		initialize: function() {
			this.gameCanvas = document.getElementById('gameArea');
			this.gameCtx = this.gameCanvas.getContext('2d');
			this.width = this.gameCanvas.width;
			this.height = this.gameCanvas.height;
		},
		render: function() {
			this.player.render();
			this.gameCtx.drawImage(this.player.imageCtx.getImageData(), this.player.xPos, this.player.yPos);
		}
	};
	return gf;
};

let initGame = function initGame() {
	let game = gameFactory();
	game.initialize();
	game.render();
};

$(document).ready(initGame);
