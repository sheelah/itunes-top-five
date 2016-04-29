import React from 'react';
import GenrePicker from './GenrePicker';
import CurrentHits from './CurrentHits';

const App = React.createClass({
  getInitialState() {
    return {
      genreChoice: 'alternative'
    };
  },
  changeGenre(genre) {
    this.setState({genreChoice: genre});
  },
  render() {
    return (
      <div className="container">
        <GenrePicker changeGenre={this.changeGenre} />
        <CurrentHits genre={this.state.genreChoice} />
      </div>
    );
  }
});

export default App;
