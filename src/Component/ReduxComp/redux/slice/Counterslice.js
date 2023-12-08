import { createSlice } from "@reduxjs/toolkit";

const Counterslice = createSlice({
    name:"countercomp",

    initialState:{
        count:10,
        name:"ARUN"


    },
    reducers:{
        incrememt:(state)=>{
            state.count +=1
        },
        decrement:(state)=>{
            state.count -=1
        }

    }
})

export default Counterslice.reducer;


export const counterAction =  Counterslice.actions