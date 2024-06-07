function sumar(acumulado,valor){
    let suma;
    return new Promise((res,rej)=>{
        setTimeout(() => {
            if(valor==2) return rej({msg:"no me gusta el numero 2"})
            suma = acumulado + valor;
            res(suma)
        }, 300);
    })
    //return suma; 
}

console.log('al inicio');
let acumulado = 0;
async function main(){
    acumulado = await sumar (acumulado,4)
    acumulado = await sumar (acumulado,4)
    acumulado = await sumar (acumulado,4)
    console.log(acumulado);
}
main();
/*
acumulado = sumar(acumulado,4,);
acumulado = sumar(acumulado,4);
console.log('al final');
console.log(acumulado);*/