import React from 'react'
import { Container } from 'react-bootstrap'
import Store from './Store'

const Home = () => {
  return (
    <Container>
      <h1 className='my-2'>Home</h1>
      <Store />
    </Container>    
  )
}

export default Home