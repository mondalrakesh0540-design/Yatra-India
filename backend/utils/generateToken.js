import jwt from 'jsonwebtoken';

/**
 * Generate signed JWT token and optionally set HTTP-only cookie
 */
export const generateToken = (res, user, rememberMe = false) => {
  const secret = process.env.JWT_SECRET || 'yatra_india_production_secret_key_2026_secured';
  const expiresIn = rememberMe ? '30d' : (process.env.JWT_EXPIRES_IN || '7d');

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
    secret,
    { expiresIn }
  );

  // Set HTTP-Only Secure Cookie if response object is provided
  if (res && typeof res.cookie === 'function') {
    const maxAge = rememberMe ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000;
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
      maxAge
    });
  }

  return token;
};

export default generateToken;
