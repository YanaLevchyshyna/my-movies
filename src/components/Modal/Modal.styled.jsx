import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(12px);
`;

export const ModalContetnt = styled.div`
  position: absolute;
  width: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
