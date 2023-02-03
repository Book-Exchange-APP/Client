import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import ShowBook from "../components/ShowBook"
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../auth/AuthContext'
import { book, generateApp, languages, conditions, genres } from "../mocks/handlers"



describe('ShowBook Component', () => {
    let h1

    beforeEach(function () {
        render(
            <BrowserRouter>
                <AuthContextProvider>
                    <ShowBook />
                </AuthContextProvider>
            </BrowserRouter>
        )
        h1 = screen.getAllByRole('heading', { level: 1 })
    })


    it("Shows the headings", () => {
        expect(h1).toHaveLength(1)
        expect(h1[0]).toHaveTextContent('Loading the book...')
    })
})