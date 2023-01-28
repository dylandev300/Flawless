import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Flawless from '../Components/images/Flawless.png';
import bck from '../Components/images/bck.png';

const Containaire = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
 overflow:hidden;
  height: 16vh;
  
`;
const Image = styled.img`
  width: 7%;

  margin-top: -1%;
  
`;
const Menu = styled.div``;
const MenuItem = styled.img`
   width: 43%;
   margin-top:-10%;
   margin-left:65%;


    
`;

const Navbar = () => {
  return (
    <Containaire>
      <Image src={Flawless} />
      <NavLink 
        to="/meal"   >
        <Menu>
          <MenuItem src={bck}/>
        </Menu>
      </NavLink>
    </Containaire>
  );
};

export default Navbar;
