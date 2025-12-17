// Simple in-memory storage for Vercel deployment
// In production, replace with a proper database

interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: string;
  orders: any[];
  wishlist: any[];
  addresses: any[];
}

// In-memory storage (will be reset on each deployment)
let users: User[] = [
  // You can add default users here if needed
];

export const storage = {
  // Get all users
  getUsers: (): User[] => {
    return users;
  },

  // Add a user
  addUser: (user: User): void => {
    users.push(user);
  },

  // Find user by email
  findUserByEmail: (email: string): User | undefined => {
    return users.find(user => user.email === email);
  },

  // Find user by ID
  findUserById: (id: string): User | undefined => {
    return users.find(user => user.id === id);
  },

  // Update user
  updateUser: (id: string, updates: Partial<User>): boolean => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updates };
      return true;
    }
    return false;
  }
};