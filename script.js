let points = []
let mult = 0.007

function setup() {
  createCanvas (windowWidth, windowHeight)
  angleMode(DEGREES)
  background(30)
  noiseDetail(1)
let density = 50;
let space = width/density;
for (let x = 0; x < width; x += space){
  for (let y = 0; y < height; y += space){
let p = createVector(x,y)
points.push(p)
      }
   }
}

function draw(){
noStroke();

for (let i = 0; i < points.length; i++){
let r = map(points[i].x, 0, width, 20, 250)
let g = map(points[i].y, 0, height, 20, 250)
let b = map(points[i].x, 0, width, 250, 50)
fill(r,g,b)
let angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

points[i].add(createVector(cos(angle), sin(angle)))

// if (dist(width/2, height/2, points[i].x, points[i].y) <100 ){
  ellipse (points[i].x, points[i].y,1);
// }
  }
}