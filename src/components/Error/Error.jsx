import { ErrorEl, ImgError, ErrorWrapper } from './Error.styled';
import errorImage from './errorImage.jpeg';

export default function Error() {
  return (
    <ErrorWrapper role="alert">
      <ErrorEl>The resource you requested could not be found.</ErrorEl>
      <ImgError src={errorImage} alt="Error" />
    </ErrorWrapper>
  );
}
