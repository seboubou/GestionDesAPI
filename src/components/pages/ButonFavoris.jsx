import React from 'react';

const ButonFavoris = ({ onShowFavorites }) => {
    return (
        <div className='favoris-btn'>
            <button type="button" class="btn cube cube-hover" onClick={onShowFavorites}>
  <div class="bg-top">
  <div class="bg-inner"></div>
  </div>
  <div class="bg-right">
  <div class="bg-inner"></div>
  </div>
  <div class="bg">
  <div class="bg-inner"></div>
  </div>
  <div class="text">Favoris</div>
</button>
        </div>
    );
};

export default ButonFavoris;