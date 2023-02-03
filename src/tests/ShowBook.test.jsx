import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import ShowBook from "../components/ShowBook"
import { displayedBooks, generateApp, languages, conditions, genres } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'
import { vi } from 'vitest'



describe('ShowBook Component', () => {
    let h1
    let bookImg
    let author
    let condition
    let language
    let genre
    let pending
    let btn

    beforeEach(function (){
        vi.mock('react-router-dom', async () => {
            const actual = await vi.importActual("react-router-dom")
            return {
              ...actual,
              useParams: () => {return {id: "63d0c625189591d4b10b85b7"}},
            };
          });
    
        // vi.mocked(useParams).mockReturnValue({id: "63d0c625189591d4b10b85b7"})
        render(<BrowserRouter><AuthContextProvider><ShowBook books={displayedBooks} languages={languages} conditions={conditions} genres={genres} generateApp={generateApp}/></AuthContextProvider></BrowserRouter>)          
        h1 = screen.getAllByRole('heading', {level:1})
        bookImg = screen.getByRole('img')
        author = screen.getByLabelText('author')
        condition = screen.getByLabelText('condition')
        language = screen.getByLabelText('language')
        genre = screen.getByLabelText('genre')
        pending = screen.queryByLabelText('pending')
        btn = screen.getAllByRole('button')
    })

    it("Shows book title and appointment form name", () => {
        // vi.mock('react-router-dom')
        // vi.mocked(useParams).mockReturnValue({id: "63d0c625189591d4b10b85b7"})
        expect(h1).toHaveLength(2)
        expect(h1[0]).toHaveTextContent('Test')
        expect(h1[1]).toHaveTextContent('Form')
        expect(pending).toBeFalsy()
    })

    it("Shows submit button", () => {
        expect(btn).toHaveLength(1)
        expect(btn[0]).toHaveTextContent('Submit')
    })
})