import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
function Header({ totalCountGames, onClickHeader }) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} variant="h4" component="span">
            GameShop
          </Typography>
          <IconButton onClick={onClickHeader} color="inherit">
            <Badge color="secondary" badgeContent={totalCountGames}>
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
