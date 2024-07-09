import Product, { IProduct } from '../db/models/Product';
import { ProductRepository } from '../db/repositories/productRepository';

export class ProductService {
  private repository: ProductRepository;

  constructor() {
    this.repository = new ProductRepository();
  }

  async createProduct(productData: IProduct) {
    const product = new Product(productData);
    return this.repository.createProduct(product);
  }

  async getProducts(page: number, limit: number) {
    const products = await this.repository.findProducts(page, limit);
    const total = await this.repository.documentCount();
    return { products, total, pages: Math.ceil(total / limit) };
  }
}
