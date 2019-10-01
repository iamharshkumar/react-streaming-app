import React from 'react';
import Modal from '../Modal';
import history from "../../history";
import { connect } from 'react-redux';
import { fetchStream } from "../../actions";


class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
        <div>
          <button className="ui button negative">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
    );
  }


  render() {
    // if(!this.props.stream) {
    //   return <div>Loading...</div>
    // }

    return (
        <Modal
            title="Delete Stream"
            content="Are you sure you want delete this stream?"
            actions={this.renderActions()}
            onDismiss={() => history.push('/')}
        />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(null, {fetchStream})(StreamDelete);
