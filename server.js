const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const userRoutes = require('./routes/userRoutes');



const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());



app.use('/api', userRoutes);

let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
];

app.get('/items', (req, res) => {
    res.json(items);
});

app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    res.json(item);
});

app.post('/items', (req, res) => {
    const newitem = { id: items.length + 1, name: req.body.name };
    items.push(newitem);
    res.json(newitem);
});

app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json("Item not found");
    item.name = req.body.name;
    res.json(item);
});

app.delete('/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).json("Item not found");
    items.splice(itemIndex, 1);
    res.json({ message: 'Item deleted' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});