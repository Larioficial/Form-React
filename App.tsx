import React, { FormEvent, useState } from "react";


const App = () => {
  const [name, setName] = useState('');
  const handleNomeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setName (event.target.value);
  }

  const [sobrenome, setSobre] = useState('');
  const handleSobrenomeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setSobre (event.target.value);
  }

  const [idade, setIdade] = useState('');
  const handleIdadeInput = (event: React.FormEvent<HTMLInputElement>) => {
    setIdade (event.target.value);

  }
  return (
    <div className="forms">
      <div>
        Nome:
        <input type="text"  value={name} onChange={handleNomeInput}/>
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={handleSobrenomeInput}/>
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleIdadeInput}/>
      </div>

      <hr/>

      Olá {name + '' + sobrenome}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;