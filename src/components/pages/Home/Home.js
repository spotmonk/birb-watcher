import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  editBirbEvent = (e) => {
    e.preventDefault();
    const birbId = 'birb1000';
    this.props.history.push(`/edit/${birbId}`);
  }

  render() {
    return (
      <div>
        <button className="btn btn-dark" onClick={this.editBirbEvent} >Edit a Birb</button>
        <Link to='/new'>New Birb</Link>
        <Link to='/birb/birb1000'>Birb1000</Link>
      </div>
    );
  }
}

export default Home;
