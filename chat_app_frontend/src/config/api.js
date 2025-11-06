// API configuration
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const getApiUrl = () => {
  // In production, use the environment variable
  // In development, use relative URLs (proxy will handle it)
  if (import.meta.env.PROD && import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  // In development, return empty string to use relative URLs
  return '';
};

export default {
  apiUrl: getApiUrl(),
};
