const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 5000;
const dataFilePath = path.join(__dirname, 'data.json');

app.use(cors());
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Helper function to write data to file
const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// Routes
app.post('/posts', (req, res) => {
    let { title, category, description, authorName, createdAt, price } = req.body;
    const posts = readData();
    price = price+"$"
    coverId = String(Math.floor(Math.random() * 14) + 1)
    const newPost = { id: Date.now(), title, category, description, authorName, createdAt,coverId, price };
    posts.push(newPost);
    writeData(posts);
    res.status(201).send('Post created successfully');
});

app.get('/posts', (req, res) => {
    const posts = readData();
    res.status(200).json(posts);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
