import styled from '@emotion/styled';

export const MoviesContainer = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  color: #032541;
  font-size: ${props => props.theme.fontSizes.s};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    margin-bottom: 50px;
  }
`;

export const Section = styled.section`
  margin: 45px 0;
`;
