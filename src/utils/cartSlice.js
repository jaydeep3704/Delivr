import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice(
    {
        name:'cart',
        initialState:{
            items:[],
            resId:1,
            totalPrice:0,
            alert:false
        },
        reducers:{
            addItem:(state,action)=>{
                const cartItem=action.payload
                const existingItem=state.items.find((item)=>item.id===cartItem.id)
                if (existingItem) {
                    existingItem.itemCount += 1;
                  } 
                  else {
                    state.items.push(action.payload );
                  }
            },

            removeItem: (state, action) => {
                state.items = state.items.filter((item) => item.id !== action.payload);
            },

            updateItem:(state,action)=>{
                const { id, quantity } = action.payload;
                const item = state.items.find(item => item.id === id);
                if (item) {
                    item.itemCount = quantity;
                }
            },

            clearCart:(state)=>{
                state.items.length=0
            },

            selectRestaurant:(state,action)=>{
                state.resId=action.payload
            },

            updateTotal:(state)=>{
                let totalPrice=0;
                state.items.forEach(item=>totalPrice+=item.price * item.itemCount)
                state.totalPrice=totalPrice
            },

            showAlert:(state,action)=>{
                state.alert=action.payload
            }


        }
    }
)

export const {addItem,removeItem,clearCart,selectRestaurant,updateItem,updateTotal,showAlert}=cartSlice.actions

export default cartSlice.reducer