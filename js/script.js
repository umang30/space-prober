
let c, ctx,
    WIDTH, HEIGHT,
    startX, startY;

const STARS = [];

const {PI: π} = Math;

class Star {
    constructor() {
        this.x = UTILITY.random(-WIDTH * 2, WIDTH * 3);
        this.y = UTILITY.random(-HEIGHT * 2, HEIGHT * 3);
        this.z = UTILITY.random(20);

        this.vx = UTILITY.random(3, 5) * (1 - UTILITY.normalize(this.z, 0, 20));
        this.vy = UTILITY.random(3, 5) * (1 - UTILITY.normalize(this.z, 0, 20));

        this.r = UTILITY.random(1, 3) * (1 - UTILITY.normalize(this.z, 0, 20));
        this.alpha = UTILITY.normalize(this.z, 0, 20) / 5 + .8 + UTILITY.random(-.05, .05);
    }
    update(vx, vy) {
        this.x += this.vx * vx;
        this.y += this.vy * vy;

        this.draw();
    }
    draw() {
        ctx.beginPath();
            ctx.arc(this.x, this.y, this.r, 0, π * 2, true);
        ctx.closePath();

        ctx.fillStyle = `rgb(255, 255, 255, ${this.alpha})`;
        ctx.fill();
    }
}

const UTILITY = {
    random(max = 1, min = 0) {
        return max > min? Math.random() * (max - min) + min: Math.random() * (min - max) + max;
    },
    normalize(value, min, max) {
        return (value - min) / (max - min);
    }
};

const MAIN = {
    ASSIGN() {
        c = document.querySelector("canvas");
        ctx = c.getContext("2d");

        [WIDTH, HEIGHT] = [window.innerWidth, window.innerHeight];
        
        [startX,startY] = [WIDTH / 2, HEIGHT / 2];
    },
    SET_CANVAS_SIZE() {
        c.width = WIDTH;
        c.style.width = WIDTH;

        c.height = HEIGHT;
        c.style.height = HEIGHT;
    },
    INITIALIZE() {
        STARS.length = 0;
        for (let i = 0; i < 7000; i++) {
            STARS.push(new Star());
            STARS[i].draw();
        }
    }
};


const EVENTS = {
    LOAD() {
        startX = window.innerWidth / 2;
        startY = window.innerHeight / 2;
        
        MAIN.ASSIGN();
        MAIN.SET_CANVAS_SIZE();
        MAIN.INITIALIZE();
    },
    RESIZE() {
        startX = window.innerWidth / 2;
        startY = window.innerHeight / 2;
        MAIN.ASSIGN();
        MAIN.SET_CANVAS_SIZE();
        MAIN.INITIALIZE();
    },
    MOUSEMOVE(e) {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
        const distX = (e.clientX - startX) / 10;
        const distY = (e.clientY - startY) / 10;
        startX = e.clientX;
        startY = e.clientY;
        for (let i of STARS)
            i.update(distX, distY);
    },
};

window.addEventListener("load", EVENTS.LOAD);
window.addEventListener("resize", EVENTS.RESIZE);
window.addEventListener("mousemove", EVENTS.MOUSEMOVE);

