let xDiaEtios = 2000;
let xDiaCorolla = 3000;
let xDiaHilux = 4000;

let continuar = true;
let total = 0;
let totalDescuento = 0;
let msj = "";


do {

  let cantidad;
  let dias;
  let totalParcial;
  let modelo;
  
  modelo = prompt(`Que vehiculo precisa?\nEtios\nCorolla\nHilux`).toLowerCase();
  while(modelo != 'etios' && modelo != 'corolla' && modelo !='hilux'){
    continuar = confirm("No encontramos el modelo solicitado. Desea continuar?");
      if(continuar){
        modelo = prompt(`Por favor, ingrese uno de los siguientes modelos:\nEtios\nCorolla\nHilux`).toLowerCase();
      } else {
        continuar = false;
        break;
      }
  }

  if(continuar) {
    cantidad = Number(prompt(`Cuantos ${modelo} precisa rentar?`));
    while(cantidad <= 0 || isNaN(cantidad)) {
      continuar = confirm(`Ingresó una cantidad invalida. Desea continuar?`);
      if(continuar){
        cantidad = Number(prompt(`Cuantos ${modelo} precisa rentar?\nIngrese un número mayor a 0.`));
      } else {
        continuar = false;
        break;
      }
    }
  }

  if(continuar) {
      dias = Number(prompt(`Por cuantos días precisa los ${cantidad} ${modelo}?`));
      while(dias <= 0 || isNaN(dias)) {
        continuar = confirm(`Ingresó una cantidad invalida. Desea continuar?`);
        if(continuar){
          dias = Number(prompt(`Por cuantos días precisa los ${cantidad} ${modelo}?\nIngrese un número mayor a 0.`));
        } else {
          continuar = false;
          break;
        }
      }
    }

  if(continuar) {
    totalParcial = 0;
    switch (modelo) {
      case 'etios':
        totalParcial = xDiaEtios * cantidad * dias;
        total += totalParcial;
        msj += `<p>${cantidad} Etios por ${dias} días, por un total de $${totalParcial}</p><br/>`;
        break;
      case 'corolla':
        totalParcial = xDiaCorolla * cantidad * dias;
        total += totalParcial;
        msj += `<p>${cantidad} Corolla por ${dias} días, por un total de $${totalParcial}</p><br/>`;
        break;
      case 'hilux':
        totalParcial = xDiaHilux * cantidad * dias;
        total += totalParcial;
        msj += `<p>${cantidad} Hilux por ${dias} días, por un total de $${totalParcial}</p><br/>`;
        break;
      default:
        alert(`No encontramos el modelo solicitado`);
    }
    continuar = confirm("Quiere agregar otro modelo?");
  }
} while (continuar);


let cupon = confirm("Tiene un cupón de descuento?");

while(cupon) {

  let nCupon = prompt(`Ingrese su cupón`).toLowerCase();
  while(nCupon != 'bariloche' && nCupon != 'rentit2022'){
    cupon = confirm("No encontramos el cupón. Desea volver a intentar?");
      if(cupon){
        nCupon = prompt(`Ingrese su cupón while`).toLowerCase();
      } else {
        msj += `<p>Por un total final de: $${total}</p></br>`;
        cupon = false;
        break;
      }
  }

  switch(nCupon){
    case 'bariloche':
      totalDescuento = total-Number(total)*0.10;
      msj += `<p>Se le aplicó el descuento "bariloche" del 10% sobre $${total}.</br>Su monto a pagar es de $${totalDescuento}</p></br>`;
      cupon = false;
      break;
    case 'rentit2022':
      totalDescuento = total-Number(total)*0.15;
      msj += `<p>Se le aplicó el descuento "rentit" del 15% sobre $${total}.</br>Su monto a pagar es de $${totalDescuento}</p></br>`;
      cupon = false;
      break;
  }
} 

if(!totalDescuento){
  msj += `<p>Por un total final de: $${total}</p></br>`;
}

  


console.log(`Usted rentó correctamente: ${msj}`);
document.getElementById("resultado").innerHTML += msj;
