import API from './client';

// Fetch user based on ID
export const getUser = async (userId) => {
    try {
        const response = await API.post(`users/${userId}`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

// Update user based on ID
export const updateUser = async () => {
    try {
         const response = await API.post('users', data);
         return response.data;
    } catch (error) {
        throw error.response.data;
    }
}