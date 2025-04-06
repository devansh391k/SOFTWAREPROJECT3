const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

app.use(express.json());
app.use(cors());

// Dummy user database
const users = [
    { email: "user@example.com", password: bcrypt.hashSync("password123", 10) } // Hashed password
];

// Login route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: "Login successful", token });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

