import { createContext } from "react"

const AppContext = createContext({
    callApi: () => {},

    datas: {},

    daysWeather: {},

    descriptionActive: false,
    setDescriptionActive: () => {}
})

export default AppContext