import React from 'react';
//import ReactDOM from 'react-dom';
//import  Home from './home';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

class Student extends React.Component {

    constructor(props) {
        super(props);
        //this.handleChange2=this.handleChange2.bind(this);
       // this.setState=this.setState.bind(this);
       // this.saveItem=this.saveItem.bind(this);
        this.state = {
            newStudentName: 'Gerardo',
            newStudentLastName: '',
            students: [{
                name: 'Gerardo', lastName: 'Snow'
            }, {
                name: 'Ing', lastName: 'Lannister'
            }]


        }

    }

    render() {
        return <div>
           <h1>Name</h1>
<TextField
id="outlined-name"
label="Name"
onChange = {(event) => this.handleChange2(event,'newStudentLastName')}
margin="normal"
variant="outlined"
/>
<h1> LastName</h1>
<TextField
id="outlined-name"
label="LastName"
onChange = {(event) => this.handleChange2(event,'newStudentName')}
margin="normal"
variant="outlined"
/>
<div>
<Button variant="contained" size="small"  >
<SaveIcon  />
Save
</Button>
</div>

          
        </div>
    }



}



export default Student;