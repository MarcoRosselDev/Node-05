// nesecitamos leer asincronamente los archivos text1.txt y text2.txt
// pero en orden usando el metodo async await y promise

const {readFile} = require('fs');
const { resolve } = require('path');
// console.log(readFile);

/* const reader = async (path)=>{
  await readFile(path, 'utf-8',(err, data)=>{
    if (err) {
      console.log(err);
      return console.log(`error: ${err}`);
    } else {
      console.log(data);
      return data
    }
  })
} */

const promesa = new Promise(path, (res, rej)=>{
  if (true) {
    res(
      readFile(path, 'utf-8',(err, data)=>{
        if (err) {
          console.log(err);
          return console.log(`error: ${err}`);
        } else {
          //console.log(data);
          return data
        }
      })
    )
  }
  rej("no se puedo ejecutar")
})

const first = './text1.txt'
const second = './text2.txt'
/* reader(first)
reader(second) */
promesa.then().catch()
