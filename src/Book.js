import { useState} from "react";
import { useHistory } from "react-router-dom";

const Book = (props) => {
  
  //state of input values
  const [activityName, setActivityName] = useState('Drumming Lesson');
  const [date, setActivityDate] = useState('');
  const [startTime, setActivityStart] = useState('');
  const [endTime, setActivityEnd] = useState('');
  const [guests, setActivityGuests] = useState(1);
  
  let history = useHistory();

  //id property to increment every time a new activity is added
  let id = props.len;
  
  //Set minimum time to prevent scheduling the end time to be before the start time
  let minTime;
  if (startTime !== null) {
    minTime = startTime;
  }
  
  //Set a minimum date so users cannot schedule for a day already passed
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;
  let minDate = today;
  
  //handle for submission and redirect to home page
  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {activityName, date, startTime, endTime, guests, id};
    props.addActivity(newActivity);
    history.push('/');
  }

  return ( 
    <div className="book">
      <h2>Book A New Activity</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="activities">Choose an activity:</label>
        <select className="inputs" value={activityName} onChange={(e)=> setActivityName(e.target.value)}>
          <option value="Drum Lesson">Drum Lesson</option>
          <option value="Valorant Lesson">Valorant Lesson</option>
        </select>
        <label>Date:</label>
        <input
          className="inputs" 
          type="date"
          min={minDate}
          placeholder="yyyy-mm-dd"
          value={date}
          onChange={(e) => setActivityDate(e.target.value)}
          required
        />
        <label>Start Time:</label>
        <input
          className="inputs" 
          type="time"
          value={startTime}
          onChange={(e) => setActivityStart(e.target.value)}
          required 
        />
        <label>End Time:</label>
        <input
          className="inputs" 
          type="time"
          min={minTime}
          max="23:59"
          value={endTime}
          onChange={(e) => setActivityEnd(e.target.value)} 
          required
        />
        <label>Guests:</label>
        <input 
          className="inputs"
          type="number"
          min = "1"
          max = "3"
          value={guests}
          onChange={(e) => setActivityGuests(e.target.value)} 
          required
        />

        <input
          type="hidden"
          defaultValue={id}
        />
        <button>Book Now</button>
      </form>
    </div>
   );
}
 
export default Book;