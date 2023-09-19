/* const asb = false;

const miPromesa = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if (asb) {
      resolve('mensaje de resolve')
    } else {
      reject('mensaje de reject')
    }
  }, 3000)
})

miPromesa.then(value => console.log(value)).catch(err => console.log(err)) */

// Encadenar promesas

function procesarPedido(respuesta) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (respuesta) {
        resolve(`procesar Pedido: ${respuesta}`)
      } else{
        reject(`preceso rechazado en procesar pedido`)
      }
    }, 4000)
  })
}

function segundaPromesa(resultado) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if (resultado){
        resolve(`segundo Proseso : ${resultado} --> Aprobado`)
      } else{
        reject(`segundo Proseso: ${resultado} --> rechazado
        en segunda promesa`)
      }
    }, 2000)
  })
}

respuesta = false
procesarPedido(respuesta)
  .then((res)=>{
    console.log(res);
    return segundaPromesa(res)
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))