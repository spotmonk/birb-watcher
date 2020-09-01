import React from 'react';
// import { Link } from 'react-router-dom';
import birbsData from '../../../helpers/data/birbsData';
import authData from '../../../helpers/data/authData';

import BirbCard from '../../shared/BirbCard/BirbCard';

class Home extends React.Component {
  state = {
    birbs: [],
  }

  componentDidMount() {
    birbsData.getBirbsByUid(authData.getUid())
      .then((birbs) => this.setState({ birbs }))
      .catch((err) => console.error('can not get birbs', err));
  }

  render() {
    const { birbs } = this.state;
    const birbCards = birbs.map((birb) => <BirbCard key={birb.id} birb={birb}/>);
    return (
      <div>
        {birbCards}
      </div>
    );
  }
}

export default Home;
