import React from 'react';
import { ButtonsDiv } from './components/buttons/buttons';
import { ErrorsList } from './components/errorsList/errorsList';
import { Input } from './components/input/input';

function App() {
  return (
    <div className="App">
      <Input/>
      <ButtonsDiv/>
      <ErrorsList/>
    </div>
  );
}

export default App;
