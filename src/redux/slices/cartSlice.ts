import { createSlice } from "@reduxjs/toolkit";

interface ProductsProps {
  id: number;
  description: string;
  image: string;
  price: string;
  title: string;
  quantity: number;
}

interface InitialStateTypes {
  products: ProductsProps[];
  total: number;
  quantity: number;
  totalQuantity: number;
  totalPrice: number;
}

const initialState: InitialStateTypes = {
  products: [],
  total: 0,
  quantity: 0,
  totalQuantity: 0,
  totalPrice: 0,
};

const CartDetailsSlice = createSlice({
  name: "CartDetails",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload;
      const existingItems = state.products.find(
        (item) => item.id === newProduct.id
      );
      state.totalQuantity++;
      state.quantity++;
      state.totalPrice += newProduct.price;
      if (existingItems) {
        existingItems.quantity += 1;
      } else {
        state.products.push({ ...newProduct, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const id = action.payload;
      const existProducts = state.products.find((i) => i.id == id);
      if (existProducts) {
        existProducts.quantity += 1;
        state.quantity += 1;
        state.totalQuantity += 1;
        state.totalPrice += Number(existProducts.price);
      }
    },
    decreaseQuantity: (state, action) => {
      const id = action.payload;
      const existProducts = state.products.find((i) => i.id == id);
      if (existProducts && existProducts.quantity > 0) {
        existProducts.quantity -= 1;
        state.quantity -= 1;
        state.totalQuantity -= 1;
        state.totalPrice -= Number(existProducts.price);
      }
    },
    removeProduct : (state , action)=>{
      const id = action.payload
      const existProduct = state.products.find(i=>i.id == id)
      if(!existProduct){
        return
      }else{
        state.totalQuantity -= 1
        state.totalPrice -= Number(existProduct.price)
        state.products = state.products.filter(i => i.id !== id)
      }
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity , removeProduct } =
  CartDetailsSlice.actions;
export default CartDetailsSlice.reducer;
