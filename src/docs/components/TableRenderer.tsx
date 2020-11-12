// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
const TableRenderer: React.SFC<{}> = props => (
  <table className="table">{props.children}</table>
);
export default TableRenderer;
