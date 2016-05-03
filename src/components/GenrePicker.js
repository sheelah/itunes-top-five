import React from 'react';

class GenrePicker extends React.Component {

  onGenreChange(e) {
    e.preventDefault();
    let genre = e.target.value;
    this.props.changeGenre(genre);
  }

  render() {
     return (
      <section className="genre-picker">
        <label>Pick a Genre</label>
        <select value={this.props.value} onChange={this.onGenreChange.bind(this)}>
          <option value="alternative">Alternative</option>
          <option value="pop">Pop</option>
          <option value="hipHop">Hip Hop</option>
        </select>
      </section>
    );
  }
}

GenrePicker.propTypes = {
  changeGenre: React.PropTypes.func.isRequired
};


export default GenrePicker;
