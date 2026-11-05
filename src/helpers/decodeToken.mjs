import { jwtDecode, InvalidTokenError } from 'jwt-decode';

// Preserve jsonwebtoken.decode's null result for malformed input.
export default function decodeToken(token) {
  try {
    return jwtDecode(token);
  } catch (error) {
    if (error instanceof InvalidTokenError) {
      return null;
    }
    throw error;
  }
}
