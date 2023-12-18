/**
 * // P_2_3_1_02
 * 참고한 작품의 주소
 * https://editor.p5js.org/generative-design/sketches/P_2_3_1_02
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
 */

/**
 * 조작법

 * mouse click         : 시작
 * space               : 색 랜덤 바꾸기
 * backspace           : 다시 시작하기
 * r                   : 리버스(반대로 돌아가기)
 * arrow up            : 돌아가는 속도 +
 * arrow down          : 돌아가는 속도 -
 */

let c;
let img;

let angle = 0;
let angleSpeed = 1;

let lineSize = 0;

function preload() {
  img = loadImage('text.png');
  img1 = loadImage('title1.png');
  img2 = loadImage('title2.png');
}

function setup() {
  setCanvasContainer('canvas', 1, 1, true);
  background('black');
  cursor(CROSS);
  // noCursor();
  strokeWeight(0.75);

  c = color(252, 255, 134);
}

function draw() {
  let x = width / 2;
  let y = height / 2;

  image(img, width / 2 - 135, 80);
  // image(img1, width / 2 - 100, height / 2, 460, 60);
  // image(img2, width / 2 - 100, height / 2 - 100, 200, 50);

  push();
  translate(x, y);
  rotate(radians(angle));

  stroke(c);
  line(0, 0, lineSize, lineSize);

  angle += angleSpeed;
  pop();
}

//랜덤한 길이
function mousePressed() {
  lineSize = random(120, 200);
  // img;
}

function keyReleased() {
  if (keyCode == BACKSPACE) background('black');

  if (keyCode == UP_ARROW) angleSpeed += 0.32;
  if (keyCode == DOWN_ARROW) angleSpeed -= 0.32;

  // 리버스
  if (key == 'r' || key == 'R') {
    angle += 180;
  }

  // 컬러 바꾸기
  if (key == ' ')
    c = color(random(255), random(255), random(255), random(100, 140));
}
