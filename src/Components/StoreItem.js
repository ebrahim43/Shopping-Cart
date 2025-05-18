import { height } from '@fortawesome/free-solid-svg-icons/fa0'
import React, { useContext } from 'react'
// import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../Context/ShoppingCartContext'

const StoreItem = (props) => {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
  const quantity = getItemQuantity(props.item.id);
    // const [quantity, setQuantity] = useState(0);

    // const addToCart = () => {
    //     setQuantity(quantity + 1);
    // }

    // const removeFromCart = () => {
    //     if(quantity > 1) {
    //         setQuantity(quantity - 1);
    //     }
    // }

  return (
    <Card>
      <Card.Img variant="top" style={{height: '200px', objectFit: 'cover'}} src={props.item.imgUrl} />
      <Card.Body className='d-flex justify-content-between'>
        <Card.Title>{props.item.name}</Card.Title>
        <Card.Text className='text-muted'>${props.item.price}</Card.Text>
      </Card.Body>
      
      {quantity === 0 ? (
        <button className='m-2 p-2 btn btn-primary' onClick={() => increaseCartQuantity(props.item.id)}>Add to Cart</button>
    ) : (
        <div className='d-flex align-items-center flex-column'>
            <div className='d-flex align-items-center justify-content-center'>
                <Button onClick={() => decreaseCartQuantity(props.item.id)}>-</Button>
                <span className='fs-3 mx-2'>{quantity} In Cart</span>
                <Button onClick={() => increaseCartQuantity(props.item.id)}>+</Button>
            </div>
            <Button className='my-2 btn btn-danger' onClick={() => removeFromCart(props.item.id)}>Remove</Button>
        </div>
      )}
    </Card>
  )
}

export default StoreItem