const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PORT } = require('./config');
const { error404, errorHandler } = require('./middleware');

const app = express();
// MongoDB
const connectDB = require('./db');
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

// routes
app.use('/api/user', require('./routes/auth.routes'))
app.use('/api/category', require('./routes/category.routes'))
app.use('/api/product', require('./routes/product.routes'))
app.use('/api/order', require('./routes/order.routes'))
app.use('/api/payment', require('./routes/payment.routes'))


// errorhandlers
app.use('*', error404);
app.use(errorHandler);

// listen
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
})