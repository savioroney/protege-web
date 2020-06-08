import React from "react";
import ReactDOM from "react-dom";
import "@testing-library/jest-dom/extend-expect";
import Header from "./Header";

test("renders a header", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
});
