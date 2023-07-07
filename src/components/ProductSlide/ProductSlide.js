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
import slide1 from "../../assets/shop-hero-1-product-slide-1.jpg";
import slide2 from "../../assets/fashion-report-1-1.png";
import slide3 from "../../assets/3.jpg";
import { useEffect, useRef, useState } from "react";

export const ProductSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imgs = [slide1, slide2, slide3];

  const info = [
    {
      title: "New Collection",
      description:
        "Introducing Our Latest Collection: Unveiling Exquisite Styles for You!",
      img: slide1,
    },
    {
      title: "Don't Wait To Be Pretty",
      description: "Receive your order in 2 days",
      img: slide2,
    },
    {
      title: "You don't have to Suffer to be Beautiful",
      description: "Be gorgeous and comfortable with our products :) ",
      img: slide3,
    },
  ];

  const timeRef = useRef(null);

  useEffect(() => {
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => handleSlideChange(1), 7000);
  });

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

  const Slides = info.map((slide, index) => {
    return (
      <StyledCarouselSlides position={setSlidePosition(index)}>
        <StyledText>
          <StyledTitle>{slide.title}</StyledTitle>
          <StyledDescription>{slide.description}</StyledDescription>
        </StyledText>
        <StyledImgs src={slide.img} />
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
