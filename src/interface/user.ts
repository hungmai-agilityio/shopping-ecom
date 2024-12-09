export interface Address {
  id: string;
  street: string;
  city: string;
  apartment?: string;
  isDefault: boolean;
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  address: Address[];
  phone: string;
  company?: string;
  created_at: string;
  updated_at: string;
}
