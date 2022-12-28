import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import ProductModel from "../4-models/productModel";

async function getAllProducts() {
  const SQL = `
  SELECT 
  productID AS id,
  productName AS name,
  unitprice AS price, 
  unitsInStock AS stock  
  FROM products
  `;

  const products = await dal.execute(SQL);
  return products;
}

// GET one
async function getOneProduct(id: number) {
  const SQL = `
  SELECT 
  productID AS id,
  productName AS name,
  unitprice AS price, 
  unitsInStock AS stock  
  FROM products
  WHERE productID = ${id}
  `;

  const products = await dal.execute(SQL);
  const product = products[0];

  if (!product) throw console.error("error");

  return product;
}

// POST
async function addNewProduct(product: ProductModel): Promise<ProductModel> {
  // Validation
  const err = product.validation();
  if (err) {
    console.log(err);
    return;
  }

  const SQL = `
  INSERT INTO
  products (productName, unitprice, unitsInStock)
  VALUES ('${product.name}','${product.price}','${product.stock}');
  `;

  const info: OkPacket = await dal.execute(SQL);

  product.id = info.insertId;
  return product;
}

export default {
  getAllProducts,
  getOneProduct,
  addNewProduct,
};
