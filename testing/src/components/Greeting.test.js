import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('renders hellow world as a text', () => { 
    //Arrange
    render(<Greeting/>);

    //Act
    //...nothing

    //Assert
   const elementTest= screen.getByText('Hello World');
   expect(elementTest).toBeInTheDocument();
 })