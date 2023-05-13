export type bodyItems = {
  categories: string[];
  sort?: {
    key: string;
    type: string;
  };
};
export interface HeaderProps {
  cartCount: number;
  showCart: boolean;
}

export interface HeroProps {
  title: string;
  photoOfTheDay?: string;
  isPhotoOfTheDay: boolean;
  description: string;
  category: string;
  picture: string;
  people_also_buy: any;
}

export interface PreviewProps {
  category: string;
  name: string;
  price: string;
  picture: string;
  isBestSeller: boolean;
  addToCart: (product: any) => void;
}

export interface FilterProps {
  name: string;
}

export interface Filter_MobileProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  filters: any;
}

export interface ProductTileProps {
  category: string;
  name: string;
  price: string;
  picture: string;
  isBestSeller: boolean;
  addToCart: (product: any) => void;
}

export interface MarketProps {
  products: any;
  loading: boolean;
}
