import axios from "axios";
import { Link } from "react-router-dom";
// import UserPage from "../../individual/UserPage";

const EmployeeBox = () => {
  const { organization_id, id, name, email, summary, industry, reload } = props;
  
  const verifyEmployee = () => {
    const data = { "id": id, "organization_id": organization_id, "verified": true };
    axios.put('http://localhost:8080/api/v1/user', {data}, {withCredentials: true})
    .then(reload(current => !current))
    .catch((err) => {
      console.log(err);
    });
  }

  return(
    <div>
      <hr></hr>
      <h2>{name}: {industry}</h2>
      <p>{email}</p>
      <p>{summary}</p>
      <Link
        to={{
          pathname: "/individual/user_page",
          hash: `#${id}` 
        }}
      >View</Link>
      <button onClick={verifyEmployee}>Add</button>
      <hr></hr>
    </div>
  )
};

export default EmployeeBox;