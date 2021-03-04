
      const canvas = document.getElementById("target");
      const context = canvas.getContext("2d");

      canvas.width = 672;
      canvas.height = 744;
      
     // body.style.backgroundImage="url(background.png)"
    //Timer
     document.addEventListener('DOMContentLoaded', () => {
      const timer = document.querySelector('.round-time-bar')
      const timeLeftDisplay = document.querySelector('#time-left')
      let timeLeft = 30
    
      function countDown() {
        setInterval(() => {
          if (timeLeft <= 0) {
            clearInterval (timeLeft = 0)
            player.x = 200, player.y = 640;
        
          } 
        
          // if (collision = true){
          //   clearInterval (timeLeft = 0)
          // }
          timeLeftDisplay.innerHTML = timeLeft
          timeLeft -=1
        }, 1000)
        
      }
    
      countDown();
         
    })

      

      

    //Images 

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

     const turtle = new Image();
     turtle.src = "Pictures/turtle.png"

     const turtle1 = new Image();
     turtle1.src = "Pictures/turtle1.png"

     const log = new Image();
     log.src = "Pictures/log.png"

     const log1 = new Image();
     log1.src = "Pictures/log1.png"

     const log2 = new Image();
     log2.src = "Pictures/log2.png"


      class Car {
        constructor(startX, startY, carSpeed ,width, height, image) {
          this.x = startX;
          this.y = startY;
          this.carSpeed = - carSpeed;
          this.width = width;
          this.height = height;
          this.image = image;
        }

        update() {
          this.x = this.x + this.carSpeed;
           if (this.x <= -96){
               this.x = 900 ;}

           if(((this.x + this.width) > player.x) &&
            (this.x < (player.x + player.width)) &&
            ((this.y + this.height) > player.y) &&
             (this.y < (player.y + player.height))) {
          
              player.x = 200, player.y = 640;
                  
              console.log('Welcome aboard');
            }
           }
          
      

        draw() {context.drawImage(this.image, this.x, this.y, this.width, this.height);
         
        }
      }

      class Car1 {
        constructor(startX, startY, carSpeed ,width, height, image) {
          this.x = startX;
          this.y = startY;
          this.carSpeed = carSpeed;
          this.width = width;
          this.height = height;
          this.image = image;
        }

        update() {
          this.x = this.x + this.carSpeed;
        //   if(this.x <= canvas.width || (this.x >= 0)) {
           if (this.x >= canvas.width + 96){
               this.x = -48;}
        if(((this.x + this.width) > player.x) &&
             (this.x < (player.x + player.width)) &&
             ((this.y + this.height) > player.y) &&
             (this.y < (player.y + player.height))) {
              player.x = 200, player.y = 640;
              
            console.log('Boom');
            // startNewGame();
           
          }
          
           }

        draw() {context.drawImage(this.image, this.x, this.y, this.width, this.height);
         
        }
      }

      class Turtle {
        constructor(startX, startY, turtleSpeed ,width, height, image) {
          this.x = startX;
          this.y = startY;
          this.turtleSpeed = - turtleSpeed;
          this.width = width;
          this.height = height;
          this.image = image;
        }

        update() {
          this.x = this.x + this.turtleSpeed;
           if (this.x <= -96){
               this.x = 900 ;}
            
               if(((this.x + this.width - 40 ) > player.x) &&
               (this.x < (player.x + player.width - 45 )) &&
               ((this.y + this.height) > player.y) &&
               (this.y < (player.y + player.height))) 
                {  player.x = player.x + this.turtleSpeed; 
                  
              console.log('Welcome aboard');
            }

           }
          
      

        draw() {context.drawImage(this.image, this.x, this.y, this.width, this.height);
         
        }
      }

      class Log {
        constructor(startX, startY, logSpeed ,width, height, image) {
          this.x = startX;
          this.y = startY;
          this.logSpeed = logSpeed;
          this.width = width;
          this.height = height;
          this.image = image;
        }

        update() {
          this.x = this.x + this.logSpeed;
        //   if(this.x <= canvas.width || (this.x >= 0)) {
           if (this.x >= canvas.width + 90){
               this.x = -48;}
        if(((this.x + this.width - 100) > player.x) &&
             (this.x < (player.x + player.width )) &&
             ((this.y + this.height) > player.y) &&
             (this.y < (player.y + player.height))) 
              {  player.x = player.x + this.logSpeed; 
            console.log('Welcome aboard');
          }
           }

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
          if(player.y > canvas.height - 200){
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

      class Timer {
        constructor(startX, startY, width, hight){
        this.x = startX;
        this.y = startY;
        this.width = width;
        this.hight = hight;
        this.color = 'yellow';
        

      }
      update() {}

      draw() {
      context.beginPath();
      context.rect(this.x, this.y, 500, 50);
      context.fillStyle = 'yellow';
      context.fill();
      }
    }
      
    // const timer = new Timer (100, 500, 500, 50 );
    
    
      const player = new Player(200, 640, 40, 40, 38, 38, );
   

    //   function getRandomInt(min, max) { // min and max included 
    //     return Math.floor(Math.random() * (max - min + 1) + min);
    // }

      const gameObjectsStorage = [];
      for(let i = 0; i < 10; i++) {
        gameObjectsStorage.push(
           new Car ( 620, 600, 1, 40,40, car1 ));
        gameObjectsStorage.push(
            new Car ( 950, 600, 1, 40,40, car1 ));

             //car2
        gameObjectsStorage.push( 
            new Car1 (0, 555, 1,35, 35, car2));
        // gameObjectsStorage.push( 
        //     new Car1 (-250, 555, 1,40, 40, car2)); 
        gameObjectsStorage.push( 
            new Car1 (-450, 555, 1,35, 35, car2));       

             //car3
        gameObjectsStorage.push( 
            new Car (1090, 515,1.5,35, 35, car3));
        // gameObjectsStorage.push( 
        //     new Car (950, 515,1.5,35, 35, car3)); 
        gameObjectsStorage.push( 
            new Car (500, 515,1.5,35, 35, car3));


                //car4
        gameObjectsStorage.push(  
            new Car1 (10, 465, 1, 35, 35, car4));
        gameObjectsStorage.push(  
            new Car1 (-350, 465, 1,35, 35, car4)); 
       

                 
                 

                 //car5
        gameObjectsStorage.push( 
            new Car (300, 410, 1.2, 70, 40, car5));
        gameObjectsStorage.push(          
         new Car (530, 410, 1.2, 70, 40, car5)); 
        gameObjectsStorage.push( 
        new Car (900, 410, 1.2,70, 40, car5));
                                         
                 
                // TURTLE// 

        gameObjectsStorage.push( 
            new Turtle (620, 320, 1, 140, 40, turtle)); 
        gameObjectsStorage.push( 
            new Turtle (1000, 320, 1, 140, 40, turtle)); 
        gameObjectsStorage.push( 
                new Turtle (1300, 320, 1, 140, 40, turtle));

        gameObjectsStorage.push(
                    new Turtle (620, 170, 1, 110, 35, turtle1));
        gameObjectsStorage.push(
                    new Turtle (1000, 170, 1, 110, 35, turtle1));
        gameObjectsStorage.push(
                    new Turtle (1300, 170, 1, 110, 35, turtle1));

                // log//
        gameObjectsStorage.push(                
            new Log (-60, 275, 1, 120,40, log));
        gameObjectsStorage.push(                
            new Log (-250, 275, 1, 120,40, log));
        gameObjectsStorage.push(                
            new Log (-500, 275, 1, 120,40, log));

        gameObjectsStorage.push(    
            new Log (-90, 220, 1.1, 170,40,log1));
        gameObjectsStorage.push(    
            new Log (-350, 220, 1.1, 170,40,log1)); 
        gameObjectsStorage.push(    
            new Log (-650, 220, 1.1, 170,40,log1)); 
                    
        gameObjectsStorage.push(
            new Log (-60, 120, 1, 140,35, log2));
        gameObjectsStorage.push(
            new Log (-350, 120, 1, 140,35, log2));
        gameObjectsStorage.push(
            new Log (-650, 120, 1, 140,35, log2));

      }
      
    //   startNewGame = function(){
    //       player.x == 200;
    //       player.y == 640;
    //       updateScreen();
    //   }


      function updateScreen() {
          // clear the canvas
          context.clearRect(0,0,canvas.width,canvas.height);

          for(let i = 0; i < gameObjectsStorage.length; i++) {
            gameObjectsStorage[i].update();
            gameObjectsStorage[i].draw();
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