import api from './api';

export const cvService = {
  // Upload CV
  uploadCV: async (file, title = null) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
      if (title) {
        formData.append('title', title);
      }

      // Use fetch directly for multipart/form-data to avoid automatic JSON serialization
      const API_BASE_URL = 'http://localhost:8080';
      
      const response = await fetch(`${API_BASE_URL}/api/v1/cvs/upload${title ? `?title=${encodeURIComponent(title)}` : ''}`, {
        method: 'POST',
        body: formData,
        credentials: 'include', // Important for session cookies
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Response Error:', {
          status: response.status,
          url: `${API_BASE_URL}/api/v1/cvs/upload`,
          message: errorData,
        });
        throw new Error(errorData || `HTTP ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ CV uploaded successfully:', data);
      return data;
    } catch (error) {
      console.error('❌ Failed to upload CV:', error.message);
      throw error;
    }
  },

  // Get all CVs
  getCVs: async () => {
    try {
      const response = await api.get('/api/v1/cvs/list');
      console.log('📋 CVs list:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get CVs:', error.message);
      throw error;
    }
  },

  // Get default CV
  getDefaultCV: async () => {
    try {
      const response = await api.get('/api/v1/cvs/default');
      console.log('🎯 Default CV:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to get default CV:', error.message);
      throw error;
    }
  },

  // Get CV content for preview
  getCVContentForPreview: async (cvId) => {
    try {
      // Use fetch directly to get file content as blob
      const API_BASE_URL = 'http://localhost:8080';
      
      const response = await fetch(`${API_BASE_URL}/api/v1/cvs/${cvId}/content`, {
        method: 'GET',
        credentials: 'include', // Important for session cookies
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('❌ Response Error:', {
          status: response.status,
          url: `${API_BASE_URL}/api/v1/cvs/${cvId}/content`,
          message: errorData,
        });
        throw new Error(errorData || `HTTP ${response.status}`);
      }

      const blob = await response.blob();
      console.log('📄 CV content loaded:', blob.size, 'bytes');
      
      // Create object URL for preview
      const objectUrl = URL.createObjectURL(blob);
      return objectUrl;
    } catch (error) {
      console.error('❌ Failed to get CV content:', error.message);
      throw error;
    }
  },

  // Get CV content
  getCVContent: async (cvId) => {
    try {
      const response = await api.get(`/api/v1/cvs/${cvId}/content`);
      console.log('📝 CV content:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Get CV content failed:', error.message);
      throw error;
    }
  },

  // Get CV by ID
  getCVById: async (cvId) => {
    try {
      const response = await api.get(`/api/v1/cvs/${cvId}`);
      console.log('📄 CV details:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Get CV failed:', error.message);
      throw error;
    }
  },

  // Update CV
  updateCV: async (cvId, updateData) => {
    try {
      const response = await api.patch(`/api/v1/cvs/${cvId}`, updateData);
      console.log('✏️ CV updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ CV update failed:', error.message);
      throw error;
    }
  },

  // Set CV as default
  setDefaultCV: async (cvId) => {
    try {
      const response = await api.post(`/api/v1/cvs/${cvId}/default`);
      console.log('⭐ CV set as default:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Set default CV failed:', error.message);
      throw error;
    }
  },

  // Delete CV
  deleteCV: async (cvId) => {
    try {
      const response = await api.delete(`/api/v1/cvs/${cvId}`);
      console.log('🗑️ CV deleted:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ CV deletion failed:', error.message);
      throw error;
    }
  }
};
