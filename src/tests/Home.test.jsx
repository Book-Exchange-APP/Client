import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import App from "../components/App"
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from '../auth/AuthContext'


describe('Home Component', () => {
    let container

    beforeEach(function () {
        container = render(
            <BrowserRouter>
                <AuthContextProvider>
                    <App />
                </AuthContextProvider>
            </BrowserRouter>
        ).container
    })

    it("Shows the navbar", () => {
        expect(container.querySelector('nav')).toBeTruthy()
    })

    it("Shows the footer", () => {
        expect(container.querySelector('.footer')).toBeTruthy()
    })

    it('Show all the h1 headings', () => {
        expect(container.querySelector('.banner')).toBeDefined()
        expect(container.querySelector('.banner')).toHaveTextContent('How To Use')
        expect(container.querySelector('.Fbooks')).toBeDefined()
        expect(container.querySelector('.Fbooks')).toHaveTextContent('Featured Books')
        expect(container.querySelector('.Lbooks')).toBeDefined()
        expect(container.querySelector('.Lbooks')).toHaveTextContent('Latest Book')
    })

    it('Show the location section', () => {
        expect(container.querySelector('#address')).toBeDefined()
        expect(container.querySelector('#address')).toHaveTextContent('Location')
    })

    it('Show the search section', () => {
        expect(container.querySelector('form')).toBeTruthy()
    })
})