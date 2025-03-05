const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyparser.json());

let users = [
    { user: "root", password: "123345", name: "Choney" },
    {
        user: "admin",
        password: "2002",
        name: "Admin"
    }
];

app.get('/users', (req, res) => {
    res.json(users);
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log(`users-services is running on port ${PORT}`);
});