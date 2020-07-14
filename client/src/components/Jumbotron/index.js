import React from 'react';

import "./style.css";


 function Jumbotron({ children }) {
     return(
         <div className="jumbotron bg-white align-items-center">
            
             <div className="container-fluid text-center">
                 {children}
             </div>
         </div>
     );
 }

 export default Jumbotron;