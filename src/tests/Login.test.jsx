import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Login from "../components/Login"
import { AuthContextProvider } from '../auth/AuthContext'

describe('Login Component', () => {
    let h3
    let signUp
    let labels
    let password
    let email
    let btn
    let links

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Login /></AuthContextProvider></BrowserRouter>)
        h3 = screen.getByRole('heading', { level: 3 })
        signUp = screen.getAllByLabelText('signUp')
        labels = screen.getAllByLabelText('label')
        password = screen.getAllByLabelText('password')
        email = screen.getAllByRole('textbox')
        btn = screen.getAllByRole('button')
        links = screen.getAllByRole('link')
    })

    it("Shows the Login heading", () => {
        expect(h3).toHaveTextContent('Login')
    })

    it("Shows Sign up question", () => {
        expect(signUp).toHaveLength(1)
        expect(signUp[0]).toHaveTextContent('Signed')
    })

    it("Shows registration link", () => {
        expect(links).toHaveLength(1)
        expect(links[0]).toHaveTextContent('Register')
    })

    it("Shows two labels", () => {
        expect(labels).toHaveLength(2)
        expect(labels[0]).toHaveTextContent('Email')
        expect(labels[1]).toHaveTextContent('Password')
    })

    it("Shows two input fields", () => {
        expect(password).toHaveLength(1)
        expect(email).toHaveLength(1)
    })

    it("Shows one submit button", () => {
        expect(btn).toHaveLength(1)
        expect(btn[0]).toHaveTextContent('Submit')
    })
})




