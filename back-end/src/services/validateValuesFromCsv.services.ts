import { Request, Response } from "express";
import {
  iProductsRequest,
  iProductResponse,
} from "../interfaces/products.interfaces";
import connection from "../database/config";

const validateValuesFromCsv = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const productsRequest: iProductsRequest[] = res.locals.productsRequest;

  const validatedResponse: iProductResponse[] = [];

  for (const product of productsRequest) {
    const query = "SELECT * FROM products WHERE code = ?";

    const [rows] = await connection
      .promise()
      .query(query, [product.product_code]);

    let dbProduct: any;

    if (Array.isArray(rows)) {
      dbProduct = rows[0];
    }

    const possibleDifference = Number((dbProduct.sales_price * 0.1).toFixed(2));

    const requestDifference = Number(
      Math.abs(
        Number(product.new_price) - Number(dbProduct.sales_price)
      ).toFixed(2)
    );

    const packQuery = "SELECT * FROM packs WHERE pack_id = ?"

    const [pack] = await connection.promise().query(packQuery, [product.product_code])

    let dbPack2: any;

    if (Array.isArray(pack)) {
        dbPack2 = pack;
    }

    if (dbPack2){
        if(dbPack2.length > 1){
          validatedResponse.push({
            product_code: dbProduct.code,
            name: dbProduct.name,
            current_price: Number(dbProduct.sales_price),
            new_Price: product.new_price,
            broken_rule: "Não é possível atualizar o preço de um pack formado de produtos diferentes. Por favor, atualize os valores dos produtos individualmente."
          })          
    }else if (requestDifference != possibleDifference) {
      validatedResponse.push({
        product_code: dbProduct.code,
        name: dbProduct.name,
        current_price: Number(dbProduct.sales_price),
        new_Price: product.new_price,
        broken_rule: `Só é possível atualizar o valor em R$ ${possibleDifference} acima ou abaixo do preço atual.`,
      });
    } else if (product.new_price < dbProduct.cost_price) {
      validatedResponse.push({
        product_code: dbProduct.code,
        name: dbProduct.name,
        current_price: Number(dbProduct.sales_price),
        new_Price: product.new_price,
        broken_rule: `Não é possível ajustar o valor para menos do que o preço de custo, que é R$ ${dbProduct.cost_price}.`,
      });
    } else {
      validatedResponse.push({
        product_code: dbProduct.code,
        name: dbProduct.name,
        current_price: Number(dbProduct.sales_price),
        new_Price: product.new_price,
      });
    }
  }}
  return res.json(validatedResponse);
};

export default validateValuesFromCsv;
