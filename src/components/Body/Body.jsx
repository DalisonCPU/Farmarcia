import { useState } from 'react'
import Senha from '../senha/Senha'
import Loja from '../loja/Loja'
import './Body.css'

function Body() {

  const [statusFuncionario, setStatusFuncionario] = useState(0)
  const [campoSenha, setCampoSenha] = useState("")

  function verificaLogar() {
    if(campoSenha === 'admin1234') {
      setStatusFuncionario(2)
      alert('Parabéns, você descobriu nossa senha. Agora, deleite em nossos sistemas.')
    } else {
      alert('Senha inválida.')
    }
  }


  return (
    <div className="body">
      <p>Estamos à mais de 10 anos no mercado, buscando o melhor para sua saúde.<br />
      Seja para uma dor de garganta ou algo mais sério, estamos aqui, pronto para te ajudar!</p>

{statusFuncionario === 0 && (
  <button onClick={() => setStatusFuncionario(1)}>Sou funcionário</button>
)}
      {statusFuncionario === 1 && (
        <>
        <label htmlFor='senha'>Senha:</label>
        <input type='password' onChange={(e) => setCampoSenha(e.target.value)} value={campoSenha} id='senha' />
        <button onClick={verificaLogar}>Logar</button>
        </>
      )}
      {statusFuncionario === 2 && (
<Senha />
)}
<Loja />
      </div>
  )
  
}
export default Body