import React from 'react';
import GenrePicker from './GenrePicker';
import CurrentHits from './CurrentHits';
import store from '../store';
import * as genreActions from '../actions/genreActions';

class App extends React.Component {

  changeGenre(genre) {
    store.dispatch(genreActions.selectGenre(genre));
  }

  render() {
    return (
      <div className="container">
        <GenrePicker changeGenre={this.changeGenre.bind(this)} />
        <CurrentHits genre={this.props.genreChoice} />
      </div>
    );
  }
}

const mapStateToProps = function(store) {
  return {
    genre: store.genreState.genreChoice
  };
};

export default App;
