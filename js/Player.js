import Person from './Person.js';


export class Player extends Person{
	constructor(context, name, image) {
    super()
		this.name = name;
    this.image = image;
    this.context = context;

    this.speed = 16;

    this.control()
	}

  control() {
    document.addEventListener('keydown', event => {
      if (event.keyCode === 68) { // 'D'
        this.moveRight(); 
      };

      if (event.keyCode === 65) { // 'A'
        this.moveLeft();
      };

      if (event.keyCode === 87) { // 'W'
        this.moveUp()
      };

      if (event.keyCode === 83) { // 'S'
        this.moveDown()
      };


    });
  }




};
