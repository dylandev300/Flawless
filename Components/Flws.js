import React from 'react'
import styled from 'styled-components';
import flaw from '../Components/images/flaw.png';
import Nav from './Nav';

const Flws = () => {
  const Contenaire = styled.div`
  
overflow:hidden;

  
  
`;
  const Whr = styled.img`
  width: 34%;
  position:absolute;
  margin-left:58%;
  margin-top:2%;


  
  
`;
  return (
    
   <>
   <Contenaire>
   <Nav/>
   <Whr src={flaw}/>
    <div>
    
      
      <p className='write'> Together learn to make super delicious dishes of easy quality  <br/>  With professional people who have worked 
         for a very long time <br/> In the sector this is our mission following several loans to people <br/> Who like delicious
         dishes but do not know how to do it well as a <br/> Professional.</p>
         
    </div>
    </Contenaire>
    </>
   
    
  )
}

export default Flws
