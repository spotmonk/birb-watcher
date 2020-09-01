import React from 'react';
import birbsData from '../../../helpers/data/birbsData';

class SingleBirb extends React.Component {
  statet = {
    birb: {},
  }

  componentDidMount() {
    const { birbId } = this.props.match.params;
    console.warn(birbId);
    birbsData.getBirbsById(birbId)
      .then((res) => this.setState({ birb: res.data }))
      .catch((err) => console.error('get sinlge bird failed', err));
  }

  render() {
    return (
      <h2>SingleBirb Component</h2>
    );
  }
}

export default SingleBirb;
