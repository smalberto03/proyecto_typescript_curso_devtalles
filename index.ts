// Import stylesheets
import './style.css';
import './tareas/tarea01_desestructurar.ts';
import { Personas } from './tareas/08-clases_typescript';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const persona1 = new Personas('Antopnmio', 20, 'NEW YORK');

console.log('La edad es: ' + persona1.edad);
console.log('El nombre es: ' + persona1.nombre);
console.log('La direccion: ' + persona1.direccion);
console.log(persona1);
