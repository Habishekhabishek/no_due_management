const express = require('express');
const cors = require('cors');
const app = express();
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
const requestFormRoutes = require('./routes/requestForm');


app.use(cors({
  origin: 'http://localhost:5173', //add frontend address
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());


app.use('/api/v1', authRoutes);
app.use('/api/v1', requestFormRoutes);


sequelize.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log('Server listening on port 3000');
    });
  })
  .catch(error => {
    console.error('Error syncing database:', error);
  });
