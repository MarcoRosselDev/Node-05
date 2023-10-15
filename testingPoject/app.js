console.log('testing porject');

const getData = async (a, b ) =>{
    const suma = a + b;
    return `la suma es ${suma}`;
}

const data = getData(5, 2).then(a => console.log(a))

console.log(data);
//console.log(data);