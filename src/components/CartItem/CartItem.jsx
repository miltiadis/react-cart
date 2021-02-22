import Button from '@material-ui/core/Button';
import Row from "../Grid/Row";
import Text from "../Text/Text";
import Spacing from "../Spacing/Spacing";
import React from "react";
import Column from "../Grid/Column";

import './cartItem.scss';

const CartItem = ({item, addToCart, removeFromCart}) => (
  <Spacing size="6" direction="bottom" propertyName="margin">
    <div className="c-cart-item">
      <Row>
        <Column grow>
          <Spacing size="3" direction="all" propertyName="padding">
            <Spacing size="3" direction="bottom" propertyName="margin">
              <img className="c-cart-item__image" src={item.image} alt={item.title}/>
            </Spacing>
            <Spacing size="3" direction="bottom" propertyName="margin">
              <Text block tag="h3" weight="bold" size="18" color="black" inline="block">
                {item.title}
              </Text>
            </Spacing>
            <Row>
              <Column grow>
                <Text block tag="p" weight="bold" size="18" color="black" inline="block">
                  Price: £{item.price}
                </Text>
              </Column>
            </Row>
            <Row>
              <Column grow>
                <Text block tag="p" weight="bold" size="18" color="black" inline="block">
                  Total: £{(item.amount * item.price).toFixed(2)}
                </Text>
              </Column>
            </Row>
            <Row>
              <Column shrink>
                <Spacing size="3" direction="right" propertyName="margin">
                  <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => removeFromCart(item.productId)}
                  >
                    -
                  </Button>
                </Spacing>
              </Column>
              <Column shrink>
                <Spacing size="3" direction="right" propertyName="margin">

                  <Button
                    size='small'
                    disableElevation
                    variant='contained'
                    onClick={() => addToCart(item)}
                  >
                    +
                  </Button>
                </Spacing>
              </Column>
              <Column shrink>
                <Text block tag="p" weight="bold" size="18" color="black" inline="block">
                  {item.amount}
                </Text>
              </Column>
            </Row>
          </Spacing>
        </Column>
      </Row>
    </div>
  </Spacing>
);

export default CartItem;
