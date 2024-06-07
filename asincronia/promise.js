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
sumar(acumulado,4)
.then((res)=>sumar(res,4))
.then((res)=>sumar(res,2))
.then((res)=>console.log(res))
.catch((err)=>console.log(err.msg));
/*
acumulado = sumar(acumulado,4,);
acumulado = sumar(acumulado,4);
console.log('al final');
console.log(acumulado);*/