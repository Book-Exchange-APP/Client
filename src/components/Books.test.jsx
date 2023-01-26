import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import App from "./App"

describe('Books Component', () => {
    let container

    beforeEach(async function () {
        container = render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        ).container
        await userEvent.click(screen.getByText('All Books'))
        }
    )

    // it("Shows the navbar", () => {
    //     expect(container.querySelector('nav')).toBeTruthy()
    //     expect(container.querySelector('nav')).toHaveTextContent('All Books')
    //     expect(container.querySelector('nav')).toHaveTextContent('Admin Login')
    //     expect(container.querySelector('nav')).toHaveTextContent('Contact')
    // })

    it("Shows the Books heading", async () => {
        expect(container.querySelector('h1')).toBeTruthy()
        expect(container.querySelector('h1')).toHaveTextContent('Books')
    })

    it('Shows appointment page when View details is clicked', async () => {
        await userEvent.click(screen.getByText('View details'))
        expect(container.querySelector('h2')).toBeTruthy()
        expect(container.querySelector('h5')).toBeTruthy()
    })
})