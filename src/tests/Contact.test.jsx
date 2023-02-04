import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Contact from "../components/Contact"
import { locations } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'

describe('Contact Component', () => {
    let h1
    let h2
    let address
    let email
    let phone

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Contact locations={locations} /></AuthContextProvider></BrowserRouter>)
        h1 = screen.getAllByRole('heading', { level: 1 })
        h2 = screen.getAllByRole('heading', { level: 2 })
        address = screen.getAllByText(/Address:/)
        email = screen.getAllByText(/Email:/)
        phone = screen.getAllByText(/Phone:/)
    })

    it("Shows the Contact Us heading", () => {
        expect(h1).toHaveLength(1)
        expect(h1[0]).toHaveTextContent('Contact Us')
    })

    it("Shows three location cards", () => {
        expect(h2).toHaveLength(3)
        expect(h2[0]).toHaveTextContent('City')
        expect(h2[1]).toHaveTextContent('S Brisbane')
        expect(h2[2]).toHaveTextContent('N Brisbane')
        expect(address).toHaveLength(3)
        expect(email).toHaveLength(3)
        expect(phone).toHaveLength(3)
    })
})