export const setGamesToBasket = (gameObject) => ({
  type: 'ADD_GAMES_TO_BASKET',
  payload: gameObject,
});

export const removeGamesFromItems = (id) => ({
  type: 'REMOVE_GAMES_FROM_BASKET',
  payload: id,
}); 
