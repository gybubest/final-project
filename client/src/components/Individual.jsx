// import './App.css';
import {useEffect, useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

import Networking from "./individual/Networking"
import Connections from "./individual/Connections"
import Jobs from "./individual/Jobs"
import Notifications from "./individual/Notifications"
import IndividualHeader from "./IndividualHeader"

function Individual(props) {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`/api/v1/user/${props.user_id}`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  return (
    <Router>
      <IndividualHeader onClick={props.onClick}></IndividualHeader>
      <div className="individual">
        <Switch>

          <Route exact path="/individual">
          <h1> This Is the Individual Profile</h1>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.industry}</p>
          <img src={data.resume_url}></img>
          </Route>

          <Route path="/individual/networking">
            <Networking />
          </Route>

          <Route path="/individual/connections">
            <Connections 
              user_id={data.id}
            />
          </Route>

          <Route path="/individual/jobs">
            <Jobs />
          </Route>

          <Route path="/individual/notifications">
            <Notifications />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Individual;
