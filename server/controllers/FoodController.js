import OrderSchema from '../models/OrderSchema.js';
import foodSchema from '../models/FoodSchema.js';

export const create = async (req, res) => {
  try {
    const doc = new foodSchema({
      title: req.body.title,
      text: req.body.text,
      price: req.body.price,
      imageUrl: req.body.imageUrl,
      shop: req.body.shop,
    });

    const foodCard = await doc.save();

    res.json(foodCard);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'cant make post =(',
    });
  }
};

export const getAll = async (req, res) => {
  try {
    const foodCard = await foodSchema.find();

    res.json(foodCard);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'cant find posts',
    });
  }
};

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id;

    const doc = await foodCard.findOne({ _id: postId });
    if (!doc) {
      return res.status(404).json({
        message: 'this post does not exist',
      });
    }
    res.json(doc);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'cant find posts',
    });
  }
};

export const submitOrder = async (req, res) => {
  try {
    const order = new OrderSchema({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      price: req.body.price,
      shop: req.body.shop,
      orederId: req.body.orederId,
      title: req.body.title,
      count: req.body.count,
      orderItems: req.body.orderItems,
    });
    const orderCart = await order.save();

    res.json(orderCart);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: 'cant find posts',
    });
  }
};
