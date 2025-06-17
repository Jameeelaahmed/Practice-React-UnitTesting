import { render } from "@testing-library/react";
import { screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    it("list renders when request succeed", async () => {
        render(<Async />)

        const listElements = await screen.findAllByRole("listitem");
        expect(listElements).not.toHaveLength(0);
    })
})