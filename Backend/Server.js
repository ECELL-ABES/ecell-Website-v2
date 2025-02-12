// Backend for handling email submissions

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config(); 

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Email Schema and Model
const emailSchema = new mongoose.Schema({
    email: { type: String, required: true },
}, { timestamps: true });

const Email = mongoose.model('E-cell-Email', emailSchema);

// Routes
app.post('/api/submit-email', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        const existingEmail = await Email.findOne({ email });
        if (existingEmail) {
            return res.status(200).json({ message: 'Successfully connected' });
        }

        const newEmail = new Email({ email });
        await newEmail.save();
        res.status(201).json({ message: 'Email saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Serve the frontend
app.use(express.static('public'));

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
