const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId  

const cartSchema = mongoose.Schema(
  {
    userId: { type: ObjectId, requierd: true, unique: true, ref: "User"  },
    items: [{
      _id: false,
      productId: { type: ObjectId, ref: 'Products', requierd: true, _id: false },
      quantity: { type: Number, requierd: true, min: 1, }
    }],
    totalPrice: { type: Number, required: true },
    totalItems: { type: Number, required: true },

  }, { timestamps: true })

module.exports = mongoose.model('Cart', cartSchema)