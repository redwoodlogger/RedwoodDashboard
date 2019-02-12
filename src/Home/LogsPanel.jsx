// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import SystemDropdown from "./SystemDropdown";
import Button from "../shared/Button";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const PanelButtons = () => (
  <div>
    <Button
      css={css`
        margin-right: 0.8em;
      `}
    >
      Bug Reports
    </Button>
    <Button defaultStyle={false}>General Feedback</Button>
  </div>
);

const PanelOptions = props => {
  const { children } = props;
  return <div>{children}</div>;
};

PanelOptions.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const PanelTop = props => {
  const { children } = props;
  return (
    <section
      css={css`
        background: white;
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
      `}
    >
      {children}
    </section>
  );
};

PanelTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const Logs = props => {
  const { columnDefs, rowData } = props;
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "600px"
      }}
    >
      <AgGridReact columnDefs={columnDefs} rowData={rowData} />
    </div>
  );
};

Logs.propTypes = {
  columnDefs: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired
    })
  ).isRequired,
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      actions: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

class LogsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        { headerName: "Actions", field: "actions" },
        { headerName: "Status", field: "status" },
        { headerName: "ID", field: "id" },
        { headerName: "Date Submitted", field: "date submitted" },
        { headerName: "Submitter", field: "submitter" },
        { headerName: "Tags", field: "tags" },
        { headerName: "Dev Remarks", field: "dev remarks" }
      ],
      rowData: [
        { actions: "Toyota", status: "Celica", id: 35000 },
        { actions: "Ford", status: "Mondeo", id: 32000 },
        { actions: "Porsche", status: "Boxter", id: 72000 }
      ],
      systems: ["System Apple", "System Orange", "System Watermelon"],
      currentSystem: "System Apple"
    };
  }

  render() {
    const { systems, currentSystem, columnDefs, rowData } = this.state;
    return (
      <section
        css={css`
          flex: 1;
          padding: 1em 2em 0 4em;
          overflow: auto;
          font-family: "Source Sans Pro";
        `}
      >
        <PanelTop>
          <PanelOptions>
            <SystemDropdown systems={systems} currentSystem={currentSystem} />
            <PanelButtons />
          </PanelOptions>
          <p>10 Unresolved Bug Reports | 5 Unresolved General Feedback</p>
        </PanelTop>
        <Logs columnDefs={columnDefs} rowData={rowData} />
      </section>
    );
  }
}

export default LogsPanel;
