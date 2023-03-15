import styled from "styled-components";

const StyledHeader = styled.header`
  border-bottom: 1px solid #ffd1d1;
  box-shadow: 0px 6px 13px 6px #e1e1e1;
  padding: 2em 1em 2em 1em;
  position: relative;
`;

const StyledContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  margin: ${(props) => props.margin};
  display: ${(props) => props.display};
  padding: ${(props) => props.padding};
  position: ${(props) => props.position};
  width: ${(props) => props.width};
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  cursor: ${props => props.cursor};
  &.modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
  }
  &.modal-content {
    margin-top: 20px;
    text-align: center;
  }
  &.menu{
    position: absolute;
    margin-left: -150px;
    z-index: 100000;
    padding: 1em;
    border: 1px solid lightgray;
    border-radius: 5px;
    width: -webkit-fill-available;
  }
  &.menu-element:not(:nth-child(5)){
    border-bottom: 1px solid lightgray;
    
  }
  &.menu-element:not(:nth-child(5)){
    padding: 1em;
  }
  &.menu-element:nth-child(5){
    padding: 1em 0 0 0;
  }
`;
const StyledModal = styled.div`
  &.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const StyledNav = styled.nav``;
const StyledButton = styled.button`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.backgroundColor};
  border: ${props => props.border};
  border-radius: ${(props) => props.borderRadius};
  color: ${(props) => props.color};
  font-family: "Poppins", sans-serif;
  width: ${props => props.width};
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &.modal-close {
    width: 100%;
    text-align: end;
    font-size: 20px;
    font-weight: 100;
    background-color: white;
    margin-top: 0.5em;
  }
  &.btn:hover{
      color: white;
      background-color: #ff5722;
      width: 65%;
    
  }
`;
const StyledUnorderedList = styled.ul`
  list-style: none;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

const StyledListElement = styled.li``;

const StyledH1 = styled.h1`
  font-size: 5vw;
  color: black;
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
`;
const StyledParagraph = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  text-align: ${props => props.textAlign};
  &.menu-text{ 
    padding-left: 1em;
  }
`;
const StyledImg = styled.img`
position: ${props => props.position};
padding: ${props => props.padding};
width: ${props => props.width};
border-radius: ${props => props.borderRadius};
cursor: pointer;

  &.article--img {
    max-width: 250px;
    height: 150px;
    border-radius: 8px;
    object-fit: contain;
  }
`;
const StyledInput = styled.input`
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  width: ${(props) => props.width};
  border: ${(props) => props.border};
  &.placeholder-large{
    font-size: 37px;
    line-height: 1.25;
    font-weight: 400;
  }
  &:focus{
      outline: none;
    }
`;
export {
  StyledContainer,
  StyledHeader,
  StyledNav,
  StyledListElement,
  StyledUnorderedList,
  StyledH1,
  StyledImg,
  StyledParagraph,
  StyledInput,
  StyledButton,
  StyledModal,
};
