import Product, { IProduct } from '../models/Product';

export class ProductRepository {
  async createProduct(product: IProduct) {
    return await product.save();
  }

  async documentCount() {
    return await Product.countDocuments();
  }
  async findProducts(page: number, limit: number) {
    return await Product.find()
      .skip((page - 1) * limit)
      .limit(limit);
  }
}
