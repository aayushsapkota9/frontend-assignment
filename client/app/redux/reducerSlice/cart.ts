import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export const initialState: { cartList: Card[] } = {
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
    quantity?:number,
  }
  interface Rating{
    rate:string,
    count:number
  }
  interface Cart{
    item:Card,
    quantity:number,
  }

const productsSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action:PayloadAction<Card>) {
      const newItem = action.payload;
      const existingItem:any = state.cartList.find((item) => item.id === newItem.id);

      if (existingItem){
        // If the item is already in the cart, increment its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the cart, add it with a quantity of 1
        state.cartList.push({ ...newItem, quantity: 1 });
      }
      // Explicit return statement with the updated state
      console.log(state)
      return state;
    },
    
    removeFromCart(state,actions){
      let initialCart=[...state.cartList];
      const deleteItem=actions.payload;
      initialCart=initialCart.filter((item)=>item.id!==deleteItem.id)
      return{
        ...state,
        cartList:initialCart
      }
    },
    subtractQuantity(state, action:PayloadAction<Card>) {
      const newItem = action.payload;
      const existingItem:any = state.cartList.find((item) => item.id === newItem.id);

      if (existingItem){
        // If the item is already in the cart, decrement its quantity
        existingItem.quantity -= 1;
      }
      return state;
    },

  },
}
)

export const { addToCart,removeFromCart,subtractQuantity} = productsSlice.actions;
export default productsSlice.reducer;