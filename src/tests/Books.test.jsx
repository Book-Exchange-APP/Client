import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Books from "../components/Books"
import { displayedBooks, locations, languages, conditions, genres } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'


describe('Books Component', () => {
    let h1
    let h2
    let h5
    let bookImg
    let detailsBtn
    let searchBar

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Books books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres}/></AuthContextProvider></BrowserRouter>)
        h1 = screen.getAllByRole('heading', { level: 1 })
        h2 = screen.queryAllByRole('heading', { level: 2 })
        h5 = screen.getAllByRole('heading', { level: 5 })
        bookImg = screen.getAllByRole('img')
        detailsBtn = screen.getAllByText('View details')
        searchBar = screen.getAllByRole('search')
    })    

    it("Shows the Books heading", () => {
        expect(h1).toHaveLength(1)
        expect(h1[0]).toHaveTextContent('Books')

    })

    it("Shows the Book Cards", () => {
        expect(h2).toHaveLength(0)
        expect(h5).toHaveLength(2)
        expect(bookImg).toHaveLength(2)
        expect(detailsBtn).toHaveLength(2)
    })

    it("Shows the Search Bar", () => {
        expect(searchBar).toHaveLength(1)
    })
})

