const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: String,
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      quantity: Number
    }
  ],
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'pending' }
});

module.exports = mongoose.model('Order', orderSchema);
