import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Contact from "../components/Contact"
import { locations } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'

describe('Books Component', () => {    
    let container

    beforeEach(async function () {
        container = render(<BrowserRouter><AuthContextProvider><Contact locations={locations}/></AuthContextProvider></BrowserRouter>).container
        })  

    it("Shows the Contact Us heading", () => {
        expect(container.querySelector('h1')).toBeTruthy()
        expect(screen.getAllByRole('heading', {level:1}).length).toBe(1)
        expect(container.querySelector('h1')).toHaveTextContent('Contact Us')
    })

    it("Shows three location cards", () => {
        expect(container.querySelector('h2')).toBeTruthy()
        expect(screen.getAllByRole('heading', {level:2}).length).toBe(3)
        expect(screen.getAllByRole('heading', {level:2})[0]).toHaveTextContent('City')
        expect(screen.getAllByRole('heading', {level:2})[1]).toHaveTextContent('S Brisbane')
        expect(screen.getAllByRole('heading', {level:2})[2]).toHaveTextContent('N Brisbane')
        expect(screen.getAllByText(/Address:/)).toBeTruthy()
        expect(screen.getAllByText(/Address:/).length).toBe(3)
        expect(screen.queryAllByText(/Address: \/a-zA-Z\//)).toStrictEqual([])
        expect(screen.getAllByText(/Email:/)).toBeTruthy()
        expect(screen.getAllByText(/Email:/)).toHaveLength(3)
        expect(screen.queryAllByText(/Email: a/)).toStrictEqual([])
        expect(screen.getAllByText(/Phone:/)).toBeTruthy()
        expect(screen.getAllByText(/Phone:/)).toHaveLength(3)
        expect(screen.queryAllByText(/Phone: 2/)).toStrictEqual([])


    })
})