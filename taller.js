let nombre1 = "Jonathan";

nombre1 = "Duvan";

console.log(nombre1);

const nombre2 = "Jonnathan";

// nombre2 = "Jonnathan";  Esta linea dara error por que no se puede cambiar una constante

console.log(nombre2);


// if (edad >= 18) {let edad = 20;} Esto tambien da error por que la variable no esta definida en este contexto

// console.log(edad); Esto dara error porque la variable edad no esta definida en este contextos


let string1 = "Hola mundo";

console.log(typeof string1); // Esto nos dara el tipo de dato de la variable string1

let number1 = 10;

console.log(typeof number1); // Esto nos dara el tipo de dato de la variable number1

let boolean1 = true;

console.log(typeof boolean1); // Esto nos dara el tipo de dato de la variable boolean1

let null1 = null;

console.log(typeof null1); // Esto nos dara el tipo de dato de la variable null

let undefined1;

console.log(typeof undefined1); // Esto nos dara el tipo de dato de la variable undefined

const persona = {
    nombre: "Jonathan",
    edad: 20,
    ciudad: "Bogota"
};

console.log(typeof persona); // Esto nos dara el tipo de dato del objeto persona

console.log(typeof persona.nombre); // Esto nos dara el tipo de dato de la propiedad nombre del objeto persona
console.log(typeof persona.edad);
console.log(typeof persona.ciudad);

let numero1 = 10;

let numero2 = "5";

console.log(numero1 + numero2);
console.log(numero1 + numero2);
console.log(numero1 * numero2);


const numeroAString = String(25);
console.log(numeroAString); // "25"
console.log(typeof numeroAString); // "string"


const stringANumero = Number("100");
console.log(stringANumero); // 100
console.log(typeof stringANumero); // "number"


const booleanoVacio = Boolean("");
const booleanoTexto = Boolean("hola");

console.log(booleanoVacio);
console.log(booleanoTexto);

console.log(10 === "10")
console.log(10 == "10")

// JS tiene igualdad estricta y debil

let numero = 4324;

if (numero % 2 === 0) {
  console.log(`El número ${numero} es par.`);
} else {
  console.log(`El número ${numero} es impar.`);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

try {
  
  throw new Error("Este es un error.");
} catch (error) {
  
  console.log("¡Ocurrió un problema! Detalle:", error.message);
}


function multiplicar(a, b) {return a * b;}

const resultado = multiplicar(4, 5);
console.log(resultado); // Muestra: 20


const multiplicarFlecha = (a, b) => a * b;
console.log(multiplicarFlecha(4, 5)); // Muestra: 20


const saludar = () => "¡Hola a todos!";
console.log(saludar()); // Muestra: ¡Hola a todos!


let variableGlobal = "Soy global";

function probarScope() {

  let variableLocal = "Soy local";


  console.log(variableGlobal);
  console.log(variableLocal);
}

probarScope();

console.log(variableGlobal);
// console.log(variableLocal); No esta disponible en el contexto

const coche = {
  marca: "Toyota",
  mostrarMarca: function() {
    console.log(this.marca);
  }
};

coche.mostrarMarca();


let frutas = ["Manzana", "Banana"];
console.log("Inicial:", frutas); // ["Manzana", "Banana"]


frutas.push("Naranja");
console.log("Después de push:", frutas); // ["Manzana", "Banana", "Naranja"]


frutas.pop();
console.log("Después de pop:", frutas); // ["Manzana", "Banana"]

const numeros = [1, 2, 3];


const duplicados = numeros.map(num => num * 2);
console.log(duplicados); // [2, 4, 6]


const mayoresAUno = numeros.filter(num => num > 1);
console.log(mayoresAUno); // [2, 3]


let frutas1 = ["Manzana", "Banana", "Naranja"];

frutas1.forEach(fruta => {
  console.log(fruta);
});


const frutaEncontrada = frutas1.find(fruta => fruta === "Banana");
console.log(frutaEncontrada); // "Banana"


const indiceManzana = frutas1.findIndex(fruta => fruta === "Manzana");
console.log(indiceManzana); // 0

const libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  mostrarInfo: function() {
    console.log(`Libro: "${this.titulo}" escrito por ${this.autor}`);
  }
};


libro.mostrarInfo();

class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const miAnimal = new Animal("Lucas");
console.log(miAnimal.saludar());


class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre);
    this.raza = raza;
  }
}


const miPerro = new Perro("Firulais", "Labrador");
console.log(miPerro.saludar());