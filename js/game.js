let spriteFactory = function spriteFactory(posx, posy, w, h, xvel = 0, yvel = 0) {
	let sf = {
		xPos: posx,
		yPos: posy,
		width: w,
		height: h,
		xVelocity : xvel,
		yVelocity : yvel,
		imageCanvas,
		imageCtx,
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
	return pf;
};

let playerFactory = function playerFactory() {
	let pf = {
		sprite: spriteFactory(),
		initialize: function() {
			this.sprite.initialize();
			
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
			this.player.createSprite();
		},
		render: function() {
			this.player.render();
			this.gameCtx.drawImage(this.player.sprite.imageCanvas, this.player.xPos, this.player.yPos);
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
