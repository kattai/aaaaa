import { useState } from "react"

export default function Tabela({vetor, selecionar}){
  const [termo, setTermo] = useState('');

  return (
    <div>
      <input type='text' onChange={e => setTermo(e.target.value)} placeholder='Buscar...' className='form-control search'/>
      {
        termo 
        &&
        <p><b>Resultados para:</b> {termo}</p>
      }
      <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Cidade</th>
          <th>Selecionar</th>
        </tr>
      </thead>
      <tbody>
        {
          vetor.filter(obj => obj.nome.includes(termo) || obj.idade.includes(termo) || obj.cidade.includes(termo)).map((obj, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{obj.nome}</td>
              <td>{obj.idade}</td>
              <td>{obj.cidade}</td>
              <td><button className='btn btn-primary' onClick={() => selecionar(i)}>Selecionar</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )
}