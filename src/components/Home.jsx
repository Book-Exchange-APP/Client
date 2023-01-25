import React from 'react'
import '../styles/Home.css'


const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="title text-center">
                    <h1>Title Banner</h1>
                </div>
                <div className="SearchNav">
                    <h2>Search Box</h2>
                </div><div className="LocatNav">
                    <h2>Our Location</h2>
                </div>
                    <div className="feature text-center">
                        <h2>Featured Books</h2>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
                    <br></br>
                    <div className="latest text-center">
                        <h2>Latest Books</h2>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
                    <div className='books'>
                        <img src="../src/assets/logo.png" alt="book" />
                        <div className='text'>
                            <span>Book Details</span>
                        </div>
                    </div>
            </div>

        </>
    )
}

export default Home