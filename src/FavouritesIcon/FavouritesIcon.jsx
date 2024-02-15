import React from 'react';
import './FavouritesIcon.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function FavouritesIcon() {
  return (
    <>
      <span id="favourites-text">Add to Favourties</span>
      <FontAwesomeIcon icon={faHeart} />
    </>
  );
}

export default FavouritesIcon;
