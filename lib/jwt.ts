import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET ?? process.env.NEXT_PUBLIC_JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET environment variable is not defined");
}

export const signToken = (username: string) => {
  try {
    return jwt.sign({ username }, JWT_SECRET, { expiresIn: "2h" });
  } catch (error) {
    console.error("Error signing token:", error);
    return "";
  }
};

export const verifyToken = (token: string) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      console.log('Token has expired');
    } else if (err instanceof jwt.JsonWebTokenError) {
      console.log('Token is invalid');
    } else {
      console.log('Verification failed:', err);
    }
  }

};
export const decodeToken = (token: string) => {
  try {
    const decoded = jwt.decode(token);
    if (decoded) {
      return decoded; // Successfully decoded payload
    } else {
      console.error("Token is invalid or malformed");
      return null;
    }
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};


