import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Search from "../components/Search"
import { displayedBooks, locations, languages, conditions, genres } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'
import { MemoryRouter } from 'react-router-dom'


describe('Search Component', () => {
    let h1
    let h2
    let h5
    let bookImg
    let detailsBtn
    let searchBar

    beforeEach(function () {
        render(<MemoryRouter initialEntries={["?location=&language=&condition=Good&genre="]}><AuthContextProvider><Search books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres}/></AuthContextProvider></MemoryRouter>)
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
        expect(screen.queryAllByText('Searched for \'Good\'')).toBeTruthy()
    })

    it("Shows one Book Card", () => {
        expect(h2).toHaveLength(0)
        expect(h5).toHaveLength(1)
        expect(h5[0]).toHaveTextContent("Test 1")
        expect(bookImg).toHaveLength(1)
        expect(detailsBtn).toHaveLength(1)
    })

    it("Shows the Search Bar", () => {
        expect(searchBar).toHaveLength(1)
    })
})

