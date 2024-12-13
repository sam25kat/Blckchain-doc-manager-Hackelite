const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/', async (req, res) => {
    try {
        const response = await axios.get('http://127.0.0.1:5000/');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/signup', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/signup', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/login', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/admin_login', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/admin_login', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/faculty', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/faculty', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/admin', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/admin', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/api/manage_circular', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/manage_circular', req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Express server running on http://localhost:${PORT}`);
});
