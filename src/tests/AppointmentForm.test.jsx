import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import AppointmentForm from "../components/AppointmentForm"
import { book, generateApp, languages, conditions, genres } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'
import userEvent from '@testing-library/user-event'

describe("Submits the appointment info", () => {
    let form
    let submitBtn
    let inputs
    let selects
    let h2
    let labels
    let time
    let file

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><AppointmentForm book={book} generateApp={generateApp} languages={languages} conditions={conditions} genres={genres} /></AuthContextProvider></BrowserRouter>)
        form = screen.getByRole('form')
        labels = screen.getAllByLabelText('label')
        file = screen.getAllByLabelText('File')
        time = screen.getAllByLabelText('time')
        h2 = screen.getAllByRole('heading', { level: 2 })
        selects = screen.getAllByRole('combobox')
        submitBtn = screen.getAllByRole('button')
        inputs = screen.getAllByRole('textbox')
    })

    afterEach(() => {
        vi.restoreAllMocks();
    })

    it("Shows one form, one heading, twelve labels, seven input fields, one date, one time, one file, three select fields, one submit button", () => {
        expect(form).toBeTruthy()
        expect(labels).toHaveLength(12)
        expect(file).toHaveLength(1)
        expect(time).toHaveLength(1)
        expect(h2).toHaveLength(1)
        expect(selects).toHaveLength(3)
        expect(submitBtn).toHaveLength(1)
        expect(submitBtn[0]).toHaveTextContent('Submit')
        expect(inputs).toHaveLength(7)
        expect(inputs[3]).toHaveValue('N Brisbane')
    })

    it(('Updates the form'), async () => {
        const user = userEvent.setup()

        // Select & update
        await user.selectOptions(selects[1], 'Fantasy')
        expect(selects[1]).toHaveValue('Fantasy')

        await user.selectOptions(selects[0], 'Korean')
        expect(selects[0]).toHaveValue('Korean')

        await user.selectOptions(selects[2], 'Poor')
        expect(selects[2]).toHaveValue('Poor')

        await user.selectOptions(selects[1], 'Science')
        expect(selects[1]).toHaveValue('Science')

        // Input
        await user.type(inputs[0], 'first')
        await user.type(inputs[1], 'second')
        await user.type(inputs[4], 'title')
        await user.type(inputs[5], 'author')
        await user.type(inputs[6], 'summary')
        expect(inputs[0]).toHaveValue('first')
        expect(inputs[1]).toHaveValue('second')
        expect(inputs[4]).toHaveValue('title')
        expect(inputs[5]).toHaveValue('author')
        expect(inputs[6]).toHaveValue('summary')
    })
})