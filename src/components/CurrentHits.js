import React from 'react';
import axios from 'axios';
import CurrentHitsList from './CurrentHitsList';
import genreIds from '../genres';

const CurrentHits = React.createClass({
  propTypes: {
    genre: React.PropTypes.string.isRequired
  },
  getInitialState() {
    return {
      albums: {}
    };
  },
  componentDidMount() {
    this.getCurrentHits(this.props.genre);
  },
  componentWillReceiveProps(newProps) {
    this.getCurrentHits(newProps.genre);
  },
  getCurrentHits(genre) {
    const url = 'https://itunes.apple.com/us/rss/topalbums/limit=5/genre=' + genreIds[genre] + '/explicit=true/json';
    axios.get(url)
      .then(results => {
        const albums = Object.assign({}, this.state.albums, {[genre] : results.data.feed.entry});
        this.setState({albums});
      })
      .catch((err) => {
        console.log("An error occurred");
      });

  },
  render() {
    return (
      <section className="current-hits">
        <h2>Current iTunes Top Five - <span>{this.props.genre.replace(/([A-Z])/g, ' $1')}</span></h2>
        <CurrentHitsList albums={this.state.albums} genre={this.props.genre} />
      </section>
    );
  }
});

export default CurrentHits;
