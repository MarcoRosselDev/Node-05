/* definicion:
es el analisis y resumen de datos.
que no altera los datos de origen.
se realizan en orden.
se ejecutan como parte de una peticion.
nos livera de crear el complejo mecanismo.
podemos encadenar agregaciones,
para construir un conducto.
un conducto es una seria de etapas;
en las que los datos pueden ser filtrados, ordenados, agrupados y transformados.
los documentos que se generan se convierte en una entrada
en la siguiente etapa.

sintaxis:

db.collection.aggregate([
  { $state_name: {  <expression>  }},--->stage
  { $state_name: {  <expression>  }}
])
stage---> etapas, cada una se ejecuta en orden y por separado.

stages mas utilizados: 
$match
$group
$sort
*/

/* resumen de mongodb university

Introduction to MongoDB Aggregation[,agregeishion]
This section contains key definitions for this lesson, 
as well as the code for an aggregation 
pipeline[tuberia, paipline].

Definitions
Aggregation: Collection and summary of data

Stage: One of the built-in methods that can be completed on the data, but does not permanently alter it

Aggregation pipeline: A series of stages completed on the data in order

Structure of an Aggregation Pipeline
db.collection.aggregate([
  {
    $stage1: {
      { expression1 },
      { expression2 }...
    },
    $stage2: {
        { expression1 }...
    }
  }
])
*/