import React from 'react';

var CurrentHitsList = React.createClass({
  generateListItem(key) {
    const {albums} = this.props;
    const album = albums[key];
    return (
      <li key={key}>
        <a href={album.link.attributes.href} title="View on iTunes">
          <img src={album["im:image"][2].label} />
          <h3 className="album-name">{album["im:name"].label}</h3>
          <h4 className="artist-name">{album["im:artist"].label}</h4>
        </a>
      </li>
    );
  },
  render() {
    return (
      <ul className="album-list">
        {Object.keys(this.props.albums).map(this.generateListItem)}
      </ul>
    );
  }
});

export default CurrentHitsList;
