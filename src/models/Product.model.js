import { model ,Schema } from "mongoose";

const Product = Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
})

export default new model("Product",Product)