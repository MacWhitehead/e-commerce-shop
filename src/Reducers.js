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
          if(i.title === action.payload.title) {
              i.quantity++
             return i;
          } else {
            return i;
          }
        });
      } else {
        return [...state, action.payload];
      }
    case "REMOVE_ITEM":
      return state.filter((item) => item !== state[action.payload.index]);
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
