import React from 'react';
import { LoaderBackdrop } from './Loader.styled';
import BeatLoader from 'react-spinners/BeatLoader';

function Loader() {
  return (
    <LoaderBackdrop>
      <BeatLoader
        color="#032541"
        size={20}
        cssOverride={{ position: 'absolute', top: '50%', left: '50%' }}
      />
    </LoaderBackdrop>
  );
}

export default Loader;
