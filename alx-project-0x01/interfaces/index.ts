// Post Interfaces
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// User Interfaces
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Alias UserData to match new requirement (same as UserProps)
export type UserData = UserProps;

// Modal Props for UserModal
export interface UserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  onSubmit: (post: UserProps) => void;
  user?: UserData; // optional, because we may open modal for "Add User"
}
