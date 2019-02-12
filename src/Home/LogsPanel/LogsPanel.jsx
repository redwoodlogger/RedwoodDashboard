// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { AgGridReact } from "ag-grid-react";
import SystemDropdown from "./SystemDropdown";
import Button from "../../shared/Button";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import ActionCellRenderer from "./ActionCellRenderer";
import DevRemarksCellRenderer from "./DevRemarksCellRenderer";
import TagsCellRenderer from "./TagsCellRenderer";

import { LogsData } from "./LogsData";

const COLUMN_DEFS = [
  {
    headerName: "",
    width: 30,
    checkboxSelection: true
  },
  {
    headerName: "",
    field: "id",
    width: 30,
    cellRendererFramework: ActionCellRenderer
  },
  {
    headerName: "ID No.",
    field: "id",
    filter: "agTextColumnFilter",
    width: 120
  },
  {
    headerName: "Date Submitted",
    field: "date",
    filter: "agDateColumnFilter"
  },
  { headerName: "Submitter", field: "submitter", filter: "agTextColumnFilter" },
  {
    headerName: "Tags",
    autoHeight: true,
    field: "tags",
    filter: "agTextColumnFilter",
    width: 300,
    cellRendererFramework: TagsCellRenderer
  },
  {
    headerName: "Dev Remarks",
    colId: "devRemarks",
    width: 120,
    valueGetter: params => ({
      devRemarkCount: params.data.devRemarkCount,
      id: params.data.id
    }),
    cellRendererFramework: DevRemarksCellRenderer
  }
];

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
  const { columnDefs, rowData, onGridReady } = props;
  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "500px",
        width: "100%"
      }}
    >
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        floatingFilter
        rowSelection="multiple"
      />
    </div>
  );
};

Logs.propTypes = {
  columnDefs: PropTypes.arrayOf(
    PropTypes.shape({
      headerName: PropTypes.string,
      field: PropTypes.string
    })
  ).isRequired,
  rowData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      submitter: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      devRemarkCount: PropTypes.number.isRequired
    })
  ).isRequired,
  onGridReady: PropTypes.func.isRequired
};

class LogsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowData: LogsData,
      systems: ["System 1", "System 2", "System 3"],
      currentSystem: "System 1"
    };
  }

  onGridReady = params => {
    setTimeout(() => {
      params.api.resetRowHeights();
    }, 500);
  };

  render() {
    const { systems, currentSystem, rowData } = this.state;
    return (
      <section
        css={css`
          flex: 1;
          padding: 1em 2em 0 4em;
          overflow: auto;
          font-family: "Lato";
        `}
      >
        <PanelTop>
          <PanelOptions>
            <SystemDropdown systems={systems} currentSystem={currentSystem} />
            <PanelButtons />
          </PanelOptions>
          <p>10 Unresolved Bug Reports | 5 Unresolved General Feedback</p>
        </PanelTop>
        <Logs
          columnDefs={COLUMN_DEFS}
          rowData={rowData}
          onGridReady={this.onGridReady}
        />
      </section>
    );
  }
}

export default LogsPanel;
