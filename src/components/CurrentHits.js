import React from 'react';
import { connect } from 'react-redux';
import CurrentHitsList from './CurrentHitsList';
import * as itunesApi from '../api/itunesApi';
import store from '../store';

class CurrentHits extends React.Component {

  componentDidMount() {
    this.getCurrentHits(this.props.genre);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.genre !== newProps.genre) {
      // Selected genre is not the same as prior genre
      this.getCurrentHits(newProps.genre);
    }
  }

  getCurrentHits(genre) {
    itunesApi.getCurrentHits(genre);
  }

  render() {
    const {albums, genre, inProgress, error} = this.props;
    let message = null;

    if (error) {
      return (
        <p>An error has occurred.</p>
      );
    }

    if (inProgress === true || !albums[genre]) {
      return (
        <p>Loading ...</p>
      );
    }

    return (
        <div>
          <h2>Current iTunes Top Five - <span>{genre.replace(/([A-Z])/g, ' $1')}</span></h2>
          <ul className="album-list">
            {Object.keys(albums[genre]).map(album => {
              return <CurrentHitsList key={albums[genre][album].id.attributes["im:id"]} album={albums[genre][album]} />;
            })}
          </ul>
        </div>
    );
  }
}

CurrentHits.propTypes = {
  genre: React.PropTypes.string.isRequired
};

const mapStateToProps = function(store) {
  return {
    albums: store.albumState.albums,
    genre: store.genreState.genreChoice,
    inProgress: store.albumState.inProgress,
    error: store.albumState.error
  };
};

export default connect(mapStateToProps)(CurrentHits);