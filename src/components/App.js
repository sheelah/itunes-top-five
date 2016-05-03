import React from 'react';
import GenrePicker from './GenrePicker';
import CurrentHits from './CurrentHits';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      genreChoice: 'alternative'
    };
  }

  changeGenre(genre) {
    this.setState({genreChoice: genre});
  }

  render() {
    return (
      <div className="container">
        <GenrePicker changeGenre={this.changeGenre.bind(this)} />
        <CurrentHits genre={this.state.genreChoice} />
      </div>
    );
  }
}

export default App;
