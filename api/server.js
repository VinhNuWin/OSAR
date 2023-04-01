const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/OSAR", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to OSAR Database"))
    .catch(console.error);

const Osar = require('./models/Registry');

app.get('/registry', async (req, res) => {
    const registry = await Osar.find();

    res.json(registry);
});

app.post('/registry/new', (req, res) => {
    const registry = new Osar({
        date: req.body.date,
        incidentLocation: req.body.incidentLocation,
        alcoholInvolved: req.body.alcoholInvolved
    });

    registry.save();

    res.json(registry);
})

app.delete('/registry/delete/:id', async (req, res) => {
    const result = await Osar.findByIdAndDelete(req.params.Id);

    res.json(result);
});

app.put('/todo/complete/:id', async (req, res) => {
    const registry = await Osar.findById(req.params.id);

    registry.complete = !registry.complete;

    registry.save();

    res.json(registry);
});

app.listen(3001, () => console.log("Server started on port 3001"));