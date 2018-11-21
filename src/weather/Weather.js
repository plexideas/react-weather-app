import React, {Component} from "react";

class Weather extends Component {

    render() {
        return(
            <div>
                {this.props.city && 
                    <div>
                        <p>Местонахождения: {this.props.city}, {this.props.country}</p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Восход солнца: {this.props.sunrise}</p>
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Weather;