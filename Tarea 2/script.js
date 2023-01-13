/*Un obrero necesita calcular su salario semanal, el cual se obtiene de la siguiente manera:

Si trabaja 40 horas o menos se le paga $16 por hora
Si trabaja más de 40 horas se le paga $16 por cada una de las primeras 40 horas y $20 por cada hora extra. */

let horastrabajo;
let horasextras;
let pago;
let pagoextra;
let total;

horastrabajo= Number(prompt(`Salario semanal
Ingrese las horas de trabajo a la semana: `));
horasextras= horastrabajo-40;

if (horastrabajo<=40){
    pago = horastrabajo*16;
    alert(`Horas de trabajo: ${horastrabajo} 
    Salario total: ${pago}`);
}else if (horastrabajo>40){
    pago = 40*16;
    pagoextra= horasextras*20;
    total = pago+pagoextra;
    alert (`Horas de trabajo: ${horastrabajo}
           Horas extra: ${horasextras}
           Pago horas extra: ${pagoextra} 
           Salario total: ${total}`);
}