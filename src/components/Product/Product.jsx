import React from 'react';
import Button from "../Button/Button";

// Styles
import './product.scss';
import Spacing from "../Spacing/Spacing";
import Text from "../Text/Text";


const Product = ({item, handleAddToCart}) => {
  return (
    <Spacing size="2" direction="horizontal" propertyName="margin">
      <div className="c-product__item">
        <div className="c-product__image">
          <img src={item.image} alt={item.title}/>
        </div>
        <div className="c-product__heading">
          <Spacing size="6" direction="bottom" propertyName="margin">
            <Text block tag="h3" weight="bold" size="18" color="black" inline="block">
              {item.title} - {item.sku}
            </Text>
          </Spacing>
        </div>
        <div className="c-product__price">
          <Button full size="medium" variant="primary" onClick={() => handleAddToCart(item)}>
            <Text block tag="span" display="inline" weight="bold" size="18" color="white">
            Add to cart
            <Spacing tag="span" display="inline" size="2" direction="horizontal" propertyName="padding">
              £{item.price}
            </Spacing>
            </Text>

          </Button>
        </div>
      </div>
    </Spacing>
  );

};

export default Product;
