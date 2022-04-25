import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Container } from '@mui/material';
import { CartItem, Header, Basket } from '../component';
import { setGamesToBasket } from '../redux/actions/card';
import GAMES from './../data/games';

function HomePage() {
  const dispatch = useDispatch();
  const totalCount = useSelector(({ card }) => card.totalCount);
  const [isCartOpen, setCartOpen] = useState(false);
  const handleCartOpen = (isOpen) => {
    setCartOpen(isOpen);
  };
  const handleAddGameToBasket = (obj) => {
    dispatch(setGamesToBasket(obj));
  };
  return (
    <>
      <Header totalCountGames={totalCount} onClickHeader={() => handleCartOpen(true)} />
      <Container>
        <Grid container spacing={2}>
          {GAMES &&
            GAMES.map((item) => (
              <CartItem onAddGameToBasket={handleAddGameToBasket} key={item.id} {...item} />
            ))}
        </Grid>
      </Container>
      <Basket cartOpen={isCartOpen} onClickBasket={() => handleCartOpen(false)} />
    </>
  );
}

export default HomePage;
