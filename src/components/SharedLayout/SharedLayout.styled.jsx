import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
  padding-top: 24px;
  padding-bottom: 24px;
  background-color: #032541;
  color: #e9eef2;
`;

export const Logo = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  font-size: 22px;
  background: linear-gradient(90deg, #90cea1 20%, #01b4e4 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #90cea1;
`;

export const Box = styled.div`
  display: flex;

  width: 40px;
  height: 18px;
  border-radius: 10px;
  background-color: #01b4e4;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-left: 10px;
  font-weight: 600;
  font-size: 22px;
  position: relative;
  color: inherit;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0.06em;
    height: 0.2em;
    width: 100%;
    background: linear-gradient(110deg, #e1f549, #29d0be, #6cb8ea, #ff5959);
    z-index: -1;
    transition: height 0.25s cubic-bezier(0.6, 0, 0.4, 1);
  }

  &:hover::after {
    height: 0.9em;
  }
`;
