import React from 'react';
import CurrentHitsList from './CurrentHitsList';
import * as itunesApi from '../api/itunes-api';

class CurrentHits extends React.Component {

  constructor() {
    super();
    this.state = {
      albums: {}
    };
  }

  componentDidMount() {
    this.getCurrentHits(this.props.genre);
  }

  componentWillReceiveProps(newProps) {
    this.getCurrentHits(newProps.genre);
  }

  getCurrentHits(genre) {
    itunesApi.getCurrentHits(genre).then(hits => {
      const albums = Object.assign({}, this.state.albums, {[genre] : hits.feed.entry});
      this.setState({albums});
    })
      .catch((err) => {
        console.log("An error occurred");
    });
  }

  render() {
    return (
      <section className="current-hits">
        <h2>Current iTunes Top Five - <span>{this.props.genre.replace(/([A-Z])/g, ' $1')}</span></h2>
        <CurrentHitsList albums={this.state.albums} genre={this.props.genre} />
      </section>
    );
  }
}

CurrentHits.propTypes = {
  genre: React.PropTypes.string.isRequired
};

export default CurrentHits;
