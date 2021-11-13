import { createSlice } from '@reduxjs/toolkit';
import { getProducts, getProductById } from '../../apis/products';

const initialState = {
    isLoading: false,
    isError: false,
    products: []
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        startGetProducts(state) {
            state.isLoading = true;
            state.isError = false;
        },
        getProductsSucess(state, action) {
            state.isLoading = false;
            state.products = action.payload;
        },
        getProductsFailed(state) {
            state.isLoading = false;
            state.isError = true;
        }
    }
});

export const {
    startGetProducts,
    getProductsSucess,
    getProductsFailed
} = productSlice.actions;

export default productSlice.reducer;

// Thunks and stuff

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch(startGetProducts);
        const products = await getProducts();
        dispatch(getProductsSucess(products));
    } catch (error) {
        dispatch(getProductsFailed);
    }
}