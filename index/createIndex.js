db.customers.createIndex(
  { email: 1 }, //--->key: 1 y se crea un indice de la key
  { unique: true }//----> espesifica valores unicos, para que no se repitan valores.
  // por ejemplo si intentamos agregar un correo ya existente, mongodb nos lanza error.  
)

db.customers.getIndexes() // nos retorna un array con los index creados

//lab 1
db.transfers.getIndexes()

//lab 2
db.accounts.createIndex(
  { account_id: 1 },
  {
    unique: true
  }
)