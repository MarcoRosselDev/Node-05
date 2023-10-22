import mongoose from 'mongoose';
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
    enum: ['ikea', 'liddy', 'caressa', 'marcos']
  }
})

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