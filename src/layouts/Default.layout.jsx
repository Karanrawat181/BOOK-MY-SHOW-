import React from 'react';


//layout variable
const DefaultLayout = (props)=>{

  return(
    <div>
    
    <h1 className="text-xl"> Default Layout</h1>
    
    {props.children}

    
    </div>
    );

 
};

export default DefaultLayout;