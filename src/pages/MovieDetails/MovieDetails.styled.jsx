import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  position: relative;
  color: #424552;
  z-index: 1;

  &:hover {
    color: inherit;
  }
`;

export const MovieDetailsSection = styled.section`
  padding: 35px 40px;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
`;

export const MovieDetailsContainerImg = styled.div``;

export const MovieDetailsContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 5px;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.l};
  color: ${props => props.theme.colors.textColor};
`;

export const DivWrapp = styled.div`
  display: flex;
  gap: 10px;
`;

export const ReleaseDate = styled.p`
  color: ${props => props.theme.colors.textColor};
`;
export const Runtime = styled.p`
  color: ${props => props.theme.colors.textColor};
`;
export const VoteAverage = styled.p`
  color: ${props => props.theme.colors.textColor};
`;

export const Genres = styled.ul`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  font-weight: 400;
`;

export const Genre = styled.li`
  text-shadow: 0 0.4px 0.4px #fff;
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: bold;
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const Tagline = styled.p`
  color: ${props => props.theme.colors.textColor};
`;

export const MovieOverview = styled.p`
  color: ${props => props.theme.colors.textColor};
`;
