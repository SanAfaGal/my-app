import React from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";

class Table extends React.Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField="product">Producto</TableHeaderColumn>
          <TableHeaderColumn dataField="amount">Cantidad</TableHeaderColumn>
          <TableHeaderColumn dataField="value">Valor</TableHeaderColumn>
          <TableHeaderColumn dataField="total">Total</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default Table;
