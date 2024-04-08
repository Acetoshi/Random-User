import { useState } from 'react'
import './App.css'
import axios from 'axios'
import UserCard from './components/UserCard';


function App() {

const defaultUser ={ name:{first: "Francis", last:"XV"}, email: "francisquinze@ula.org",picture:{
  "large": "https://randomuser.me/api/portraits/men/30.jpg",
  "medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
  "thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
}}

  const [user, setUser] = useState(defaultUser)

  function getUser() {
    // Send the request

    axios

      .get('https://randomuser.me/api?nat=en')

      // Use this data to update the state

      .then((response) => {

        console.log(response.data);
        setUser(response.data.results[0]);

      });

  }

  return (
    <>

      <UserCard
        firstname={user.name.first}
        lastname={user.name.last}
        email={user.email}
        image={user.picture.medium} />

      <button type="button" onClick={getUser}>Get new user</button>
    </>
  )
}

export default App


