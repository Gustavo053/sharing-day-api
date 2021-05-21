const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const DataSchema = require('./database/DataSchema');
const app = express();

mongoose.connect('mongodb://localhost:27017/sharing_day', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(cors());


app.get('/sharing_day', async (req, res) => {
    const response = await DataSchema.find();

    if (response[0].data === 'ligar') {
        res.status(200).send({ response });
    } else if (response[0].data === 'desligar') {
        res.status(202).send({ response });
    } else {
        res.status(500).send('Server error!');
    }
});

app.post('/sharing_day', async (req, res) => {
    console.log(req.body);
    await DataSchema.deleteMany({});
    const newData = await DataSchema.create({
        data: req.body.data
    });

    res.json(newData);
});

app.listen(3333, () => {
    console.log('✔ server running!');
});