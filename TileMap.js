export default class TileMap {
    constructor(tileSize) {
      this.tileSize = tileSize;
        this.castlewall = this.#image("CastleWall.png");
        this.sora = this.image("sora.png");
        this.heart = this.image("pixelheart.png");
        this.heartless = this.image("heartless.png");
    }

    #image(fileName){
        const img = new Image();
        img.src = `images/${fileName}`;
        return img;
    }

    //Key for Tile Map
    //1 - Wall
    //0 - Hearts
    //2 - Character
    //3 - Enemies
    map = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
        [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      ];

    draw(canvas, ctx) {
        this.#setCanvasSize(canvas);
        this.#clearCanvas(canvas,ctx);
        this.#drawMap(ctx);
    }

    #drawMap(ctx){
        for(let row =0; row< this.map.length; row++){
            for(let column =0; colymn < this.map[row]. length; column++){
                const tile = this.map[row][column];
                let image = null;
                switch(tile){
                    case 1:
                        image = this.castlewall;
                        break;
                    case 0:
                        image = this.heart;
                        break;
                    case 2:
                        image = this.sora;
                        break;
                    case 3:
                        image = this.heartless;
                        break;
            }

                if (image != null)
                    ctx.drawImage(
                        image,
                        column * this.tileSize,
                        row * this.tileSize,
                        this.tileSize,
                        this.tileSize
                    );
            }
        }
    }

    #clearCanvas(canvas,ctx){
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    #setCanvasSize(canvas){
        canvas.height = this.map.length * this.tileSize;
        canvas.width = this.map[0].length * this.tileSize;
    }
}
