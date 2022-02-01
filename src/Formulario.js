export default function Formulario({btnCadastrar, setNome, setIdade, setCidade, nome, idade, cidade, cadastrar, alterar, remover, cancelar}){
  return (
    <form>
      <input type='' placeholder='Nome' value={nome} className='form-control' onChange={e => setNome(e.target.value)}/>
      <input type='' placeholder='Idade' value={idade} className='form-control' onChange={e => setIdade(e.target.value)}/>
      <input type='' placeholder='Cidade' value={cidade} className='form-control' onChange={e => setCidade(e.target.value)}/>
      {
        btnCadastrar 
        ?
        <input type='button' value='Cadastrar' className='btn btn-primary' onClick={cadastrar}/>
        :
        <div>
          <input type='button' value='Alterar' className='btn btn-primary' onClick={alterar}/>
          <input type='button' value='Excluir' className='btn btn-danger' onClick={remover}/>
          <input type='button' value='Cancelar' className='btn btn-warning' onClick={cancelar}/>
        </div>
      }
    </form>
  );
}