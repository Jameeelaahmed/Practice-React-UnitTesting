import { render } from "@testing-library/react";
import Greeting from "./Greeting";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
describe("Greeting Component", () => {
    // test("hello user", () => {
    // Arrange
    //     render(<Greeting />);

    // act
    //     // nothing

    // assert
    //     const textInDocument = screen.getByText('Hello, User', { exact: false });
    //     expect(textInDocument).toBeInTheDocument();
    // })

    test("ensure click", () => {
        // ? Arrange
        render(<Greeting />);

        // ?ACt 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // assert
        const outputElement = screen.getByText("Changed")
        expect(outputElement).toBeInTheDocument();
    })

    test("ensure greeting message is not there when i click", () => {
        // ? Arrange
        render(<Greeting />);

        // ?ACt 
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        // assert
        const outputElement = screen.queryByText("say hi to the user")
        expect(outputElement).not.toBeInTheDocument();

    })
})