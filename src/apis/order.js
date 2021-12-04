import API from './client';

// Get users orders
export const getOrders = async () => {
    try {
        const response = API.get('orders');
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

// Load order by ID
export const getOrderById = async (orderId) => {
    try {
        const response = await API.get(`order/${orderId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}