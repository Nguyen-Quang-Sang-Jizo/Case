let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let score = 0;

let img = new Image();
img.src = "https://muathe123.vn/pictures/images/air-strike-3d.jpg"

function draw_background() {
    ctx.drawImage(img, 0, 0);
}

class Maybay {
    constructor(x, y, a, b) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }

    draw_maybay() {
        let img = new Image();
        img.src = "https://www.pngkit.com/png/full/63-636109_view-samegoogleiqdbsaucenao-easa-yf-22-jet-aircraft.png"
        ctx.drawImage(img, maybay.x, maybay.y, maybay.a, maybay.b);
    }
}

class Bot {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
    }

    draw_bot() {
        let img = new Image();
        img.src = "https://static.motorway.co.uk/static/assets_seller/car-grey.68271bf97bdb91a427b0.png"
        ctx.drawImage(img, this.x, this.y, this.a, this.b);
    }

    move() {
        if (this.y > 450) {
            this.y = 50
        } else {
            this.y += 5
        }
    }

    gameOver(maybay) {
        let distX = (maybay.x + (maybay.a / 3)) - (this.x + (this.a) / 3);
        if (distX < 0)
            distX = -distX;

        let distW = (maybay.a + this.a) / 3;

        let distY = (maybay.y + (maybay.b / 3)) - (this.y + (this.b) / 3);
        if (distY < 0)
            distY = -distY;

        let distH = (maybay.b + this.b) / 3;

        if (distX <= distW && distY <= distH) {
            alert('game over');
            clearInterval(runInterval);
        }
    }
}

let maybay = new Maybay(100, 349, 100, 100);


let bots = [];

function createBot() {

    for (let i = 0; i < 10; i++) {
        let bot = new Bot(Math.floor(Math.random() * 700), 10, 50, 50);
        bots.push(bot)
    }
}

createBot();

let i = 0;

function showBot() {

    if (i < 10) {

        for (let j = i; j < i + 4; j++) {
            if (j < bots.length) {
                bots[j].draw_bot();
                bots[j].move();
                bots[j].gameOver(maybay)
            }
        }
        if (bots[i].y > 400) {
            i++;
        }
    } else {
        console.log('3432432')
        i = 0;
        bots = []
        createBot();
    }
}

function moveall() {
    draw_background();
    maybay.draw_maybay();
    showBot();
    scoreRecord();
}


function left() {
    maybay.x -= 10;
}

function right() {
    maybay.x += 10;
}

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 37)
        left()
})
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 39)
        right()
})

function scoreRecord() {

    score = score + 1;

    document.getElementById("score").innerHTML = score;
}


let runInterval = setInterval(() => {
    moveall()
}, 40)