import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Confirmation from "../components/confirmation"
import { newAppointment } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'

describe('Confirmation Component', () => {
    let h1
    let table
    let backToHome
    let tableBody
    let rowHeader
    let cell

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Confirmation appointment={newAppointment} /></AuthContextProvider></BrowserRouter>)
        h1 = screen.getAllByRole('heading', { level: 1 })
        backToHome = screen.getAllByText('Return to Home')
        table = screen.getAllByRole('table')
        tableBody = screen.getAllByRole('rowgroup')
        rowHeader = screen.getAllByRole('rowheader')
        cell = screen.getAllByRole('cell')
    })

    it("Shows the Appointment Confirmation heading", () => {
        expect(h1).toHaveLength(1)
        expect(h1[0]).toHaveTextContent('Appointment Confirmation')

    })

    it("Shows the appointment info table", () => {
        expect(table).toHaveLength(1)
        expect(tableBody).toHaveLength(1)
        expect(rowHeader).toHaveLength(7)
        expect(cell).toHaveLength(7)
        expect(rowHeader[0]).toHaveTextContent('Appointment No.')
        expect(rowHeader[1]).toHaveTextContent('Name')
        expect(rowHeader[2]).toHaveTextContent('Date')
        expect(rowHeader[3]).toHaveTextContent('Time')
        expect(rowHeader[4]).toHaveTextContent('Location')
        expect(rowHeader[5]).toHaveTextContent('Book selected')
        expect(rowHeader[6]).toHaveTextContent('Book to bring along')
        expect(cell[1]).toHaveTextContent('Tom Cruise')
        expect(cell[4]).toHaveTextContent('South Brisbane')
        expect(cell[5]).toHaveTextContent('BFG')
        expect(cell[6]).toHaveTextContent('Pooh')
    })

    it("Shows the Return to Home button", () => {
        expect(backToHome).toHaveLength(1)
    })
})

describe('Confirmation Component - no appointment', () => {
    let h1

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Confirmation appointment={null} /></AuthContextProvider></BrowserRouter>)
        h1 = screen.getAllByRole('heading', { level: 1 })
    })

    it("Shows the Redirecting heading", () => {
        expect(h1).toHaveLength(1)
        expect(h1[0]).toHaveTextContent('redirected')
    })
})