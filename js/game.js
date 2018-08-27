let spriteFactory = function spriteFactory(posx, posy, w, h, xvel = 0, yvel = 0) {
	let sf = {
		xPos: posx,
		yPos: posy,
		width: w,
		height: h,
		xVelocity : xvel,
		yVelocity : yvel,
		imageCanvas: null,
		imageCtx: null,
		initialize: function() {
			this.imageCanvas = document.createElement('canvas');
			this.imageCanvas.width = this.width;
			this.imageCanvas.height = this.height;
			this.imageCtx = this.imageCanvas.getContext('2d');
		},
		update: function() {
			this.xPos += this.xVelocity;
			this.yPos += this.yVelocity;
		},
		render: function() {
			this.imageCtx.beginPath();
			this.imageCtx.fillStyle = 'red';
			this.imageCtx.strokeStyle = 'red';
			this.imageCtx.arc(32, 32, 32, 0, Math.PI*2);
			this.imageCtx.fill();
		}	
	};
	return sf;
};

let playerFactory = function playerFactory() {
	let pf = {
		sprite: spriteFactory(20, 20, 64, 64),
		initialize: function() {
			this.sprite.initialize();
			window.onkeydown = this.handleKeys;
		},
		handleKeys: function(event) {
			console.log(event);
		},
		render: function() {
			this.sprite.render();
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
			this.player.initialize();
			this.gameCanvas = document.getElementById('gameArea');
			this.gameCtx = this.gameCanvas.getContext('2d');
			this.width = this.gameCanvas.width;
			this.height = this.gameCanvas.height;
		},
		render: function() {
			this.player.render();
			this.gameCtx.drawImage(this.player.sprite.imageCanvas, this.player.sprite.xPos, this.player.sprite.yPos);
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
