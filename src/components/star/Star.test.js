import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render } from "@testing-library/react";
import Star from "./Star";

describe(" Star component test", () => {
  test("The star color should be red when selected", () => {
    const { getByTestId } = render(<Star selected={true} />);
    const fastar = getByTestId("FaStar");

    expect(fastar.style.color).toEqual("red");
  });

  test("The star color should be grey when is not selected", () => {
    const { getByTestId } = render(<Star />);
    const fastar = getByTestId("FaStar");

    expect(fastar.style.color).toEqual("grey");
  });

  test("Should be called the callback", () => {
    const mockCallback = jest.fn(() => 2);
    const { getByTestId } = render(<Star onSelect={mockCallback} />);
    const fastar = getByTestId("FaStar");

    fireEvent.click(fastar);

    expect(mockCallback.mock.calls.length).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(2);
  });
});
