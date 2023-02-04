import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../components/Navbar"
import { AuthContextProvider } from '../auth/AuthContext'

describe('Navbar component', () => {
    let links

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Navbar /></AuthContextProvider></BrowserRouter>)
        links = screen.getAllByRole('link')
    })

    it("Shows four links", () => {
        expect(screen.getAllByRole('navigation')).toHaveLength(1)
        expect(screen.getAllByRole('img')).toHaveLength(1)
        expect(links).toHaveLength(4)
        expect(links[1]).toHaveTextContent('Books')
        expect(links[3]).toHaveTextContent('Login')
        expect(links[2]).toHaveTextContent('Contact')
    })
})