import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { storage } from '../../../../lib/storage';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, and name are required' },
        { status: 400 }
      );
    }

    // Read existing users
    const users = storage.getUsers();

    // Check if user already exists
    const existingUser = storage.findUserByEmail(email);
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = {
      id: uuidv4(),
      email,
      name,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      orders: [],
      wishlist: [],
      addresses: []
    };

    // Add user to storage
    storage.addUser(newUser);

    // Return user without password
    const { password: _, ...userWithoutPassword } = newUser;

    return NextResponse.json({
      message: 'User created successfully',
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}