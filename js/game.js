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
		sprite: spriteFactory(20, 20, 64, 64, 64, 64),
		initialize: function() {
			this.sprite.initialize();
			window.onkeydown = this.handleKeys;
		},
		handleKeys: function(event) {
			let key = event.key;
			if(key == null) rueturn;
			if( key === 'ArrowUp' {
				if sprite.yPos < 0) {
					sprite.yPos = 0;
				} else {
					sprite.yPos -= sprite.yVelocity;
				}
			}
			if( key === 'ArrowDown') {
				if(sprite.yPos > 600) { //TODO: have the width and height passed in
					sprite.ypos = 600;
				} else {
					sprite.yPos += sprite.yVelocity;
				}
			}
			if( key === 'ArrowLeft') {
				if( sprite.xPos < 0) {
					sprite.xPos = 0;
				} else {
					sprite.xPos -= sprite.xVelocity;
				}
			}
			if( key === 'ArrowRight') {
				if( sprite.xPos > 800) {
					xprite.xPos = 800;
				}
				else {
					sprite.xPos += xprite.xVelocity;
				}
			}
				
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
