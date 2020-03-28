import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <div>
        <form id="categoryChangeForm">
          <button type="submit" id="submitForm">
            Select a Category
          </button>
          <label id="categorySelectLabel" />
        </form>
      </div>
    );
  }
}

export default Category;