import {
  StyledButton,
  StyledEditorPickContainer,
  StyledEditorPickPhotosContainer,
  StyledPhoto1,
  StyledPhoto2,
  StyledPhoto3,
  StyledPhoto4,
  StyledPhotosColumn,
  StyledPhotosRow,
  StyledSubTitle,
  StyledTitle,
} from "./StyledEditorPick";

export const EditorPick = () => {
  return (
    <StyledEditorPickContainer>
      <StyledTitle>Editor's Pick</StyledTitle>
      <StyledSubTitle>
        Problems trying to resolve the conflict between{" "}
      </StyledSubTitle>
      <StyledEditorPickPhotosContainer>
        <StyledPhotosRow>
          <StyledPhoto1>
            <StyledButton>Men</StyledButton>
          </StyledPhoto1>
          <StyledPhoto2>
            <StyledButton>Women</StyledButton>
          </StyledPhoto2>
        </StyledPhotosRow>
        <StyledPhotosColumn>
          <StyledPhoto3>
            <StyledButton>Acessories</StyledButton>
          </StyledPhoto3>
          <StyledPhoto4>
            <StyledButton>Kids</StyledButton>
          </StyledPhoto4>
        </StyledPhotosColumn>
      </StyledEditorPickPhotosContainer>
    </StyledEditorPickContainer>
  );
};
