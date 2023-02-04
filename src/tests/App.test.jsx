import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "../components/App"
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../auth/AuthContext'
import userEvent from '@testing-library/user-event'




describe('App - navbar', () => {
    let navbar
    let books 
    let contact
    let login
    let home
    let links
    let user

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><App /></AuthContextProvider></BrowserRouter>)
        user = userEvent.setup()
        navbar = screen.getAllByRole('navigation')
        links = screen.getAllByRole('link')
        home = links[0]
        books = links[1]
        contact = links[2]
        login = links[3]
    })

    it("Shows Navbar", () => {
        expect(navbar).toHaveLength(1)
        expect(books).toHaveTextContent('Books')
        expect(contact).toHaveTextContent('Contact')
        expect(login).toHaveTextContent('Login')
    })

    it("Navigates to the books page after clicking on Books", async () => {
        await user.click(books)
        expect(screen.getByRole('heading', {level:1})).toHaveTextContent('Books')
    })

    it("Navigates to the contact page after clicking on Contact", async () => {
        await user.click(contact)
        expect(screen.getByRole('heading', {level:1})).toHaveTextContent('Contact Us')
    })

    it("Navigates to the login page after clicking on Login", async () => {
        await user.click(login)
        expect(screen.getByRole('heading', {level:3})).toHaveTextContent('Login')
    })

    it("Stays on the home page after clicking on the logo", async () => {
        await user.click(home)
        expect(screen.getAllByRole('heading', {level:1})[0]).toHaveTextContent('How')
        expect(screen.getAllByRole('heading', {level:1})[1]).toHaveTextContent('Featured')
        expect(screen.getAllByRole('heading', {level:1})[2]).toHaveTextContent('Latest')
    })

})

describe('App - search', () => {
    let user
    let btns
    let searchBtn

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><App /></AuthContextProvider></BrowserRouter>)
        user = userEvent.setup()
        btns = screen.getAllByRole('button')
        searchBtn = btns[0]
    })

    it("Navigates to the books page after clicking on Search", async () => {
        await user.click(searchBtn)
        expect(screen.getByRole('heading', {level:1})).toHaveTextContent('Books')
    })
})


