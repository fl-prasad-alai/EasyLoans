const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');

// Initialize app
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/leads', require('./routes/leadRoutes'));
app.use('/api/loans', require('./routes/loanRoutes'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to EasyLoans API');
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
