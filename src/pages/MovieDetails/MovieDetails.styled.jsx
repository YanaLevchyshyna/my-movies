import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const BackLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #424552;
  margin-bottom: 10px;

  &:hover {
    color: inherit;
  }
  @media screen and (min-width: 375px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media screen and (min-width: 1400px) {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const CircularRatingWrapper = styled.div`
  position: absolute;
  top: 5px;
  left: 50px;
  width: 35px;
  height: 35px;

  @media screen and (min-width: 768px) {
    top: 5px;
    left: 5px;
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 1400px) {
    width: 55px;
    height: 55px;
  }
`;

export const MovieDetailsSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 35px 40px;
`;

export const MovieDetailsContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 270px;

  @media screen and (min-width: 375px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    max-width: 767px;
    position: relative;
    flex-direction: row;
    justify-content: flex-start;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1439px;
  }
`;

export const MovieDetailsImg = styled.img`
  @media screen and (min-width: 375px) {
    width: 200px;
  }

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1400px) {
    width: 300px;
  }
`;

export const MovieDetailsContainerImg = styled.div`
  @media screen and (min-width: 375px) {
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
  @media screen and (min-width: 1400px) {
  }
`;

export const MovieDetailsContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 768px) {
    padding-left: 40px;
  }
`;

export const MovieTitle = styled.h2`
  margin-bottom: 18px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    text-align: start;
    font-size: ${props => props.theme.fontSizes.xl};
    font-size: ${props => props.theme.fontWeights.bold};
  }
`;

export const DivWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    gap: 8px;
  }
  @media screen and (min-width: 1400px) {
    flex-direction: row;
  }
`;

export const ReleaseDateTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
`;

export const ReleaseDate = styled.p`
  color: ${props => props.theme.colors.textColor};
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;
export const Runtime = styled.p`
  color: ${props => props.theme.colors.textColor};
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const VoteAverage = styled.p`
  margin-bottom: 8px;
  color: ${props => props.theme.colors.textColor};
`;

export const Genres = styled.ul`
  display: flex;
  gap: 2px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    gap: 10px;
  }
`;

export const Genre = styled.li`
  text-shadow: ${props => props.theme.shadows.textShadow};
  font-size: 10px;

  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }

  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const Tagline = styled.p`
  margin-bottom: 16px;
  font-style: italic;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }

  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const OverviewTitle = styled.h3`
  margin-bottom: 5px;
  font-size: ${props => props.theme.fontSizes.xs};
  color: ${props => props.theme.colors.textColor};

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.m};
  }
  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const MovieOverview = styled.p`
  color: ${props => props.theme.colors.textColor};
  @media screen and (min-width: 375px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }

  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.body};
  }
`;
export const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 20px 0;
`;

export const AuthorsLink = styled(NavLink)`
  text-decoration: none;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  color: #424552;

  &:hover {
    color: inherit;
  }
  @media screen and (min-width: 375px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media screen and (min-width: 1400px) {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.m};
  }
`;

export const ReviewsLink = styled(NavLink)`
  text-decoration: none;
  color: #424552;

  &:hover {
    color: inherit;
  }
  @media screen and (min-width: 375px) {
    font-size: ${props => props.theme.fontSizes.xs};
  }
  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
  }
  @media screen and (min-width: 1400px) {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.m};
  }
`;
