export interface Address {
  id: string;
  street: string;
  city: string;
  apartment?: string;
  isDefault: boolean;
  phone?: string;
  company?: string;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  address: Address[];
  created_at: string;
  updated_at: string;
}
