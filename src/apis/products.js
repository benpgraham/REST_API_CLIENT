export const getProducts = async () => {
    try {
        const response = await fetch('/api/products');
        const json = await response.json();
        return json;
    } catch (error) {
        throw error.response;
    }
};

export const getProductById = async (productId) => {
    try {
        const response = await fetch(`/api/products/${productId}`);
        const json = response.json();
        return json;
    } catch (error) {
        throw error.response;
    }
};
