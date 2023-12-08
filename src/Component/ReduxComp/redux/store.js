import { configureStore } from "@reduxjs/toolkit"
import Counterreducer from "./slice/Counterslice"


export const store =configureStore({
    reducer:{
        counter:Counterreducer
    }
})

