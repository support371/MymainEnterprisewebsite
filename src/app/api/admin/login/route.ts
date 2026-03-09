import { NextResponse } from 'next/server';
import { ADMIN_COOKIE, createSessionToken } from '@/lib/adminAuth';
import { authenticateUser } from '@/lib/adminUsers';
import { isDbNotConfigured } from '@/lib/db/errors';

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const email = typeof body.email === 'string' ? body.email : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    const user = await authenticateUser(email, password);

    if (!user) {
      // Consistent delay to prevent timing-based user enumeration
      await new Promise((r) => setTimeout(r, 200));
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 });
    }

    const token = createSessionToken({
      userId: user.id,
      role: user.role,
      email: user.email,
      name: user.name,
    });

    const response = NextResponse.json({ success: true, role: user.role, name: user.name });
    response.cookies.set(ADMIN_COOKIE, token, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 12,
    });

    console.log(`[admin/login] Successful login: ${user.email} (${user.role})`);
    return response;
  } catch (err) {
    if (isDbNotConfigured(err)) {
      console.warn('[admin/login] POST — database not configured');
      return NextResponse.json(
        { message: 'Admin authentication is unavailable. Database not configured.' },
        { status: 503 },
      );
    }
    console.error('[admin/login] POST error:', err);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
