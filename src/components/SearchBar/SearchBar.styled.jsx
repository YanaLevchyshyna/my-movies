import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const FormEl = styled.form`
  position: relative;
  width: 333px;
  margin: 0 auto;
  top: 0;
  left: 0;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1400px) {
    width: 700px;
  }
`;

export const InputEl = styled.input`
  width: 100%;
  height: 21px;
  padding: 0;
  padding-left: 10px;
  border: 2px solid #032541;
  border-radius: 30px;
  font-size: ${props => props.theme.fontSizes.xs};
  outline: none;
  color: #032541;

  ::placeholder {
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${p => p.theme.colors.placeHolder};
    opacity: 0.4;

    @media screen and (min-width: 768px) {
      font-size: ${props => props.theme.fontSizes.s};
    }

    @media screen and (min-width: 1400px) {
      font-size: ${props => props.theme.fontSizes.m};
    }
  }

  @media screen and (min-width: 768px) {
    font-size: ${props => props.theme.fontSizes.s};
    height: 36px;
  }

  @media screen and (min-width: 1400px) {
    font-size: ${props => props.theme.fontSizes.m};
    height: 42px;
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 2px;
  right: -12px;
  width: 90px;
  height: 21px;
  padding: 0;
  border: none;
  border-radius: 30px;
  background: linear-gradient(93deg, #90cea1 25%, #01b4e4 92%);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    height: 36px;
    width: 95px;
  }

  @media screen and (min-width: 1400px) {
    height: 42px;
    width: 111px;
  }
`;

export const BsSearchSVG = styled(BsSearch)`
  fill: #032541;
  width: 16px;
  height: 16px;

  :hover {
    fill: #fff;
  }

  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
  }

  @media screen and (min-width: 1400px) {
    width: 24px;
    height: 24px;
  }
`;
