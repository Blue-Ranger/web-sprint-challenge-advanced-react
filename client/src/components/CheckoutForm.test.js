import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByText, queryByTestId } = render(<CheckoutForm />);

  const firstname = getByText(/first name/i);
  const lastname = getByText(/last name/i);
  const address = getByText(/address/i);
  const city = getByText(/city/i);
  const state = getByText(/state/i);
  const zipcode = getByText(/zip/i);
  const button = getByText(/button/i);

  fireEvent.change(firstname, { target: { value: "Mr. Fancy" } });
  fireEvent.change(lastname, { target: { value: "Pants" } });
  fireEvent.change(address, { target: { value: "123 SomePlacePlaza Ave" } });
  fireEvent.change(city, { target: { value: "NonyaBusiness" } });
  fireEvent.change(state, { target: { value: "Virginia" } });
  fireEvent.change(zipcode, { target: { value: "12345" } });
  fireEvent.click(button);

  const success = queryByTestId(/successMessage/i);
  expect(success).toBeInTheDocument();
});
