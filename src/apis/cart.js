import API from './client';

// Fetch a users cart
export const getCart = async () => {
    try {
        const response = await API.get('carts/mine');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

// Add a product to a users cart
export const addProductToCart = async (productId, qty) => {
    try {
        const response = await API.post(`carts/mine/items`, { productId, qty});
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

// Remove a product from the users cart
export const removeProductFromCart = async (cartItemId) => {
    try {
        const response = await API.delete(`carts/mine/items/${cartItemId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

// Check out the cart
export const checkout = async (cartId, paymentInfo) => {
    try {
        const response = API.post(`carts/mine/checkout`, { cartId, paymentInfo });
        return (await response).data;
    } catch (error) {
        throw error.response.data;
    }
}