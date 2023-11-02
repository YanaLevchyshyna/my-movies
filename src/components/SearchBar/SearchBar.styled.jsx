import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const FormEl = styled.form`
  position: relative;
  width: 700px;
  margin: 0 auto;
  top: 0;
  left: 0;
`;

export const InputEl = styled.input`
  width: 100%;
  height: 42px;
  padding: 0;
  padding-left: 10px;
  border: 2px solid #032541;
  border-radius: 30px;
  font-size: 18px;
  font-weight: 400;
  outline: none;
  color: #032541;

  ::placeholder {
    font-size: 18px;
    color: ${p => p.theme.colors.placeHolder};
    opacity: 0.4;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 2px;
  right: -12px;
  width: 111px;
  height: 42px;
  padding: 0;
  border: none;
  border-radius: 30px;
  background: linear-gradient(93deg, #90cea1 25%, #01b4e4 92%);
  cursor: pointer;
`;
export const BsSearchSVG = styled(BsSearch)`
  fill: #032541;
  width: 24px;
  height: 24px;

  :hover {
    fill: #fff;
  }
`;
