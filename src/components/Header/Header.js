import {
  StyledCartSection,
  StyledContainer,
  StyledHeader,
  StyledLoginSection,
  StyledLogo,
  StyledOtherOptionsSection,
  StyledPages,
} from "./StyledHeader";

import { BsFillPersonFill, BsCart2, BsSearch } from "react-icons/bs";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLogo>Vivra</StyledLogo>
      <StyledContainer>
        <StyledPages>
          <p>Home</p>
          <p>Shop</p>
          <p>About</p>
          <p>Blog</p>
          <p>Contact</p>
          <p>Pages</p>
        </StyledPages>
        <StyledOtherOptionsSection>
          <StyledLoginSection>
            <BsFillPersonFill />
            <p>Login</p>
            <p>/</p>
            <p>Register</p>
          </StyledLoginSection>
          <BsSearch />
          <StyledCartSection>
            <BsCart2 />
            <p>1</p>
          </StyledCartSection>
        </StyledOtherOptionsSection>
      </StyledContainer>
    </StyledHeader>
  );
};
