import '@testing-library/jest-dom'
import { render, fireEvent, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Search from "../components/Search"
import { locations, languages, conditions, genres, searchBook } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'




describe("Submits the search conditions", () => {
    let container
    const data = {condition: 'Poor'}

    beforeEach(async function () {
        container = render(<BrowserRouter><AuthContextProvider><Search locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} /></AuthContextProvider></BrowserRouter>).container
    })

    it("Shows the Search button", () => {
        fireEvent.submit(screen.getByRole('search'))
        expect(searchBook).toHaveBeenCalledTimes(1)
        expect(container.querySelector('button')).toBeTruthy()
        expect(container.querySelector('button')).toHaveTextContent('Search')
    })

    it(('loads the form'), () => {
        
        
    })


})