import styled from '@emotion/styled';
import { IoPersonCircleOutline } from 'react-icons/io5';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ReviewItem = styled.li`
  display: block;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid rgba(227, 227, 227, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ReviewImgAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

export const ReviewerImg = styled(IoPersonCircleOutline)`
  margin-right: 15px;
  width: 30px;
  height: 30px;
  stroke: grey;
`;

export const ReviewAuthor = styled.p`
  font-weight: 700;
`;

export const ReviewContent = styled.p`
  font-family: 'Source Sans Pro', Arial, sans-serif;
`;

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
