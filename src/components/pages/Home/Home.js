import React from 'react';

class Home extends React.Component {
  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb1000';
    this.props.history.push(`/edit/${birbId}`);
  }

  render() {
    return (
      <button className="btn btn-dark" onClick={this.editBirbEvent} >Edit a Birb</button>
    );
  }
}

export default Home;
