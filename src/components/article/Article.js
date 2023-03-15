import React from "react";
import {
  StyledContainer,
  StyledImg,
  StyledParagraph,
} from "../../styled-components/styled-components";

const Article = (props) => {
  const { body, img_url, title, publicationDate } = props.article;
  console.log(props);
  return (
    <StyledContainer display="flex" margin="1em">
      <StyledContainer>
        <StyledImg src={img_url} className="article--img" />
      </StyledContainer>
      <StyledContainer padding="0 1em">
        <StyledParagraph fontSize="9px" fontWeight="400" color="lightgrey">
          5mn read
         
        </StyledParagraph>
       
        <StyledParagraph fontSize="16px" fontWeight="700">
          {title}
        </StyledParagraph>
        <StyledParagraph fontSize="9px" fontWeight="400" color="lightgrey">
         Author : John Doe
         
        </StyledParagraph>
        <StyledContainer margin="10px 0 0 0 ">
          <StyledParagraph
            fontSize="9px"
            fontWeight="400"
            color="black"
          >22.8K ❤ </StyledParagraph>
        </StyledContainer>
      </StyledContainer>
    </StyledContainer>
  );
};

export default Article;
