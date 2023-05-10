import React from 'react';

export const GipItem = ({title="Not img",url}) => {

    const divStyle = {
        color: 'blue',
        backgroundImage: 'red',
        height: '200px',
        width: '200px'
      };
 
  return (

    <div  >
      <h4 >{title}</h4>
      <img src={url} alt="" style={divStyle}/>
    </div>
  );
}


