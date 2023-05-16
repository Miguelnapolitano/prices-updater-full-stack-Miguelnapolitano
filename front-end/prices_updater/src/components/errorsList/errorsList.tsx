import { StyledList } from "./style"
import { Card } from "../cardError.ts/card"
import { UpdaterContext } from "../../contexts"
import { useContext } from "react"

import { iError } from "../cardError.ts/card";

export const ErrorsList = () => {

    const { productList } = useContext(UpdaterContext)

    return(
        <StyledList>
            {productList.map((product: iError) => 
                <Card key={product.product_code} product={product}/>
            )}
        </StyledList>
    )
}