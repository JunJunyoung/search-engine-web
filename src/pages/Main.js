import React from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import logo from "../assets/logo.png";
import styled from "styled-components";

function Main() {
  return (
    <>
      <MainContainer>
        <Header />
        <LogoImage className="BannerImg" src={logo} alt="로고" />
        <SearchContainer>
          <SearchBox />
        </SearchContainer>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const LogoImage = styled.img`
  margin-top: 10%;
  display: block;
  width: 400px;
  object-fit: scale-down;
`;

const SearchContainer = styled.div`
  width: 60%;
  height: 3rem;
`;

export default Main;
