export interface Icon {
  name: string;
  category: string;
  classes: string[];
  url: string;
}

export interface Category {
  name: string;
  description?: string;
  icon?: string;
  subcategories?: string[];
}
