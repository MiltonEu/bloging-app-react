import "./App.css";
import Articles from "./components/articles/Articles";
import Header from "./components/header/Header";
import React, { useState } from "react";
import { StyledContainer } from "./styled-components/styled-components";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import EditArticle from "./components/article/EditArticle";
export const ArticleContext = React.createContext(null);
export const UserContext = React.createContext(null);
function App() {
  const [articles, setArticles] = useState(null);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <ArticleContext.Provider
          value={{ articles: articles, setArticles: setArticles }}>
          <StyledContainer>
            <Header />
            <Routes>
              <Route exact path="/" element={<Articles/>}>
              
              </Route>
              <Route path="/edit-article" element={<EditArticle/>}>
              
              </Route>
            </Routes>
          </StyledContainer>
        </ArticleContext.Provider>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
