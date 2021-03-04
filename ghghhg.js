frog, 
            3, // sx
            3, // sy
            40, // swidth
            40, // sheight
            this.x, // coord in canvas X
            this.y, // coord in canvas Y
            this.width, // width on canvas
            this.height); // height on canvas);

//car 
            draw() {
                context.beginPath();
                context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                context.fillStyle = `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue})`;
                context.fill();
              }

              function getRandomInt(min, max) { // min and max included 
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        
              const gameObjectsStorage = [];
              for(let i = 0; i < getRandomInt (3,5); i++) {
                // gameObjectsStorage.push(
                // new Car ( 620, 600, 
                //            (Math.random() * 2) * (Math.random() > 0.5 ? 1 : 1), // x speed
                //            40,40, car1 ));
                // gameObjectsStorage.push( 
                //     new Car1 (0, 555, 1 + Math.random() * 1,
                //         // (Math.random() * 1* i) ,
                //          40, 40, car2));    
                // gameObjectsStorage.push( 
                //     new Car (620, 515, getRandomInt(1,2),
                //                     // (Math.random() * 1* i), 
                //         40, 40, car3));
        
                // gameObjectsStorage.push(  
                //     new Car1 (0, 465, getRandomInt(1,2),
                //         // (Math.random() * 1* i),
                //          40, 40, car4));  
                // gameObjectsStorage.push( 
                //     new Car (620, 410, getRandomInt(1,2),
                //         // (Math.random() * 1* i),
                //          70, 40, car5)); 
                         
                        // TURTLE// 
        
                gameObjectsStorage.push( 
                    new Turtle (220, 320,
                                0 ,
                                 150, 40, turtle)); 
                gameObjectsStorage.push(                
                    new Log (222, 275, 0, 120,40, log));
                gameObjectsStorage.push(    
                    new Log (222, 220, 0, 170,40,log1));
                gameObjectsStorage.push(
                    new Turtle (222, 170, 0, 120, 40, turtle1));
                gameObjectsStorage.push(
                    new Log (222, 127, 0, 150,40, log2));
        
              }