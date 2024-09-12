import { Schema, model, models } from "mongoose";

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
        default: 'Monday'
    }, 
});

export default models.AddressSave || model("AddressSave", Address); 