import { StyledCard } from "./style"

export interface iError {
    product_code: number, 
    name: string,
    current_price: number,
    new_Price: number,
    broken_rule?: string
}

interface iCardProps {
    product: iError
}

export const Card = ({product}: iCardProps) => {
    return(
        <StyledCard>
            <h2>{product.name}</h2>
            <p id="code"><strong>código:</strong> {product.product_code}</p>
            <span>
            <strong>Preço atual:</strong> R$ {product.current_price}</span>
            <span><strong>Novo preço:</strong> R$ {product.new_Price}</span>
            <p id="rule">{product.broken_rule}</p>
        </StyledCard>
    )
}