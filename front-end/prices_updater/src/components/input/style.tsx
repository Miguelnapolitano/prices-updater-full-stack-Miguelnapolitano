import styled from "styled-components";

export const  StyledInput = styled.fieldset`
    height: 128px;
    width: 90%;

    margin: 32px auto;
    padding: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;

    background-color: var(--color-grey-0);

    border-radius: 8px;

    & > label {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--color-secondary)
    }

    & > input {

        border: 1px solid black;
        border-radius: 8px;
        padding: 8px;

        background-color: var(--color-white);

    }

    & > input:hover {
        cursor: pointer;
    }
`