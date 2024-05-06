import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IP, token } from "../../config/const";
import { notify } from "../../components/Admin/notify";
const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    brand: [],
    currentSetProduct: {
      "id": null,
      "vendor": "",
      "name": "",
      "description": "",
      "cpu": "",
      "card": "",
      "frequencyScreen": "60 Hz",
      "os": "",
      "usbNumber": "",
      "typeDisk": "",
      "weight": "",
      "batteryCapacity": "",
      "frontCamera": "",
      "rearCamera": "",
      "simNumber": "",
      "connectType": "",
      "specialProperties": "",
      "images": [],
      "itemDetails": [],
      "categoryDto": {
        "id": null,
        "name": "",
        "description": "",
        "code": "lap-top",
        "items": []
      }
    },
    currentSetProductDetails: {
      "id": null,
      "color": "",
      "isAvailable": "",
      "soldNumber": "",
      "price": "",
      "quantity": "",
      "screenSize": "",
      "diskSize": "",
      "ram": ""
    }
  },
  reducers: {
    resetAlert: (state, action) => {
      state.alert = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrand.fulfilled, (state, action) => {
        state.brand = action.payload
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.currentSetProduct = action.payload;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.alert = {
          "code": action.payload.code,
          "message": action.payload.message
        };
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.alert = action.payload.alert;
        state.products = state.products.map((product) => {
          if (product.id === action.payload.newProduct.id) {
            return action.payload.newProduct;
          }
          return product;
        });
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.alert = action.payload.data;
        state.products = state.products.filter(
          (product) => product.id !== action.payload.id
        );
      })
      .addCase(getProductDetailsById.fulfilled, (state, action) => {
        state.currentSetProductDetails = action.payload
      })
      .addCase(addProductDetails.fulfilled, (state, action) => {
        state.alert = {
          code: action.payload.data.code,
          message: action.payload.data.message
        }
        const id = action.payload.id
        state.products.map((product)=>{
          if(product.id === id){
            product.itemDetails.push(action.payload.data.array[0])
          }
        })
      })
      .addCase(editProductDetails.fulfilled, (state, action) => {
        state.alert = {
          code: action.payload.data.code,
          message: "Edit product details successfully"
        }
        const id = action.payload.id
        state.products = state.products.map((product) => {
          if (product.id === id) {
            product.itemDetails = product.itemDetails.map((item) => {
              if (item.id == action.payload.data.itemDetail.id) {
                return action.payload.data.itemDetail;
              }
              return item;
            });
          }
          return product;
        });        
      })
      .addCase(deleteProductDetails.fulfilled, (state, action) => {
        state.alert = action.payload.data
        // notify(action.payload.data)
        const productId = action.payload.productId
        const id = action.payload.id
        state.products = state.products.map((product) => {
          if (product.id === productId) {
            product.itemDetails = product.itemDetails.filter((item) => item.id!==id);
          }
          return product;
        });        
      });
  },
});

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await fetch(IP + "/customer/api/items?brandId=&categoryId=&key=", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  }
);
export const getProductById = createAsyncThunk(
  "product/getProdcutById",
  async (id) => {
    if (id === -1)
      return {
        "id": null,
        "vendor": "",
        "name": "",
        "description": "",
        "cpu": "",
        "card": "",
        "frequencyScreen": "60 Hz",
        "os": "",
        "usbNumber": "",
        "typeDisk": "",
        "weight": "",
        "batteryCapacity": "",
        "frontCamera": "",
        "rearCamera": "",
        "simNumber": "",
        "connectType": "",
        "specialProperties": "",
        "images": [],
        "itemDetails": [],
        "categoryDto": {
          "id": null,
          "name": "",
          "description": "",
          "code": "lap-top",
          "items": []
        }
      };
    const res = await fetch(IP + `/customer/api/item?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  }
);
export const addProduct = createAsyncThunk(
  "product/addProduct",
  async ({ newProduct, category, brand }) => {
    console.log(category, brand)
    console.log(newProduct)
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    };
    const res = await fetch(IP + `/admin/api/item?categoryId=${category}&brandId=${brand}`, options);
    const data = await res.json();
    console.log(data)
    return data;
  }
);
export const editProduct = createAsyncThunk(
  "product/editProduct",
  async ({ newProduct, category, brand }) => {
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    };
    const res = await fetch(IP + `/admin/api/item?categoryId=${category}&brandId=${brand}`, options);
    const data = await res.json();
    return {
      newProduct: newProduct,
      alert: data
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id) => {
    console.log(id);
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(IP + `/admin/api/item?id=` + id, options);
    const data = await res.json();
    return {
      id: id,
      data: data,
    };
  }
);
export const getProductDetailsById = createAsyncThunk(
  "product/getProductDetailsById",
  async (id) => {
    if (id === -1)
      return {
        "id": null,
        "color": "",
        "isAvailable": "",
        "soldNumber": "",
        "price": "",
        "quantity": "",
        "screenSize": "",
        "diskSize": "",
        "ram": ""
      };
    const res = await fetch(IP + `/admin/api/item/detail?id=` + id, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  }
);
export const addProductDetails = createAsyncThunk(
  "product/addProductDetails",
  async (newProductDetails) => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductDetails),
    };
    const res = await fetch(IP + `/admin/api/item/detail`, options);
    const data = await res.json();
    console.log(data)
    return {
      id: newProductDetails.id,
      data: data
    };
  }
);
export const editProductDetails = createAsyncThunk(
  "product/editProductDetails",
  async (newProductDetails) => {
    const options = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProductDetails.itemDetails[0]),
    };
    const res = await fetch(IP + `/admin/api/item/detail`, options);
    const data = await res.json();
    return {
      id: newProductDetails.id ,
      data: data
    }
  }
);
export const deleteProductDetails = createAsyncThunk(
  "product/deleteProductDetails",
  async ({productId,id}) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(IP + `/admin/api/item/detail?id=` + id, options);
    const data = await res.json();
    return {
      productId: productId,
      id: id,
      data: data,
    };
  }
);
export const fetchBrand = createAsyncThunk("/product/fetchBrand", async () => {
  const res = await fetch(IP + "/api/brands", {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  const data = await res.json()
  return data
})
export default productSlice;
