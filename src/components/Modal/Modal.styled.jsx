import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  position: absolute;
  width: auto;
  top: 50%;
  left: 50%;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.7);
  transform: translate(-50%, -50%);

  @media screen and (min-width: 768px) {
    width: 490px;
    height: 300px;
  }
  @media screen and (min-width: 1400px) {
    width: 1178px;
    height: 662px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-bottom: 24px;
  color: #fff;
  background-color: ${props => props.theme.colors.borderColor};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.radius.round};
  box-shadow: ${props => props.theme.shadows.boxShadowCard};
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.accent};
  }
`;

export const IframeEl = styled.iframe`
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 238px;
  @media screen and (min-width: 768px) {
    width: 490px;
    height: 300px;
  }
  @media screen and (min-width: 1400px) {
    width: 1178px;
    height: 662px;
  }
`;
