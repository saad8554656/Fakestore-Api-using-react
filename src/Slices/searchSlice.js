import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value:''
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        searchCategoryName: (state,action)=>{
           state.value = action.payload
        }
    }

})

export const { searchCategoryName } = searchSlice.actions

export default searchSlice.reducer