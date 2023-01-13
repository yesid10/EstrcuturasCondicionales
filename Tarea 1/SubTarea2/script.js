/*Una empresa quiere hacer una compra de varias piezas de la misma clase a una fábrica de refacciones.
La empresa, dependiendo del monto de la compra, decidirá que hacer para pagar al fabricante.
Si el monto total de la compra excede de $500.000 la empresa tendrá la capacidad de invertir de su propio
dinero el 55% del monto de la compra, pedir prestado al banco un 30% y el resto lo pagará solicitando un 
crédito al fabricante. Si el monto total de la compra no excede de $500.000 la empresa tendrá capacidad de 
invertir de su propio dinero un 70% y el restante 30% lo pagará solicitando crédito al fabricante 
El fabricante cobra por concepto de intereses un 20% sobre la cantidad que se le pague a crédito.
Es necesario mostrar por pantalla, según el valor de la compra, cómo se pago, cuánto se saco de la empresa,
cuánto prestó el fabricante y si es el caso cuánto prestó al banco. */

let numpiezas,precipieza;
let costo;
let invertir;
let presbanco;
let credito;
let interes;
numpiezas = Number(prompt(`Fabrica de refacciones
Ingrese el numero de piezas a comprar: `));
precipieza = Number(prompt(`Ingrese el precio de cada pieza: `));
costo = precipieza*numpiezas;

if (costo>=500000){
    invertir = costo*0.55;
    presbanco = costo * 0.30;
    credito = costo*0.15;
    interes = credito*0.20;
    alert(`El costo es de ${costo}, por lo tanto la empresa invirtio ${invertir}, 
    el banco presto ${presbanco}, el credito del fabricante es de ${credito} 
    y su interes es de ${interes}`);
}else if (costo< 500000){
    invertir = costo*0.70;
    credito = costo*0.30;
    interes = credito*0.20;
    alert (`El costo es de ${costo}, la empresa invirtio ${invertir}, 
    el credito del fabricante es de ${credito} y su interes es de ${interes} `);
}