import React, { useContext, useEffect } from "react";
import { ArticleContext } from "../../App";
import { getAllArticles } from "../../http/firebase-api";
import { SearchIcon } from "../../mui-icons";
import {
  StyledContainer,
  StyledInput,
} from "../../styled-components/styled-components";
import Article from "../article/Article";

const Articles = () => {
  const context = useContext(ArticleContext);
  console.log(context);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await getAllArticles();
  //       const json = await response;
  //       console.log(json);
  //       context.setArticles(json);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   }
  //   fetchData();
  // }, []);

  console.log(context.article);

  return (
    <StyledContainer>
      <StyledContainer position="relative" margin="2em auto" width="50%">
        <StyledInput 
        placeholder="Search articles" 
        padding="0.5em"
        backgroundColor="#fafafa"
        border="1px solid #fafafa"
        width="100%"
        borderRadius="8px"/>
        <StyledContainer position="absolute" top="0" right="0" padding="3px 0 0 0">
        <SearchIcon/>
        </StyledContainer>
        
      </StyledContainer>

      {context.articles &&
        context.articles.map((article, index) => (
          <Article article={article} key={index} />
        ))}
    </StyledContainer>
  );
};

export default Articles;
