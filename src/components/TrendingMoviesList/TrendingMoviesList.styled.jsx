import styled from '@emotion/styled';

export const Section = styled.section`
  margin-bottom: 50px;
`;

export const Container = styled.div`
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const MoviesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
  gap: 20px;
  margin: 0px auto;
  margin-bottom: 40px;
`;

export const MovieItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 8px 8px 17px 8px;

  max-width: 100%;
  width: 220px;
  height: 100%;

  border: none;
  transform: scale(1);
  border-radius: 8px;

  background-color: transparent;

  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  backdrop-filter: blur(3.5px);
  transition: box-shadow 250ms linear;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 2px 24px -5px rgba(0, 0, 0, 0.74);
  }

  img {
    display: block;
    min-height: 100%;
    height: 330px;
    width: 100%;

    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    transition: transform 250ms linear;
    transform: scale(1);

    object-fit: cover;
    object-position: center;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const PosterWrapp = styled.div`
  margin-bottom: 10px;
  overflow: hidden;
`;

export const MovieTitle = styled.h2`
  font-size: 1em;
  margin: 0;
  width: 100%;
  word-wrap: normal;
  overflow-wrap: break-word;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CircularRatingWrap = styled.div`
  position: absolute;
  bottom: 40px;
  left: 12px;
  width: 40px;
  height: 40px;
`;

export const Button = styled.button`
  text-decoration: none;
  display: block;
  padding: 12px 40px;
  margin: 0px auto;

  border: none;
  border-radius: 30px;
  background-image: linear-gradient(
    45deg,
    #6ab1d7 0%,
    #33cbc4 50%,
    #002878 100%
  );
  background-position: 100% 0;
  background-size: 200% 200%;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.colors.textColor};
  box-shadow: 0 16px 32px 0 rgba(0, 40, 120, 0.35);
  transition: 0.5s;

  cursor: pointer;

  :hover {
    box-shadow: 0 0 0 0 rgba(0, 40, 120, 0);
    background-position: 0 0;
  }
`;
