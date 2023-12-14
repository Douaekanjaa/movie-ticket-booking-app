// reducer.js

const initialState = {
  purchaseHistory: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_PURCHASE_HISTORY':
      return {
        ...state,
        purchaseHistory: [...state.purchaseHistory, action.payload],
      };
    // Add other cases if needed

    default:
      return state;
  }
};

export default rootReducer;
