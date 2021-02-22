import React, {useState} from 'react';
import {useQuery} from 'react-query';

// Components
import Product from './components/Product/Product';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import {StyledButton} from './App.styles';
import Logo from './components/Logo/Logo';
import Row from "./components/Grid/Row";
import Column from "./components/Grid/Column";
import Title from "./components/Title/Title";

// fetched data from remote uri
import fetchProducts from './data';

const App = () => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const {data, isLoading, error} = useQuery(
        'products',
        fetchProducts
    );


    const getTotalItems = (items) =>
        items.reduce((ack, item) => ack + item.amount, 0);

    const handleAddToCart = (clickedItem) => {
        setCartItems(prev => {
            // 1. Is the item already added in the cart?
            const isItemInCart = prev.find(item => item.productId === clickedItem.productId);

            if (isItemInCart) {
                return prev.map(item =>
                    item.productId === clickedItem.productId
                        ? {...item, amount: item.amount + 1}
                        : item
                );
            }
            // First time the item is added
            return [...prev, {...clickedItem, amount: 1}];
        });
    };

    const handleRemoveFromCart = (productId) => {
        setCartItems(prev =>
            prev.reduce((ack, item) => {
                if (item.productId === productId) {
                    if (item.amount === 1) return ack;
                    return [...ack, {...item, amount: item.amount - 1}];
                } else {
                    return [...ack, item];
                }
            }, [])
        );
    };

    if (isLoading) return <LinearProgress/>;
    if (error) return <div>Something went wrong ...</div>;

    return (
        <>
            <Header>
                <Logo/>
            </Header>
            <Drawer
                anchor='right'
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            >
                <Cart
                    cartItems={cartItems}
                    addToCart={handleAddToCart}
                    removeFromCart={handleRemoveFromCart}
                />
            </Drawer>
            <StyledButton onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalItems(cartItems)} color='error'>
                    <AddShoppingCartIcon/>
                </Badge>
            </StyledButton>
            <main>
                <Title data={data}>Products available</Title>
                <Row>
                    {data?.map(item => (
                        <Column grow key={item.productId} p="1" t="2" d="4">
                            <Product item={item} handleAddToCart={handleAddToCart}/>
                        </Column>
                    ))}
                </Row>
            </main>
        </>
    );
};

export default App;
