import { Request, Response, NextFunction } from "express";
import { Readable } from "stream";
import readline from "readline";
import { iProductsRequest } from "../interfaces/products.interfaces";

const catchCsvValues = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const buffer = req.file?.buffer.toString();

  const readableFile = new Readable();
  readableFile.push(buffer);
  readableFile.push(null);

  const productsline = readline.createInterface({
    input: readableFile,
  });

  const productsRequest: iProductsRequest[] = [];
  let isFirstLine = true;
  let lineNumber = 0

  for await (let line of productsline) {
    if (isFirstLine) {
    lineNumber ++
      if (line !== "product_code,new_price") {
        return res.status(400).json({
          error:
            'Invalid CSV format. Expected columns named "product_code" and "new_price".',
        });
      }
      isFirstLine = false;
      continue;
    }
    lineNumber ++
    const productArr = line.split(",");

    if (productArr[1].split(".")[1].length != 2){
        return res.status(400).json({
            error:
                `Invalid new_price value format at line ${lineNumber}. Expected two decimal places.`
          });
    }

    productsRequest.push({
    product_code: Number(productArr[0]),
    new_price: Number(productArr[1]),
    });
  }

  res.locals.productsRequest = productsRequest;

  return next();
};

export default catchCsvValues;
