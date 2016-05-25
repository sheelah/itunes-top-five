import React from 'react';

const CurrentHitsList = (props) => {

  const album = props.album;

  return (
    <li>
      <a href={album.link.attributes.href} title="View on iTunes">
        <img src={album["im:image"][2].label} />
        <h3 className="album-name">{album["im:name"].label}</h3>
        <h4 className="artist-name">{album["im:artist"].label}</h4>
      </a>
    </li>
  );
};

CurrentHitsList.propTypes = {
  album: React.PropTypes.object.isRequired,
};

export default CurrentHitsList;
