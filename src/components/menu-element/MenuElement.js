import React from "react";
import {
  StyledContainer,
  StyledParagraph,
} from "../../styled-components/styled-components";
import EditArticle from "../article/EditArticle";
import Profile from "../profile/Profile";
import { Link } from "react-router-dom";

const MenuElement = ({ menuOptions }) => {
  console.log(menuOptions);
  const handleOptionClick = () => {
  const component =  menuOptions && menuOptions.id === 1 ? <Profile/> : <EditArticle />
  console.log(component);
  }
  return (
    <>
      <StyledContainer display="flex" className="menu-element" onClick={() =>handleOptionClick(menuOptions.id)}>
        {menuOptions.picture}
        <StyledParagraph className="menu-text">
          {menuOptions.menu}
        </StyledParagraph>
      </StyledContainer>
      <StyledParagraph>{localStorage.getItem('')}</StyledParagraph>
    </>
  );
};

export default MenuElement;
