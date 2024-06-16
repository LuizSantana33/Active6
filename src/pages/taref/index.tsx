import { useEffect, useState } from "react" // importando as dependencias
import FormTarefas from "../../components/formtarefas"
interface Tarefa{
    id: number
    title: string
    completed: boolean
} // tipagem do retorno da API
export default function Tarefas(){
    const [tarefas, setTarefas] = useState<Tarefa[]>([]) // iniciando o state
    // primeiro param (tarefas) - variavel (aqui a lista de tarefas)
    // segundo param (setTarefas) - funcao que altera a lista

    function atualizarTarefas(){ // buscar os dados da api
        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task')
        .then((dados) => dados.json())
        .then((tarefas) => setTarefas(tarefas))
        // fetch - chamada para API, passando a rota desejada
        // .then - recebendo a resposta, colocando na variavel dados e transforma JSON em objeto
        // .then - depois de receber o objeto - setTarefas recebe a lista de tarefas
    }

    useEffect(() => {
        atualizarTarefas()
    },[]) // useEffect - para quando o componente desenhar - executar a funcao atualizarTarefas
    // 2 params - 1º funcao que deve executar () => {} | 2º dependencias, nesse caso nenhuma []

    return (
        <>
            <h1>Tarefas</h1>
            <FormTarefas atualizarTarefas={atualizarTarefas}/>
            <ul>
                {
                    tarefas.map(tarefa => ( // map = para cada item em "tarefas" ele vai preencher o valor de "tarefa"
                        <li key={tarefa.id}>
                            {tarefa.title} - {tarefa.completed ? 'Sim' : 'Não'}
                        </li>
                        // key é necessário no uso do map para identificacao
                    ))
                }
            </ul>
        </>
    )
}