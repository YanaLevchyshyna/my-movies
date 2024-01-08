import styled from '@emotion/styled';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  color: #032541;
  font-size: ${props => props.theme.fontSizes.s};

  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`;
