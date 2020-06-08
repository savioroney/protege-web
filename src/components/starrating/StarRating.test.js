import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import StarRating from "./StarRating";

describe(" StarRating component test", () => {
  test("Should show info text expected", () => {
    const { getByText } = render(<StarRating totalStars={5} />);

    getByText(/0 of 5 stars/);
  });

  test("Should create the expected number of Stars", () => {
    const { getAllByTestId } = render(<StarRating totalStars={3} />);
    const stars = getAllByTestId("FaStar");

    expect(stars).toHaveLength(3);
  });

  test("On Select should change the selected stars", () => {
    const { getAllByTestId, getByText } = render(<StarRating totalStars={3} />);
    const stars = getAllByTestId("FaStar");

    fireEvent.click(stars[2]);
    const colors = stars.map(s => {
      if(s.style.color === "red") return s.style.color;
    });

    expect(colors).toHaveLength(3);
    getByText(/3 of 3 stars/);

  });
});
