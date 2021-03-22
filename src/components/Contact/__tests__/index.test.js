import React from "react";
import { render, cleanup } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import ContactForm from "..";

afterEach(cleanup)

describe('Contact is rendering', () => {
    it('renders', () => {
        render(<ContactForm />)
    })

    it('matches Snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('contact me is visable', () => {
        const { getByTestId } = render(<ContactForm />)

        expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
    })

    it('submit button renders', () => {
        const { getByTestId } = render(<ContactForm />)

        expect(getByTestId('buttontag')).toHaveTextContent('Submit')
    })
})