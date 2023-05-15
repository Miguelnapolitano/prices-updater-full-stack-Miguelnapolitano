interface iProductsRequest {
    product_code: number,
    new_price: number
}

interface iProductResponse {
    product_code: number, 
    name: string,
    current_price: number,
    new_Price: number,
    broken_rule?: string
}


export { iProductsRequest, iProductResponse }