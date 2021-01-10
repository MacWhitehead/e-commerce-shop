import { combineReducers } from "redux";
const numberOfItems = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state + 1;
    case "REMOVE_ITEM":
      return state - 1;
    default:
      return state;
  }
};
const itemsTotalPrice = (state = 0, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return state + action.payload.price;
    case "REMOVE_ITEM":
      return state - action.payload.price;
    default:
      return state;
  }
};

const itemsList = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const itemInCart = state.find((i) => i.title === action.payload.title);
      if (itemInCart) {
        return state.map((i) => {
          if (i.title === action.payload.title) {
            i.quantity++;
            return i;
          } else {
            return i;
          }
        });
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_ITEM":
      if (state.length > 1) {
        if (state[action.payload.index].quantity > 1) {
          const newState = state;
          newState[action.payload.index].quantity--;
          return newState;
        } else {
          return state.filter(
            (product) => product.title !== state[action.payload.index].title
          );
        }
      } else if (state.length <= 1) {
        if (state[0].quantity === 1) {
          return [];
        } else {
          const newState = state;
          newState[0].quantity--;
          return newState;
        }
      }
    default:
      return state;
  }
};

const reducers = combineReducers({
  numberOfItems,
  itemsTotalPrice,
  itemsList,
});
export default reducers;
