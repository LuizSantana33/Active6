import { Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"

interface Props {
    children: React.ReactNode
}

export default function Layout(props: Props){
    const {children} = props
    return (
        <Flex flexDirection='column'>
            <div>Projeto</div>
            {children}
           <hr/>
           <div> <Link to={"home"}>Home</Link></div>
        </Flex>
        
    )
}