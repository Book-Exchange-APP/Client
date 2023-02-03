import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import ShowBook from "../components/ShowBook"
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../auth/AuthContext'
import { book, generateApp, languages, conditions, genres } from "../mocks/handlers"



describe('Contact Component', () => {    
    let h1
    let author
    let condition
    let language
    let genre
    let status

    beforeEach(function (){
        render(<BrowserRouter><AuthContextProvider><ShowBook book={book}/></AuthContextProvider></BrowserRouter>)          
        h1 = screen.getAllByRole('heading', {level:1})
        author = screen.getAllByText(/author:/)
        condition = screen.getAllByText(/condition:/)
        language = screen.getAllByText(/language:/)
        genre = screen.getAllByText(/genre:/)
        status = screen.getAllByText(/status:/)

    })

    it("Shows the ShowBook page heading", () => {
        expect(h1).toHaveLength(2)
        expect(h1[0]).toHaveTextContent('title' + book.book.title)
        expect(h1[1]).toHaveTextContent('Appointment Form')

    })

    it("Shows details of out book", () => {
        expect(author).toHaveLength(1)
        expect(condition).toHaveLength(1)
        expect(language).toHaveLength(1)
        expect(genre).toHaveLength(1)
        expect(status).toHaveLength(1)

    })
})