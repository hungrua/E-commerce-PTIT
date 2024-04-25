import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IP, token } from "../../config/const";
const productSlice = createSlice({
  name: "product",
  initialState: {
    brand: [],
    currentSetProducr:{
      
    }
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrand.fulfilled,(state,action)=>{
        state.brand = action.payload
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.currentSetCategory = action.payload;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.alert = action.payload;
      })
      .addCase(editCategory.fulfilled, (state, action) => {
        state.alert = action.payload.data;
        state.categories = state.categories.map((category) => {
          if (category.id === action.payload.newCategory.id) {
            return action.payload.newCategory;
          }
          return category;
        });
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.alert = action.payload.data;
        state.categories = state.categories.filter(
          (category) => category.id !== action.payload.id
        );
      });
  },
});

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const res = await fetch(IP + "/api/categories", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  }
);
export const getCategoryById = createAsyncThunk(
  "users/getCategoryById",
  async (id) => {
    if (id === -1)
      return {
        id: "",
        name: "",
        description: ""
      };
    const res = await fetch(IP + `/admin/api/category?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data.message;
  }
);
export const addCategory = createAsyncThunk(
  "user/addCategory",
  async (newCategory) => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCategory),
    };
    const res = await fetch(IP + `/admin/api/category`, options);
    const data = await res.json();
    return data;
  }
);
export const editCategory = createAsyncThunk(
  "user/editCategory",
  async (newCategory) => {
    const options = {
      method: "PUT",
      body: JSON.stringify(newCategory),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };
    const res = await fetch(IP + `/admin/api/category`, options);
    const data = await res.json();
    return {
      newCategory: newCategory,
      data: data,
    };
  }
);
export const deleteCategory = createAsyncThunk(
  "user/deleteCategory",
  async (id) => {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(IP + `/admin/api/category?id=` + id, options);
    const data = await res.json();
    return {
      id: id,
      data: data,
    };
  }
);
export const fetchBrand = createAsyncThunk("/product/fetchBrand", async () => {
  console.log("brand")
  const res = await fetch(IP + "/api/brands", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  const data = await res.json()
  return data
})
export default productSlice;
