// Base API configuration
const API_BASE_URL = 'http://localhost:8080';

// Helper function for API requests with credentials
const apiRequest = async (url, options = {}) => {
  const config = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    credentials: 'include', // Important for session cookies
    ...options
  };

  console.log('🚀 API Request:', {
    method: config.method?.toUpperCase(),
    url: `${API_BASE_URL}${url}`,
    data: config.data,
  });

  try {
    const response = await fetch(`${API_BASE_URL}${url}`, config);
    
    // Handle 502 AI API failure
    if (response.status === 502) {
      console.error('🤖 AI API is not responding');
    }

    if (!response.ok) {
      const errorData = await response.text();
      console.error('❌ Response Error:', {
        status: response.status,
        url: `${API_BASE_URL}${url}`,
        message: errorData,
      });
      throw new Error(errorData || `HTTP ${response.status}`);
    }

    const data = await response.json();
    console.log('✅ API Response:', {
      status: response.status,
      url: `${API_BASE_URL}${url}`,
      data: data,
    });
    
    return { data, status: response.status };
  } catch (error) {
    console.error('❌ Request Error:', error);
    throw error;
  }
};

// Export API methods
export const api = {
  get: (url, options) => apiRequest(url, { ...options, method: 'GET' }),
  post: (url, data, options) => apiRequest(url, { ...options, method: 'POST', data }),
  patch: (url, data, options) => apiRequest(url, { ...options, method: 'PATCH', data }),
  delete: (url, options) => apiRequest(url, { ...options, method: 'DELETE' }),
  put: (url, data, options) => apiRequest(url, { ...options, method: 'PUT', data })
};

export default api;
