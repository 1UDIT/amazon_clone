import { Schema, model, models } from "mongoose";
import { boolean } from "zod";

const saveOrder = new Schema({
    address: {
        type: String,
        required: true
    }, 
    order: {
        type: [],
        required: true
    }, 
});

export default models.saveCart || model("saveCart", saveOrder); 