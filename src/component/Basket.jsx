import React from 'react';
import { ShoppingBasket } from '@mui/icons-material';
import { Drawer } from '@mui/material';
import { List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from '@material-ui/core';
import { BasketItem } from '../component';
import { useSelector } from 'react-redux';

function Basket({ totalCount, ...props }) {
  const { totalPrice, items } = useSelector(({ card }) => card);
  const { cartOpen, onClickBasket = Function.prototype } = props;
  const addedGames = Object.keys(items).map((key) => items[key].item[0]);

  const arrayOfIdenticalGames = Object.keys(items).map((key) => items[key].item.length);
  return (
    <Drawer onClose={onClickBasket} anchor="right" open={cartOpen}>
      <List sx={{ width: '100%' }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="Корзина" />
        </ListItem>
        <Divider />

        {!addedGames.length ? (
          <ListItem>
            <ListItemText>Коризана пуста</ListItemText>
          </ListItem>
        ) : (
          addedGames.map((item, i) => (
            <BasketItem
              key={i}
              countSameGames={arrayOfIdenticalGames[i]}
              nameOfTheGame={item.title}
              priceOfTheGame={item.price}
              id={item.id}
            />
          ))
        )}
        <Divider />
        <ListItem>
          <Typography>Общая стоимость:{' ' + totalPrice} ₽</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
}

export default Basket;
