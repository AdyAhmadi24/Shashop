import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { storage } from '../../../lib/storage';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization token required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);

    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };

    // Find user
    const user = storage.findUserById(decoded.userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json({ user: userWithoutPassword });
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Authorization token required' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };

    const { name, email } = await request.json();

    // Find and update user
    const user = storage.findUserById(decoded.userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Update user data
    const updates: any = {};
    if (name) updates.name = name;
    if (email) updates.email = email;

    storage.updateUser(decoded.userId, updates);

    // Get updated user
    const updatedUser = storage.findUserById(decoded.userId);
    if (!updatedUser) {
      return NextResponse.json(
        { error: 'User not found after update' },
        { status: 404 }
      );
    }

    // Return updated user without password
    const { password: _, ...userWithoutPassword } = updatedUser;

    return NextResponse.json({
      message: 'Profile updated successfully',
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Update user error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}