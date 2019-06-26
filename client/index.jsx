import React from 'react';
import ReactDOM from 'react-dom';
import ChattergoriesTable from './src/components/ChattegoriesTable.jsx';
import styles from '../public/styles.css';
const io = require('socket.io-client');
//import io from 'socket.io-client/dist/socket.io';
import CategoryForm from './src/components/CategoryForm.jsx';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentUser: ''
        }
        //this.chattergoriesServerSocket = io('localhost:3000')
    }

    componentDidMount() {
        var username = prompt('Enter your username');
        if (username.length > 0) {
            this.setState({
                currentUser: username
            })
        } else {
            this.setState({
                currentUser: 'Blank user'
            })
        }
        

        
    }

    

    sendDataToSocket(){

    }



    render(){
        return (
            <div>
                <h1>Welcome to Chattergories!</h1>
                <ChattergoriesTable />
                <CategoryForm username = {this.state.currentUser}/>
            </div>
            
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));