import { useState } from 'react';

import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {
  const [indiceVetor, setIndiceVetor] = useState('');
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cidade, setCidade] = useState('');
  const [vetor, setVetor] = useState([]);

  const cadastrar = () => {
    let obj = {
      nome,
      idade,
      cidade
    };

    setVetor([...vetor, obj]);
    setNome('');
    setIdade('');
    setCidade('');
  }

  const selecionar = (i) =>{
    setIndiceVetor(i);
    setNome(vetor[i].nome);
    setIdade(vetor[i].idade);
    setCidade(vetor[i].cidade);

    setBtnCadastrar(false);
  };

  const alterar =() => {
    let obj = {
     nome,
     idade,
     cidade
    };

    let copiaVetor = [...vetor];
    copiaVetor[indiceVetor] = obj;
    setVetor(copiaVetor);

    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  };

  const remover = () => {
    let copiaVetor = [...vetor];
    copiaVetor.splice(indiceVetor, 1);
    setVetor(copiaVetor);
    
    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  };

  const cancelar = () => {
    setNome('');
    setIdade('');
    setCidade('');
    setBtnCadastrar(true);
  }

  return (
    <div>
      <Formulario 
        btnCadastrar={btnCadastrar} 
        nome={nome}
        idade={idade}
        cidade={cidade}
        setNome={setNome} 
        setIdade={setIdade} 
        setCidade={setCidade} 
        cadastrar={cadastrar}
        alterar={alterar}
        remover={remover}
        cancelar={cancelar}
        />
      <Tabela 
      vetor={vetor}
      selecionar={selecionar}
      />
    </div>
  );
}

export default App;
