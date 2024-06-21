import React from 'react'
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Homescreen from './screens/Homescreen';//Replaced with homescreen still pretty much same but added Outlet
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
