const tops = document.querySelector('#tops');
const bottoms = document.querySelector('#bottoms');
const reset = document.querySelector('#reset');

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const GameScreen = new CanvasScreen(canvas, ctx, document.querySelector('#interiorScene'));

window.addEventListener('load', () => {
    if (!window.screen.orientation.type.startsWith("portrait")) {
        GameScreen.canvas.width = window.innerWidth;
        GameScreen.canvas.height = window.innerHeight;
        GameScreen.draw();
    }
});

window.addEventListener('resize', (e) => {
    if (!window.screen.orientation.type.startsWith("portrait")) {
        GameScreen.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    }
});

let dressTop = 0, dressBottom = 0, dressFootwear = 0, nightWear = 0, dressAccesories = 0;
tops.onclick = () => {
    GameScreen.player.putOnClothes({
        top: Outfits.tops[dressTop]
    });

    if (dressTop > Outfits.tops.length - 2) {
        dressTop = 0;
    } else {
        dressTop += 1;
    }
}

bottoms.onclick = () => {
    GameScreen.player.putOnClothes({
        bottom: Outfits.bottoms[dressBottom]
    });
    if (dressBottom > Outfits.bottoms.length - 2) {
        dressBottom = 0;
    } else {
        dressBottom += 1;
    }
}
reset.onclick = () => {
    GameScreen.player.outfit = {
        top: {},
        bottom: {},
        footwear: {},
        glasses: {},
        accesories: {}
    }
    GameScreen.ctx.clearRect(0, 0, GameScreen.canvas.width, GameScreen.canvas.height);
    GameScreen.draw();
}