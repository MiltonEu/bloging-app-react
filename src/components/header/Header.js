import React, { useState, useCallback } from "react";
import {
  StyledButton,
  StyledContainer,
  StyledH1,
  StyledHeader,
  StyledImg,
  StyledListElement,
  StyledNav,
  StyledUnorderedList,
} from "../../styled-components/styled-components";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Modal from "../../modal/Modal";
import Login from "../../login/Login";
import Menu from "../menu/Menu";
const Header = () => {
  console.log("rendered");
  const userString = localStorage.getItem("session");
  const userJson = userString && JSON.parse(userString);
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  
  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  
  const handleMenu = useCallback(() => {
     setIsMenuOpen(prevMenuState => !prevMenuState)
  }, []);
  return (
    <StyledHeader  position="relative">
      <StyledNav>
        <StyledUnorderedList
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <StyledListElement>
            <StyledH1 width="fit-content" margin="0 auto">
              KOPLA
            </StyledH1>
          </StyledListElement>
          <StyledListElement>
            {userJson ? (
              <StyledContainer cursor="pointer" onClick={handleMenu}>
                <StyledImg
                  src={userJson.avatar}
                  width="2em"
                  borderRadius="40px"
                 
                />
                <KeyboardArrowDownIcon />
                <Menu isOpen={isMenuOpen} handleMenu={handleMenu}/>
              </StyledContainer>
            ) : (
              <StyledContainer>
                <StyledButton
                  padding="0.5em"
                  backgroundColor="black"
                  borderRadius="8px"
                  color="white"
                  onClick={handleModalOpen}
                >
                  Se connecter
                </StyledButton>
                <Modal isOpen={isModalOpen} onClose={handleModalClose}>
                  <Login onClose={handleModalClose} />
                </Modal>
              </StyledContainer>
            )} 
          </StyledListElement>
        </StyledUnorderedList>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
