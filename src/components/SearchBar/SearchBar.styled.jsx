import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

export const FormEl = styled.form`
  position: relative;
  width: 600px;
  margin: 0 auto;
`;

export const InputEl = styled.input`
  width: 100%;
  height: 42px;
  padding-left: 10px;
  border: 2px solid #032541;
  border-radius: 5px;
  outline: none;
  color: #032541;

  ::placeholder {
    font-size: 22px;
    color: ${p => p.theme.colors.placeHolder};
    opacity: 0.4;
  }
`;

export const Button = styled.button`
 position: absolute; 
  top: 0;
  right: 0;
  width: 42px;
  height: 44px;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  }
`;

export const BsSearchSVG = styled(BsSearch)`
  fill: #032541;
  width: 24px;
  height: 24px;
`;
