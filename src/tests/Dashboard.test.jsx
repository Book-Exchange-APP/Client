import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Dashboard from "../components/Dashboard"
import { logout, nav, updateBooks, updateAppointments, user, pendingAppointments, bookStatus, appointmentStatus } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'

describe('Dashboard Component', () => {
    let h1
    let h2
    let h3
    let bookImgs
    let titles
    let authors
    let names
    let locations
    let btns
    let appointments
    let dates
    let times

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Dashboard logout={logout} nav={nav} updateBooks={updateBooks} updateAppointments={updateAppointments} user={user} pendingAppointments={pendingAppointments} bookStatus={bookStatus} appointmentStatus={appointmentStatus} /></AuthContextProvider></BrowserRouter>)
        h1 = screen.getAllByRole('heading', { level: 1 })
        h2 = screen.queryAllByRole('heading', { level: 2 })
        h3 = screen.getAllByRole('heading', { level: 3 })
        bookImgs = screen.getAllByRole('img')
        titles = screen.getAllByLabelText('title')
        authors = screen.getAllByLabelText('author')
        names = screen.getAllByLabelText('name')
        locations = screen.getAllByLabelText('location')
        appointments = screen.getAllByLabelText('container')
        dates = screen.getAllByLabelText('date')
        times = screen.getAllByLabelText('time')
        btns = screen.getAllByRole('button')
    })

    it("Shows the Admin Dashboard heading", () => {
        expect(h1).toHaveLength(1)
        expect(h1[0]).toHaveTextContent('Dashboard')
    })

    it('Shows one appointment', () => {
        expect(appointments).toHaveLength(1)
        expect(h2).toHaveLength(0)
    })

    it('Shows two books and appointment details', () => {
        expect(h3).toHaveLength(3)
        expect(bookImgs).toHaveLength(2)
        expect(titles).toHaveLength(2)
        expect(titles[0]).toHaveTextContent('test')
        expect(titles[1]).toHaveTextContent('Gardening')
        expect(authors).toHaveLength(2)
        expect(authors[0]).toHaveTextContent('test')
        expect(authors[1]).toHaveTextContent('Sydney')
        expect(names).toHaveLength(1)
        expect(names[0]).toHaveTextContent('test')
        expect(locations).toHaveLength(1)
        expect(locations[0]).toHaveTextContent('South')
        expect(dates).toHaveLength(1)
        expect(dates[0]).toHaveTextContent('09')
        expect(times).toHaveLength(1)
        expect(times[0]).toHaveTextContent('26')
    })

    it('Shows two buttons', () => {
        expect(btns).toHaveLength(2)
        expect(btns[0]).toHaveTextContent('Approve')
        expect(btns[1]).toHaveTextContent('Deny')
    })
})