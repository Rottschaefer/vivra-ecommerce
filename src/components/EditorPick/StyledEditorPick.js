import styled from "styled-components";
import photo1 from "../../assets/editorsPick/1.png";
import photo2 from "../../assets/editorsPick/2.png";
import photo3 from "../../assets/editorsPick/3.png";
import photo4 from "../../assets/editorsPick/4.png";

export const StyledEditorPickContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem 0rem;
  background-color: #fafafa;
`;

export const StyledTitle = styled.h3`
  font-family: Montserrat, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 3.2rem;
  letter-spacing: 0.01rem;
  text-transform: uppercase;
`;

export const StyledSubTitle = styled.p`
  color: #737373;
  text-align: center;
  font-family: Montserrat, sans-serif;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  letter-spacing: 0.02rem;
  margin-bottom: 4.8rem;
`;

export const StyledEditorPickPhotosContainer = styled.div`
  display: flex;
  height: 50rem;
  width: 72vw;
  min-width: 60rem;
  /* flex-wrap: wrap; */
  margin: auto;
  gap: 3rem;
  padding: 40px;
`;

export const StyledPhotosRow = styled.div`
  display: flex;
  width: 65%;
  gap: 3rem;
`;

export const StyledPhotosColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  height: 100%;
  gap: 3rem;
`;

export const StyledPhoto1 = styled.div`
  background-image: url(${photo1});
  background-size: cover;
  background-position: center;
  display: block;
  width: 60%;
  position: relative;
`;

export const StyledPhoto2 = styled.div`
  background-image: url(${photo2});
  background-size: cover;
  background-position: center;

  width: 40%;
  position: relative;
`;

export const StyledPhoto3 = styled.div`
  background-image: url(${photo3});
  background-size: cover;
  background-position: center;

  height: 50%;
  width: 100%;
  position: relative;
`;

export const StyledPhoto4 = styled.div`
  background-image: url(${photo4});
  background-size: cover;
  background-position: center;

  height: 50%;
  position: relative;
`;

export const StyledButton = styled.button`
  background-color: white;
  text-transform: uppercase;
  width: 50%;
  max-width: 17rem;
  min-width: 12rem;
  height: 5rem;
  border: none;
  position: absolute;
  bottom: 1.8rem;
  left: 8%;

  font-family: Montserrat, sans-serif;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.4rem;
  letter-spacing: 0.01rem;

  box-shadow: 2px 5px 50px;

  transition: all 0.5s;

  :hover {
    transform: translateY(-3px);
    scale: 1.05;
  }
`;
