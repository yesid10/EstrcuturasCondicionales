/*Hacer un algoritmo que imprima el nombre de un artículo, clave, precio original
 y su precio con descuento. El descuento lo hace en base a la clave. Si la clave es 01 
 el descuento es del 10% y si la clave es 02 el descuento es del 20% (solo existen dos claves). */

 let artículo = "";
 let clave;
 let preciori;
 let preciodes;
 let des;

 artículo = prompt('Ingrese el nombre del articulo: ');
 clave= Number(prompt(`Ingrese su clave (Recerde que solo existen dos claves): `));
 preciori = Number(prompt(`Ingrese el precio orgininal del articulo`));
 
 if (clave== 01){
    des = preciori*0.10;
    preciodes = preciori-des;
    alert(`Nombre del articulo: ${artículo}
           Clave: 0${clave}
           Precio original: ${preciori}
           Precio con descuento: ${preciodes}
           Descuento: ${des}`);
 }else if (clave ==02){
    des = preciori*0.20;
    preciodes = preciori-des;
    alert(`Nombre del articulo: ${artículo}
           Clave: 0${clave}
           Precio original: ${preciori}
           Precio con descuento: ${preciodes}
           Descuento: ${des}`);
           
 }