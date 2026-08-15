import { JwtPayload } from "jsonwebtoken";

interface AuthUser extends JwtPayload {
  id: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

export { };