import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />);

    const firstnameInput = screen.getByLabelText(/first name/i);
    const lastnameInput = screen.getByLabelText(/last name/i);
    const addressInput = screen.getByLabelText(/address/i);
    const cityInput = screen.getByLabelText(/city/i);
    const stateInput = screen.getByLabelText(/state/i);
    const zipInput = screen.getByLabelText(/zip/i);
    const submitButton = screen.getByRole("button", {name: /Checkout/i});

    userEvent.type(firstnameInput, "Felipe");
    userEvent.type(lastnameInput, "Slaughter");
    userEvent.type(addressInput, "123 Main St");
    userEvent.type(cityInput, "Polk City");
    userEvent.type(stateInput, "FL");
    userEvent.type(zipInput, "33868");
    fireEvent.click(submitButton);

    const successMessage = screen.getByTestId(/successMessage/i);

    expect(successMessage).toBeInTheDocument();
});
