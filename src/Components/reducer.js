export const initialState = {
    basket: [], 
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch(action.type){
        case "ADD_TO_BASKET":
            return { 
                ...state,
                basket: [...state.basket, action.item],
            };
           
        case "REMOVE_FORM_BASKET":
            //copy the current basket
            let newCart = [...state.basket];

            //find the index from basket based on selected id
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id 
            );

            if(index >= 0){
                //splice the index from basket (delete)
                newCart.splice(index, 1);
            }
            return { 
                //return new cart 
                //change old to new cart
                ...state, 
                basket: newCart 
            };
           
        default:
            return state;
    }
}

export default reducer;