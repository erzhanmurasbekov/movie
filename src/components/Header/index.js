import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <h1>Movies by Erzhan</h1>
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;
