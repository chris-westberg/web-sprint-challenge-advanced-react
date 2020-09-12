import React from "react";
import { screen, render, getByTestId, getByDisplayValue, getByLabelText, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const headerRender = screen.getByText(/checkout form/i)
    expect(headerRender).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstNameInput = screen.getByLabelText(/first name/i)
    const lastNameInput = screen.getByLabelText(/last name/i)
    const addressInput = screen.getByLabelText(/address/i)
    const cityInput = screen.getByLabelText(/city/i)
    const stateInput = screen.getByLabelText(/state/i)
    const zipInput = screen.getByLabelText(/zip/i)

    fireEvent.change[firstNameInput, { target: {value: 'P'}}]
    fireEvent.change[lastNameInput, { target: {value: 'Sherman'}}]
    fireEvent.change[addressInput, { target: {value: '42 Wallaby Way'}}]
    fireEvent.change[cityInput, { target: {value: 'Sydney'}}]
    fireEvent.change[stateInput, { target: {value: 'Ohio'}}]
    fireEvent.change[zipInput, { target: {value: '90210'}}]
    
    const checkoutButton = screen.getByTestId('checkoutButton')
    fireEvent.click(checkoutButton)

    const message = screen.getByTestId('successMessage')
    expect(message).toBeInTheDocument()
});
