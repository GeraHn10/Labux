import React from 'react';
//import Button from "@material-ui/core/Button";
//import SaveIcon from '@material-ui/icons/Save';
//import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import { makeStyles } from '@material-ui/core/styles';

 
  
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange2=this.handleChange2.bind(this);
        this.setState=this.setState.bind(this);
        this.saveItem=this.saveItem.bind(this);
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

    
    handleChange2(event,stateName){
        this.setState({[stateName]:event.target.value})
    }

    saveItem(){
            const newStudent ={
                name:this.state.newStudentName,
                lastName:this.state.newStudentLastName
            }
            const currentStudents = this.state.students;
            currentStudents.push(newStudent);
            this.setState({
                students:currentStudents
            })

    }


    render() {
        return <div>
             <AppBar position="static">
        <Toolbar>
            
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            Dashboard
          </Typography>
          <List component="nav">
            <ListItem component="div">
                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        Student
               </Typography>
                </ListItemText>


                <ListItemText inset>
                    <Typography color="inherit" variant="title">
                        Classes
               </Typography>
                </ListItemText>


               
            </ListItem >

        </List>
        </Toolbar>
        
      </AppBar>

          
        </div>
    }

}

export default Home;