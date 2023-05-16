import styled from "styled-components";

export const StyledButtonsDiv = styled.div`
    width: 90%;
    height: 86px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-around;

    & > button {
        height: 80%;
        width: 200px;

        border-radius: 8px;

        border: 1px solid var(--color-grey-600);

        font-size: 22px;
        font-weight: 700;
    }

    #validateButton{
        color: var(--color-grey-600);

        background-color: var(--color-secondary);
    }

    .atualizeButtonDisabled{
        cursor: not-allowed;
        
        color: var(--color-grey-100);

        background-color: var(--color-grey-0);
    }

    & > button:hover{
        filter: opacity(90%);
        scale: 1.1;
    }

    .able {
        color: var(--color-grey-600);

        background-color: var(--color-secondary);

        cursor: pointer;
    }

`
