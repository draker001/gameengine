let playerFactory = function playerFactory() {
	//TODO: Make this factory parameterized to make multiple players
	let pf = {
		xPos: 50,
		yPos: 750
		createSprite: function() {
			this.sprite.imageCanvas = document.createElement('canvas', {is: width:64, height:64});
			this.sprite.imageCtx = this.sprite.imageCanvas.getContext("2d");
			
		},
		sprite: {
			//TODO: Make a Sprite object
			imageCanvas: null;
			imageCtx: null
		}
	};
	return pf;
};

let gameFactory = function gameFactory() {
	let gf = {
		gameCanvas,
		gameCtx,
		width,
		height,
		player: playerFactory(),
		initialize: function() {
			this.gameCanvas = $('#gameArea');
			this.gameCtx = this.gameCanvas.getContext('2d');
			this.width = this.gameCanvas.width;
			this.height = this.gameCanvas.height;
		}
	};
	return gf;
};

let initGame = function initGame() {
		let game = gameFactory();
		game.initialize();
		console.log(game);
		console.log(game.player);
};

$(document).ready(initGame);
