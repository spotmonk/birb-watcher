import React from 'react';
import { Link } from 'react-router-dom';

class BirbCard extends React.Component {
  render() {
    const { birb } = this.props;

    const singleBirbLink = `birbs/${birb.id}`;
    const editBirbLink = `edit/${birb.id}`;

    return (
      <div className="Bird card">
      <div className="card-body">
        <h5 className="card-title">{birb.type}</h5>
        <p className="card-text">{birb.notes}</p>
        <Link to={singleBirbLink} >Single Bird</Link>
        <Link to={editBirbLink} >Edit Bird</Link>
      </div>
    </div>
    );
  }
}

export default BirbCard;
