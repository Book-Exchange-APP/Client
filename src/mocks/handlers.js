import { rest } from 'msw'

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

const locations = [
    {
        _id: "63d3c448265aae5a92ece7a9",
        location: "City",
        address: "5 Queen st, Brisbane City",
        postcode: 4000,
        phone: "0712341234",
        email: "location1@bx.com",
    },
    {
        _id: "63d3c448265aae5a92ece7aa",
        location: "S Brisbane",
        address: "10 Watson st, Acacia Ridge",
        postcode: 4110,
        phone: "0743214321",
        email: "location2@bx.com",
    },
    {
        _id: "63d3c448265aae5a92ece7ab",
        location: "N Brisbane",
        address: "22 Rainbow st, Sandgate",
        postcode: 4017,
        phone: "1357911132",
        email: "location3@bx.com",
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

const handlers = [
    rest.get('http://localhost:4001/books', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(displayedBooks))
    }),

    rest.get('http://localhost:4001/locations', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(locations))
    }),

    rest.get('http://localhost:4001/languages', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(languages))
    }),

    rest.get('http://localhost:4001/conditions', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(conditions))
    }),

    rest.get('http://localhost:4001/genres', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(genres))
    }),

]



export { handlers, displayedBooks, locations, languages, conditions, genres }