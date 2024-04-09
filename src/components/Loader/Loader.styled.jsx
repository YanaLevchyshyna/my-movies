import styled from '@emotion/styled';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 139, 0.2);
  transform: translate(-50%, -50%);
`;
