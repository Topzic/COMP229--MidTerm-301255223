/*
    Project:        Booklist Webapp
    Author:         Ian Cunningham
    Student ID:     301255223
    Date:           10/28/2022
    File:           books.js
*/

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    name: String,
    author: String,
    published: String,
    description: String,
    price: String
}, {
    timestamps: true,
    collection: 'books'
});

export default mongoose.model('Books', BookSchema);