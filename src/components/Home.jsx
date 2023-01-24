import React from 'react'
import '../styles/Home.css'


const Home = () => {
    return (
        <>
            <div className="Home">
                <div className="title text-center">
                    <h1>Title Banner</h1>
                </div>
                <div className="Search">
                    <h1>Search Box</h1>
                </div><div className="Locat">
                    <h1>Our Location</h1>
                </div>

                    <h2 className='text-center text info'>Featured Books</h2>
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
                    <div className='container-fluid mx-2'>
                    <div className='row mt-5 mx-2'>
                        <div className='col-md-3'>

                        </div>
                    </div>
                    </div>
                    <h2 className='text-center text info'>Latest Arrivals</h2>
            </div>

        </>
    )
}

export default Home