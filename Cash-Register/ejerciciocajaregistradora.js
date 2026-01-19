function checkCashRegister(precio, pago, cid) {                 //Se reciben tres argumentos
  let monedasEnCentavos = [                                     //Arreglo de objetos de los dolares pero pasado a centavos 
    {nombre: "ONE HUNDRED", valor: 10000},
    {nombre: "TWENTY", valor: 2000},
    {nombre: "TEN", valor: 1000},
    {nombre: "FIVE", valor: 500},
    {nombre: "ONE", valor: 100},    
    {nombre: "QUARTER", valor: 25},    
    {nombre: "DIME", valor: 10},
    {nombre: "NICKEL", valor: 5},
    {nombre: "PENNY", valor: 1},
  ]
  let change = [];                                               //Se crea arreglo vacío que se llenará con el cambio que se le dará al cliente
  let cambioOrig = (pago*100) - (precio*100);                    //Es la cantidad en centavos que se debe dar al cliente, está en ningun momento se modificará
  let cambioADeber = (pago*100) - (precio*100);                  //Es la cantidad en centavos que se debe dar al cliente, esta se restará hasta cero, es por ello que se hicieron dos variables
  let cajaEnCentavos = [...cid].reverse().map(unidad => [unidad[0], Math.round(unidad[1] * 100)]);  
  //Se hace una copia de la caja pero esta no está en centavos, se aplica metodo para voltear el arreglo y se recorre unidad por unidad con ayuda del map para ir convitiendola a centavos y redondeandolo pero sin perder el nombre de la unidad
  
  for (let i = 0 ; i < monedasEnCentavos.length ; i++){
  //Ciclo para ir agregandole el nombre de la moneda y el acumulado al cambio
    let nombreMoneda = monedasEnCentavos[i].nombre; //Se nombra el nombre de la moneda conforme la están usando
    let valorMoneda = monedasEnCentavos[i].valor;   //se le da el valor de la moneda conforme la están usando
    let acumuladoDeEstaMoneda = 0;                  //iniciamos el acumulado de la moneda usada en el momento
    while (cambioADeber >= valorMoneda && cajaEnCentavos[i][1] > 0){        //Ciclo "Mientras el cambio que se debe dar es mayor al valor de la moneda Y aun hay monedas de esa categoria en la caja"
        cambioADeber -= valorMoneda;                                        //Se le resta el valor de la moneda usada al cambio a deber
        cajaEnCentavos[i][1] -= valorMoneda;                                //Se le resta a la caja para saber si aun no nos pasamos el limite y aun quedan monedas de esa categoria
        acumuladoDeEstaMoneda += valorMoneda;                               //Se le suma el valor de la moneda al acumulado de la propia
        
    }
    if ( acumuladoDeEstaMoneda > 0){                                        //Si el acumulado de la moneda ya es mayor a 0
      change.push([nombreMoneda, acumuladoDeEstaMoneda / 100]);             //Se agrega el nombre de la moneda usada junto con el acumulado dividido entre 100, recordemos que estamos usando centavos 
    }
  }
  let totalCidOrig = cid.reduce((total,dinero) => total + Math.round(dinero[1] * 100),0)        //Se hace una suma total de cid con ayuda del reduce esto pasa saber a que caso de if entrará y que mostrará la caja
  if (cambioADeber > 0){
    return console.log({status: "INSUFFICIENT_FUNDS", change: []});              
  }if (totalCidOrig == cambioOrig){
    return console.log({status: "CLOSED", change: [...cid]});
  }else{
    return console.log({status: "OPEN", change: change});
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);