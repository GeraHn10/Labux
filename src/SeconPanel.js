import React from 'react';
import Switch from '@material-ui/core/Switch';
import Checkbox from '@material-ui/core/Checkbox';
class  SecondPanel extends React.Component{

render ()

{

return <div>
<h1>Componenete 2</h1>
<p>Ejemplo Switch:</p>
<Switch
        
        value="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
<div>
  <div></div>
<p>Ejemplo Checkbox:</p>
<Checkbox
       
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox',
        }}
      />
</div>
   </div>

}

}

export default SecondPanel;