import API from './client';

export const getProducts = async () => {
    try {
        const response = await API.get('products');
        console.log(response);
        return response.data
    } catch (error) {
        throw error.response;
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await API.get(`products/${productId}`);
        return response.data;
    } catch (error) {
        throw error.response;
    }
};
