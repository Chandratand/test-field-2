interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  status: string;
  createdAt: Date;
}

interface User {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  password?: string;
  status: string;
  role: string;
}
