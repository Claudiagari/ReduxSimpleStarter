import React, { Component } from 'react';
import Item from './Item';

class Seccion extends Component {
  render() {
    return (
      <div >
      <Item  hobbies = {['codear','bailar','ver series']}/> 
    </div>
    );
  }
}
export default Seccion;