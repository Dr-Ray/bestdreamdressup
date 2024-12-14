class Player {
    constructor(game) {
        this.game = game;
        this.width = 270;
        this.baseWidth = 2700;
        this.baseHeight = 4500;
        this.height = 450;
        this.y = this.game.canvas.height;
        this.x = (this.game.canvas.width * 0.5);
        this.img = document.querySelector('#girl2');
        this.outfit = {
            top: {},
            bottom: {},
            footwear: {},
            glasses: {},
            nightWear:{},
            accesories: {},
            dresses:{}
        }
    }

    draw() {
        this.y = this.game.canvas.height - this.height;
        if(this.y < 0) {
            this.y = 0;
        }

        this.game.ctx.drawImage(this.img, 0, 0, this.baseWidth, this.baseHeight, this.x, this.y, this.width, this.height);
        // this.game.ctx.fillRect(this.x, this.y, this.width, this.height);
        // console.log(this.y);
    }

    wearDress(dress) {
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        this.game.draw();
        this.game.ctx.drawImage(dress, 0, 0, this.baseWidth, this.baseHeight, this.x, this.y, this.width, this.height);
    }
    putOnClothes(args) {
        this.outfit = { ...this.outfit, ...args };
        this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);

        console.log(this.outfit)

        this.game.draw();
        Object.entries(this.outfit).forEach((key) => {
            this.clts = new Image();
            switch (key[0]) {
                case "top":
                    if (Object.keys(key[1]).length > 0) {
                        this.clts.src = key[1].url;
                        this.game.ctx.drawImage(this.clts, 0, 0, this.baseWidth, this.baseHeight, this.x + key[1].position.x, this.y + key[1].position.y, this.width, this.height);
                    }
                    break;

                case "bottom":
                    if (Object.keys(key[1]).length > 0) {
                        this.clts.src = key[1].url;
                        this.game.ctx.drawImage(this.clts, 0, 0, this.baseWidth, this.baseHeight, this.x + key[1].position.x, this.y + key[1].position.y, this.width, this.height);
                    }
                    break;
                case "footwear":
                    if (Object.keys(key[1]).length > 0) {
                        this.clts.src = key[1].url;
                        this.game.ctx.drawImage(this.clts, 0, 0, this.baseWidth, this.baseHeight, this.x + key[1].position.x, this.y + key[1].position.y, this.width, this.height);
                    }
                    break;
                case "glasses":
                    if (Object.keys(key[1]).length > 0) {
                        this.clts.src = key[1].url;
                        this.game.ctx.drawImage(this.clts, 0, 0, this.baseWidth, this.baseHeight, this.x + key[1].position.x, this.y + key[1].position.y, this.width, this.height);
                    }
                    break;
                case "nightWear":
                        if (Object.keys(key[1]).length > 0) {
                            this.clts.src = key[1].url;
                            this.game.ctx.drawImage(this.clts, 0, 0, this.baseWidth, this.baseHeight, this.x + key[1].position.x, this.y + key[1].position.y, this.width, this.height);
                        }
                        break;
                case "dresses":
                        if (Object.keys(key[1]).length > 0) {
                            this.clts.src = key[1].url;
                            this.game.ctx.drawImage(this.clts, 0, 0, this.baseWidth, this.baseHeight, this.x + key[1].position.x, this.y + key[1].position.y, this.width, this.height);
                        }
                        break;
    
                case "accesories":
                    if (Object.keys(key[1]).length > 0) {
                        this.clts.src = key[1].url;
                        this.game.ctx.drawImage(this.clts, 0, 0, this.baseWidth, this.baseHeight, this.x + key[1].position.x, this.y + key[1].position.y, this.width, this.height);
                    }
                    break;
            }
        })
    }
}
