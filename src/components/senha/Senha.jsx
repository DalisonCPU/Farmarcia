import { useState } from 'react'
import './Senha.css'
import { useEffect } from 'react'
import { useRef } from 'react'

export default function Senha() {

    const [senhas, setSenhas] = useState([])
    const [mensagem, setMensagem] = useState("")
    const [numeroSenha, setNumeroSenha] = useState(999)


    function alerta(mensagemAlertar) {
      setMensagem(mensagemAlertar)
      setTimeout(() => {
        setMensagem("")
      }, 2000)
    }
    
    function geraSenhaNormal() {
      let novaSenha = numeroSenha + 1
      setNumeroSenha(novaSenha)

      setSenhas([...senhas, {numero: novaSenha, tipo: 1}])
      alerta(`Senha gerada: ${novaSenha}`)
    }

    function geraSenhaPreferencial() {

      let novaSenha = numeroSenha + 1
      setNumeroSenha(novaSenha)

      setSenhas([...senhas, {numero: novaSenha, tipo: 2}])
      alerta(`Senha gerada: ${novaSenha}`)
    }

    function chamaSenha() {
      if(senhas.length === 0) {
        alerta("Nenhuma senha na fila")
      } else {

        let indiceBusca = senhas.findIndex(senha => senha.tipo === 2)
        if(indiceBusca === -1) {
          indiceBusca = senhas.findIndex(senha => senha.tipo === 1)
        }

        alerta(`Próxima senha: ${senhas[indiceBusca].numero}`)
        setSenhas(prevSenhas => (prevSenhas.filter((_, index) => index !== indiceBusca)))
      }
    }

  return (
    <div>
      
      <button onClick={geraSenhaNormal}>Gerar senha normal</button>
      <button onClick={geraSenhaPreferencial}>Gerar senha preferencial</button>
      <button onClick={chamaSenha}>Chamar senha</button>

      <div className='mensagem' role='alert' aria-live='assertive'>{mensagem}</div>
    </div>
  )
}
