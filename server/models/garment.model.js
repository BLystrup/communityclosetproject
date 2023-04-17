const mongoose = require('mongoose');

const GarmentSchema = new mongoose.Schema({
    owner: {
        type: String,
        required: [true, "An owner name is required."],
        minLength: [2, "Your name must be at least 2 characters."]
    },
    brand: {
        type: String,
        required: [true, "Brand name is required."],
        minLength: [2, "Brand name must be at least 2 characters."]
    },
    style: {
        type: String,
        required: [true, "Style name is required."],
        minLength: [4, "Style name must be at least 4 characters."]
    },
    size: {
        type: String,
        required: [true, "Size is required."],
        minLength: [1, "Size must be at least 1 character."]
    },
    color: {
        type: String,
        required: [true, "Garment color is required."],
        minLength: [3, "Garment color must be at least 3 characters."]
    },
    fit: {
        type: String,
        required: [true, "Garment fit is required."],
        minLength: [5, "Garment fit must be at least 5 characters."]
    },
    category: {
        type: String,
        enum: ["select a category", "top", "jacket", "dress", "skirt", "short", "pant", "accessory", "shoes"],
        default: "select a category"
    },
    description: {
        type: String,
        required: [true, "Garment description is required."],
        minLength: [10, "A description of the garment must be at least 10 characters."]
    },
    availability: {
        type: String,
        enum: ["yes", "no"],
        default: "yes"
    },
    image: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

module.exports = mongoose.model("Garments", GarmentSchema);