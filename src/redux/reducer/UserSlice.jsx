import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IP, token } from "../../config/const";
const userSlice = createSlice({
  name: "users",
  initialState: {
    users:[],
    currentSetUser: {
      id: "",
      username: "",
      name: "",
      email: "",
      password: "",
      address: "",
      createDate: "",
      modifiedDate: "",
      roles: "",
      phoneNumber: "",
      dob: "",
    },
  },
  reducers: {
    addUser: (state, action) => {
      state.customers.push(action.payload);
    },
    editUser: (state, action) => {
      const tmpUser = state.customers.map((user) => {
        if (user.id === action.payload.id) return action.payload;
        return user;
      });
      state.customers = tmpUser;
    },
    deleteUser: (state, action) => {
      const deletedArray = state.customers.filter(
        (user) => user.id !== action.payload
      );
      state.customers = deletedArray;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.users = action.payload
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        console.log(action.payload)
        state.currentSetUser = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.alert = action.payload
        
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.alert = action.payload.data
        state.users = state.users.map((user)=>{
          if(user.id===action.payload.newUser.id){
            return action.payload.newUser
          }
          return user
        })
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.alert = action.payload.data
        state.users = state.users.filter((user)=> user.id!==action.payload.id) 
      })
  },
});

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  const res = await fetch(IP + "/admin/api/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
});
export const getUserById = createAsyncThunk("users/getUserById", async (id) => {
  if (id === -1)
    return {
      id: null,
      username: "",
      name: "",
      email: "",
      password: "",
      address: "",
      createDate: "",
      modifiedDate: "",
      roles: "",
      phoneNumber: "",
      dob: "",
    };
  const res = await fetch(IP + `/admin/api/user/` + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data.message;
});
export const addUser = createAsyncThunk("user/addUser", async (newUser) => {
  // console.log(newUser)
  newUser ={
    ...newUser,
    password: "Matkhaumacdinh1@",
    roles: newUser.roles==="USER"?"USER":newUser.roles
  }
  const options = {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newUser),
  };
  let tmpRole = newUser.roles==='ADMIN'?1:newUser.roles==="EMPLOYEE"?0:3
  const res = await fetch(IP+`/api/v1/signup?role=`+tmpRole, options);
  const data = await res.json();
  console.log(data)
  return data;
});
export const editUser = createAsyncThunk("user/editUser", async (newUser) => {
  newUser.password = null
  const options = {
    method: "PUT",
    body: JSON.stringify(newUser),
    headers: {
      "Content-Type":"application/json",
      Authorization: `Bearer ${token}`
    },
  };
  const res = await fetch(IP+`/api/user`, options);
  const data = await res.json();
  return {
    newUser: newUser,
    data:data
  };
});
export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  console.log(id)
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const res = await fetch(IP+`/admin/api/user?id=`+id, options);
  const data = await res.json();
  return {
    id:id,
    data:data
  };
});
export default userSlice;
