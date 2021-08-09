import { useContext, useEffect, useState } from 'react'

import { CapitaisStyle } from './styled'
import AppContext from '../../context/AppContext'

export default function Capitais(){
    // eslint-disable-next-line
    const { callApi, datas } = useContext(AppContext)
    const [capitals, setCapitals] = useState([])
    const initialCities = ['São Paulo', 'Rio de janeiro', 'Belém', 'Belo Horizonte', 'Salvador', 'Fortaleza', 'Curitiba', 'Brasília', 'Manaus', 'João Pessoa']

    function getCityData(city){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
            .then(res => res.json())
            .then(data => {
                const oldCapitals = capitals
                oldCapitals.push({
                    name: data.name,
                    max: data.main.temp_max, 
                    min: data.main.temp_min
                })
                setCapitals(oldCapitals)
            })
    }
    function execute(){
        for(const city of initialCities){
            getCityData(city)
        }
    }
    useEffect(() => {
        execute()
        // eslint-disable-next-line
    }, [])

    return(
        <CapitaisStyle>
            <h1>Capitais</h1>
            <span>
                <div>Min - Máx</div>
                <div className='hidden'>Min - Máx</div>
            </span>
            <section>
                {capitals.slice(0, 10).map((capital) => {
                    return (
                        <div><p>{capital.min.toFixed(0)}°</p> - <p>{capital.max.toFixed(0)}°</p>{capital.name}</div>
                    )
                })}
            </section>
        </CapitaisStyle>
    )
}