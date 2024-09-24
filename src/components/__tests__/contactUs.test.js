import { screen,render } from "@testing-library/dom";
import Contact from "../body/contact";

test('testing heading component', () => { 
    render(<Contact/>);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
 })