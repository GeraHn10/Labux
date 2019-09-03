import React from 'react';
//import ReactDOM from 'react-dom';
//import  Home from './home';
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';

class Classes extends React.Component {

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



export default Classes;



import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

class Dashboard extends React.Component{
        

    




    render() {
      return   <div >
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
            <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
            <Tab label="Item Two" icon={<FavoriteIcon />} {...a11yProps(1)} />
            <Tab label="Item Three" icon={<PersonPinIcon />} {...a11yProps(2)} />
            <Tab label="Item Four" icon={<HelpIcon />} {...a11yProps(3)} />
            <Tab label="Item Five" icon={<ShoppingBasket />} {...a11yProps(4)} />
            <Tab label="Item Six" icon={<ThumbDown />} {...a11yProps(5)} />
            <Tab label="Item Seven" icon={<ThumbUp />} {...a11yProps(6)} />
          </Tabs>
        </AppBar>
        <TabPanel index={0}>
          Item One
        </TabPanel>
        <TabPanel  index={1}>
          Item Two
        </TabPanel>
        <TabPanel  index={2}>
          Item Three
        </TabPanel>
        <TabPanel index={3}>
          Item Four
        </TabPanel>
        <TabPanel index={4}>
          Item Five
        </TabPanel>
        <TabPanel index={5}>
          Item Six
        </TabPanel>
        <TabPanel  index={6}>
          Item Seven
        </TabPanel>
      </div>
   
    }


}
