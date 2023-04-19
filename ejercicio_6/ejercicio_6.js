class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre}`);
  }
  
  presentarEdad() {
    console.log(`Tengo ${this.edad} años`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, grado) {
    super(nombre, edad);
    this.grado = grado;
  }
  
  saludar() {
    console.log(`Hola, soy ${this.nombre} y soy estudiante de ${this.grado}`);
  }
  
  presentarEdad() {
    super.presentarEdad();
    console.log(`Soy estudiante de ${this.grado}`);
  }
}

const persona1 = new Estudiante('Juan', 30, 'primero');
console.log(persona1);