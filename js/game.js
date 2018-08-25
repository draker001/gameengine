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
	
	};
	return gf;
};

let initGame = function initGame() {
	
};
