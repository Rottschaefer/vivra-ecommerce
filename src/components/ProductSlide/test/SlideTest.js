import {
  StyledCarousel,
  StyledCarouselIndicator,
  StyledCarouselNav,
  StyledCarouselSlides,
  StyledCarouselTrack,
  StyledCarouselTrackContainer,
  StyledImgs,
  StyledLeftButton,
  StyledRightButton,
} from "./StyledSlideTest";
import slide2 from "../../../assets/fashion-report-1-1.jpg";
import slide3 from "../../../assets/Top_Retail_Trends_2023.png";
import { useState } from "react";

export const SlideTest = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [slide2, slide3, slide2];

  const setSlidePosition = (index) => {
    return `${100 * index}%`;
  };

  const handleSlideChange = (increment) => {
    if (currentIndex + increment > imgs.length - 1) {
      setCurrentIndex(0);
    } else if (currentIndex + increment < 0) {
      setCurrentIndex(imgs.length - 1);
    } else {
      setCurrentIndex(currentIndex + increment);
    }
  };

  const Slides = imgs.map((slide, index) => {
    return (
      <StyledCarouselSlides position={setSlidePosition(index)}>
        <StyledImgs src={slide} />
      </StyledCarouselSlides>
    );
  });

  const DotsNav = imgs.map((slide, index) => {
    return (
      <StyledCarouselIndicator
        color={currentIndex === index ? "black" : "grey"}
        onClick={() => setCurrentIndex(index)}
      />
    );
  });

  return (
    <StyledCarousel>
      <StyledLeftButton onClick={() => handleSlideChange(-1)} />
      <StyledCarouselTrackContainer>
        <StyledCarouselTrack amountToMove={`-${currentIndex * 100}%`}>
          {Slides}
        </StyledCarouselTrack>
      </StyledCarouselTrackContainer>
      <StyledRightButton onClick={() => handleSlideChange(+1)} />
      <StyledCarouselNav>{DotsNav}</StyledCarouselNav>
    </StyledCarousel>
  );
};
