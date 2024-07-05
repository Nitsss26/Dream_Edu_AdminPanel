import mongoose from "mongoose";

const s6Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description1: String,
    description2: String,
    description3: String,
    description4: String,
    description5: String,
    description6: String,
    description7: String,
    description8: String,
    description9: String,
    description10: String,
    image1: {
        type: String,
        // required: true,
    },
    image2: {
        type: String,
        // required: true,
    },
    image3: {
        type: String,
        // required: true,
    },
    image4: {
        type: String,
        // required: true,
    },
    image5: {
        type: String,
        // required: true,
    },
    image6: {
        type: String,
        // required: true,
    }, image7: {
        type: String,
        // required: true,
    }, image8: {
        type: String,
        // required: true,
    }, image9: {
        type: String,
        // required: true,
    }, image10: {
        type: String,
        // required: true,
    },
    field1: String,
    field2: String,
    field3: String,
    field4: String,
    field5: String,
    field6: String,
    field7: String,
    field8: String,
    field9: String,
    field10: String,
    field11: String,
    field12: String,
    field13: String,
    field14: String,
    field15: String,
    field16: String,
    field17: String,
    field18: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }
});

const S6 = mongoose.models.S6 || mongoose.model("S6", s6Schema);

export default S6;
