import React from 'react';
import io from 'socket.io-client';

import socket from '../socketConfig.js'



class CategoryForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            food: '',
            city: '',
            javascript: '',
            song: ''
        }

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleFoodChange = this.handleFoodChange.bind(this);
        this.handleJavascriptChange = this.handleJavascriptChange.bind(this);
        this.handleSongChange = this.handleSongChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        
    }

    handleFoodChange(event) {
        this.setState({ food: event.target.value });
    }

    handleCityChange(event) {
        this.setState({ city: event.target.value });
    }

    handleJavascriptChange(event) {
        this.setState({ javascript: event.target.value })
    }

    handleSongChange(event) {
        this.setState({ song: event.target.value });
    }


    componentDidMount(){
        socket.on('stopRound', () => {
            //stop the round

            //send player data
            let playerData = {
                username: this.props.username,
                food: this.state.food,
                city: this.state.city,
                javascript: this.state.javascript,
                song: this.state.song
            }
            socket.emit('roundData', playerData)
            console.log('socket configured properly');
        })
    }

    handleSubmit(event) {
       event.preventDefault();
       //Where the magic happens
       
       socket.emit('stopSignal');
    }


    

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    Username: {this.props.username}
                </div>

                <label>
                    Food:
              <input type="text" value={this.state.value} onChange={this.handleFoodChange} />
                </label>


                <label>
                    City:
              <input type="text" value={this.state.value} onChange={this.handleCityChange} />
                </label>


                <label>
                    Javascript:
              <input type="text" value={this.state.value} onChange={this.handleJavascriptChange} />
                </label>


                <label>
                    Song:
              <input type="text" value={this.state.value} onChange={this.handleSongChange} />
                </label>


                <input type="submit" value="Finish round!" />
            </form>
        );
    }
}

export default CategoryForm;