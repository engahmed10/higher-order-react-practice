import React from 'react';
 

const Display = ({display}) => {
   
    return (
        <div>
            <tr>
              <td>{display.name}</td>
            </tr>
        </div>
    );
}
 

 
export default Display;