import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  text-decoration: none;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 18px;
  color: #424552;

  &:hover {
    color: inherit;
  }
`;

export const CircularRatingWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 55px;
  height: 55px;
`;

export const MovieDetailsSection = styled.section`
  padding: 35px 40px;
`;

export const MovieDetailsContainer = styled.div`
  position: relative;
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
  margin-bottom: 32px;
  font-weight: 700;
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const DivWrapp = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

export const ReleaseDate = styled.p`
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-weight: ${props => props.theme.fontWeights.medium};
  }
`;
export const Runtime = styled.p`
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-weight: ${props => props.theme.fontWeights.medium};
  }
`;

export const VoteAverage = styled.p`
  margin-bottom: 8px;
  color: ${props => props.theme.colors.textColor};
`;

export const Genres = styled.ul`
  display: flex;
  gap: 10px;
  font-weight: 400;
`;

export const Genre = styled.li`
  text-shadow: 0 0.4px 0.4px #fff;
  font-size: ${props => props.theme.fontSizes.s};

  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const Tagline = styled.p`
  margin-bottom: 16px;
  font-style: italic;
  color: ${props => props.theme.colors.textColor};
`;

export const OverviewTitle = styled.h3`
  margin-bottom: 5px;
  color: ${props => props.theme.colors.textColor};
`;

export const MovieOverview = styled.p`
  color: ${props => props.theme.colors.textColor};
`;
export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
`;

export const AuthorsLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: #424552;

  &:hover {
    color: inherit;
  }
`;

export const ReviewsLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 18px;
  color: #424552;

  &:hover {
    color: inherit;
  }
`;
