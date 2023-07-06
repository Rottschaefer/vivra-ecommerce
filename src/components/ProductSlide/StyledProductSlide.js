import styled from "styled-components";
import { ReactComponent as ChevronRight } from "../../assets/ChevronRight.svg";

export const StyledCarousel = styled.div`
  position: relative;
  height: 86vh;
  width: 100%;
`;

export const StyledImgs = styled.img`
  width: 100%;
  height: 86vh;
  object-fit: cover;
  object-position: top;
`;

export const StyledCarouselTrackContainer = styled.div`
  height: 100%;
  position: relative;
  overflow-x: hidden;
`;

export const StyledCarouselTrack = styled.ul`
  list-style: none;
  transform: translateX(${(props) => props.amountToMove});
  transition: all 1s;
`;

export const StyledCarouselSlides = styled.li`
  position: absolute;
  width: 100%;
  height: 100%;
  left: ${(props) => props.position};
`;

export const StyledLeftButton = styled(ChevronRight)`
  transform: rotate(180deg);
  border: none;
  position: absolute;
  z-index: 2;
  top: 50%;
  translate: 0 -50%;
  left: 5rem;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    scale: 1.2;
  }
`;

export const StyledRightButton = styled(ChevronRight)`
  border: none;
  position: absolute;
  z-index: 2;
  top: 50%;
  translate: 0 -50%;
  right: 5rem;
  transition: all 0.3s;
  cursor: pointer;

  :hover {
    scale: 1.2;
  }
`;

export const StyledCarouselNav = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  position: absolute;
  left: 50%;
  top: 90%;
  transform: translateX(-50%);
  opacity: 0.7;
`;

export const StyledCarouselIndicator = styled.button`
  background-color: ${(props) => props.color};
  width: 1.5rem;
  height: 1.5rem;
  border: none;
  border-radius: 50%;
  transition: all 0.2s;

  :hover {
    background-color: black;
  }
`;
