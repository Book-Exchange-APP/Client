import '@testing-library/jest-dom'
import { render, fireEvent, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Search from "../components/Search"
import { locations, languages, conditions, genres, searchBook } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'
import userEvent from '@testing-library/user-event';

describe("Submits the search conditions", () => {
    let container
    let form
    let submitBtn
    let inputs
    let selects

    beforeEach(async function () {
        container = render(<BrowserRouter><AuthContextProvider><Search locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} /></AuthContextProvider></BrowserRouter>).container
        form = screen.getByRole('search')
        submitBtn = screen.getAllByRole('button')
        inputs = screen.getAllByLabelText('Search')
        selects = screen.getAllByRole('combobox')
    })

    it("Shows two input fields, four select fields, one submit button", () => {
        expect(inputs).toBeTruthy()
        expect(inputs.length).toBe(2)
        expect(selects).toBeTruthy()
        expect(selects.length).toBe(4)
        expect(submitBtn).toBeTruthy()
        expect(submitBtn).toHaveLength(1)
        expect(submitBtn[0]).toHaveTextContent('Search')
        expect(form)
            .toHaveFormValues({
                title: '',
                author: '',
                location: 'Location',
                language: 'Language',
                condition: 'Condition',
                genre: 'Genre',
            })
    })

    it("Search button works", () => {
        fireEvent.submit(form)
        expect(searchBook).toHaveBeenCalledTimes(1)
    })

    it(('Updates the form'), async () => {
        const user = userEvent.setup()

        // Select
        await user.selectOptions(selects[1], 'Good')
        expect(selects[1]).toHaveValue('Good')
        expect(form)
        .toHaveFormValues({
            title: '',
            author: '',
            location: 'Location',
            language: 'Language',
            condition: 'Good',
            genre: 'Genre',
        })

        // Input
        await user.type(inputs[0], 'f')
        expect(inputs[0]).toHaveValue('f')
        expect(form)
        .toHaveFormValues({
            title: 'f',
            author: '',
            location: 'Location',
            language: 'Language',
            condition: 'Good',
            genre: 'Genre',
        })
        expect(form).not
        .toHaveFormValues({
            title: '',
            author: 'f',
            location: 'Location',
            language: 'Language',
            condition: 'Good',
            genre: 'Genre',
        })
        expect(form).not
        .toHaveFormValues({
            title: 'f',
            author: 'f',
            location: 'Location',
            language: 'Language',
            condition: 'Good',
            genre: 'Genre',
        })

        // Clear input
        await user.clear(inputs[0])
        expect(inputs[0]).toHaveValue('')
        expect(form)
        .toHaveFormValues({
            title: '',
            author: '',
            location: 'Location',
            language: 'Language',
            condition: 'Good',
            genre: 'Genre',
        })
        
    })

    it('Resets the form after submisstion', () => {
        fireEvent.submit(form)
        expect(searchBook).toHaveBeenCalledTimes(2)
        expect(form)
        .toHaveFormValues({
            title: '',
            author: '',
            location: 'Location',
            language: 'Language',
            condition: 'Condition',
            genre: 'Genre',
    })
    })
})