import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

  wishList: [],
  cartList: [],

};
interface Card{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:Rating,
  }
  interface Rating{
    rate:string,
    count:number
  }
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartList.find((item:Card) => item.id === newItem.id);

      if (existingItem) {
        // If the item is already in the cart, increment its quantity
        // existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        // state.cartList.push({ ...newItem, quantity: 1 });
      }

      // Explicit return statement with the updated state
      return state;
    },
    
    // removeFromCart(state,actions){
    //   let initialCart=[...state.cartList];

    //   const deleteItem=actions.payload;
    //   initialCart=initialCart.filter((item)=>item._id!==deleteItem._id)
    //   return{
    //     ...state,
    //     cartList:initialCart
    //   }
    // }

  },
}
)

export const { addToCart} = productsSlice.actions;
export default productsSlice.reducer;