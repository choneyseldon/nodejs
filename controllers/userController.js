const db = require('../db');

// Get all users
exports.getusers = (req, res) => {
    db.query('SELECT * FROM users', (err, result) => {
        if (err) {
            res.status(404).json({ message: err.message });
        } else {
            res.json(result);
        }
    });
};

// Get a single user by ID
exports.getuser = (req, res) => {
    const userId = req.params.id;
    db.query('SELECT * FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) {
            res.status(404).json({ message: err.message });
        } else if (result.length === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json(result[0]);
        }
    });
};

// Create a new user
exports.createuser = (req, res) => {
    const newUser = req.body;
    db.query('INSERT INTO users SET ?', newUser, (err, result) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else {
            res.status(201).json({ message: 'User created', userId: result.insertId });
        }
    });
};

// Update an existing user by ID
exports.updateuser = (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    db.query('UPDATE users SET ? WHERE id = ?', [updatedUser, userId], (err, result) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json({ message: 'User updated' });
        }
    });
};

// Delete a user by ID
exports.deleteuser = (req, res) => {
    const userId = req.params.id;
    db.query('DELETE FROM users WHERE id = ?', [userId], (err, result) => {
        if (err) {
            res.status(400).json({ message: err.message });
        } else if (result.affectedRows === 0) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.json({ message: 'User deleted' });
        }
    });
};

