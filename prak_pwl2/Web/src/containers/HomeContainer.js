import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getBeritasList } from "../actions/beritaAction";

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getBeritasList());
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
