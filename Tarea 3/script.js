/*Una persona enferma, que pesa 70kg, se encuentra en reposo 
y desea saber cuántas calorías consume su cuerpo durante todo el tiempo 
que realice una misma actividad. Las actividades que tiene permitido realizar 
son únicamente dormir y estar sentado en reposo. Los datos que tiene son que estando 
dormido consume 1.08 calorías por minuto y estando sentado en reposo consume 1.66 calorías por minuto. */

let tiempo;
let actividad;
let calorias;
actividad=Number(prompt(`Escoja la actividad: 1. Dormir
                               2. Sentado `));                   
tiempo = Number(prompt(`Ingrese el tiempo que lleva realizando la actividad (en minutos): `));

switch(actividad){
    case 1:
        //dormido
        calorias= tiempo*1.08;
        alert(`Actividad: Dormido
               Tiempo: ${tiempo}
               Calorias: ${calorias}`);
    break;
    case 2:
        //sentado
        calorias= tiempo*1.66;
        alert(`Actividad: Sentado
               Tiempo: ${tiempo}
               Calorias: ${calorias}`);
    break;
    default:
        alert(`Ingrese un numero valido.`)
    break;
}
