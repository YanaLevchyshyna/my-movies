import styled from '@emotion/styled';

export const SearchedMovieList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SearchedMovieItem = styled.li`
  display: flex;
  border-radius: ${props => props.theme.radius.normal};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(227, 227, 227, 1);
  overflow: hidden;
`;

export const SearchedMovieImg = styled.img`
  /* width: 100%;
  min-width: 100%; */
  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 10px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const MovieOverview = styled.p`
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const MovieDescriptionWrapper = styled.div`
  margin-left: 15px;
`;
