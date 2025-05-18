import React from 'react'
import StoreItems from '../Data/items.json'
import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';

const CartItem = ({id, quantity}) => {
    const {increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const item = StoreItems.find(i => i.id === id)
    if(item == null) return null;
  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'> 
        <img src={item.imgUrl} style={{width: '125px', height: '75px', objectFit: 'cover'}}></img>  
        <div className='me-auto'>
            <div>
                <div>{item.name} {quantity > 1 && <span className='text-muted' style={{fontSize: '10px'}}>x{quantity}</span>}</div> 
            </div>

            <div className='text-muted' style={{fontSize: '.75rem'}}>
                ${item.price}
            </div> 

        </div>
        <div> {item.price * quantity} </div>

        <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(item.id)}>X</Button>

    </Stack>
  )
}

export default CartItem