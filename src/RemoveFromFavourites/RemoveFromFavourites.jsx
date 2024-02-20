import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCrack } from '@fortawesome/free-solid-svg-icons';

function RemoveFromFavourites() {
  return (
   <>
    <span id='remove-favourites-text mr-3'>Remove from Favourites</span>
    <FontAwesomeIcon icon={faHeartCrack} />
   </>
  )
}

export default RemoveFromFavourites;