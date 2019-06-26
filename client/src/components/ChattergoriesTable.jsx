import React from 'react';
import socket from '../socketConfig'




class ChattergoriesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chattergoryRows: [
                {
                    username: 'User',
                    food: 'Jelly doughnut',
                    city: 'Jersey City',
                    javascript: 'Java',
                    song: 'Just Dance'
                }
            ]
        }
    }
    componentDidMount(){
        socket.on('endRoundWithAllData', (data) => {
            //stop the round
            console.log('Heres the data from componentDidMount from ChattergoriesTable ', data);
            this.setState({
                chattergoryRows: data
            })

            //send player data
            console.log('socket configured properly');
        })
    }

    render() {
        return (
            //Add the components in here
            <table style={{ width: '100%' }} className="table">
                <tbody>
                    <tr>
                        <th>Username</th>
                        <th>Food</th>
                        <th>City</th>
                        <th>Javascript</th>
                        <th>Song</th>
                    </tr>
                    {this.state.chattergoryRows.map((chattergoryRow, key) => {
                       return ( 
                       <tr key = {key}>
                            <td>{chattergoryRow.username}</td>
                            <td>{chattergoryRow.food}</td>
                            <td>{chattergoryRow.city}</td>
                            <td>{chattergoryRow.javascript}</td>
                            <td>{chattergoryRow.song}</td>
                        </tr>
                        );
                    })}
                </tbody>

            </table>
        )
    }
}

export default ChattergoriesTable;
