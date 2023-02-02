import { rest } from 'msw'

const imgString = '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'

const displayedBooks = [
    {
        book: {
            _id: "63d0c625189591d4b10b85b7",
            title: "Test 1",
            author: "A 1",
            condition: { name: "Good" },
            location: {
                _id: "63d0c625189591d4b10b85b4",
                location: "S Brisbane",
                address: "10 Watson st, Acacia Ridge",
                postcode: 4110,
                phone: 24681012
            },
            language: { name: "English" },
            img: "IMAGE",
            genre: { name: "Fantasy" },
            description: "One ring to rule them all",
            time_stamp: 1674626596545,
            status: { name: "Available" }
        },
        path: imgString
    }
    ,
    {
        book: {
            _id: "63d0c625189591d4b10b85b7",
            title: "Test 2",
            author: "A2",
            condition: { name: "Poor" },
            location: {
                _id: "63d0c625189591d4b10b85b4",
                location: "City",
                address: "9 Watson st, Acacia Ridge",
                postcode: 4111,
                phone: 246810120
            },
            language: { name: "Chinese" },
            img: "IMAGE",
            genre: { name: "Gardening" },
            description: "Fruit trees",
            time_stamp: 1674626596545,
            status: { name: "Unavailable" }
        },
        path: imgString
    }
    ,
    {
        book: {
            _id: "63d0c625189591d4b10b85b7",
            title: "Test 3",
            author: "A3",
            condition: { name: "Excellent" },
            location: {
                _id: "63d0c625189591d4b10b85b4",
                location: "N Brisbane",
                address: "8 Watson st, Acacia Ridge",
                postcode: 4112,
                phone: 2468101200
            },
            language: { name: "Korean" },
            img: "IMAGE",
            genre: { name: "Science" },
            description: "Stone",
            time_stamp: 1674626596545,
            status: { name: "Pending" }
        },
        path: imgString
    }
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
},
{ name: "Children" }
]

const appointment = [{
    appointment: {
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
    },
    incPath: imgString,
    outPath: imgString
}]

const newAppointment = {
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



export { handlers, displayedBooks, locations, languages, conditions, genres, appointment, newAppointment }