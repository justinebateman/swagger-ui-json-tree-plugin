import React, {Component} from "react";
import PropTypes from "proptypes";
import ReactJson from 'react-json-view';


export default class JSONTree extends Component {

  initializeComponent = (c) => {
    this.el = c
  }

  render() {
    let { value, className, iconStyle, displayDataTypes, displayObjectSize, name } = this.props
    className = className || ""
    let data = null;
    try {
      data = JSON.parse(value);
    } catch (e) {
      data = null;
    }

    if (data) {
      return <ReactJson src={data} theme="tube" iconStyle="square" displayDataTypes={false} displayObjectSize={false} name={false} />
    }

    return <pre ref={this.initializeComponent} className={className + " microlight"}>{value}</pre>
  }
}

JSONTree.propTypes = {
  value: PropTypes.string.isRequired,
  className: PropTypes.string
}