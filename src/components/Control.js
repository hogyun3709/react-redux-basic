import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomColor: PropTypes.func
};

function createWarning(funcName){
  return () => console.warn(funcName + 'is not defined');
}
const defaultProps = {
  onPlus: createWarning('onPlus'),
  onSubtract: createWarning('onSubtract'),
  onRandomColor: createWarning('onRandomColor')


};
class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
              <button onClick={this.props.onPlus}>+</button>
            <button onClick={this.props.onSubtract}>-</button>
          <button onClick={this.props.onRandomColor}>Random Background</button>

            </div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
