import { useContext } from "react"
import { ApiContext} from '../App'

type Props = {}

const Context = (props: Props) => {

    const details = useContext(ApiContext
        )
  return (
    <>
    {details && (
        <div>
            <h2>Linguagem: {details.language}</h2>
            <h4>Framework: {details.framework}</h4>
            <p> total de projetos: {details.projects}</p>
        </div>
    )}
    </>
  )
}

export default Context