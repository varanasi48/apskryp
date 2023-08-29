import React from "react";
import BaseSelect from "react-select";
import FixRequiredSelect from "./required";

const options_state = [
  { value: 1, label: "1 - One" },
  { value: 2, label: "2 - Two" },
  { value: 3, label: "3 - Three" }
];
const options_district = [
  { value: 1, label: "1 - One" },
  { value: 2, label: "2 - Two" },
  { value: 3, label: "3 - Three" }
];

const Select = (props) => (
  <FixRequiredSelect {...props} SelectComponent={BaseSelect} />
);

 class choice extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="card mb-3">
          <div className="card-body">
            <form>
              <div className="form-group">
                Select
                <Select options={options_state} required />
              </div>
              <div className="form-group">
                Select
                <Select options={options_district} />
              </div>
              <button href='./#/login'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default choice