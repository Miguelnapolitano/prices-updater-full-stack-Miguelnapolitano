import { createContext, useState } from "react";
import { iError } from "../components/cardError.ts/card";

interface iUpdaterContext {
  validateCsv: () => void;
  updatePrices: () => void;
  productList: iError[];
  handleFileChange: (event: any) => void;
}

interface iiUpdaterContextProps {
  children: React.ReactNode;
}

export const UpdaterContext = createContext({} as iUpdaterContext);

export const MenuProvider = ({ children }: iiUpdaterContextProps) => {
  
  const [productList, setProductList] = useState<iError[]>([])
  const [input, setInput] = useState(null)

  const handleFileChange = (event: any) => {
    setInput(event.target.files[0])
  }
    
  const validateCsv = async () => {
    if (input) {
      const formData = new FormData();
      formData.append('file', input);
  
      try {
        const response = await fetch('http://localhost:5000/validate', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          const data = await response.json();
          setProductList(data);

          if (!data.some((item: iError) => "broken_rule" in item)) {
            const atualizeButton = document.getElementById("atualizeButton")
            atualizeButton!.classList.add('able')
          }
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };  
  
  const updatePrices = async () => {
    if (input) {
      const formData = new FormData();
      formData.append('file', input);
      try {
        const response = await fetch('http://localhost:5000/update', {
          method: 'PATCH',
          body: formData,
        });
  
        if (response.ok) {
          window.location.reload()        
          
        } else {
          console.error('Error:', response.status);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }


    return (
        <UpdaterContext.Provider
        value={{validateCsv, productList, handleFileChange, updatePrices}}
        >
        {children}
        </UpdaterContext.Provider>
    );
};
