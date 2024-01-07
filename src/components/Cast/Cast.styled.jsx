import styled from '@emotion/styled';
import { IoPersonOutline } from 'react-icons/io5';

export const DefaultImg = styled(IoPersonOutline)`
  width: 200px;
  height: 300px;
  stroke: grey;
`;

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 20px;
  margin: 0px auto;
`;

export const ActorName = styled.p`
  font-weight: 700;
`;

export const ActorCharacter = styled.p`
  font-size: 14px;
`;
