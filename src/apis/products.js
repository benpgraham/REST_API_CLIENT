export const fetchProducts = async () => {
    try {
        const response = await fetch('/api/products');
        const json = await response.json();
        return json;
    } catch (error) {
        throw error.response
    }
};
