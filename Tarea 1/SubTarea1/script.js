/*Hacer un algoritmo que calcule el total a pagar por la compra de camisas. 
Si se compran tres camisas o más se aplica un descuento del 20% sobre el total de la compra, 
si son menos de tres camisas un descuento del 10%*/

let camisas;
let pago;
let cantidad;
let descuento;

cantidad = Number(prompt(`Total a pagar
Ingrese la cantidad de camisas que va comprar para calcular su descuento: `));
camisas = Number(prompt(`Ingrese el valor de la camisa:`));
pago = cantidad*camisas;
if (cantidad>=3){
    descuento= (pago*20)/100;
    pago = pago - descuento;
    alert (`Usted compro ${cantidad} camisas y se realiza un descuento del 20%, debe pagar: ${pago}
    El descuento realizado es de: ${descuento}`);
}else if (cantidad<3){
    descuento = (pago*10)/100;
    pago =pago-descuento;
    alert(`Usted compro ${cantidad} camisas y se realiza un descuento del 10%, debe pagar: ${pago}
    El descuento realizado es de: ${descuento}`);

}