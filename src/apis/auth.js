import API from './client';

// Logs a user in
export const login = async (credentials) => {
    try {
        const response = await API.post('auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

// Registers a new user
export const register = async (data) => {
    try {
        const response = await API.post('auth/register', data);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

