const canvas = document.getElementById("target");
const context = canvas.getContext("2d");

canvas.width = 672;
canvas.height = 744;

document.addEventListener('DOMContentLoaded', () => {
  const timeLeftDisplay = document.querySelector('#time-left')
  const startBtn = document.querySelector('#start-button')
  let timeLeft = 40

  function countDown() {
    setInterval(() => {
      if (timeLeft <= 0) {
        clearInterval (timeLeft = 0)
      }
      timeLeftDisplay.innerHTML = timeLeft
      timeLeft -=1
    }, 1000)
  }
 startBtn.addEventListener('click', countDown)
})

const frog = new Image();
frog.onload = () => {
 window.requestAnimationFrame(updateScreen);
}
frog.src = 'Pictures/frog.png';

const car1 = new Image();
car1.src = "Pictures/car1.png"

const car2 = new Image();
car2.src = "Pictures/car2.png"

const car3 = new Image();
car3.src = "Pictures/car3.png"

const car4 = new Image();
car4.src = "Pictures/car4.png"

const car5 = new Image();
car5.src = "Pictures/car5.png"

class CarObjects {
  constructor(startX, startY, carSpeed ,width, height, image) {
    this.x = startX;
    this.y = startY;
    this.carSpeed = - carSpeed;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  update() {
    if(((this.x + this.width) > player.x) &&
             (this.x < (player.x + player.width)) &&
             ((this.y + this.height) > player.y) &&
             (this.y < (player.y + player.height))) {
                 collision = true; 
            console.log('Hit');
          }
     }
    


  draw() {context.drawImage(this.image, this.x, this.y, this.width, this.height);
   
  }
}

class Car extends CarObjects {

  update() {
    super.update()
    this.x = this.x + this.carSpeed;
  //   if(this.x <= canvas.width || (this.x >= 0)) {
     if (this.x <= -96){
         this.x = 900 ;}
     }
    
  // }

  draw() {context.drawImage(this.image, this.x, this.y, this.width, this.height);
   
  }
}

class Car1 extends CarObjects {
  

  update() {
    this.x = this.x + this.carSpeed;
  //   if(this.x <= canvas.width || (this.x >= 0)) {
     if (this.x >= canvas.width + 96){
         this.x = -48;}
     }

    
  // }

  draw() {context.drawImage(this.image, this.x, this.y, this.width, this.height);
   
  }
}

class Player {
  constructor(startX, startY, movementSpeedX, movementSpeedY, width, height, image) {
    this.x = startX;
    this.y = startY;
    this.movementSpeedX = movementSpeedX;
    this.movementSpeedY = movementSpeedY;
    this.width = width;
    this.height = height;
    this.image = image;
  }

  moveUp() {
    if(player.y <  61 ) {
        return;
    }
    this.y = this.y - this.movementSpeedY;
  }

  moveDown() {
    if(player.y > canvas.height - 100){
          return;
    }

    this.y = this.y + this.movementSpeedY;
  }

  moveLeft() {
      if(player.x == 0){
          console.log (' moving left');
          return;
    }
    if (this.x != this.y)

    this.x = this.x - this.movementSpeedX;
  }

  moveRight() {
      if(player.x > canvas.height - 145 ){
          console.log (' moving right');
          // if (this.x != this.y)
          return;
    }
    this.x = this.x + this.movementSpeedX;
  }

  update() {

  }

  draw() {
    context.drawImage(frog, this.x, this.y, this.width, this.height);

  }
}

const player = new Player(200, 685, 40, 40, 40, 40, );

function getRandomInt(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const carStorage = [];
for(let i = 0; i < getRandomInt (3,5); i++) {
  carStorage.push(
    new Car ( 620, 640, getRandomInt(1,3), 
          //    (Math.random() * 2) * (Math.random() > 0.5 ? 1 : -1), // x speed
             40,40, car1 ));
  carStorage.push( 
      new Car1 (0, 580, getRandomInt(1,2),
          // (Math.random() * 1* i) ,
           40, 40, car2));    
  carStorage.push( 
      new Car (620, 530, getRandomInt(1,3),
                      // (Math.random() * 1* i), 
          40, 40, car3));

  carStorage.push(  
      new Car1 (0, 475, getRandomInt(1,2),
          // (Math.random() * 1* i),
           40, 40, car4));  
  carStorage.push( 
      new Car (620, 420, getRandomInt(1,3),
          // (Math.random() * 1* i),
           70, 40, car5));         
}


function updateScreen() {
    // clear the canvas
    context.clearRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < carStorage.length; i++) {
      carStorage[i].update();
      carStorage[i].draw();
    }
    player.update();
    player.draw();

    window.requestAnimationFrame(updateScreen);
}

 



window.requestAnimationFrame(updateScreen);

window.addEventListener('keydown', function(event){
  switch(event.keyCode) {
    case 37:
      console.log('LEFT!');
      player.moveLeft();
      break;
    case 38:
      console.log('UP!');
      player.moveUp();
      break;
    case 39:
      console.log('RIGHT!');
      player.moveRight();
      break;
    case 40:
      console.log('DOWN!');
      player.moveDown();
      break;
  }
});