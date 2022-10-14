import { Schema, model, models } from "mongoose";

const itemSchema = new Schema({
  title: {
    type: String,
    image: {
      type: String,
      required: [true, "Item must have an image"],
    },
    required: [true, "Items must have a title."],
  },
  postedOn: {
    type: Date,
    default: Date.now(),
  },
  productType: {
    type: String,
    enum: {
      values: ["Print", "Sticker", "Shirt"],
      message: "{VALUE} is not supported. Must be: Print, Sticker or Shirt.",
    },
    required: [true, "Product type required: Print, Sticker or Shirt."],
  },
  price: {
    type: Number,
    required: [true, "Item must have a price."],
    min: [1, "Price must be at least 1 NT."],
  },
  available: {
    type: Boolean,
    default: true,
  },
  inStock: Number,
  amountSold: Number,
});

//TODO reviews? ratings? discounts(plus timer)?

const Item = models.Items || model("Items", itemSchema);

export default Item;
