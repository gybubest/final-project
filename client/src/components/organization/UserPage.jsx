import {useEffect, useState} from "react"
import axios from 'axios';

import Head from "../individual/profile_components/Head"
import Body from "../individual/profile_components/Body"
import Footer from "../individual/profile_components/Footer"

const UserPage = (props) => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get(`/api/v1/user/${window.location.hash[1]}`)
    .then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    });
  }, [])
  return(
    <>
      <Head 
        name={data.name}
        industry={data.industry}
        summary={data.summary}
        resume_url={data.resume_url}
        photo={data.photo_url}
      />
      <Body 
        skills={data.skills}
        education={data.education}
        experience={data.experience}
      />
      <Footer 
        email={data.email}
        contact={data.contact}
        location={data.location}
      />
    </>
  )
};

export default UserPage;