import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: "users",
    initialState: {
        customers: [
        ],
        employees: [
            {
                "id": 2,
                "username": "tronghuong2002",
                "name": "Nguyễn Trọng Hướng",
                "email": "Tronghuong2002@gmail.com",
                "password": null,
                "address": "Quảng Bố Quảng Phú Lương Tài Bắc Ninh",
                "createDate": "2024-03-21",
                "modifiedDate": "2024-03-22",
                "roles": "ADMIN, EMPLOYEE"
            },
            {
                "id": 3,
                "username": "tronghuong1",
                "name": null,
                "email": "Tronghuong20022@gmail.com",
                "password": null,
                "address": "Quảng Bố Quảng Phú Lương Tài Bắc Ninh",
                "createDate": "2024-03-21",
                "modifiedDate": null,
                "roles": "ADMIN"
            }
        ],
    },
    reducers: {
        addUser: (state, action) => {
            state.customers.push(action.payload)
        },
        editUser: (state, action) => {
            const tmpUser = state.customers.map((user) => {
                if (user.id === action.payload.id) return action.payload
                return user
            })
            state.customers = tmpUser
        },
        deleteUser: (state, action) => {
            const deletedArray = state.customers.filter((user) => user.id !== action.payload)
            state.customers = deletedArray
        }
    },
    // extraReducers: builder =>{
    //     builder
    //         .addCase(fetchUser.fulfilled,(state,action)=>{
    //             state.employees = action.payload.filter((user)=> user.role.include("ADMIN") || user.role.include("EMPLOYEE") )
    //             state.customers = action.payload.filter((user)=> user.role.include("USER") )
    //         })
    // }
})

// export const fetchUser = createAsyncThunk("users/fetchUser", async ()=>{
//     const res = await fetch('/admin/api/users')
//     const data = await res.json()
//     return data

// })
export default userSlice