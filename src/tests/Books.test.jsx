import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Books from "../components/Books"
import { displayedBooks, locations, languages, conditions, genres, searchBook } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'


describe('Books Component', () => {    
    let container

    beforeEach(async function () {
        container = render(<BrowserRouter><AuthContextProvider><Books books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} /></AuthContextProvider></BrowserRouter>).container
        })  

    it("Shows the Books heading", () => {
        expect(container.querySelector('h1')).toBeTruthy()
        expect(container.querySelector('h1')).toHaveTextContent('Books')

    })

    it("Shows the Book Cards", () => {
        expect(container.querySelector('h2')).toBeFalsy()
        expect(container.querySelector('h5')).toBeTruthy()
        expect(container.querySelector('img')).toBeTruthy()
        expect(screen.getAllByRole('img').length).toBe(3)
        expect(screen.getAllByRole('img').length).not.toBe(2)
        expect(screen.getAllByText('View details').length).toBe(3)
    })

    it("Shows the Search Bar", () => {
        expect(screen.getAllByRole('search')).toBeTruthy()
        expect(screen.getAllByRole('search').length).toBe(1)
        expect(container.querySelector('select')).toBeTruthy()
        expect(container.querySelector('select').length).toBe(4)
        expect(screen.getAllByLabelText('Search')).toBeTruthy()
        expect(screen.getAllByLabelText('Search').length).toBe(2)
        expect(container.querySelector('button')).toBeTruthy()
        expect(container.querySelector('button')).toHaveTextContent('Search')
    })
})

