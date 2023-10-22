require('dotenv').config();
const Product = require('./schemas/models.js');
const connectDB = require('./db/db.js');
const jsonProducts = require('./products.json');

const cargar = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log('Success!');
    process.exit(0)
  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

cargar()
