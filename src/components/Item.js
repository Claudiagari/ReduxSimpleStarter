import React, { Component } from 'react';
class Item extends Component {
  render() {
     
      const HobbiesTotal = hobbies.map((hobbie, index) => {
          return <li key={index}>{hobbie}</li>
      })
      return (
          <div>
              <ul>{HobbiesTotal}</ul>
                
          </div>
          
      )
  }
}
export default Item;