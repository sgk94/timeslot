import ActivityList from "./ActivityList";
import NoActivities from "./NoActivities";

const Home = (props) => {
  
  return ( 
    <div className="home">
      {props.len > 0 
      ? <ActivityList activities={props.activities} sortByDate={props.sortByDate}/>
      : <NoActivities />  
    }
    </div>
   );
}
 
export default Home;