import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from "./App"

describe('Books Component', () => {
    let container

    beforeEach(function () {
        container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
    })

    it("Shows the navbar", () => {
        expect(container.querySelector('nav')).toBeTruthy()
    })
})