import { StyledButtonsDiv } from "./style";
import { UpdaterContext } from "../../contexts";
import { useContext } from "react"

export const ButtonsDiv = () => {

    const { validateCsv, updatePrices } = useContext(UpdaterContext)

    return (
        <StyledButtonsDiv>
            <button id="validateButton" onClick={validateCsv}>Validar</button>
            <button id="atualizeButton" className="atualizeButtonDisabled" onClick={updatePrices}>Atualizar</button>
        </StyledButtonsDiv>
    )
}