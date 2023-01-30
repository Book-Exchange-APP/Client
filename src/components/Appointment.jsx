import React, { useState} from 'react'
import ShowBook from './ShowBook'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"


const Appointment = () => {

  const [startDate, setStartDate] = useState(new Date());

  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  }

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputs);
  }

  
  return (
    <main>
        <div className='title'>
            <h1>Appointment Details</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Enter your Full Name:
          <input 
            type="text" 
            name="fullName" 
            value={inputs.fullName || ""} 
            onChange={handleChange}
          />
          </label>
          <label>Enter your Email Address:
            <input 
              type="text" 
              name="email" 
              value={inputs.email || ""} 
              onChange={handleChange}
            />
          </label>
          <label>Enter your Contact Number:
            <input 
              type="text" 
              name="phone" 
              value={inputs.phone || ""} 
              onChange={handleChange}
            />
          </label>
          <label>Enter your Book name:
            <input 
              type="text" 
              name="book" 
              value={inputs.book || ""} 
              onChange={handleChange}
            />
          </label>

          {/* <select value={language} onChange={handleChange}>
            <p>Choose the language of the book</p>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select> */}



          <div>
            <p>Date and Time for Exchange</p>
            <label>
              <DatePicker
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mmaa"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                timeClassName={handleColor}
                />
            </label>        
          </div>
          <input type="submit" />
        </form>
        
        <div>
          {/* books details */}
          {/* <ShowBook /> */}
        </div>
    </main>
    




  )
}
export default Appointment