import React from "react";
import { connect } from "react-redux";

const Header = ({ Search, toggle }) => {
  function Searchs(event) {
    const value = event.target.value;
    Search(value);
  }
  return (
    <div className="container d-flex justify-content-between">
      <div className="col-md-2">
        <input
          type="search"
          placeholder="Search..."
          className="form-control"
          onChange={Searchs}
        />
      </div>
      <h1 className="text-center">Hodimlar</h1>
      <div className="col-md-3">
        <button className="btn btn-dark float-end" onClick={toggle}>
          Add
        </button>
      </div>
    </div>
  );
};

function mapStateToProps(state) {}

export default connect(mapStateToProps, null)(Header);
