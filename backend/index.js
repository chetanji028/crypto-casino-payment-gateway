const express = require('express');
const depositRoutes = require('./routes/depositRoutes');
const withdrawalRoutes = require('./routes/withdrawalRoutes');

require('dotenv').config();
const app = express();
app.use(express.json());

app.use('/api/deposit', depositRoutes);
app.use('/api/withdraw', withdrawalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
