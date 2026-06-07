const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const itemsRouter = require('./routes/items');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/v1/items', itemsRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
