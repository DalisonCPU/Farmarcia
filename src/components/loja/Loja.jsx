import './Loja.css'

export default function Loja() {
    return (
        <div className='loja'>
            <h2>Apoia-nos comprando nossas camisetas!</h2>
            <div className='produto'>
                <h3>Camisetas Farmárcia: R$ 100,00</h3>
                <img src='./farmarcia-camisetas.peq.webp' alt='Duas camisetas penduradas em cabides de madeira. Uma é branca com a palavra "Farmácia" escrita em preto e um pequeno ícone em formato de coração. A outra é preta sem estampas. As camisetas estão lado a lado em um fundo branco.' />
                <button onClick={() => alert("Pedido realizado! Muito obrigado por sua compra!")}>Comprar</button>
      </div>
        </div>
    )
}
