var stars = [];
var earth;
let russia_ship, usa_ship, ukraine_ship, china_ship, eu_ship;
let russia_speedX, russia_speedY, usa_speedX, usa_speedY, ukraine_speedX, ukraine_speedY, china_speedX, china_speedY, eu_speedX, eu_speedY;
let russia_x, russia_y, usa_x, usa_y, ukraine_x, ukraine_y, china_x, china_y, eu_x, eu_y;
let bg;
let bg_x, bg_y;

var russia_text, usa_text, ukraine_text, china_text, eu_text;
var earth;
let earth_x, earth_y;

/* SHIP CODES
russia = 0
usa = 1
ukraine = 2
china = 3
eu = 4
*/

function setup() {
  createCanvas(750, 650);
  
  let numStars = floor(random(1000))+500;
  for(var i = 0; i < numStars; i++) {
    stars[i] = new Star(random(5000)-2000, random(5000)-2000, randn_bm(0, 8, 1));
  }
  
  bg = loadImage('background.png');
  earth = loadImage('earth.png');
  
  russia_ship = loadImage('russia_ship.png');
  usa_ship = loadImage('usa_ship.png');
  ukraine_ship = loadImage('ukraine_ship.png');
  china_ship = loadImage('china_ship.png');
  eu_ship = loadImage('eu_ship.png');
  
  russia_speedX = 0;
  russia_speedY = -1;
  usa_speedX = 0;
  usa_speedY = -1;
  ukraine_speedX = 0;
  ukraine_speedY = -1;
  china_speedX = 0;
  china_speedY = -1;
  eu_speedX = 0;
  eu_speedY = -1;
  
  russia_x = 600;
  russia_y = 1000;
  usa_x = 500;
  usa_y = 1050;
  ukraine_x = 400;
  ukraine_y = 1000;
  china_x = 250;
  china_y = 1050;
  eu_x = 100;
  eu_y = 1000;
  
  bg_x = 0;
  bg_y = -500;
  
  earth_x = 100;
  earth_y = -700;
  
  russia_text = "RU";
  usa_text = "US";
  ukraine_text = "UA";
  china_text = "CN";
  eu_text = "EU";
  
}

function draw() {
  frameRate(24);
  //background(0, 0, 0);
  
  image(bg, bg_x, bg_y += 0.5);
  
  for(var i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].y = (stars[i].y+(stars[i].wl)/3);
  }
  
  image(earth, earth_x, earth_y += 4, 300, 300);
  
  image(russia_ship, russia_x, russia_y, russia_ship.width*2, russia_ship.height*2);
  image(usa_ship, usa_x, usa_y, usa_ship.width*2, usa_ship.height*2);
  image(ukraine_ship, ukraine_x, ukraine_y, ukraine_ship.width*2, ukraine_ship.height*2);
  image(china_ship, china_x, china_y, china_ship.width*2, china_ship.height*2);
  image(eu_ship, eu_x, eu_y, eu_ship.width*2, eu_ship.height*2);
  
  russia_x += russia_speedX;
  usa_x += usa_speedX;
  ukraine_x += ukraine_speedX;
  china_x += china_speedX;
  eu_x += eu_speedX;
  
  russia_y += russia_speedY;
  usa_y += usa_speedY;
  ukraine_y += ukraine_speedY;
  china_y += china_speedY;
  eu_y += eu_speedY;
  
  
  fill(255, 165, 0);
  textSize(20);
  text(russia_text, russia_x+30, russia_y+70, 150, 150);
  text(usa_text, usa_x+30, usa_y+70, 150, 150);
  text(ukraine_text, ukraine_x+30, ukraine_y+70, 150, 150);
  text(china_text, china_x+30, china_y+70, 150, 150);
  text(eu_text, eu_x+30, eu_y+70, 150, 150)
  
  speed();
}

function speed() {
  russia_speedY -= 0.015;
  usa_speedY -= 0.015;
  ukraine_speedY -= 0.02;
  china_speedY -= 0.015;
  eu_speedY -= 0.017;
}

function randn_bm(min, max, skew) {
  let u = 0, v = 0;
  while(u === 0) {
    u = Math.random() //Converting [0,1) to (0,1)
  }
  while(v === 0) {
    v = Math.random();
  }
  let num = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v );
  
  num = num / 10.0 + 0.5;
  if (num > 1 || num < 0) {
    num = randn_bm(min, max, skew);
  }
  
  else {
    num = Math.pow(num, skew);
    num *= max - min;
    num += min;
  }
  return num;
}


function Star(x, y, wl) {
  this.x = x;
  this.y = y;
  this.wl = wl; //width and length equal
  
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.wl, this.wl);
  }
}


/* References
1. Normal distribution with skew: https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
2. Background space image (royalty free): https://pixabay.com/photos/milky-way-stars-night-sky-2750627/
3. Earth image (royalty free): https://pixabay.com/photos/earth-planet-space-world-11008/
*/
