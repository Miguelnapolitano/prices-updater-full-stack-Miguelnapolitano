import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    flex-direction: column;
    gap: 4px;

    width: 100%;
    padding: 8px;
    
    border-bottom: 1px solid black;

    h2 {
        font-size: 18px;
        font-weight: 700;
    }

    p, span {
        font-size: 14px;
        font-weight: 400;
    }

    #rule {
        color: var(--color-error)
    }
`