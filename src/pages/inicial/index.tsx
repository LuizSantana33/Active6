import { Link } from "react-router-dom" // npm i react-router-dom


export default function Inicial() {
    return (
        <>
            
            <div>
            <h1>Projeto</h1>
            <h2>Este projeto mostra como criar links para navegação entre páginas</h2>
            </div>
            <Link to="/">Voltar para Home</Link>
        </>
    )
}