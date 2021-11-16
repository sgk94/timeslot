import { useState, useEffect } from "react";
import Navbar from './Navbar';
import Home from './Home';
import Book from './Book';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  //state of list of activities booked
  const [activities, setActivities] = useState([]);

  const sortByDate = (activities) => {
    let sortedActivities = activities.sort((a1, a2) => (a1.date > a2.date) ? 1 : (a1.date < a2.date) ? -1 : 0);
    setActivities([...sortedActivities]);
    console.log(sortedActivities);
  }

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity])
  }

  let len = activities.length;

  useEffect(() => {
  }, [activities]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home activities={activities} len={len} sortByDate={sortByDate}/>
            </Route>
            <Route path="/book">
              <Book activities={activities} addActivity={addActivity} len={len}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
