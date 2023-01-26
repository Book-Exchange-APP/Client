import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import { screen } from '@testing-library/dom'
import Navbar from "../components/Navbar"

describe('Navbar component', () => {
    let container

    beforeEach(async function () {
        container = render(<BrowserRouter><Navbar /></BrowserRouter>).container
    })

    it("Shows four links", () => {
        expect(container.querySelector('nav')).toBeTruthy()
        expect(container.querySelector('img')).toBeTruthy()
        expect(screen.getAllByRole('link')).toBeTruthy()
        expect(screen.getAllByRole('link').length).toBe(4)
        expect(screen.getAllByRole('link')[1]).toHaveTextContent('All Books')
        expect(screen.getAllByRole('link')[2]).toHaveTextContent('Admin Login')
        expect(screen.getAllByRole('link')[3]).toHaveTextContent('Contact')
    })

})