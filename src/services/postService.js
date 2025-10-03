import axiosInstance from './axios';
import { 
  getAllStaticPosts, 
  getStaticPostById, 
  getStaticPostsByCategory,
  searchStaticPosts 
} from '../data/staticPosts';


const USE_STATIC_POSTS = true;

export const postService = {
  getAllPosts: async () => {
    if (USE_STATIC_POSTS) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(getAllStaticPosts()), 300);
      });
    }
    
    
    try {
      const response = await axiosInstance.get('/posts');
      return response.data;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw error;
    }
  },

  getPostById: async (id) => {
    if (USE_STATIC_POSTS) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const result = getStaticPostById(id);
          if (result.success) {
            resolve(result);
          } else {
            reject(new Error(result.error));
          }
        }, 300); 
      });
    }
    

    try {
      const response = await axiosInstance.get(`/posts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching post ${id}:`, error);
      throw error;
    }
  },

  getPostsByCategory: async (category) => {
    if (USE_STATIC_POSTS) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(getStaticPostsByCategory(category)), 300);
      });
    }
    
    try {
      const response = await axiosInstance.get(`/posts?category=${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching posts by category:', error);
      throw error;
    }
  },

  searchPosts: async (query) => {
    if (USE_STATIC_POSTS) {
      return new Promise((resolve) => {
        setTimeout(() => resolve(searchStaticPosts(query)), 300);
      });
    }
    
    try {
      const response = await axiosInstance.get(`/posts/search?q=${query}`);
      return response.data;
    } catch (error) {
      console.error('Error searching posts:', error);
      throw error;
    }
  }
};
