import {createSlice} from "@reduxjs/toolkit" 

 const counterSlice = createSlice({
    name: "counter",
    initialState:{
        count : 0,
        studentData : {}
    },
     reducers :{
        increWtParams : (state,action)=>{
            state.count  = action.payload
        },
        studentInfo : (state, action)=>{
            state.studentData = action.payload
        }

     }
})



export const {increment, increWtParams,studentInfo} = counterSlice.actions

export default counterSlice.reducer