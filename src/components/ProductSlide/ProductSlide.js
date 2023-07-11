import {
  StyledCarousel,
  StyledCarouselIndicator,
  StyledCarouselNav,
  StyledCarouselSlides,
  StyledCarouselTrack,
  StyledCarouselTrackContainer,
  StyledDescription,
  StyledImgs,
  StyledLeftButton,
  StyledRightButton,
  StyledText,
  StyledTitle,
} from "./StyledProductSlide";
import { useEffect, useRef, useState } from "react";
import { getData } from "../../Requests/RequestData";

export const ProductSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const timeRef = useRef(null);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => handleSlideChange(1), 7000);
  });

  useEffect(() => {
    handleDataRequest();
  }, []);

  const handleDataRequest = async () => {
    const response = await getData("/slides");
    setSlides(response);
  };

  const setSlidePosition = (index) => {
    return `${100 * index}%`;
  };

  const handleSlideChange = (increment) => {
    if (currentIndex + increment > slides.length - 1) {
      setCurrentIndex(0);
    } else if (currentIndex + increment < 0) {
      setCurrentIndex(slides.length - 1);
    } else {
      setCurrentIndex(currentIndex + increment);
    }
  };

  const Slides = slides.map((slide, index) => {
    return (
      <StyledCarouselSlides key={index} position={setSlidePosition(index)}>
        <StyledText>
          <StyledTitle>{slide.title}</StyledTitle>
          <StyledDescription>{slide.description}</StyledDescription>
        </StyledText>
        <StyledImgs src={slide.img} />
      </StyledCarouselSlides>
    );
  });

  const DotsNav = slides.map((slide, index) => {
    return (
      <StyledCarouselIndicator
        key={index}
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
