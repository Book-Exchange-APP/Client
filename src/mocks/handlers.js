import { rest } from 'msw'

const displayedBooks = [
    {
        _id: "63d0c625189591d4b10b85b7",
        title: "Test 1",
        author: "A 1",
        condition: {name: "Good"},
        location: {
            _id: "63d0c625189591d4b10b85b4",
            location: "S Brisbane",
            address: "10 Watson st, Acacia Ridge",
            postcode: 4110,
            phone: 24681012
        },
        language: {name: "English"},
        img: "IMAGE",
        genre: {name: "Fantasy"},
        description: "One ring to rule them all",
        time_stamp: 1674626596545,
        status: {name: "Available"}
    },
    {
        _id: "63d0c625189591d4b10b85b7",
        title: "Test 2",
        author: "A2",
        condition: {name: "Poor"},
        location: {
            _id: "63d0c625189591d4b10b85b4",
            location: "City",
            address: "9 Watson st, Acacia Ridge",
            postcode: 4111,
            phone: 246810120
        },
        language: {name: "Chinese"},
        img: "IMAGE",
        genre: {name: "Gardening"},
        description: "Fruit trees",
        time_stamp: 1674626596545,
        status: {name: "Unavailable"}
    },
    {
        _id: "63d0c625189591d4b10b85b7",
        title: "Test 3",
        author: "A3",
        condition: {name: "Excellent"},
        location: {
            _id: "63d0c625189591d4b10b85b4",
            location: "N Brisbane",
            address: "8 Watson st, Acacia Ridge",
            postcode: 4112,
            phone: 2468101200
        },
        language: {name: "Korean"},
        img: "IMAGE",
        genre: {name: "Science"},
        description: "Stone",
        time_stamp: 1674626596545,
        status: {name: "Pending"}
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

const appointment = {
    first_name: "Tom",
    last_name: "Cruise",
    inc_book: {
        _id: "63d65d8a6939a735511d015d",
        title: "Winnie the Pooh",
        author: "A. A. Milne"
    },
    out_book: {
        _id: "63d65d8a6939a735511d015f",
        title: "BFG",
        author: "Roald Dahl"
    },
    time: "13:00",
    date: "2023-12-01T14:00:00.000Z",
    status: "63d65d8a6939a735511d0154",
    location: {
        _id: "63d65d8a6939a735511d0158",
        location: "South Brisbane"
    },
    _id: "63d719962a43e1e5f472c335",
    __v: 0
}

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



export { handlers, displayedBooks, locations, languages, conditions, genres, appointment }