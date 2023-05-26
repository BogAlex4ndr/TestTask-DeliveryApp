import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    orderId: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    price: {
      type: Number,
    },
    shop: {
      type: Number,
    },
    count: {
      type: Number,
    },
    orderItems: {
      type: Array,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Orders', OrderSchema);
