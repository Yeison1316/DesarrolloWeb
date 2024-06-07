function sumar(acumulado,valor,callback){
    let suma;
    setTimeout(() => {
        suma = acumulado + valor;
        callback(suma)
    }, 300);
    //return suma; 
}

console.log('al inicio');
let acumulado = 0;
sumar(acumulado,4,(suma)=>{
    sumar(suma,4,(suma)=>{
        console.log(suma);
    })
});
/*
acumulado = sumar(acumulado,4,);
acumulado = sumar(acumulado,4);
console.log('al final');
console.log(acumulado);*/