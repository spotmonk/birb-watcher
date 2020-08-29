import React from 'react';

class EditBirb extends React.Component {
  render() {
    const { birbId } = this.props.match.params;

    return (
      <h2>You are editing birb: {birbId} </h2>
    );
  }
}

export default EditBirb;
