import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './content.css';

class Accordion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeLabel: ''
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(ref) {
    let label = ref.target.innerText;
    console.log(label);
    let activeLabel = label && label.split('+ ')[1];
    console.log(activeLabel, this.state.activeLabel);
    if (activeLabel === this.state.activeLabel) {
      activeLabel = '';
    }
    this.setState({ activeLabel: activeLabel });
  }

  render() {
    return this.props.content.map((item, i) => (
      <div key={i} onClick={this.handleToggle}>
        <h3>
          <b>+</b> {item.title}
        </h3>
        {item.title === this.state.activeLabel && (
          <ul>
            {item.content.map((content, i) => (
              <p key='i'>{content}</p>
            ))}
          </ul>
        )}
      </div>
    ));
  }
}

Accordion.propTypes = {
  content: PropTypes.array.isRequired
};

export default Accordion;
