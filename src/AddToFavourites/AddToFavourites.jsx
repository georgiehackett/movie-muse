import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function AddToFavourites() {
  return (
    <>
      <span id="favourites-text mr-3">Add to Favourites</span>
      <FontAwesomeIcon icon={faHeart} />
    </>
  );
}

export default AddToFavourites;