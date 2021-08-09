import { useContext, useEffect, useState } from "react"
import Characteristics from "../Characteristics"
import { InputStyle } from "./styled"
import AppContext from "../../context/AppContext"

export default function Input(){
    const [city, setCity] = useState('')
    const { callApi, descriptionActive } = useContext(AppContext)
    
    useEffect(() => {
        callApi(city)
        // eslint-disable-next-line
    }, [city])
    return(
        <InputStyle descriptionActive={descriptionActive}>
            <h1>
                Previsão do tempo
            </h1>
            {descriptionActive && <Characteristics/>}
            <span>
                <input type='text' placeholder='Insira aqui o nome da cidade' value={city} onChange={(e) => setCity(e.target.value)}/>
                <i class="fas fa-search"></i>
            </span>
            <hr></hr>
        </InputStyle>
    )
}

