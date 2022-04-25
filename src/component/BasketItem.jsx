import { ListItem, ListItemText, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeGamesFromItems } from '../redux/actions/card';
function BasketItem({ nameOfTheGame, priceOfTheGame, countSameGames, id }) {
  const dispatch = useDispatch();
  const handleRemoveGamesFromItems = (id) => {
    dispatch(removeGamesFromItems(id));
  };
  return (
    <ListItem>
      <ListItemText
        primary={nameOfTheGame}
        secondary={
          <React.Fragment>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary">
              {priceOfTheGame}
            </Typography>
            {'₽ x'}
            {countSameGames}
          </React.Fragment>
        }
      />
      <IconButton onClick={() => handleRemoveGamesFromItems(id)}>
        <Close />
      </IconButton>
    </ListItem>
  );
}

export default BasketItem;
