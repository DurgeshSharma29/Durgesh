import React, { Component } from 'react';
export class FirstCard extends Component {
  render() {
    return(
    <div class="main-section">
            <div class="card-wrapper">
                    <div class="card-image">
                    <img src="\image\components.png" className="components-logo" alt="components" />
                    </div>
                    <div class="card-content">
                            <h6>Components</h6>
                            <span class="cardContent">
                            Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
                             </span>
                    </div>
            </div>
            <div class="card-wrapper">
                    <div class="card-image">
                    <img src="\image\state.png" className="state-logo" alt="state" />
                    </div>
                    <div class="card-content">
                            <h6>State</h6>
                            <span class="cardContent">
                            The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.  
                            </span>
                    </div>
            </div>
            <div class="card-wrapper">
                    <div class="card-image">
                    <img src="\image\events.png" className="events-logo" alt="events" />
                    </div>
                    <div class="card-content">
                            <h6>Events</h6>
                            <span class="cardContent">
                            The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.   
                            </span>
                    </div>
            </div>
      </div>
    )
  }
}
export default FirstCard;