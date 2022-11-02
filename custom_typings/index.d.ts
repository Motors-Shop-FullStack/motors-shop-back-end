declare namespace Express {
  interface Request {
    user: {
      id: string;
      account_type: string;
    };
  }
}
