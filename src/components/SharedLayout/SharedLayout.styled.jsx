import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  margin-bottom: 50px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #032541;
  color: #e9eef2;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-left: 10px;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: ${props => props.theme.fontSizes.m};
  position: relative;
  color: inherit;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    right: 100%; /* Змінено з left: 0; */
    bottom: 0.06em;
    height: 0.2em;
    background: linear-gradient(110deg, #29d0be, #6cb8ea);
    z-index: -1;
    transition: width 0.25s cubic-bezier(0.6, 0, 0.4, 1); /* Змінено з height на width */
  }

  &:hover::after {
    width: 100%; /* Змінено з height на width */
    left: 0;
    right: 0; /* Додано */
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 600;
  }

  @media screen and (min-width: 1400px) {
    font-size: 22px;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ButtonEn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 20px;
  padding: 3px 5px;
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: pointer;

  color: #fff;
  background-color: transparent;
  font-weight: 600;

  transition: linear 0.1s;

  &:hover {
    color: #032541;
    background-color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 24px;
  }

  @media screen and (min-width: 1400px) {
    width: 28px;
    height: 26px;
  }
`;
export const ButtonUk = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 20px;
  padding: 3px 5px;
  border: 1px solid #fff;
  border-radius: 3px;
  cursor: pointer;

  color: #fff;
  background-color: transparent;
  font-weight: 600;

  transition: linear 0.1s;

  &:hover {
    color: #032541;
    background-color: #ffffff;
  }

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 24px;
  }

  @media screen and (min-width: 1400px) {
    width: 28px;
    height: 26px;
  }
`;
