import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import items from '../Data/items.json'
import StoreItem from './StoreItem'
const Store = () => {
  return (
    <Container>
        <h1>Store</h1>
        <Row md={2} xs={1} lg={4} className='g-3'>
            {items.map(item => (
                <Col key={item.id}>
                    <StoreItem item={item}/>
                </Col>
            ))}
        </Row>
    
    </Container>
  )
}

export default Store