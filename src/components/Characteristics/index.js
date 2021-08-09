import { useContext } from 'react'
import AppContext from '../../context/AppContext'
import { DescriptionStyle, HeaderStyle, FooterStyle } from './styled'
export default function Characteristics(){
    const {setDescriptionActive, datas, daysWeather} = useContext(AppContext)
    
    const daysData = daysWeather.list

    function formatDate(date){
        const newDate = date.split(' ')[0].split('-').reverse()
        newDate.pop()
        return newDate.join('/')
    }
    return(
        <DescriptionStyle>
            <HeaderStyle>
                <p>{datas.name} - {datas.sys.country}</p>
                <i class="fas fa-times" onClick={() => setDescriptionActive(false)}></i>
            </HeaderStyle>

            <h1>{datas.main.temp}°C {datas.weather[0].main}</h1>

            <main>
                <span>
                    <section>
                        <div>
                            <i class="fas fa-arrow-down"></i>
                            <p>{datas.main.temp_min}°</p>
                        </div>
                        <div>
                            <i class="fas fa-arrow-up"></i>
                            <p>{datas.main.temp_max}°</p>
                        </div>
                    </section>
                    <aside>
                        Sensação
                        <p>{datas.main.feels_like}°C</p>
                    </aside>
                </span>

                <span>
                    <div>
                        Vento 
                        <p>{datas.wind.speed}km/h</p>
                    </div>
                    <div>
                        Humidade 
                        <p>{datas.main.humidity}%</p>
                    </div>
                </span>
            </main>  

            <hr></hr>

            <FooterStyle>
                <div>
                    <h1>{formatDate(daysData[0].dt_txt)}</h1>
                    <p>{daysData[0].main.temp_min.toFixed(0)}° {daysData[0].main.temp_max.toFixed(0)}°</p>
                </div>
                <div>
                    <h1>{formatDate(daysData[8].dt_txt)}</h1>
                    <p>{daysData[8].main.temp_min.toFixed(0)}° {daysData[8].main.temp_max.toFixed(0)}°</p>
                </div>
                <div>
                    <h1>{formatDate(daysData[16].dt_txt)}</h1>
                    <p>{daysData[16].main.temp_min.toFixed(0)}° {daysData[16].main.temp_max.toFixed(0)}°</p>
                </div>
                <div>
                    <h1>{formatDate(daysData[24].dt_txt)}</h1>
                    <p>{daysData[24].main.temp_min.toFixed(0)}° {daysData[24].main.temp_max.toFixed(0)}°</p>
                </div>
                <div>
                    <h1>{formatDate(daysData[32].dt_txt)}</h1>
                    <p>{daysData[24].main.temp_min.toFixed(0)}° {daysData[24].main.temp_max.toFixed(0)}°</p>
                </div>
            </FooterStyle>
        </DescriptionStyle>
    )
}