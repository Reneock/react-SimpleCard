import React, { Component } from 'react';

class Description extends Component {
  render() {
    return (
      <div className='description'>
        <p>{this.props.msg}
        </p>
      </div>
    );
  }
}

export default Description;



