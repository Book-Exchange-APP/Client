import '@testing-library/jest-dom'
import { getByLabelText, render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Register from "../components/Register"
import {  } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'

describe('Register Component', () => {
    let h3
    let login
    let register
    let labels
    let password
    let inputs
    let btn
    let link

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Register /></AuthContextProvider></BrowserRouter>)
        h3 = screen.getByRole('heading', { level: 3 })
        register = screen.getAllByLabelText('register')
        link = screen.getAllByRole('link')
        labels = screen.getAllByLabelText('label')
        inputs = screen.getAllByRole('textbox')
        password = screen.getAllByLabelText('password')
        btn = screen.getAllByRole('button')
    })  

    it("Shows the Register heading", () => {
        expect(h3).toHaveTextContent('Register')
    })

    it("Shows Login question", () => {
        expect(register).toHaveLength(1)
        expect(register[0]).toHaveTextContent('registered')
    })

    it("Shows login link", () => {
        expect(link).toHaveLength(1)
        expect(link[0]).toHaveTextContent('Login')
    })

    it("Shows three labels", () => {
        expect(labels).toHaveLength(3)
        expect(labels[0]).toHaveTextContent('Name')
        expect(labels[1]).toHaveTextContent('Email')
        expect(labels[2]).toHaveTextContent('Password')
    })

    it("Shows three input fields", () => {
        expect(password).toHaveLength(1)
        expect(inputs).toHaveLength(2)
    })

    it("Shows one submit button", () => {
        expect(btn).toHaveLength(1)
        expect(btn[0]).toHaveTextContent('Submit')
    })
})