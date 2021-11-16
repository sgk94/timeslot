const ActivityList = ({activities, sortByDate}) => {

  //Handle the click of the sort by date button and trigger the sort function
  const onSortByDateClick = (activities) => {
    sortByDate(activities);
  }

  return ( 
    <div className="activityFeed">
      <div>
        <h2 id="activityFeedTitle">Activity Feed</h2>
        <button id="filterDateButton" onClick={()=> onSortByDateClick(activities)}>Sort By Date</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Date</th>
            <th>Guest(s)</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity)=> (
            <tr className="activityRow" key={activity.id}>
                <td className="activityFeedItem">{ activity.activityName }</td>
                {/* <td>{ activity.id }</td> */}
                <td className="activityFeedItem">{ activity.startTime }</td>
                <td className="activityFeedItem">{ activity.endTime }</td>
                <td className="activityFeedItem">{ activity.date }</td>
                <td className="activityFeedItem">{ activity.guests }</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   );
}
 
export default ActivityList;