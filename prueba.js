const porcentaje = (ventas)=>{
    let porcentaje;
 switch(true){
    case ventas >= 0 && ventas <= 2000000:
       porcentaje = ventas * 0.20;
       break
    
    case ventas >= 2000001 && ventas <= 4000000:
        porcentaje = ventas * 0.22;
        break

    case ventas >= 4000001 && ventas <= 5500000:
        porcentaje = ventas * 0.24;
        break

    case ventas >= 5500001 && ventas <= 7500000:
        porcentaje = ventas * 0.26;
        break
    
    case ventas >= 7500001 && ventas <= 8500000:
        porcentaje = ventas * 0.27;
        break

    case ventas >= 7500001 && ventas <= 99999999999:
        porcentaje = ventas * 0.29;
        break
    
    default: 
     porcentaje = 0
     break
 }
 return{
    porcentaje: porcentaje
 }

}

const liquidarQuincena =()=>{
    let salario = porcentaje().porcentaje
    let salarioBasico = salario *0.65;
    let auxilioTransporte = salario *0.20;
    let auxilioAlimento = salario *0.15;

    console.log(`Basico: ${salarioBasico.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})} \n 
                 Auxilio de transporte: ${auxilioTransporte.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})} \n 
                 Auxilio de alimento: ${auxilioAlimento.toLocaleString('es-CO', {style: 'currency', currency: 'COP'})} `)

    return {
    salarioBasico: salarioBasico,
    auxilioTransporte: auxilioTransporte,
    auxilioAlimento: auxilioAlimento
    }
};


const liquidarSalario = ()=>{
       let datosRecibidosPrimerQuincena =parseFloat(document.getElementById('numero1').value)
       let datosRecibidosSegundaQuincena =parseFloat(document.getElementById('numero2').value)

        

       let calculoPorcentajeQuincenaUno = porcentaje(datosRecibidosPrimerQuincena)
       let calculoPorcentajeQuincenaDos = porcentaje(datosRecibidosSegundaQuincena) 

       let valoresPrimerQuincena = liquidarQuincena(calculoPorcentajeQuincenaUno);
       let valoresSegundaQuincena = liquidarQuincena(calculoPorcentajeQuincenaDos);

       let calculoSalarioBruto =(valoresPrimerQuincena.salarioBasico + valoresSegundaQuincena) 
       let deduccionSalud = (valoresPrimerQuincena.salarioBasico + valoresSegundaQuincena) * 0.04
       let deduccionPension = (valoresPrimerQuincena.salarioBasico + valoresSegundaQuincena) * 0.04         
       
       if (calculoSalarioBruto >= 644350 * 4 ){
        let descuentoExtraSalarial = calculoSalarioBruto * 0.01
        return descuentoExtraSalarial
       }

       salarioBasico = liquidarQuincena().salarioBasico;
       auxilioAlimento = liquidarQuincena().auxilioAlimento;
       auxilioTransporte = liquidarQuincena().auxilioTransporte;

       console.log(`salario basico: ${salarioBasico}\n
                    auxilio de transporte ${auxilioTransporte}`)

       return{
        salarioBasico:salarioBasico,
        auxilioAlimento: auxilioAlimento,
        auxilioTransporte: auxilioTransporte,
        descuentoExtraSalarial: descuentoExtraSalarial,
        deduccionPension: deduccionPension,
        deduccionSalud: deduccionSalud
       } 

             
}



