import React from 'react';
import socket from '../socketConfig'




class ChattergoriesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chattergoryRows: [
                {
                    username: 'User',
                    food: 'Jelly',
                    city: 'Jersey City',
                    javascript: 'Java',
                    song: 'Jalyn Rose'
                }
            ]
        }
    }
    componentDidMount() {
        
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
                    <tr>
                        <td>EXAMPLE 1 for letter j</td>
                        <td>Jambalaya</td>
                        <td>Johannesburg</td>
                        <td>jQuery</td>
                        <td>Just Dance</td>
                    </tr>
                    <tr>
                        <td>EXAMPLE 2 for letter j</td>
                        <td>Jelly</td>
                        <td>Jamaica</td>
                        <td>Javascript</td>
                        <td>Jimmy Eats World</td>
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

