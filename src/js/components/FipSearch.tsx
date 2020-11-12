// Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
import React from "react";
type FipSearchProps = {
  handleSearch: (...args: any[]) => any,
  value: string,
  placeholder: string
};
const FipSearch: React.SFC<FipSearchProps> = props => (
  <div className="rfipsearch">
    <input
      type="text"
      className="rfipsearch__input"
      value={props.value}
      onChange={props.handleSearch}
      placeholder={props.placeholder}
    />
  </div>
);
export default FipSearch;
