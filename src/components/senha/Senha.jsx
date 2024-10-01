import './Senha.css'

export default function Senha() {

    let senhas = []
    
  return (
    <div>
      
      <button onClick={geraSenhaNormal}>Gerar senha normal</button>
      <button onClick={geraSenhaPreferencial}>Gerar senha preferencial</button>
      <button onClick={chamaSenha}>Chamar senha</button>
    </div>
  )
}
