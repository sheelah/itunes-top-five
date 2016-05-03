import React from 'react';

class CurrentHitsList extends React.Component {

  generateListItem(key) {
    const {albums, genre} = this.props;
    const album = albums[genre][key];
    return (
      <li key={key}>
        <a href={album.link.attributes.href} title="View on iTunes">
          <img src={album["im:image"][2].label} />
          <h3 className="album-name">{album["im:name"].label}</h3>
          <h4 className="artist-name">{album["im:artist"].label}</h4>
        </a>
      </li>
    );
  }

  render() {
    const {albums, genre} = this.props;
    if (!albums[genre]) {
      return (
        <p>Loading ...</p>
      );
    }
    return (
      <ul className="album-list">
        {Object.keys(albums[genre]).map(this.generateListItem.bind(this))}
      </ul>
    );
  }
}

CurrentHitsList.propTypes = {
  albums: React.PropTypes.object.isRequired,
  genre: React.PropTypes.string.isRequired
};

export default CurrentHitsList;
