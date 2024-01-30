import styled from '@emotion/styled';

export const SearchedMovieItem = styled.li`
  display: flex;
  border-radius: ${props => props.theme.radius.normal};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(227, 227, 227, 1);
  overflow: hidden;
`;

export const SearchedMovieImg = styled.img`
  width: 94px;
  height: 141px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const MovieTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const MovieOverview = styled.p`
  font-size: 9px;
  display: inline-block;

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const ReadMoreButton = styled.button`
  font-size: 9px;
  background: none;
  border: none;
  padding: 0;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.buttonHover};
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const MovieDescriptionWrapper = styled.div`
  padding: 20px 10px;
`;
