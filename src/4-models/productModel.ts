import Joi from "../../node_modules/joi/lib/index";

class ProductModel {
  public id: number;
  public name: string;
  public price: number;
  public stock: number;

  public constructor(product: ProductModel) {
    this.id = product.id;
    this.name = product.name;
    this.price = product.price;
    this.stock = product.stock;
  }

  public static ValidationSchema = Joi.object({
    id: Joi.number().integer().positive().optional(),
    name: Joi.string().required().min(2).max(50),
    price: Joi.number().required().min(0).max(9999),
    stock: Joi.number().required().min(0).max(100000),
  });

  public validation(): string {
    const result = ProductModel.ValidationSchema.validate(this);
    return result.error?.message;
  }
}

export default ProductModel;
