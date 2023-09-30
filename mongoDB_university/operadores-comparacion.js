// posts
//db.<colecction>.insertOne({...})--->post un documento
//db.<colecction>.insertMany([{...},{...},{...}])--->post muchos documento

// queris
//db.<colecction>.find({field:{$eq:<value>}})--->retorna todas las coisidencias del value en el field proporcionado
//db.<colecction>.find({field:{$in:[<value>,<value>]}})
// --> retorna los valores que coinsidan en el field proporcionado.

// OPERADORES DE COMPARACION
//$gt: --->greater than = mayor que = a>b
//$lt: --->less than = menor que = a<b
//$lte:--->less than or equal to = a<=b
//$gte:--->greater than or equal to = a>=b

//db.transactions.find({"transactions":$elemMatch:{ "amount":$lte:4500}})
//db.transactions.find({"transactions":$elemMatch:{ "amount":$lte:4500, "transaction_code":$eq:"sell"}})
//db.transactions.find({"amount":{$elemMatch:{$lte:4500,$eq:"transaction_code"}})}
//db.transactions.find({"amount": {$elemMatch:{$lte:4500}},"transaction_code":{$eq:"shell"}})

db_lab = {
  _id: ObjectId("5ca4bbc7a2dd94ee581623b7"),
  account_id: 599752,
  limit: 10000,
  products: [
    "Brokerage",
    "Commodity",
    "Derivatives",
    "CurrencyService",
    "InvestmentStock",
  ],
  a: {
    _id: ObjectId("5ca4bbc7a2dd94ee581623ba"),
    account_id: 813016,
    limit: 10000,
    products: ["InvestmentStock", "CurrencyService", "Brokerage"],
  },
  b: {
    _id: ObjectId("5ca4bbc7a2dd94ee581623be"),
    account_id: 658755,
    limit: 10000,
    products: ["CurrencyService", "Commodity", "InvestmentStock"],
  },
};

//db.transactions.find({"transactions.amount": {$lte: 4500}})
db.transactions.find({
  transactions: {
    $elemMatch: { amount: { $lte: 4500 }, transaction_code: { $eq: "sell" } },
  },
});
