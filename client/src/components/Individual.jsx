import {useEffect, useState} from "react"
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Networking from "./individual/Networking"
import Connections from "./individual/Connections"
import Jobs from "./individual/Jobs"
import IndividualHeader from "./IndividualHeader"
import Profile from "./individual/Profile"
import UserPage from "./individual/UserPage";

function Individual(props) {
  const [data, setData] = useState({})
  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios.get(`/api/v1/user/${props.user_id}`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [reload])

  return (
    <Router>
      <IndividualHeader onClick={props.onClick}></IndividualHeader>
      <div className="individual">
        <Switch>

          <Route exact path="/individual">
            <Profile
              user_id={props.user_id}
              name={data.name}
              email={data.email}
              industry={data.industry}
              resume_url={data.resume_url}
              summary={data.summary}
              skills={data.skills}
              education={data.education}
              experience={data.experience}
              location={data.location}
              contact={data.contact}
              photo={data.photo_url}
              reload={setReload}
            >   
            </Profile>
          </Route>

          <Route path="/individual/networking">
            <Networking 
              user_id={data.id}
            />
          </Route>

          <Route path="/individual/connections">
            <Connections 
              user_id={data.id}
            />
          </Route>

          <Route path="/individual/jobs">
            <Jobs 
              user_id={props.user_id}
              organization_id={props.organization_id}
            />
          </Route>

          <Route exact path="/individual/user_page">
            <UserPage />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default Individual;
