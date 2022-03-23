const Joi = require('joi');
const mongoose = require('mongoose');
const {genreSchema} = require("./genre")

const Movie = mongoose.model('Movie', new mongoose.Schema({
    title: { type: String, required: true },
    genre: { type: genreSchema, required: true },
    numberInStock: {
        type: Number,
        required: true,
        default: 1,
        min: 0,
        max: 255
    },
    dailyRentalRate: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 255
    }
}));

function validateMovie(movie) {
    const schema = Joi.object({
        title: Joi.string().min(1).required(),
        genreId: Joi.objecId.string().required(),
        numberInStock: Joi.number().min(0).max(255).required(),
        dailyRentalRate: Joi.number().min(0).max(255).required()
    })
    return schema.validate(movie);
}

exports.validate = validateMovie;
exports.Movie = Movie;