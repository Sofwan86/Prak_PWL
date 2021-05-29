import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faBeritaPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";

const { SearchBar } = Search;

const defaultSorted = [
  {
    dataField: "number",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getBeritasList: state.Beritas.getBeritasList,
    errorBeritasList: state.Beritas.errorBeritasList,
  };
};

const TableComponent = (props) => {
  const columns = [
    {
      dataField: "number",
      text: "Number",
      sort: true,
      headerStyle: () => {
        return { width: "9%" };
      },
    },
    {
      dataField: "title",
      text: "Title ",
      sort: true,
    },
    {
      dataField: "link",
      text: "Link",
      sort: true,
    },
    {
      dataField: "image",
      text: "Image",
      headerStyle: () => {
        return { width: "30%" };
      },
    },
    {
      dataField: "source",
      text: "Source",
    },
    
  ];

  return (
    <Container>
      {props.getBeritasList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getBeritasList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="dark" className="mr-2">
                      <FontAwesomeIcon icon={faBeritaPlus} /> Create Berita
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} placeholder="Search .." />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()  }defaultPageSize={3}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          {props.errorBeritasList ? (
            <h4>{props.errorBeritasList}</h4>
          ) : (
            <Spinner color="dark" />
          )}
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
