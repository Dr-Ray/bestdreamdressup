const tops = document.querySelector('#tops');
const bottoms = document.querySelector('#bottoms');
const dress = document.querySelector('#dress');
const footwear = document.querySelector('#footwear');
const nightWear = document.querySelector('#nightwear');
const accesories = document.querySelector('#accesories');
const glasses = document.querySelector('#glasses');

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

let dressTop = 0, dressBottom = 0, dressFootwear = 0, dressnightWear = 0, dressAccesories = 0, dressWear=0, dressGlasses=0;
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
dress.onclick = () => {
    if (dressWear > Outfits.dresses.length - 1) {
        dressWear = 0;
    } 

    GameScreen.player.putOnClothes({
        dresses: Outfits.dresses[dressWear]
    });

    dressWear += 1;
}
footwear.onclick = () => {
    GameScreen.player.putOnClothes({
        footwear: Outfits.footwear[dressFootwear]
    });
    if (dressFootwear > Outfits.footwear.length - 2) {
        dressFootwear = 0;
    } else {
        dressFootwear += 1;
    }
}
nightWear.onclick = () => {
    
    if (dressnightWear > Outfits.nightwear.length - 1) {
        dressnightWear = 0;
    }

    console.log(dressnightWear, Outfits.nightwear[dressnightWear])
    
    GameScreen.player.putOnClothes({
        nightWear: Outfits.nightwear[dressnightWear]
    });

    dressnightWear += 1;
}
accesories.onclick = () => {
    GameScreen.player.putOnClothes({
        accesories: Outfits.accesories[dressAccesories]
    });
    if (dressAccesories > Outfits.accesories.length - 2) {
        dressAccesories = 0;
    } else {
        dressAccesories += 1;
    }
}
glasses.onclick = () => {
    GameScreen.player.putOnClothes({
        glasses: Outfits.glasses[dressGlasses]
    });
    if (dressGlasses > Outfits.glasses.length - 2) {
        dressGlasses = 0;
    } else {
        dressGlasses += 1;
    }
}
reset.onclick = () => {
    dressTop = 0, dressBottom = 0, dressFootwear = 0, dressnightWear = 0, dressAccesories = 0, dressWear=0, dressGlasses=0;
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