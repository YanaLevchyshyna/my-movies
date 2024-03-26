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
  display: block;
  margin: 0px auto;

  background-color: ${props => props.theme.colors.button};
  color: ${props => props.theme.colors.textColor};

  padding: 12px 20px 12px;
  min-width: 120px;
  border: 2px solid transparent;
  min-height: 44px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(136, 144, 195, 0.2),
    0 5px 15px 0 rgba(37, 44, 97, 0.15);
  font-size: 14px;
  line-height: 1.2;
  font-weight: 700;
  user-select: none;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  transition: color 0.2s ease, background-color 0.2s ease,
    border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
`;
