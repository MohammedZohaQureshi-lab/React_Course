import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";
describe("Greeting Group", () => {
  test("renders hello world as a text", () => {
    //Arrange
    render(<Greeting />);

    //Act
    //...nothing

    //Assert
    const outputElement = screen.getByText("Hello World", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
  test("renders greeting if  Button not Click", () => {
    //Arrange
    render(<Greeting />);
    //Assert
    const outputElement = screen.getByText("Good Afternoon", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("renders Changed text after", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.getByText("Text Updated");
    expect(outputElement).toBeInTheDocument();
  });
  test("does on render greeting after button click", () => {
    //Arrange
    render(<Greeting />);

    //Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    //Assert
    const outputElement = screen.queryByText("Good Afternoon", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
