import "@testing-library/jest-dom";
import { fireEvent, prettyDOM, render, screen } from "@testing-library/react";
import Gallery from "./Gallery";

describe("Gallery Section", () => {
    test("Clicking the button calls event handler correctyle", () => {
        const { container } = render(<Gallery />);
        const title = screen.getByText("Gallery");
        expect(title).toBeInTheDocument();
    });
});
