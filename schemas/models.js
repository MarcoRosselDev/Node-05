//import mongoose from 'mongoose'; ---> lanza error, no se puede usar imoprt fuera de los modulos
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type:String,
    required: [true, 'El nombre del producto deve ser ingresado.']
  },
  price: {
    type: Number,
    required: [true, 'El precio deve ser incluido.']
  },
  featured: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Number,
    default: 4.5
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: '{VALUE} is not supported'
    } 
  }
})

const nuevoUsuario = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio.']
  },
  clave: {
    type: String,
    required: [true, 'La clave es obligatorio.']
  }
})

module.exports = mongoose.model('Product', productSchema);
module.exports = mongoose.model('NuevoUsuario', nuevoUsuario);

/* const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const Blog = new blogSchema('blog' , blogSchema);

module.exports = Blog; */

//const newBlog = new Blog()
//await newBlog.save();