import {Product} from './product';

export interface ProductBlock {
  id?: number;
  idProductBlock?: string;
  product?: Product;
  quantity?: number;
  dayAdd?: string;
  dateOfManufacture?: string;
  dateExpiration?: string;
}
