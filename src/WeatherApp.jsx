import SearchBox from "./SearchBox.jsx"
import InfoBox from "./InfoBox"
import {useState} from "react"

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo ] = useState({
        city: "Baltimore",
        feelsLike:23.72,
        humidity: 50,
        temp:23.96,
        tempMax:23.96,
        tempMin:23.96,
        weather:"broken clouds"
    })

    let updateInfo = (result)=> {
        setWeatherInfo(result);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}