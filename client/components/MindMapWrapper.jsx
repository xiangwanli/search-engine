import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import MindMap from 'react-mindmap';

import ContributeButton from './ContributeButton.jsx';

@connect(store => ({
  connections: store.map.connections,
  nodes: store.map.nodes,
}))
export default class MindMapWrapper extends Component {
  render() {
    return (
      <div>
        <MindMap
          connections={this.props.connections}
          nodes={this.props.nodes}
        />
        <ContributeButton />
      </div>
    );
  }
}

MindMapWrapper.propTypes = {
  connections: PropTypes.array,
  nodes: PropTypes.array,
};
