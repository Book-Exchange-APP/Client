import '../styles/Home.css'
import React from 'react'
import ShowBooks from './ShowBooks'
import SearchForm from './SearchForm'

const Home = ({ books, locations, languages, conditions, genres }) => {
    let featureBooks = null
    let latestBooks = null
    if (books) {
        const availableBooks = books.filter(book => book.book.status.name === 'Available')
        availableBooks.sort((a, b) => {
            if (a.book.time_stamp > b.book.time_stamp) {
                return -1
            }
            if (a.book.time_stamp < b.book.time_stamp) {
                return 1
            }
            return 0
        })
        featureBooks = []
        featureBooks.push(availableBooks.find(book => book.book.genre.name === genres[0].name))
        featureBooks.push(availableBooks.find(book => book.book.genre.name === genres[1].name))
        featureBooks.push(availableBooks.find(book => book.book.genre.name === genres[2].name))
        featureBooks.push(availableBooks.find(book => book.book.genre.name === genres[3].name))
        featureBooks = featureBooks.filter((book) => book && book)
        latestBooks = availableBooks.slice(0, 4)
    }
    return (
        <>
            <main className="Home">
                <div className="banner text-center">
                    <h1><b>How To Use</b></h1>
                </div>
                <div className="intro">
                    <p>This book exchange store is a not-for-profit community initiative allows readers to swap books at no cost, thereby promoting and increasing access to books and helping the environment at the same time.</p>
                    <p>In here, you just need to use the search box to see any favourite books you want and give away one of your book for exchange by submitting the appointment.</p>
                    <p>We provide some latest and feature books for suggestion. If you want more information of each book, you can click for more details or click the 'Books' on the top right to have a look of all the books.</p>
                </div>
                <div id="side" className="d-flex">
                    <div className="searchForm">
                        <SearchForm locations={locations} languages={languages} conditions={conditions} genres={genres} />
                    </div>
                    <div id="address" className="nav p-3">
                        <h4>Our Locations</h4>
                        <a className="loc-link" href="https://goo.gl/maps/pgYkj2yxUvoWddbH6" target="_blank">North Brisbane</a>
                        <a className="loc-link" href="https://goo.gl/maps/6jTQj1Qtzt2TG3ma7" target="_blank">Brisbane City</a>
                        <a className="loc-link" href="https://goo.gl/maps/UQCZn6yGuzx8Q6j1A" target="_blank">South Brisbane</a>
                    </div>
                </div>
                <div className="feature text-center">
                    <h1 className='Fbooks'>Featured Books</h1>
                    <div className='fourbooks'>
                        {!featureBooks ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : featureBooks.length > 0 ? (console.log(featureBooks), <ShowBooks books={featureBooks} />) : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
                    </div>
                </div>
                <div className="latest text-center">
                    <h1 className='Lbooks'>Latest Book</h1>
                    <div className='fourbooks'>
                        {!latestBooks ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : latestBooks.length > 0 ? <ShowBooks books={latestBooks} /> : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home