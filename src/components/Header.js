import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <CommunityButton to="/community">커뮤니티</CommunityButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: #000000;
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  border-bottom: 1px solid gray;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
`;

const CommunityButton = styled(Link)`
  text-decoration: none;
  color: black;
`;

export default Header;
