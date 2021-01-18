import { useState } from 'react'
import axios from 'axios';

const EditBody = (props) => {
  const { name, industry, website, email, location, introduction, image_url, onClick } = props; 
  const [state, setState] = useState(props); 

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(state);
    axios.post(`/api/v1/organization/update_body`, {state}, {withCredentials: true})
    .then(() => onClick(false))
    .catch((err) => console.log(err));
  };
  
  return(
    <div>
      <h1>EDIT SECTION</h1>
      <form onSubmit={handleSubmit}>
          Company Name:
          <input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={event => setState(prev => ({...prev, name: event.target.value}))}
          />
          <br></br>

          Industry:
          <input
            placeholder="industry"
            type="text"
            name="industry"
            value={industry}
            onChange={event => setState(prev => ({...prev, industry: event.target.value}))}
          />
          <br></br>

          Website:
          <input 
            placeholder="website"
            type="text"
            name="website"
            value={website}
            onChange={event => setState(prev => ({...prev, website: event.target.value}))}
          />          
          <br></br>

          Email:
          <input 
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={event => setState(prev => ({...prev, email: event.target.value}))}
          />          
          <br></br>

          Location:
          <input 
            placeholder="location"
            type="text"
            name="location"
            value={location}
            onChange={event => setState(prev => ({...prev, location: event.target.value}))}
          />          
          <br></br>

          Introduction:
          <input 
            placeholder="introduction"
            type="text"
            name="introduction"
            value={introduction}
            onChange={event => setState(prev => ({...prev, introduction: event.target.value}))}
          />          
          <br></br>

          Image_url:
          <input 
            placeholder="image_url"
            type="text"
            name="image_url"
            value={image_url}
            onChange={event => setState(prev => ({...prev, image_url: event.target.value}))}
          />          
          <br></br>

          <button placeholder="submit" type="submit">
            Done
          </button>
      
        </form>
    </div>
  )
};

export default EditBody;