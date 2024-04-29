import axios from 'axios';
import { Category } from './category.service';

const BASE_URL = 'http://localhost:3001/product';

export interface Product {
  id: number;
  name: string;
  sku: string
  category: Category;
  category_id: number;
  description: string;
  large_description: string;
  price: number;
  discount_price: number;
  discount_percent: number;
  is_new: boolean;
  image_link: string;
  other_image_link: string;
}

const ProductService = {
  async getProducts(
    page: number = 1,
    pageSize = 10,
    order = 'ASC',
    categoryId?: string
  ): Promise<Product[]> {
    try {
      let url: string;
      if (categoryId && categoryId !== '')
        url =`${BASE_URL}/category/${categoryId}`;
      else
        url =`${BASE_URL}/all?page=${page}&pageSize=${pageSize}&order=${order}`;

      const products = 
        await axios.get<Product[]>(url);
      return products.data;
    } catch (error) {
      console.log('Erro ao obter produtos:', error);
      return [];
    }
  },

  async getProduct(id: string): Promise<Product | null> {
    try {
      const product = await axios.get<Product>(`${BASE_URL}/${id}`);
      return product.data;
    } catch (error) {
      console.log(`Erro ao obter produto com ID ${id}:`, error);
      return null;
    }
  }
}

export default ProductService;