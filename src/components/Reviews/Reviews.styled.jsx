import styled from '@emotion/styled';
import { IoPersonCircleOutline } from 'react-icons/io5';

export const ReviewerImg = styled(IoPersonCircleOutline)`
  width: 20px;
  height: 20px;
  stroke: grey;
`;

export const ReviewAuthor = styled.p``;

export const ReviewContent = styled.p``;

export const NoReviews = styled.p`
  text-align: center;
  padding: 34px 10px;
  color: #ffffff;
  background-image: radial-gradient(
    circle at center,
    rgb(32, 32, 32) calc(50vw - 510px),
    rgba(32, 32, 32, 0.84) 50%,
    rgba(32, 32, 32, 0.84) 100%
  );
  font-size: 20px;
`;
