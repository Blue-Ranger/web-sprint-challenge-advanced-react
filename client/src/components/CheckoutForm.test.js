import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { queryByText } = render(<CheckoutForm />);
  const header = querybyText(/form/i);
  expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
  //arrange
  //act
  //assert

  const { getByText, getByTestId } = render(<CheckoutForm />);
});
