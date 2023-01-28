import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import Search from "../components/Search"
import { locations, languages, conditions, genres, searchBook } from "../mocks/handlers"
import { AuthContextProvider } from '../auth/AuthContext'
import userEvent from '@testing-library/user-event';

describe("Submits the search conditions", () => {
    let form
    let submitBtn
    let inputs
    let selects

    beforeEach(function () {
        render(<BrowserRouter><AuthContextProvider><Search locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} /></AuthContextProvider></BrowserRouter>)
        form = screen.getByRole('search')
        submitBtn = screen.getAllByRole('button')
        inputs = screen.getAllByLabelText('Search')
        selects = screen.getAllByRole('combobox')
    })

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it("Shows two input fields, four select fields, one submit button", () => {
        expect(inputs).toHaveLength(2)
        expect(selects).toHaveLength(4)
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

    it("Search button works", async () => {
        const user = userEvent.setup()

        await user.click(submitBtn[0])

        expect(searchBook).toBeCalledTimes(1)

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

    it('Resets the form after submission', async () => {
        const user = userEvent.setup()

        await user.selectOptions(selects[1], 'Poor')
        expect(selects[1]).toHaveValue('Poor')
        expect(form)
            .toHaveFormValues({
                title: '',
                author: '',
                location: 'Location',
                language: 'Language',
                condition: 'Poor',
                genre: 'Genre',
            })

        await user.click(submitBtn[0])

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

    it('Initial searchCriteria', async () => {
        const user = userEvent.setup()

        await user.click(submitBtn[0])
        expect(searchBook).toBeCalledWith({
            condition: '',
            genre: '',
            language: '',
            location: '',
        })
    })

    it('Updates searchCriteria', async () => {
        const user = userEvent.setup()

        await user.type(inputs[0], 'f')
        await user.type(inputs[1], 'test')

        await user.click(submitBtn[0])
        expect(searchBook).toBeCalledWith({
            title: 'f',
            author: 'test',
            location: '',
            language: '',
            condition: '',
            genre: '',

        })
    })

})