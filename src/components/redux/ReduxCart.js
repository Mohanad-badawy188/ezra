import { createSlice, configureStore } from '@reduxjs/toolkit';


const cartSlice = createSlice({
    name: 'CART',
    initialState: {
     products :[],
     quantity : 0,
     totalPrice : 0,
     planterImg : ""
    },  reducers: {
        addProduct: (state,action) => {
       
          state.products.push(action.payload),
          state.totalPrice += action.payload.price*action.payload.amount ,
          state.quantity +=1 ,
          state.planterImg =action.payload.planterImg

        }
      }
    })
    
    
    export const { addProduct } = cartSlice.actions;
    export default cartSlice.reducer;
    