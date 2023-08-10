import React from 'react'
import { Navigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { useAppContext } from '../context/appContext'
import Register from '../components/Register'

const Landing = () => {
  const { user } = useAppContext()

  return (
    <>
      {user && <Navigate to="/" />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className="container page">
          {/* info */}
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>
              A portal for the candidates who are applying for jobs at various
              organisations and want to keep track of the application process at
              various organisations.
            </p>

            {/* <Link to="/register" className="btn btn-hero">
              Login/Register
            </Link> */}
          </div>
          <Register />
          {/* <img src={main} alt="job hunt" className="img main-img" /> */}
        </div>
      </Wrapper>
    </>
  )
}

export default Landing
