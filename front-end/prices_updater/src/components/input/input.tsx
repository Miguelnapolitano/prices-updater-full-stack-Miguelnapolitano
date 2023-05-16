import { StyledInput } from "./style";
import { useContext } from "react";
import { UpdaterContext } from "../../contexts";

export const Input = () => {
  const { handleFileChange } = useContext(UpdaterContext);
  return (
    <StyledInput>
      <label>Carregue o arquivo .csv</label>
      <input
        id="file-input"
        placeholder="Carregue aqui o seu arquivo..."
        type="file"
        accept=".csv"
        onChange={handleFileChange}
      />
    </StyledInput>
  );
};
