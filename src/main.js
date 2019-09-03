import React from 'react';
//import ReactDOM from 'react-dom';
import  Home from './home';
import Student from './student';
import Classes from './Classes'

class Main extends React.Component {


    
        constructor(props) {
        super(props);    
        this.state = {
            newStudentName: 'Gerardo'
         }

    }


    render() {

        return <div>
        <Home/>
        <Student/>
        <Classes/>

        
        </div>
    }



}





export default Main;