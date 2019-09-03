import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Select from '@material-ui/core/Select';
//import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
class  FirstPanel extends React.Component{

render ()

{

return <div>
<h1>Componente 1</h1>
<p>Ejemplo Boton:</p>
<Button variant="contained" color="secondary" >
        Delete
        <DeleteIcon  />
      </Button>
<div>
<p>Ejemplo TextField:</p>
      <TextField
        id="outlined-name"
        label="Name"
        margin="normal"
        variant="outlined"
      />
</div>


<div>
<p>Ejemplo Selects:</p>

        <InputLabel htmlFor="age-simple">Age</InputLabel>
        <Select
         
          inputProps={{
            name: 'age',
            id: 'age-simple',
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
     
    
</div>



   </div>

}

}

export default FirstPanel;