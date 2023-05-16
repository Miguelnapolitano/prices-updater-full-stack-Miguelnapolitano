import { Request, Response } from "express";
import {
  iProductsRequest,
  iUpdateProduct,
  iProductResponse,
} from "../interfaces/products.interfaces";
import connection from "../database/config";

const updateValues = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const productsRequest: iProductsRequest[] = res.locals.productsRequest;

  const productsResponse: iProductResponse[] = [];

  for (const product of productsRequest) {
    const productQuery = "SELECT * FROM products WHERE code = ?";

    const [rows] = await connection
      .promise()
      .query(productQuery, [product.product_code]);

    let dbProduct: any;

    if (Array.isArray(rows)) {
      dbProduct = rows[0];
    }

    productsResponse.push({
      product_code: dbProduct.code,
      name: dbProduct.name,
      current_price: Number(dbProduct.sales_price),
      new_Price: product.new_price,
    });
  }

  for (const product of productsResponse) {
    try {
      const productQuery = "UPDATE products SET sales_price = ? WHERE code = ?";

      await connection
        .promise()
        .query(productQuery, [product.new_Price, product.product_code]);

      const packQuery = "SELECT * FROM packs WHERE product_id = ?";

      const [pack] = await connection
        .promise()
        .query(packQuery, [product.product_code]);

      let dbPack: any;

      if (Array.isArray(pack)) {
        dbPack = pack[0];
      }

      if (dbPack) {
        const productCurrentValueAtPack = Number(
          dbPack.qty * product.current_price
        );
        const productNewValueAtPack = Number(dbPack.qty * product.new_Price);

        const packValueDifference = Number(
          productNewValueAtPack - productCurrentValueAtPack
        ).toFixed(2);

        const productQuery = "SELECT * FROM products WHERE code = ?";

        const [rows] = await connection
          .promise()
          .query(productQuery, [dbPack.pack_id]);

        let dbProduct: any;

        if (Array.isArray(rows)) {
          dbProduct = rows[0];
        }

        const newPackPrice =
          Number(dbProduct.sales_price) + Number(packValueDifference);

        const newPricePackQuery =
          "UPDATE products SET sales_price = ? WHERE code = ?";

        await connection
          .promise()
          .query(newPricePackQuery, [newPackPrice, dbPack.pack_id]);
      }

      const packQuery2 = "SELECT * FROM packs WHERE pack_id = ?";

      const [pack2] = await connection
        .promise()
        .query(packQuery2, [product.product_code]);

      let dbPack2: any;

      if (Array.isArray(pack2)) {
        dbPack2 = pack2;
      }

      if (dbPack2[0]) {
        const productCode = dbPack2[0].product_id;
        const quantity = dbPack2[0].qty;
        const unitPrice = (
          Number(product.new_Price) / Number(quantity)
        ).toFixed(2);
        const newPricePackQuery =
          "UPDATE products SET sales_price = ? WHERE code = ?";

        await connection
          .promise()
          .query(newPricePackQuery, [unitPrice, productCode]);
      }
    } catch (error) {
      return res
        .status(500)
        .json({ error: "the request couldn't be executed." });
    }
  }
  res.json();
};

export default updateValues;
