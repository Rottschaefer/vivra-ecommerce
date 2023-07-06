import styled, { keyframes } from "styled-components";
import { ReactComponent as ChevronRight } from "../../assets/ChevronRight.svg";

const slideAnimation = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`;

export const StyledSlideSection = styled.div`
  display: flex;
  width: 100vw;
  height: 86vh;
  background-position: top;
  transform: translateX(
    ${(props) => {
      return props.currentIndex;
    }}
  );
  transition: all 1s;

  scrollbar-width: none;
  overflow-block: auto;
  /* overflow-y: scroll; */
`;

export const StyledSlideImg = styled.div`
  flex-basis: 100vw;
  flex-shrink: 0;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.img});
  background-size: cover;
  height: 100%;
  background-position: top;
`;

export const StyledLeftButton = styled(ChevronRight)`
  transform: rotate(180deg);
  border: none;
  position: absolute;
  z-index: 2;
  top: 60%;
  left: 5rem;
  transition: all 0.3s;

  :hover {
    scale: 1.2;
  }
`;

export const StyledRightButton = styled(ChevronRight)`
  border: none;
  position: absolute;
  z-index: 2;
  top: 60%;
  right: 5rem;
  transition: all 0.3s;

  :hover {
    scale: 1.2;
  }
`;
