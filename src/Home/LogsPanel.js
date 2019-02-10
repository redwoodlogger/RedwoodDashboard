// eslint-disable-next-line no-unused-vars
import React, { Component } from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AgGridReact } from "ag-grid-react";
import Button from "../shared/Button";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const SystemDropdown = () => (
  <div
    css={css`
      display: flex;
      align-items: center;
    `}
  >
    <p
      css={css`
        font-size: 1.3rem;
        margin: 0 0.3em 0.5em 0;
      `}
    >
      System One
    </p>
    <FontAwesomeIcon icon="angle-down" />
  </div>
);

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

const PanelOptions = () => (
  <div>
    <SystemDropdown />
    <PanelButtons />
  </div>
);

const PanelTop = () => (
  <section
    css={css`
      background: white;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
      `}
    >
      <PanelOptions />
      <p>10 Unresolved Bug Reports | 5 Unresolved General Feedback</p>
    </div>
  </section>
);

class Logs extends Component {
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
      ]
    };
  }

  render() {
    const { rowData, columnDefs } = this.state;
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
  }
}

const LogsPanel = () => (
  <section
    css={css`
      flex: 1;
      padding: 1em 2em 0 4em;
      overflow: auto;
    `}
  >
    <PanelTop />
    <Logs />
  </section>
);

export default LogsPanel;
