import React from "react";
import "./style.css";

const SearchForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchlabel ">
          <h3>Search for Book</h3>
        </label>
        <br></br>
        <input
          className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Enter Book's name"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className="submitBtn btn btn-info"
        onClick={props.handleFormSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
