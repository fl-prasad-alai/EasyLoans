const express = require('express');
require('dotenv').config();

const leadRoutes = require('./routes/leadRoutes');
const loanRoutes = require('./routes/loanRoutes');
const customerRoutes = require('./routes/customerRoutes');
const businessRoutes = require('./routes/businessRoutes');

const app = express();
app.use(express.json());

// ✅ Add a basic home route
app.get('/', (req, res) => {
  res.send('Welcome to EasyLoans API 🚀');
});

// ✅ Register all API routes
app.use('/api/leads', leadRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/businesses', businessRoutes);

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
