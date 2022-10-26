import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import './userhomepage.css'
import { useNavigate } from 'react-router-dom'

function UserHomePage() {
  const [attendence, setAttendence] = useState('')
  const [myatten, setMyatten] = useState('')
  const [myprofileimage, setMyprofileimage] = useState('')


  const userattendence = (value) => {
    setAttendence(value)
    const url = 'http://localhost:5000/api/users/userattendence'
    const user = JSON.parse(localStorage.getItem('user'))
    const userid = user._id
    axios.post(url,
      { userid, attendence }
    ).then((res) => {
      console.log(res.data)
    }
    ).catch(err => console.log(err))

  }



  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  // axios.get('api/users/')
  useEffect(() => {
    const userid = user._id
    const url = 'http://localhost:5000/api/users/myattendence'
    axios.post(url, { userid }).then((res) => {
      setMyatten(res.data.attendence)
      setMyprofileimage(res.data.image)
    }
    )
      .catch(err => console.log(err))


    if (!user) {
      navigate('/signin')
    }
  })
  return (
    <div className='userhome-page'>
      <Header />
      <div className='userhomepage-div'>

     <div className='userprofile-left'>
      <h4>{user.username}</h4>
        <h4>{user.email}</h4>
        <h4>I am {myatten} today</h4>
        <select onChange={(e) => { userattendence(e.target.value) }}>
          <option value="Present">
            present
          </option>

          <option value="On-leave">
            On leave
          </option>
        </select>
        </div>


        <img src={myprofileimage} width='300' alt='profile photo'></img>

       
       
      </div>
    </div>
  )
}

export default UserHomePage