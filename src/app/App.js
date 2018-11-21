import React, {Component} from "react";
import Info from "../info/Info.js";
import Form from "../form/Form.js";
import Weather from "../weather/Weather.js";

const API_KEY = "704a1277078bcd7643a8cf5e68797b7e";

class App extends Component {

    state = {
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: undefined
    }

    gettingWeather = async (e) => {
        e.preventDefault();
        var city = e.target.elements.city.value;
        

        if (city) {
            const api_url = await 
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            var sunset = data.sys.sunset;
            var sunrise = data.sys.sunrise;
            var date = new Date();
            date.setTime(sunset);
            var sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
            date.setTime(sunrise);
            var sunrise_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                sunset: sunset_date,
                error: ""
            });
        }
    }

    render() {
        return(
            <div>
                <Info/>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    error={this.state.error}
                />
            </div>
        );
    }
}

export default App;