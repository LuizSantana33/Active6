import { Link } from "react-router-dom"
import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
import InputFatec from "../../components/inputFatec"

export default function Contato() {
    return (
        <div>
            <p>Contato!</p>
            <hr />
            <InputFatec
                placeHolder="Digite seu nome"
                defaultValue="" type="text" /><br />
            <InputFatec
                placeHolder="Digite seu email"
                defaultValue="" type="email" /><br />
            <InputFatec
                placeHolder="Digite seu telefone"
                defaultValue="" type="text" /><br />
            <ButtonFatec label="Botão 2" type="button" />*\
            
            <hr />
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}