export const initialState = {
    basket: [],
    user: null
};

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount,item) => item.price + amount, 0);//reduce is gonna iterate through the basket and tally up the total

const reducer = (state, action) => {
    console.log(action);//dispatch the action
    switch (action.type) {
        case "ADD_TO_BASKET":
          return {
            ...state,
            basket: [...state.basket, action.item],//...state.basket=where the basket currently was,action.item=wherever we are actually adding
          };
        case "REMOVE_FROM_BASKET":  
          const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];//copy

          if(index >= 0) {
            newBasket.splice(index,1);//cutting by 1
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }

          return {
            ...state,
            basket: newBasket
          }
        case "SET_USER":
            return {
              ...state,
              user: action.user
            }

        default:
            return state;  
    }  
};

export default reducer;