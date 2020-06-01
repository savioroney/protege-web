import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {render} from "@testing-library/react";
import { Star } from "./Star";

describe(" Star component test", () => {
    test("Check h1 content", () => {
        const { getByText } = render(<Star />);
        const h1 = getByText(/Great Star/);
        expect(h1).toHaveTextContent("Great Star");
    });

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
});

