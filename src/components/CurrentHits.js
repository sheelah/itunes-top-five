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
    return (
      <section className="current-hits">
        <h2>Current iTunes Top Five - <span>{this.props.genre.replace(/([A-Z])/g, ' $1')}</span></h2>
        <CurrentHitsList albums={this.props.albums} genre={this.props.genre} inProgress={this.props.inProgress} error={this.props.error} />
      </section>
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