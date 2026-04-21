import api from './api';

export const profileService = {
  // Get current user profile
  getProfile: async () => {
    try {
      const response = await api.get('/api/v1/profile/me');
      console.log('👤 Profile data loaded:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to load profile:', error.message);
      throw error;
    }
  },

  // Update profile
  updateProfile: async (profileData) => {
    try {
      // Convert targetRoles string to array if needed
      const updateData = {
        ...profileData,
        targetRoles: profileData.targetRoles 
          ? profileData.targetRoles.split(',').map(role => role.trim()).filter(role => role.length > 0)
          : []
      };

      console.log('🔄 Sending profile update data:', updateData);
      
      const response = await api.patch('/api/v1/profile/me', updateData);
      console.log('✅ Profile updated:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Failed to update profile:', error.message);
      throw error;
    }
  }
};
