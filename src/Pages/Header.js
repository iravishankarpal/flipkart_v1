import React from "react";
import styled from "styled-components";
import { HiShoppingCart } from "react-icons/hi";
const HeaderContainer = styled.div`
  background-color: #2874f0;
  color: white;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Splash", cursive;
`;
const Logo = styled.div`
  font-size: xx-large;
`;
const SearchBox = styled.div`
  input:focus {
    background-color: red;
  }
`;
const LoginHeader = styled.div``;
const BecomeASeller = styled.div``;
const More = styled.div``;
const ReactIcon = styled.div`
  font-size: x-large;
`;
function Header() {
  return (
    <HeaderContainer className="container-fluid">
      <HeaderContainer className="container">
        <Logo> Flipkart </Logo>
        <SearchBox>
          <input type="text" />
        </SearchBox>
        <LoginHeader>Login</LoginHeader>
        <BecomeASeller> Become a Seller </BecomeASeller>
        <More>More</More>
        <ReactIcon>
          <HiShoppingCart></HiShoppingCart> Cart
        </ReactIcon>
      </HeaderContainer>{" "}
    </HeaderContainer>
  );
}

export default Header;
