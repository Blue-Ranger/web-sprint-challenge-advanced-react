import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);
  const header = getByText(/form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByTestId } = render(<CheckoutForm />);

  const firstname = getByLabelText(/first name/i);
  const lastname = getByLabelText(/last name/i);
  const address = getByLabelText(/address/i);
  const city = getByLabelText(/city/i);
  const state = getByLabelText(/state/i);
  const zipcode = getByLabelText(/zip/i);
  const button = getByLabelText(/button/i);

  fireEvent.change(firstname, { target: { value: "Mr. Fancy" } });
  fireEvent.change(lastname, { target: { value: "Pants" } });
  fireEvent.change(address, { target: { value: "123 SomePlacePlaza Ave" } });
  fireEvent.change(city, { target: { value: "NonyaBusiness" } });
  fireEvent.change(state, { target: { value: "Virginia" } });
  fireEvent.change(zipcode, { target: { value: "12345" } });
  fireEvent.click(button);

  const success = getByTestId(/successMessage/i);
  expect(success).toBeInTheDocument();
});
