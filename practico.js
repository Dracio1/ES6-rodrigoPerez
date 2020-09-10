

// ```JS
const saludar =(nombre)=>'Hola ' + nombre;


// Mostrar el resultado por consola
console.log(saludar('Alejandro'));
// ```


// ```JS
const multiplicar=(a, b)=>a * b;
    

// Mostrar el resultado por consola
console.log(multiplicar(3, 15))
// ```


// ```JS
const crearAlumno=(nombre, apellido, edad, materias)=>( {nombre, apellido, edad, materias})

    

// Mostrar el resultado por consola.
console.log(crearAlumno('Leo', 'Messi', '32', ['TLPA','Base de Datos','Inglés']))
// ```


// ```JS
const devolverFecha=(...arg)=>'Hoy es '+ arg[0]+'/'+arg[1]+'/'+arg[2];


// Mostrar el resultado por consola.
console.log(devolverFecha('10','09','2020'));
// ```