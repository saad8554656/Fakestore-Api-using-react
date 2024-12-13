import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:[]
}

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        addReacordInCartOnPageLoad:(state,action)=>{
            console.log(action.payload);
            state.value = action.payload
            
        },

        addRecordInCart:(state,action)=>{
            console.log(action.payload);
            state.value.push(action.payload)
            
        },
        deleteRecordFromCart: (state, action) => {
            const idToDelete = action.payload; 
            state.value = state.value.filter(item => item.id !== idToDelete)

            const updatedCart = state.value; 
            localStorage.setItem('cartItems', JSON.stringify(updatedCart));
            
        }
    }
        

})

export const { addReacordInCartOnPageLoad, addRecordInCart,deleteRecordFromCart  } = cartSlice.actions

export default cartSlice.reducer