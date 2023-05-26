import mongoose from 'mongoose';

const FoodSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    price: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
    shop: {
      type: Number,
    },
  },
  {
    timestamps: false,
  },
);

export default mongoose.model('fooditems', FoodSchema);
