export const initialState = {
  basket: [],
  userPin: 1000,
  userDocId: "doc ID",
};

export const getBasketTotal = (basket) =>
  basket.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "ADD_USER_PIN":
      return {
        ...state,
        userPin: [action.item.Pin],
      };

    case "DOC_ID":
      return {
        ...state,
        userDocId: [action.item.doc_id],
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };

    // const index = state.basket.map(
    //   (basketItem) => basketItem.id === action.id
    // );
    // console.log(index);
    // let newBasket = [...state.basket];
    // // console.log(newBasket);
    // // console.log(action.id);

    // if (index >= 0) {
    //   newBasket.splice(index, 1);
    // } else {
    //   console.warn(`
    //     Can't remove product (id: ${action.id} as its not in the basket)
    //     `);
    // }

    default:
      return state;
  }
};

export default reducer;
