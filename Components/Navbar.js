import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Flawless from '../Components/images/Flawless.png';
import flws from '../Components/images/flws.png';

const Containaire = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 16vh;
  
`;
const Image = styled.img`
  width: 7%;

  margin-top: -1%;
  
`;
const Menu = styled.div``;
const MenuItem = styled.img`
   width: 30%;
   margin-top:-10%;
   margin-left:70%;


    
`;

const Navbar = () => {
  return (
    <Containaire>
      <Image src={Flawless} />
      <NavLink 
        to="/flws"   >
        <Menu>
          <MenuItem src={flws}/>
        </Menu>
      </NavLink>
    </Containaire>
  );
};

export default Navbar;
