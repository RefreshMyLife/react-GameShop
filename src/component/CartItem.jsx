import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
  Divider,
} from '@mui/material';
function CartItem(props) {
  const { id, image, title, genres, description, price, onAddGameToBasket } = props;
  const onAddGame = () => {
    const obj = {
      price,
      title,
      id,
    };

    onAddGameToBasket(obj);
  };

  return (
    <Grid item md={6}>
      <CardMedia component="img" sx={{ height: 240 }} height="140" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {genres && genres.map((genreName, i) => <Chip key={i} sx={{ mr: 2 }} label={genreName} />)}

        <Typography variant="body2" color="text.secondary">
          {description.length > 100 ? description.substring(0, 150) + '...' : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Typography component="span" sx={{ flexGrow: 2 }} variant="h5" color="text.secondary">
          {price} ₽
        </Typography>
        <Button onClick={onAddGame} size="medium">
          Купить
        </Button>
      </CardActions>
      <Divider />
    </Grid>
  );
}

export default CartItem;
