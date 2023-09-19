const asb = false;

const miPromesa = new Promise((resolve, reject)=>{
  setTimeout(()=>{
    if (asb) {
      resolve('mensaje de resolve')
    } else {
      reject('mensaje de reject')
    }
  }, 3000)
})

miPromesa.then(value => console.log(value)).catch(err => console.log(err))