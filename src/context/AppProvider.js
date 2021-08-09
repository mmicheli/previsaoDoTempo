import { useState } from "react";
import AppContext from "./AppContext";

export default function AppProvider({children}){
    const [descriptionActive, setDescriptionActive] = useState(false)
    const [datas, setDatas] = useState({})
    const [daysWeather, setDaysWeather] = useState({})

    function callApi(searchCity){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&APPID=${process.env.REACT_APP_API_KEY}&units=metric`)
        .then(async res => {
            const data = await res.json()

            if(data.cod === 200){
                await setDatas(data)
                
                await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${data.id}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
                .then(async res => {
                    const daysDatas = await res.json()
                    setDaysWeather(daysDatas)
                })

                setDescriptionActive(true)
            }
        })
    }

    return(
        <AppContext.Provider value={{callApi, datas, daysWeather, descriptionActive, setDescriptionActive}}>
            {children}
        </AppContext.Provider>
    )
}