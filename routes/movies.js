const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const express = require('express');
const router = express.Router();
const { Movie, validate } = require('../models/movie');

router.get('/', async(req, res) => {

    const movies = await Movie.find().sort('name');
    res.send(movies);
});


router.post('/', auth, async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message); // bad request 400

    const genre = await Genre.findById(req.body.genreId);
    if(!genre) return res.status(400).send("Invalid genre.");

    const movie = new Movie({
        title: req.body.title,
        genre: {
            _id: genre._id,
            name: genre.name
        },
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    });
    try {
        await movie.save();
        res.send(movie);
    } catch (ex) {
        for (var field in ex.erros)
            console.log(ex.errors[field].message);
    }
});


router.put('/:id', auth, async(req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const movie = await Movie.findByIdAndUpdate(req.params.id, {
        title: req.body.title,
        genre: req.body.genre,
        numberInStock: req.body.numberInStock,
        dailyRentalRate: req.body.dailyRentalRate
    }, { new: true });

    if (!movie) res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});


router.get('/:id', async(req, res) => {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');
    res.send(movie);
});


router.delete('/:id', [auth, admin], async(req, res) => {
    const movie = await Movie.findByIdAndRemove(req.params.id);
    if (!movie) return res.status(404).send('The movie with the given ID was not found.');

    res.send(movie);
});


module.exports = router;