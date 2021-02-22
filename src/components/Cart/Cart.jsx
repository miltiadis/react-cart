import React from "react";

import CartItem from '../CartItem/CartItem';
import './cart.scss';
import Text from "../Text/Text";
import Spacing from "../Spacing/Spacing";

const Cart = ({cartItems, addToCart, removeFromCart}) => {
  const calculateTotal = (items) =>
    items.reduce((ack, item) => ack + item.amount * item.price, 0);

  return (
    <aside className="c-cart">
      <Spacing size="6" direction="bottom" propertyName="margin">
        <Text block tag="h3" weight="bold" size="24" color="black" inline="block">
          Your Shopping Cart
        </Text>
      </Spacing>
      {cartItems.length === 0 ?
        <Spacing size="6" direction="bottom" propertyName="margin"><Text block tag="p" weight="medium" size="16" color="black" inline="block">No items in your cart</Text></Spacing>   : null}
      {cartItems.map(item => (
        <CartItem
          key={item.productId}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <Text block tag="h4" weight="bold" size="24" color="black" inline="block">
        Total: £{calculateTotal(cartItems).toFixed(2)}
      </Text>
    </aside>
  );
};

export default Cart;
