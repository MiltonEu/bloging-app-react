import React, { useContext } from 'react'
import { StyledContainer, StyledParagraph } from '../../styled-components/styled-components'
import { menuData } from '../../menu-data'
import MenuElement from '../menu-element/MenuElement'
import { UserContext } from '../../App'
const Menu = ({isOpen}) => {
    const userSession = localStorage.getItem('session');
    const context = useContext(UserContext);
    var userSessionJson = JSON.parse(userSession); 
    const handleLogout = () => {
      localStorage.setItem("session", null);
      context.setUser(null);
    }
  return (
    <>
    {isOpen ? 
       ( <StyledContainer backgroundColor="white" position="absolute" className='menu'>
       {menuData.map(menuElement => <MenuElement menuOptions={menuElement} key={menuElement.id}/>)}
        <StyledParagraph fontSize="12px" textAlign="end" onClick={handleLogout}>{userSessionJson.mail}</StyledParagraph>
   </StyledContainer>) 
     : null}
    </>
  )
}

export default Menu