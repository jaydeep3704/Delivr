import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice(
    {
        name:'cart',
        initialState:{
            items:[],
            resId:1,
            totalPrice:0
        },
        reducers:{
            addItem:(state,action)=>{
                state.items.push(action.payload)
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
            }



        }
    }
)

export const {addItem,removeItem,clearCart,selectRestaurant,updateItem,updateTotal}=cartSlice.actions

export default cartSlice.reducer