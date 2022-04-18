import mongoose from "mongoose";

mongoose.connect('mongodb+srv://Kai-wang:gatitos0@cluster0.mi68f.mongodb.net/gatitos-blog')

const db = mongoose.connection;

export default db;