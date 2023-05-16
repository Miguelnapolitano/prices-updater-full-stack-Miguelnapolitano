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
            
    } catch (error) {
        return res
            .status(500)
            .json({ error: "the request could not be executed" });
        }
  }

//   for (const product of productsResponse) {
//         const packQuery = "SELECT packs.pack_id, GROUP_CONCAT(products.code SEPARATOR ',') AS related_products FROM packs JOIN products ON packs.product_id = products.code WHERE packs.pack_id = ? GROUP BY packs.pack_id";

//         const [pack] = await connection
//         .promise()
//         .query(packQuery, [product.product_code, product.product_code]);

//         let dbPack: any;

//         if (Array.isArray(pack)) {
//             dbPack = pack[0];
//         }


        
//   }
  res.json();
};

export default updateValues;
