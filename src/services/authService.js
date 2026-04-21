import api from './api';

export const authService = {
  // Register new user
  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      console.log('📝 Registration successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Registration failed:', error.message);
      throw error;
    }
  },

  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials);
      console.log('🔑 Login successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Login failed:', error.message);
      throw error;
    }
  },

  // Get current user info
  getMe: async () => {
    try {
      const response = await api.get('/auth/me');
      console.log('👤 User info:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Get user info failed:', error.message);
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      const response = await api.post('/auth/logout');
      console.log('👋 Logout successful:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Logout failed:', error.message);
      throw error;
    }
  },

  // Check if user is authenticated
  isAuthenticated: async () => {
    try {
      await api.get('/auth/me');
      return true;
    } catch (error) {
      return false;
    }
  }
};
