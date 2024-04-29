import axios from 'axios';

const BASE_URL = 'http://localhost:3001/category';

export interface Category {
  id: number;
  name: string;
  image_link: string
}

const CategoryService = {
  async getCategories(): Promise<Category[]> {
    try {
      const category = await axios.get<Category[]>(`${BASE_URL}/all`);
      return category.data;
    } catch (error) {
      console.log('Erro ao obter produtos:', error);
      return [];
    }
  },

  async getCategory(id: number): Promise<Category | null> {
    try {
      const category = await axios.get<Category>(`${BASE_URL}/categories/${id}`);
      return category.data;
    } catch (error) {
      console.log(`Erro ao obter categoria com ID ${id}:`, error);
      return null;
    }
  },
}

export default CategoryService;