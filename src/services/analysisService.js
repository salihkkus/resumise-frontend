import api from './api';

export const analysisService = {
  // Create new analysis
  createAnalysis: async (analysisData) => {
    try {
      const response = await api.post('/api/v1/analyses', analysisData);
      console.log('🔍 Analysis created:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Analysis creation failed:', error.message);
      throw error;
    }
  },

  // Get all analyses
  getAnalyses: async () => {
    try {
      const response = await api.get('/api/v1/analyses');
      console.log('📊 Analyses list:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Get analyses failed:', error.message);
      throw error;
    }
  },

  // Get analysis by ID
  getAnalysisById: async (analysisId) => {
    try {
      const response = await api.get(`/api/v1/analyses/${analysisId}`);
      console.log('📈 Analysis details:', response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Get analysis failed:', error.message);
      throw error;
    }
  }
};
