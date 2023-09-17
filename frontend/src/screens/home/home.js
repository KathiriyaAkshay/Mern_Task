import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const userLogin = useSelector(state => state.userLogin)
  const { userInfo } = userLogin
  const { firstname, lastname, email } = userInfo
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    }
  }, [userLogin])

  return (
    <div>
      <h1>{`Welcome home ${firstname} ${lastname}`}</h1>
      <p>
        Redux is a valuable tool for organizing your state, but you should also
        consider whether it's appropriate for your situation. Don't use Redux
        just because someone said you should - take some time to understand the
        potential benefits and tradeoffs of using it. Here are some suggestions
        on when it makes sense to use Redux: You have reasonable amounts of data
        changing over time You need a single source of truth for your state You
        find that keeping all your state in a top-level component is no longer
        sufficient
      </p>
    </div>
  )
}

export default Home
