export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  price: number;
  currency: string;
  rating: number;
  reviewCount: number;
  badge: string;
  isFeatured: boolean;
  isBestSeller: boolean;
  images: string[];
  stock: number;
  maxPerOrder: number;
  isFavorite: boolean;
  variants: ProductVariant[];
  selectedVariantId?: string;
  description: string;
  subtitle?: string;
  scentNotes?: ScentNote[];
}

export interface ProductVariant {
  id: string;
  label: string;
  price: number;
  available: boolean;
  sizeMl?: number;
}

export interface ScentNote {
  id: string;
  name: string;
  color: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface PaginatedApiResponse<T> extends ApiResponse<T> {
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
  };
}