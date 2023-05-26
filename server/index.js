import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { create, getAll, getOne, submitOrder } from './controllers/FoodController.js';

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(`mongodb+srv://jakasyak21:bM95EEGPM6LMTvCI@fooddeliverydb.vdv3sxn.mongodb.net/`)
  .then(() => {
    console.log('DB connect successfuly');
  })
  .catch((err) => console.log('DB error', err));

app.get('/', (req, res) => {
  res.send('hello');
});

app.post('/foodlist', create);
app.post('/order', submitOrder);
app.get('/foodlist', getAll);
app.get('/foodlist:id', getOne);

app.listen(PORT, () => console.log(`server live on port ${PORT}`));
