import '../styles/Home.css'
import React from 'react'
import ShowBooks from './ShowBooks'
import Search from './Search'





const Home = ({ books, locations, languages, conditions, genres, searchBook }) => {
    // const [author, setAuthor] = useState('')
    // const [title, setTitle] = useState('')
    // const [location, setLocation] = useState('')
    // const [language, setLanguage] = useState('')
    // const [condition, setCondition] = useState('')
    // const [genre, setGenre] = useState('')


    // function submit(evt) {
    //     evt.preventDefault()
    //     const searchCriteria = {}
    //     if (author.length > 0) {
    //         searchCriteria.author = author
    //     }
    //     if (title.length > 0) {
    //         searchCriteria.title = title
    //     }
    //     if (location.length > 0 && location !== 'Location') {
    //         searchCriteria.location = location
    //     }
    //     if (language.length > 0 && language !== 'Language') {
    //         searchCriteria.language = language
    //     }
    //     if (condition.length > 0 && condition !== 'Condition') {
    //         searchCriteria.condition = condition
    //     }
    //     if (genre.length > 0 && genre !== 'Genre') {
    //         searchCriteria.genre = genre
    //     }
    //     searchBook(searchCriteria)
    // }



    return (
        <>
            <main>
                <div className="Home">
                    <div className="banner text-center">
                        <h1>How To Use</h1>  
                    </div>
                    <div className="intro">
                        <p>This book exchange store is a not-for-profit community initiative allows readers to swap books at no cost, thereby promoting and increasing access to books and helping the environment at the same time.</p>
                        <p>In here, you just need to use the search box to see any favourite books you want and give away one of your book for exchange by submitting the appointment.</p>
                        <p>We provide some latest and feature books for suggestion. If you want more information of each book, you can click for more details or click the 'All Book' on the top right to have a look of all the books.</p>
                    </div>                     
                    {/* <form className="p-3" role="search" onSubmit={submit}>
                        <input className="title form-control mb-2" type="search" placeholder="Title" aria-label="Search" value={title} onChange={(evt) => setTitle(evt.target.value)}/>
                        <input className="author form-control mb-2" type="search" placeholder="Author" aria-label="Search" value={author} onChange={(evt) => setAuthor(evt.target.value)} />
                        <select className="location form-select mb-2" id="inputGroupSelect01" value={location} onChange={(evt) => setLocation(evt.target.value)}>
                            <option>Location</option>
                            {locations.map((location, index) => (
                                <option key={index} value={location.location}>{location.location}</option>
                            ))}
                        </select>
                        <select className="condition form-select mb-2" id="inputGroupSelect01" value={condition} onChange={(evt) => setCondition(evt.target.value)}>
                            <option>Condition</option>
                            {conditions.map((condition, index) => (
                                <option key={index} value={condition.name}>{condition.name}</option>
                            ))}
                        </select>
                        <select className="language form-select mb-2" id="inputGroupSelect01" value={language} onChange={(evt) => setLanguage(evt.target.value)}>
                            <option>Language</option>
                            {languages.map((language, index) => (
                                <option key={index} value={language.name}>{language.name}</option>
                            ))}
                        </select>
                        <select className="genre form-select mb-2" id="inputGroupSelect01" value={genre} onChange={(evt) => setGenre(evt.target.value)}>
                            <option>Genre</option>
                            {genres.map((genre, index) => (
                                <option key={index} value={genre.name}>{genre.name}</option>
                            ))}
                        </select>
                        <button className="search btn btn-outline-success fs-6" type="submit">Search</button>
                    </form> */}
                    <Search locations={locations} languages={languages} conditions={conditions} genres={genres} searchBook={searchBook}/>
                    <div>
                        <div id="address" className="nav">
                            <h4>Location</h4>
                            <a className="loc-link" href="https://goo.gl/maps/pgYkj2yxUvoWddbH6" target="_blank">North Brisbane</a>   
                            <a className="loc-link" href="https://goo.gl/maps/6jTQj1Qtzt2TG3ma7" target="_blank">Brisbane City</a>
                            <a className="loc-link" href="https://goo.gl/maps/UQCZn6yGuzx8Q6j1A" target="_blank">South Brisbane</a>
                        </div>
                        
                    </div>
                    <div className="feature text-center">
                        <h1 className='Fbooks'>Featured Books</h1>
                        {/* <div>
                        <Button onClick={clickMe}>See More</Button>
                        </div> */}
                        <div className='fourbooks'>
                            {/* {books?.length>0 ? <ShowBooks books={books}/> : <h1 className='text-center pt-5 text-danger'>No Books Found!</h1>} */}
                            {!books ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : books.length>0 ? <ShowBooks books={books}/> : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
                        </div>
                    </div>
                    <div className="latest text-center">
                        <h1 className='Lbooks'>Latest Book</h1>
                        <div className='fourbooks'>
                            {/* {books?.length>0 ? <ShowBooks books={books}/> : <h1 className='text-center pt-5 text-danger'>No Books Found!</h1>} */}
                            {!books ? <h2 className='text-center pt-5 px-3'>Loading Books...</h2> : books.length>0 ? <ShowBooks books={books}/> : <h2 className='text-center px-3 pt-5 text-danger'>No Books Found!</h2>}
                        </div>
                    </div>
                        
                    
                </div>
            </main>
        </>
    )
}

export default Home