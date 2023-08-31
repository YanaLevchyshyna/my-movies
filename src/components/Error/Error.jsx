import { ErrorEl, ImgError } from './Error.styled';
import errorImage from './errorImage.jpeg';

export default function Error() {
  return (
    <div role="alert">
      <ErrorEl>The resource you requested could not be found.</ErrorEl>
      <ImgError src={errorImage} alt="Error" />
    </div>
  );
}
