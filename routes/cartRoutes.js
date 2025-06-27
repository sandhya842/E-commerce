const express = require('express');
const router = express.Router();
const CartRoutes = require('../models/CartRoutes');


router.post('/', async (req, res) => {
  const cart = new Cart(req.body);
  const saved = await cart.save();
  res.status(201).json(saved);
});


router.get('/', async (req, res) => {
  const carts = await Cart.find();
  res.json(carts);
});


router.get('/:id', async (req, res) => {
  const cart = await Cart.findById(req.params.id);
  if (!cart) return res.status(404).json({ error: 'Cart not found' });
  res.json(cart);
});


router.put('/:id', async (req, res) => {
  const updated = await Cart.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// Delete cart
router.delete('/:id', async (req, res) => {
  await Cart.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;

