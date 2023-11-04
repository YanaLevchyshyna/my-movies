import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LogoEl = styled(NavLink)`
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
