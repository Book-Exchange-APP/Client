import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { BrowserRouter } from 'react-router-dom'
import {screen} from '@testing-library/dom'
import Books from "../components/Books"

const displayedBooks = [
    {
        _id: "63d0c625189591d4b10b85b7",
        title: "Test 1",
        author: "A 1",
        condition: "Good",
        location: {
            _id: "63d0c625189591d4b10b85b4",
            location: "S Brisbane",
            address: "10 Watson st, Acacia Ridge",
            postcode: 4110,
            phone: 24681012
        },
        language: "English",
        img: "IMAGE",
        genre: "Fantasy",
        description: "One ring to rule them all",
        time_stamp: 1674626596545,
        status: "Available"
    },
    {
        _id: "63d0c625189591d4b10b85b7",
        title: "Test 2",
        author: "A2",
        condition: "Poor",
        location: {
            _id: "63d0c625189591d4b10b85b4",
            location: "City",
            address: "9 Watson st, Acacia Ridge",
            postcode: 4111,
            phone: 246810120
        },
        language: "Chinese",
        img: "IMAGE",
        genre: "Gardening",
        description: "Fruit trees",
        time_stamp: 1674626596545,
        status: "Unavailable"
    },
    {
        _id: "63d0c625189591d4b10b85b7",
        title: "Test 3",
        author: "A3",
        condition: "Excellent",
        location: {
            _id: "63d0c625189591d4b10b85b4",
            location: "N Brisbane",
            address: "8 Watson st, Acacia Ridge",
            postcode: 4112,
            phone: 2468101200
        },
        language: "Korean",
        img: "IMAGE",
        genre: "Science",
        description: "Stone",
        time_stamp: 1674626596545,
        status: "Pending"
    },
]

const locations = [{
    location: "City",
    },
    {
    location: "S Brisbane",
    },
    {
    location: "N Brisbane",
    }
]

const languages = [{
    name: "English",
    },
    {
    name: "Chinese",
    },
    {
    name: "Korean",
    }
]

const conditions = [{
    name: "Good",
    },
    {
    name: "Poor",
    },
    {
    name: "Excellent",
    }
]

const genres = [{
    name: "Fantasy",
    },
    {
    name: "Gardening",
    },
    {
    name: "Science",
    }
]

const searchBook = () => {}

describe('Books Component', () => {    
    let container

    beforeEach(async function () {
        container = render(<BrowserRouter><Books books={displayedBooks} locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook} /></BrowserRouter>).container
        })  

    it("Shows the Books heading", () => {
        expect(container.querySelector('h1')).toBeTruthy()
        expect(container.querySelector('h1')).toHaveTextContent('Books')

    })

    it("Shows the Book Cards", () => {
        expect(container.querySelector('h2')).toBeFalsy()
        expect(container.querySelector('h5')).toBeTruthy()
        expect(container.querySelector('img')).toBeTruthy()
        expect(screen.getAllByRole('img').length).toBe(3)
        expect(screen.getAllByRole('img').length).not.toBe(2)
        expect(screen.getAllByText('View details').length).toBe(3)
    })

    it("Shows the Search Bar", () => {
        expect(screen.getAllByRole('search')).toBeTruthy()
        expect(screen.getAllByRole('search').length).toBe(1)
        expect(container.querySelector('select')).toBeTruthy()
        expect(container.querySelector('select').length).toBe(4)
        expect(screen.getAllByLabelText('Search')).toBeTruthy()
        expect(screen.getAllByLabelText('Search').length).toBe(2)
        expect(container.querySelector('button')).toBeTruthy()
        expect(container.querySelector('button')).toHaveTextContent('Search')
    })
})

