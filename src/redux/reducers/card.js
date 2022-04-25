const initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, current) => sum + current.price, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GAMES_TO_BASKET':
      const currentGamesItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].item, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          item: currentGamesItem,
          price: getTotalPrice(currentGamesItem),
        },
      };
      const totalCount = getTotalSum(newItems, 'item.length');
      const totalPrice = getTotalSum(newItems, 'price');
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
    case 'REMOVE_GAMES_FROM_BASKET': {
      //action.payloud
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].price;
      const currentTotalCount = newItems[action.payload].item.length;
      delete newItems[action.payload];

      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }

    default:
      return state;
  }
};

export default card;
