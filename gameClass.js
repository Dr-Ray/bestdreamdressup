class CanvasScreen {
    constructor(canvas, context, img) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx = context;
        this.img = img;
        this.player = new Player(this);
    }

    draw() {
        this.ctx.drawImage(this.img, 0, 0, this.canvas.width, this.canvas.height);
        this.player.draw();
    }

    drawNewScreen(img) {
        // this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.drawImage(img, 0, 0, this.width, this.height);
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.draw();
        this.player.draw();
    }
}