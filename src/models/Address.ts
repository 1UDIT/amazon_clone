import { Schema, model, models } from "mongoose";
import { boolean } from "zod";

const Address = new Schema({
    Name: {
        type: String,
        required: true
    }, 
    Mobile: {
        type: Number,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    Address: {
        type: String, 
        required: true, 
    }, 
    activeAddress: {
        type: Boolean,  
        default: false
    }, 
});

export default models.AddressSave || model("AddressSave", Address); 