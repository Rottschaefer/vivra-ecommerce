import {
  StyledLeftButton,
  StyledRightButton,
  StyledSlideContainer,
  StyledSlideImg,
  StyledSlideSection,
} from "./StyledProductSlide";

import slide2 from "../../assets/fashion-report-1-1.jpg";
import slide3 from "../../assets/Top_Retail_Trends_2023.png";
import { useEffect, useState, useRef } from "react";

export const ProductSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imgs = [slide2, slide3];

  const timeRef = useRef(null);

  // useEffect(() => {
  //   if (timeRef.current) {
  //     clearTimeout(timeRef.current);
  //   }
  //   timeRef.current = setTimeout(() => handleSlideChange(1), 10000);
  // });

  const handleSlideChange = (increment) => {
    if (currentIndex + increment > imgs.length - 1) {
      setCurrentIndex(0);
    } else if (currentIndex + increment < 0) {
      setCurrentIndex(imgs.length - 1);
    } else {
      setCurrentIndex(currentIndex + increment);
    }
  };

  return (
    <>
      <StyledLeftButton onClick={() => handleSlideChange(-1)}>
        {"<"}
      </StyledLeftButton>
      <StyledRightButton onClick={() => handleSlideChange(1)}>
        {">"}
      </StyledRightButton>
      <StyledSlideSection currentIndex={`${-currentIndex * 100}%`}>
        {imgs.map((img) => (
          <StyledSlideImg img={img} />
        ))}
      </StyledSlideSection>
      {/* <StyledSlideSection img={imgs[currentIndex]} /> */}
    </>
  );
};
