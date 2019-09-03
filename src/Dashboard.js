import React from 'react';
import FirstPanel from './FirstPanel';
import SecondPanel from './SeconPanel';
import './App.css';
class Dashboard extends React.Component{


render(){
    return <div >
        <div className="miclase">
        <FirstPanel />
        </div>
        <div className="miclase">
          <SecondPanel />
          </div>
    </div>
    
      


}




}
  


export default Dashboard;